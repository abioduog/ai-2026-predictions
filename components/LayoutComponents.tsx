import React, { useState, useEffect, useRef } from 'react';
import { Era, SlideData } from '../types';
import { getEraColor, getEraIcon } from '../constants';
import { Grid, X, Sparkles, Send, Loader, ArrowRight } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Animated Background Component ---
export const AnimatedBackground: React.FC<{ era: Era }> = ({ era }) => {
  const getColor = (e: Era) => {
    switch (e) {
      case '2026': return 'bg-cyan-600';
      case '2027-2028': return 'bg-emerald-600';
      case '2029-2030': return 'bg-violet-600';
      case '2031+': return 'bg-orange-600';
      case 'Nigeria': return 'bg-green-600';
      case 'Timeline': return 'bg-indigo-600';
      default: return 'bg-slate-700';
    }
  };

  const colorClass = getColor(era);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Primary Blob */}
      <div 
        className={`absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-20 transition-colors duration-1000 animate-blob ${colorClass}`} 
      />
      {/* Secondary Blob */}
      <div 
        className={`absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-10 transition-colors duration-1000 delay-150 animate-blob-delayed ${colorClass}`} 
      />
      {/* Grid Overlay Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

// --- Slide Overview Modal ---
export const SlideOverview: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  slides: SlideData[]; 
  currentIndex: number; 
  onJump: (idx: number) => void; 
}> = ({ isOpen, onClose, slides, currentIndex, onJump }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col animate-in fade-in duration-200">
      <div className="p-6 flex justify-between items-center border-b border-slate-800 bg-slate-900/50">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Grid className="w-5 h-5 text-cyan-400" /> Slide Overview
        </h2>
        <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            const eraColor = getEraColor(slide.era);
            return (
              <button
                key={slide.id}
                onClick={() => { onJump(idx); onClose(); }}
                className={`flex flex-col text-left p-3 rounded-lg border transition-all duration-200 group relative overflow-hidden h-32
                  ${isActive 
                    ? `bg-slate-800 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-[1.02]` 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-600 hover:bg-slate-800'}`}
              >
                <div className="flex justify-between items-start mb-2 relative z-10">
                   <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${eraColor.replace('text-', 'bg-').replace('border-', '')} text-slate-950 bg-opacity-80`}>
                    {slide.era}
                   </span>
                   {isActive && <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>}
                </div>
                <h4 className={`text-xs font-semibold line-clamp-3 relative z-10 ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                  {slide.title}
                </h4>
                <div className={`absolute bottom-0 left-0 h-1 w-full ${eraColor.split(' ')[0]} opacity-30 group-hover:opacity-100 transition-opacity`}></div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- Gemini Insight Integration ---
export const GeminiInsight: React.FC<{ currentSlide: SlideData }> = ({ currentSlide }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [insight, setInsight] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Reset state when slide changes
    useEffect(() => {
        setInsight(null);
        setError(null);
        setLoading(false);
        setIsOpen(false);
    }, [currentSlide.id]);

    const generateInsight = async () => {
        if (insight) return; // Already generated
        setLoading(true);
        setError(null);

        try {
            if (!process.env.API_KEY) {
                throw new Error("API Key not configured");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // Construct context based on slide type
            let context = `Title: ${currentSlide.title}. Subtitle: ${currentSlide.subtitle || ''}. `;
            if (currentSlide.predictions) {
                context += "Predictions: " + currentSlide.predictions.map(p => `${p.title}: ${p.description}`).join('; ');
            } else if (currentSlide.content) {
                context += `Content: ${JSON.stringify(currentSlide.content)}`;
            } else if (currentSlide.timelineItems) {
                context += "Timeline Items: " + currentSlide.timelineItems.map(t => t.title).join(', ');
            }

            const prompt = `
                Act as a contrarian futurist and strategic advisor. 
                Analyze the following slide content from a presentation about "AI in 2026+".
                
                Slide Context: ${context}
                
                Provide 2 brief, high-impact bullet points:
                1. A "Hidden Opportunity" for founders/builders related to this specific topic.
                2. A "Contrarian Risk" or "What could go wrong" that isn't obvious.
                
                Keep it punchy, professional, and under 100 words total. Formatting: Use simple Markdown.
            `;

            const response = await ai.models.generateContentStream({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            let fullText = '';
            for await (const chunk of response) {
                fullText += chunk.text;
                setInsight(fullText);
            }

        } catch (err: any) {
            console.error("Gemini Error:", err);
            setError(err.message || "Failed to generate insight.");
        } finally {
            setLoading(false);
        }
    };

    const handleToggle = () => {
        if (!isOpen && !insight && !loading) {
            generateInsight();
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end">
            {isOpen && (
                <div className="mb-4 w-80 md:w-96 bg-slate-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl rounded-2xl overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
                    <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-3 border-b border-slate-700 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-blue-200 text-sm font-semibold">
                            <Sparkles className="w-4 h-4" /> AI Strategic Analysis
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="p-5 text-sm text-slate-300 leading-relaxed min-h-[100px]">
                        {loading && !insight && (
                            <div className="flex flex-col items-center justify-center py-4 gap-3 text-slate-500">
                                <Loader className="w-6 h-6 animate-spin text-blue-400" />
                                <span>Consulting the Oracle...</span>
                            </div>
                        )}
                        {error && (
                            <div className="text-red-400 p-2 bg-red-900/20 rounded border border-red-900/50">
                                Error: {error}
                            </div>
                        )}
                        {insight && (
                            <div className="prose prose-invert prose-sm">
                                {insight.split('\n').map((line, i) => (
                                    <p key={i} className="mb-2 last:mb-0">{line}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Gemini Branding Footer */}
                    <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-600 flex justify-between items-center">
                        <span>Powered by Gemini 2.5 Flash</span>
                        {loading && <span className="animate-pulse text-blue-500">Streaming...</span>}
                    </div>
                </div>
            )}
            
            <button
                onClick={handleToggle}
                className={`flex items-center gap-2 px-4 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 group
                    ${isOpen 
                        ? 'bg-blue-600 text-white hover:bg-blue-500' 
                        : 'bg-slate-800 text-blue-400 hover:bg-slate-700 hover:text-blue-300 border border-slate-700'}`}
            >
                {isOpen ? <X className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                <span className={`${isOpen ? 'inline' : 'hidden group-hover:inline'} transition-all duration-300 whitespace-nowrap`}>
                    {isOpen ? 'Close Insight' : 'Ask Gemini'}
                </span>
            </button>
        </div>
    );
};
