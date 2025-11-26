import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES, getEraColor, getEraIcon } from './constants';
import { PredictionCard, GridCard, StatBox, OpportunityCard, ActionList, TimelineChart } from './components/SlideComponents';
import { AnimatedBackground, SlideOverview, GeminiInsight } from './components/LayoutComponents';
import { ChevronLeft, ChevronRight, Quote as QuoteIcon, Grid, Keyboard, MonitorPlay, Maximize2, Minimize2 } from 'lucide-react';
import { SlideData } from './types';

// Extracted Slide Rendering Component
const SlideView: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const eraColorClass = getEraColor(slide.era);
  const EraIcon = getEraIcon(slide.era);
  
  // State for interactive focus mode on lists/deep-dives
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // Reset focus when slide changes
  useEffect(() => {
    setFocusedIndex(null);
  }, [slide.id]);

  const renderContent = () => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col h-full justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
            {slide.highlight && (
              <div className="text-center mb-12">
                 <span className={`inline-block px-4 py-2 rounded-full border ${eraColorClass} bg-opacity-10 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm`}>
                    {slide.highlight}
                 </span>
              </div>
            )}
            {slide.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {slide.stats.map((stat, idx) => (
                  <div key={idx} className="animate-in fade-in zoom-in-50 duration-500 fill-mode-backwards" style={{ animationDelay: `${idx * 150}ms` }}>
                    <StatBox value={stat.value} label={stat.label} colorClass={eraColorClass} />
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'summary':
        return (
            <div className="h-full flex flex-col relative z-10">
                <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700 mb-8 text-center animate-in fade-in zoom-in-95 duration-500 shadow-lg">
                    <p className={`text-2xl font-light ${eraColorClass.split(' ')[1]}`}>{slide.highlight}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1">
                    <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-150 fill-mode-backwards">
                        <h3 className={`text-xl font-bold mb-6 pb-2 border-b border-slate-800 ${eraColorClass.split(' ')[1]}`}>{slide.content?.left.title}</h3>
                        <ul className="space-y-4">
                            {slide.content?.left.list.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-slate-300">
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${eraColorClass.split(' ')[0]}`} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500 delay-300 fill-mode-backwards">
                         <h3 className={`text-xl font-bold mb-6 pb-2 border-b border-slate-800 ${eraColorClass.split(' ')[1]}`}>{slide.content?.right.title}</h3>
                         <ul className="space-y-4">
                            {slide.content?.right.list.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-slate-300">
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${eraColorClass.split(' ')[0]}`} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );

      case 'list':
      case 'deep-dive':
        return (
          <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar pb-8 relative z-10">
            {slide.predictions?.map((item, idx) => (
              <PredictionCard 
                key={idx} 
                item={item} 
                index={idx}
                isFocused={focusedIndex === idx}
                isDimmed={focusedIndex !== null && focusedIndex !== idx}
                onClick={() => setFocusedIndex(focusedIndex === idx ? null : idx)}
              />
            ))}
            {slide.type === 'deep-dive' && (
                <div className="text-center mt-4 text-xs text-slate-500 animate-pulse">
                    Tip: Click a card to focus
                </div>
            )}
          </div>
        );

      case 'grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full content-start overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar pb-8 relative z-10">
            {slide.categories?.map((cat, idx) => (
              <div key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-backwards" style={{ animationDelay: `${idx * 100}ms` }}>
                 <GridCard category={cat} colorClass={eraColorClass} />
              </div>
            ))}
          </div>
        );
        
    case 'cards':
        return (
            <div className="overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar pb-8 relative z-10">
                {slide.opportunities?.map((opp, idx) => (
                    <div key={idx} className="animate-in fade-in slide-in-from-right-8 duration-500 fill-mode-backwards" style={{ animationDelay: `${idx * 150}ms` }}>
                        <OpportunityCard opp={opp} />
                    </div>
                ))}
            </div>
        );

    case 'action':
        return (
            <div className="max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-500 relative z-10">
                {slide.actions && <ActionList actions={slide.actions} />}
            </div>
        );
        
    case 'interactive-timeline':
        return (
            <div className="h-full animate-in fade-in duration-700 relative z-10">
                {slide.timelineItems && <TimelineChart items={slide.timelineItems} />}
            </div>
        );

    case 'quote':
        return (
            <div className="h-full flex flex-col items-center justify-center text-center px-12 relative z-10">
                <QuoteIcon className={`w-24 h-24 absolute top-0 left-0 opacity-10 ${eraColorClass.split(' ')[1]} animate-in fade-in zoom-in duration-1000`} />
                <h2 className={`text-4xl md:text-5xl font-bold leading-tight ${eraColorClass.split(' ')[1]} animate-in slide-in-from-bottom-8 fade-in duration-700`}>
                    "{slide.highlight}"
                </h2>
                
                <div className="mt-16 text-left max-w-2xl bg-slate-900/80 backdrop-blur-sm p-8 rounded-xl border border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-backwards">
                    <h4 className="text-slate-400 uppercase tracking-widest text-sm font-bold mb-4">Key Takeaways</h4>
                    <ul className="space-y-2 text-slate-300">
                        <li>• 2026 is tactical execution</li>
                        <li>• 2027-2028 is structural change</li>
                        <li>• 2029-2030 is market maturity</li>
                    </ul>
                </div>
            </div>
        );

      default:
        return <div>Unknown Slide Type</div>;
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-12 max-w-7xl mx-auto relative overflow-hidden">
        <header className="mb-8 z-10 relative shrink-0 transition-opacity duration-300">
            <div className="flex items-center gap-3 mb-2">
                <span className={`p-1.5 rounded-md ${eraColorClass.split(' ')[0]} bg-opacity-20 text-${eraColorClass.split(' ')[1].split('-')[1]}-400 transition-colors duration-500`}>
                    {EraIcon}
                </span>
                <span className={`text-sm font-bold uppercase tracking-widest ${eraColorClass.split(' ')[1]} transition-colors duration-500`}>
                    {slide.era === 'Intro' ? 'Introduction' : slide.era === 'Closing' ? 'Conclusion' : slide.era === 'Timeline' ? 'Strategic Overview' : `Timeline: ${slide.era}`}
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 leading-tight drop-shadow-sm">
                {slide.title}
            </h1>
            {slide.subtitle && (
                <p className="text-xl text-slate-400 font-light">{slide.subtitle}</p>
            )}
        </header>

        <div className="flex-1 relative z-10 min-h-0">
            {renderContent()}
        </div>
    </div>
  );
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [animPhase, setAnimPhase] = useState<'idle' | 'enter-start' | 'enter-active'>('idle');
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isPresentMode, setIsPresentMode] = useState(false);

  const handleNext = useCallback(() => {
    if (currentIndex < SLIDES.length - 1 && animPhase === 'idle') {
      setPrevIndex(currentIndex);
      setCurrentIndex(prev => prev + 1);
      setAnimPhase('enter-start');
    }
  }, [currentIndex, animPhase]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0 && animPhase === 'idle') {
      setPrevIndex(currentIndex);
      setCurrentIndex(prev => prev - 1);
      setAnimPhase('enter-start');
    }
  }, [currentIndex, animPhase]);

  const handleJumpToSlide = (index: number) => {
    if (index === currentIndex || animPhase !== 'idle') return;
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
    setAnimPhase('enter-start');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if inside an input or textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight' || e.key === 'Space') {
          e.preventDefault();
          handleNext();
      }
      if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrev();
      }
      if (e.key === 'g' || e.key === 'G') {
          setIsOverviewOpen(prev => !prev);
      }
      if (e.key === 'f' || e.key === 'F') {
          setIsPresentMode(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Animation Sequence
  useEffect(() => {
    if (animPhase === 'enter-start') {
        const raf = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setAnimPhase('enter-active');
            });
        });
        return () => cancelAnimationFrame(raf);
    }
    
    if (animPhase === 'enter-active') {
        const timer = setTimeout(() => {
            setPrevIndex(null);
            setAnimPhase('idle');
        }, 550);
        return () => clearTimeout(timer);
    }
  }, [animPhase]);

  // Current Slide to display
  const currentSlide = SLIDES[currentIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-cyan-500/30 overflow-hidden font-sans">
      
      {/* Background Layer */}
      <AnimatedBackground era={currentSlide.era} />

      {/* Interactive Top Timeline Indicator - Hidden in Present Mode */}
      <div className={`h-2 w-full bg-slate-900/50 backdrop-blur-sm flex shrink-0 z-30 relative group border-b border-white/5 transition-all duration-500 ${isPresentMode ? '-mt-3 opacity-0' : 'mt-0 opacity-100'}`}>
        {SLIDES.map((s, i) => {
           const isActive = i === currentIndex;
           const isPast = i < currentIndex;
           const colorClass = getEraColor(s.era).split(' ')[0];
           
           return (
            <button 
                key={i} 
                onClick={() => handleJumpToSlide(i)}
                className={`flex-1 transition-all duration-300 relative group/segment focus:outline-none ${isActive ? colorClass : isPast ? 'bg-slate-700/50 hover:bg-slate-600/50' : 'bg-transparent hover:bg-slate-800/30'}`}
                aria-label={`Jump to slide ${i + 1}: ${s.title}`}
            >
                {/* Tooltip on Hover */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-slate-800 text-xs text-white rounded opacity-0 group-hover/segment:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-slate-700 z-50 shadow-lg">
                    {s.era === 'Intro' || s.era === 'Closing' ? s.title : s.era}
                </div>
            </button>
           )
        })}
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden w-full">
        {/* Previous Slide (Exiting) */}
        {prevIndex !== null && (
            <div className="absolute inset-0 w-full h-full slide-exit-active z-10">
                <SlideView slide={SLIDES[prevIndex]} />
            </div>
        )}

        {/* Current Slide (Entering) */}
        <div className={`absolute inset-0 w-full h-full z-20 ${
            animPhase === 'enter-start' ? 'slide-enter' : 
            animPhase === 'enter-active' ? 'slide-enter-active' : ''
        }`}>
            <SlideView slide={currentSlide} />
        </div>
      </main>

      {/* Navigation Footer - Hidden in Present Mode */}
      <footer className={`p-4 md:p-6 flex justify-between items-center bg-slate-950/40 backdrop-blur-md border-t border-white/5 z-30 relative shrink-0 transition-all duration-500 ${isPresentMode ? 'translate-y-full opacity-0 absolute bottom-0 w-full' : 'translate-y-0 opacity-100'}`}>
        <div className="flex items-center gap-4">
             <div className="text-slate-500 text-sm font-medium">
                {currentIndex + 1} / {SLIDES.length}
            </div>
            
            <button 
                onClick={() => setIsOverviewOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors text-xs uppercase font-bold tracking-wider border border-transparent hover:border-slate-600"
                title="Open Slide Grid (G)"
            >
                <Grid className="w-3 h-3" /> Overview
            </button>
            
            <button 
                onClick={() => setIsPresentMode(!isPresentMode)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors text-xs uppercase font-bold tracking-wider border border-transparent hover:border-slate-600`}
                title="Toggle Present Mode (F)"
            >
                {isPresentMode ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />} Present Mode
            </button>

             {/* Keyboard Help Hint */}
            <div className="hidden lg:flex items-center gap-1 text-xs text-slate-600 ml-2">
                <Keyboard className="w-3 h-3" />
                <span>Arrows to nav</span>
            </div>
        </div>

        <div className="flex gap-3 md:gap-4">
            <button 
                onClick={handlePrev} 
                disabled={currentIndex === 0 || animPhase !== 'idle'}
                className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 shadow-sm"
            >
                <ChevronLeft className="w-4 h-4" /> <span className="hidden md:inline">Previous</span>
            </button>
            <button 
                onClick={handleNext} 
                disabled={currentIndex === SLIDES.length - 1 || animPhase !== 'idle'}
                className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-semibold transition-all shadow-lg active:scale-95 border
                    ${currentIndex === SLIDES.length - 1 
                        ? 'bg-slate-800 text-slate-500 border-slate-800 cursor-not-allowed' 
                        : 'bg-white text-slate-950 border-white hover:bg-slate-200 shadow-cyan-900/20'}`}
            >
                <span className="hidden md:inline">Next</span> <ChevronRight className="w-4 h-4" />
            </button>
        </div>
      </footer>
      
      {/* Floating Toggle for Present Mode when UI is hidden */}
      {isPresentMode && (
         <button 
            onClick={() => setIsPresentMode(false)}
            className="fixed bottom-4 left-4 z-40 p-2 rounded-full bg-slate-900/20 hover:bg-slate-900 text-slate-500 hover:text-white border border-transparent hover:border-slate-700 transition-all"
            title="Exit Present Mode (F)"
        >
            <Minimize2 className="w-4 h-4" />
        </button>
      )}

      {/* Overlays */}
      <SlideOverview 
        isOpen={isOverviewOpen} 
        onClose={() => setIsOverviewOpen(false)} 
        slides={SLIDES} 
        currentIndex={currentIndex} 
        onJump={handleJumpToSlide} 
      />
      
      {/* Gemini AI Widget */}
      <GeminiInsight currentSlide={currentSlide} />

    </div>
  );
}

export default App;