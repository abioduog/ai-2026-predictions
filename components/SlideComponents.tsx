import React, { useState } from 'react';
import { SlideData, PredictionItem, Probability, MiniPrediction, ActionItem, TimelineItem, Horizon, TimelineTheme } from '../types';
import { getProbColor } from '../constants';
import { CheckSquare, Quote as QuoteIcon, Info, Filter, Briefcase, User, Cpu, LayoutGrid, Calendar, RotateCcw, X, Square } from 'lucide-react';

// Enhanced Probability Badge with Visual Bar
export const ProbabilityBadge: React.FC<{ level?: Probability }> = ({ level }) => {
    if (!level) return null;

    const getPercentage = (p: Probability) => {
        switch (p) {
            case 'High': return 'w-[90%]';
            case 'Medium': return 'w-[60%]';
            case 'Low': return 'w-[35%]';
            case 'Very Low': return 'w-[15%]';
            case 'Unlikely': return 'w-[5%]';
            default: return 'w-0';
        }
    };

    const getColor = (p: Probability) => {
        switch (p) {
            case 'High': return 'bg-green-500';
            case 'Medium': return 'bg-blue-500';
            case 'Low': return 'bg-orange-500';
            case 'Very Low': return 'bg-red-500';
            default: return 'bg-slate-500';
        }
    };

    return (
        <div className="flex flex-col items-end gap-1 min-w-[80px]">
            <span className={`text-[10px] font-bold uppercase tracking-wider ${level === 'High' ? 'text-green-400' :
                level === 'Medium' ? 'text-blue-400' :
                    level === 'Low' ? 'text-orange-400' : 'text-red-400'
                }`}>
                {level} Prob
            </span>
            <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${getPercentage(level)} ${getColor(level)}`}></div>
            </div>
        </div>
    );
};

// Updated Prediction Card with Focus Mode support
export const PredictionCard: React.FC<{
    item: PredictionItem;
    index?: number;
    isFocused?: boolean;
    isDimmed?: boolean;
    onClick?: () => void;
}> = ({ item, index = 0, isFocused, isDimmed, onClick }) => (
    <div
        onClick={onClick}
        className={`
        bg-slate-900/50 border rounded-lg mb-4 transition-all duration-500 fill-mode-backwards cursor-pointer
        ${isFocused
                ? 'border-cyan-500 bg-slate-800 scale-[1.02] shadow-[0_0_30px_rgba(6,182,212,0.15)] z-10 p-6'
                : 'border-slate-800 hover:border-slate-600 hover:bg-slate-900/80 p-5'}
        ${isDimmed ? 'opacity-30 scale-[0.98] grayscale' : 'opacity-100'}
        ${!isFocused && !isDimmed ? 'animate-in fade-in slide-in-from-bottom-4' : ''}
    `}
        style={{ animationDelay: `${index * 100}ms` }}
    >
        <div className="flex justify-between items-start mb-3">
            <h3 className={`font-bold text-slate-100 transition-all ${isFocused ? 'text-2xl text-cyan-50' : 'text-xl'}`}>{item.title}</h3>
            <ProbabilityBadge level={item.probability} />
        </div>
        <p className={`text-slate-300 leading-relaxed transition-all ${isFocused ? 'text-lg text-white' : 'text-base'}`}>{item.description}</p>
        {item.impact && (
            <div className={`mt-3 pl-3 border-l-2 transition-all ${isFocused ? 'border-cyan-500/50 bg-cyan-950/20 p-4' : 'border-slate-700/50 bg-slate-950/30 p-3'} rounded-r`}>
                <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Business Impact</span>
                <span className={isFocused ? 'text-cyan-100' : 'text-slate-400'}>{item.impact}</span>
            </div>
        )}
    </div>
);

export const GridCard: React.FC<{ category: MiniPrediction; colorClass: string }> = ({ category, colorClass }) => {
    const textColor = colorClass.split(' ')[1] || 'text-slate-100';
    const borderColor = colorClass.split(' ')[2] || 'border-slate-800';

    return (
        <div className={`bg-slate-900/50 border border-slate-800 p-5 rounded-lg h-full hover:bg-slate-900/80 transition-colors`}>
            <h3 className={`text-lg font-bold mb-3 border-b border-slate-800 pb-2 ${textColor}`}>
                {category.category}
            </h3>
            <ul className="space-y-2">
                {category.items.map((it, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className={`text-slate-600 mt-1 opacity-50`}>›</span>
                        {it}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const StatBox: React.FC<{ value: string; label: string; colorClass: string }> = ({ value, label, colorClass }) => {
    const textColor = colorClass.split(' ')[1];
    return (
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl text-center flex flex-col items-center justify-center h-full hover:border-slate-700 transition-colors cursor-default">
            <div className={`text-6xl font-black mb-4 ${textColor}`}>{value}</div>
            <div className="text-slate-400 font-medium">{label}</div>
        </div>
    );
}

export const OpportunityCard: React.FC<{ opp: any }> = ({ opp }) => (
    <div className="bg-slate-900/50 border-l-4 border-l-green-500 border-y border-r border-slate-800 p-6 rounded-r-lg mb-6 hover:bg-slate-900/80 transition-all">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-white">{opp.title}</h3>
            <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">{opp.timeline}</span>
        </div>
        <p className="text-slate-300 mb-5 text-lg border-b border-slate-800 pb-4">{opp.desc}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-950/50 p-4 rounded border border-slate-800/50">
                <strong className="block text-green-400 mb-1 text-xs uppercase tracking-wider">Why it works</strong>
                <span className="text-slate-400">{opp.why}</span>
            </div>
            <div className="bg-slate-950/50 p-4 rounded border border-slate-800/50">
                <strong className="block text-green-400 mb-1 text-xs uppercase tracking-wider">Who wins</strong>
                <span className="text-slate-400">{opp.who}</span>
            </div>
        </div>
    </div>
);

// Interactive Action List
export const ActionList: React.FC<{ actions: ActionItem[] }> = ({ actions }) => {
    const [checkedState, setCheckedState] = useState<boolean[]>(new Array(actions.length).fill(false));

    const handleToggle = (idx: number) => {
        const updated = [...checkedState];
        updated[idx] = !updated[idx];
        setCheckedState(updated);
    };

    return (
        <div className="space-y-4">
            {actions.map((act, idx) => {
                const isChecked = checkedState[idx];
                return (
                    <div
                        key={idx}
                        onClick={() => handleToggle(idx)}
                        className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-all duration-300 group animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards
                            ${isChecked
                                ? 'bg-cyan-900/20 border-cyan-500/50'
                                : 'bg-slate-900/40 border-slate-800 hover:border-slate-600 hover:bg-slate-900'}`}
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <div className={`mt-0.5 transition-colors duration-300 ${isChecked ? 'text-cyan-400' : 'text-slate-600 group-hover:text-cyan-500/50'}`}>
                            {isChecked ? <CheckSquare className="w-6 h-6" /> : <Square className="w-6 h-6" />}
                        </div>
                        <span className={`text-lg transition-colors duration-300 ${isChecked ? 'text-cyan-100 line-through decoration-cyan-500/50' : 'text-slate-300'}`}>
                            {act.text}
                        </span>
                    </div>
                )
            })}
        </div>
    );
};

const TimelineModal: React.FC<{ item: TimelineItem; onClose: () => void; getThemeIcon: (t: string) => React.ReactNode }> = ({ item, onClose, getThemeIcon }) => {
    const themeColor = item.theme === 'Work' ? 'text-blue-400 border-blue-500/30 bg-blue-500/10' :
        item.theme === 'Consumer' ? 'text-purple-400 border-purple-500/30 bg-purple-500/10' :
            'text-orange-400 border-orange-500/30 bg-orange-500/10';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
            <div
                className="bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl w-full max-w-lg overflow-hidden relative animate-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-full transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border flex items-center gap-2 ${themeColor}`}>
                            {getThemeIcon(item.theme)}
                            {item.theme}
                        </span>
                        <span className="text-sm text-slate-500 font-mono bg-slate-800 px-2 py-1 rounded">{item.startYear} — {item.endYear}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{item.title}</h3>

                    <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">{item.description}</p>

                    <div className="flex items-center gap-4 pt-6 border-t border-slate-800 flex-wrap">
                        <div className="flex items-center gap-2">
                            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Horizon</span>
                            <span className={`text-sm px-2 py-0.5 rounded ${item.horizon === 'Near-term' ? 'bg-green-500/20 text-green-400' :
                                item.horizon === 'Mid-term' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-red-500/20 text-red-400'
                                }`}>
                                {item.horizon}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">ID</span>
                            <span className="text-slate-600 font-mono text-xs">{item.id}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const TimelineChart: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
    const [activeTheme, setActiveTheme] = useState<TimelineTheme | 'All'>('All');
    const [activeHorizons, setActiveHorizons] = useState<Record<Horizon, boolean>>({
        'Near-term': true,
        'Mid-term': true,
        'Long-term': true,
    });
    const [yearRange, setYearRange] = useState<[number, number]>([2025, 2031]);
    const [hoveredItem, setHoveredItem] = useState<TimelineItem | null>(null);
    const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

    const toggleHorizon = (h: Horizon) => {
        setActiveHorizons(prev => ({ ...prev, [h]: !prev[h] }));
    };

    const handleYearChange = (type: 'start' | 'end', val: string) => {
        const numVal = parseInt(val);
        setYearRange(prev => {
            if (type === 'start') {
                return [numVal, Math.max(numVal, prev[1])];
            } else {
                return [Math.min(numVal, prev[0]), numVal];
            }
        });
    };

    const resetFilters = () => {
        setActiveTheme('All');
        setActiveHorizons({ 'Near-term': true, 'Mid-term': true, 'Long-term': true });
        setYearRange([2025, 2031]);
        setSelectedItem(null);
    };

    const isDirty = activeTheme !== 'All' ||
        !Object.values(activeHorizons).every(Boolean) ||
        yearRange[0] !== 2025 ||
        yearRange[1] !== 2031;

    const filteredItems = items.filter(item => {
        const themeMatch = activeTheme === 'All' || item.theme === activeTheme;
        const horizonMatch = activeHorizons[item.horizon];
        const itemEndVal = item.endYear === '2031+' ? 2031 : Number(item.endYear);
        const rangeMatch = item.startYear <= yearRange[1] && itemEndVal >= yearRange[0];
        return themeMatch && horizonMatch && rangeMatch;
    });

    const getColStart = (year: number) => Math.max(1, year - 2025 + 1);
    const getColEnd = (endYear: number | string) => {
        const end = endYear === '2031+' ? 2031 : Number(endYear);
        return end - 2025 + 2;
    };

    const getThemeColor = (theme: TimelineTheme) => {
        switch (theme) {
            case 'Work': return 'bg-gradient-to-r from-blue-600 to-cyan-500 border-cyan-400/30';
            case 'Consumer': return 'bg-gradient-to-r from-purple-600 to-pink-500 border-pink-400/30';
            case 'Infra': return 'bg-gradient-to-r from-orange-600 to-red-500 border-orange-400/30';
            default: return 'bg-slate-600';
        }
    };

    // Helper to get active button class based on theme color
    const getActiveButtonClass = (theme: string) => {
        switch (theme) {
            case 'Work': return 'bg-blue-500/20 text-cyan-300 border-cyan-500/50 shadow-cyan-500/20 shadow-sm';
            case 'Consumer': return 'bg-purple-500/20 text-purple-400 border-purple-500/50 shadow-purple-500/20 shadow-sm';
            case 'Infra': return 'bg-orange-500/20 text-orange-400 border-orange-500/50 shadow-orange-500/20 shadow-sm';
            default: return 'bg-slate-100 text-slate-900 border-slate-100 font-bold shadow-md';
        }
    };

    const getThemeIcon = (theme: string) => {
        switch (theme) {
            case 'Work': return <Briefcase className="w-3 h-3" />;
            case 'Consumer': return <User className="w-3 h-3" />;
            case 'Infra': return <Cpu className="w-3 h-3" />;
            default: return <LayoutGrid className="w-3 h-3" />;
        }
    };

    const years = [2025, 2026, 2027, 2028, 2029, 2030, 2031];

    return (
        <div className="h-full flex flex-col">
            {/* Controls Container */}
            <div className="flex flex-col lg:flex-row gap-4 mb-4 lg:mb-6 shrink-0 bg-slate-900/50 p-3 md:p-4 rounded-lg border border-slate-800 items-start lg:items-center justify-between transition-all">

                {/* Left Group: Theme & Range */}
                <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-x-6 gap-y-3 w-full lg:w-auto">
                    {/* Theme Filter */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase text-slate-500 mr-1 flex items-center gap-1"><Filter className="w-3 h-3" /> Theme:</span>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Work', 'Consumer', 'Infra'].map((theme) => (
                                <button
                                    key={theme}
                                    onClick={() => setActiveTheme(theme as any)}
                                    className={`px-3 py-1.5 text-xs rounded-md border flex items-center gap-2 transition-all ${activeTheme === theme
                                        ? getActiveButtonClass(theme)
                                        : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-200'
                                        }`}
                                >
                                    {getThemeIcon(theme)}
                                    {theme}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Divider (Hidden on mobile, visible on md+) */}
                    <div className="h-6 w-px bg-slate-800 hidden md:block"></div>

                    {/* Range Filter */}
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <span className="text-xs font-bold uppercase text-slate-500 mr-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> Range:</span>
                        <div className="flex items-center bg-slate-800/50 rounded-md border border-slate-700 px-2 py-1 gap-2 flex-1 md:flex-none">
                            <select
                                value={yearRange[0]}
                                onChange={(e) => handleYearChange('start', e.target.value)}
                                className="bg-transparent text-xs text-white outline-none cursor-pointer font-medium flex-1 md:flex-none"
                            >
                                {years.map(y => <option key={y} value={y} className="bg-slate-900 text-slate-200">{y}</option>)}
                            </select>
                            <span className="text-slate-500 text-xs">to</span>
                            <select
                                value={yearRange[1]}
                                onChange={(e) => handleYearChange('end', e.target.value)}
                                className="bg-transparent text-xs text-white outline-none cursor-pointer font-medium flex-1 md:flex-none"
                            >
                                {years.map(y => <option key={y} value={y} className="bg-slate-900 text-slate-200">{y === 2031 ? '2031+' : y}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Divider (Visible only on mobile/tablet when stacking) */}
                <div className="w-full h-px bg-slate-800 lg:hidden"></div>

                {/* Right Group: Horizon & Reset */}
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                    <span className="text-xs font-bold uppercase text-slate-500 mr-1">Horizon:</span>
                    <div className="flex flex-wrap gap-2">
                        {(['Near-term', 'Mid-term', 'Long-term'] as Horizon[]).map(h => (
                            <label
                                key={h}
                                onClick={() => toggleHorizon(h)}
                                className="flex items-center gap-2 cursor-pointer text-xs text-slate-300 select-none hover:text-white transition-colors bg-slate-800/50 px-3 py-1.5 rounded-md border border-slate-800 hover:border-slate-600"
                            >
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${activeHorizons[h] ? 'bg-indigo-500 border-indigo-400' : 'border-slate-600 bg-slate-900'}`}>
                                    {activeHorizons[h] && <CheckSquare className="w-3 h-3 text-white" />}
                                </div>
                                {h}
                            </label>
                        ))}
                    </div>

                    {isDirty && (
                        <button
                            onClick={resetFilters}
                            className="flex items-center gap-2 px-3 py-1.5 ml-auto lg:ml-2 text-xs font-medium text-red-400 bg-red-500/10 border border-red-500/30 rounded-md hover:bg-red-500/20 transition-all animate-in fade-in slide-in-from-right-4 duration-300"
                            title="Reset all filters"
                        >
                            <RotateCcw className="w-3 h-3" />
                            Reset
                        </button>
                    )}
                </div>
            </div>

            {/* Legend for Colors */}
            <div className="flex items-center gap-6 mb-2 px-1">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-sm"></div> Work
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-sm"></div> Consumer
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-600 to-red-500 rounded-sm"></div> Infra
                </div>
            </div>

            {/* Timeline Grid Wrapper */}
            <div className="flex-1 overflow-auto custom-scrollbar relative bg-slate-950/30 rounded-lg border border-slate-800/50 shadow-inner">
                {/* Inner container with min-width to ensure chart integrity */}
                <div className="min-w-[800px] p-4 md:p-6 relative min-h-full">
                    {/* Sticky Header */}
                    <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4 border-b border-slate-800 pb-2 sticky top-0 bg-slate-950 z-20 shadow-sm">
                        {[2025, 2026, 2027, 2028, 2029, 2030, '2031+'].map(year => (
                            <div key={year} className={`text-center text-xs uppercase tracking-widest font-bold transition-colors ${((year === '2031+' ? 2031 : year) as number) >= yearRange[0] && ((year === '2031+' ? 2031 : year) as number) <= yearRange[1]
                                    ? 'text-white' : 'text-slate-700'
                                }`}>{year}</div>
                        ))}
                    </div>

                    {/* Background Lines */}
                    <div className="absolute inset-0 top-12 grid grid-cols-7 gap-2 md:gap-4 pointer-events-none z-0 px-4 md:px-6 h-full pb-6">
                        {[0, 1, 2, 3, 4, 5, 6].map(i => {
                            const year = 2025 + i;
                            const isInRange = year >= yearRange[0] && year <= yearRange[1];
                            return (
                                <div key={i} className={`border-r h-full transition-colors ${i === 0 ? 'border-l' : ''} ${isInRange ? 'border-slate-800/40 bg-slate-800/5' : 'border-slate-900/40 bg-transparent'
                                    }`}></div>
                            )
                        })}
                    </div>

                    {/* Items */}
                    <div className="space-y-3 relative z-10 pb-8">
                        {filteredItems.map(item => (
                            <div
                                key={item.id}
                                className="grid grid-cols-7 gap-2 md:gap-4 items-center group relative"
                                onMouseEnter={() => setHoveredItem(item)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div
                                    className={`h-9 rounded shadow-md border-t border-white/10 flex items-center px-3 text-xs font-bold text-white whitespace-nowrap overflow-hidden transition-all duration-300 cursor-pointer hover:brightness-110 hover:shadow-lg hover:z-20 hover:scale-[1.01] ${getThemeColor(item.theme)}`}
                                    style={{
                                        gridColumnStart: getColStart(item.startYear),
                                        gridColumnEnd: getColEnd(item.endYear)
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedItem(item);
                                    }}
                                >
                                    <span className="mr-2 opacity-60 text-[10px] bg-black/20 px-1 rounded">{item.id}</span>
                                    <span className="truncate">{item.title}</span>
                                </div>
                            </div>
                        ))}
                        {filteredItems.length === 0 && (
                            <div className="py-20 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
                                <div className="bg-slate-900/50 p-4 rounded-full mb-4 border border-slate-800">
                                    <Filter className="w-8 h-8 text-slate-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-200 mb-1">No predictions found</h3>
                                <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">
                                    No items match your current Time Range, Theme, and Horizon settings.
                                </p>
                                <button
                                    onClick={resetFilters}
                                    className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-md text-sm font-medium transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Selected Item Modal */}
            {selectedItem && (
                <TimelineModal item={selectedItem} onClose={() => setSelectedItem(null)} getThemeIcon={getThemeIcon} />
            )}

            {/* Hover Preview Card (Hidden on small screens) */}
            {hoveredItem && !selectedItem && (
                <div className="hidden md:block fixed bottom-24 right-8 md:right-12 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200 pointer-events-none">
                    <div className="bg-slate-900 border border-slate-700 shadow-2xl p-4 rounded-xl max-w-sm backdrop-blur-sm bg-opacity-95 relative">
                        <div className="flex justify-between items-start mb-2 pr-6">
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border flex items-center gap-1.5 ${hoveredItem.theme === 'Work' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                hoveredItem.theme === 'Consumer' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                    'bg-orange-500/10 text-orange-400 border-orange-500/20'
                                }`}>
                                {getThemeIcon(hoveredItem.theme)}
                                {hoveredItem.theme}
                            </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{hoveredItem.title}</h4>
                        <p className="text-sm text-slate-400 line-clamp-3">{hoveredItem.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};