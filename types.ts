export type Era = '2026' | '2027-2028' | '2029-2030' | '2031+' | 'Nigeria' | 'Intro' | 'Closing' | 'Timeline';

export type Probability = 'High' | 'Medium' | 'Low' | 'Very Low' | 'Unlikely';

export type Horizon = 'Near-term' | 'Mid-term' | 'Long-term';
export type TimelineTheme = 'Work' | 'Consumer' | 'Infra';

export interface TimelineItem {
  id: string;
  title: string;
  startYear: number;
  endYear: number | string; // e.g. 2027 or '2031+'
  horizon: Horizon;
  theme: TimelineTheme;
  description: string;
}

export interface PredictionItem {
  title: string;
  description: string;
  probability?: Probability;
  impact?: string;
}

export interface MiniPrediction {
  category: string;
  items: string[];
}

export interface ActionItem {
  text: string;
  checked?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SlideData {
  id: string;
  type: 'title' | 'summary' | 'list' | 'deep-dive' | 'grid' | 'action' | 'quote' | 'cards' | 'interactive-timeline';
  era: Era;
  title: string;
  subtitle?: string;
  highlight?: string;
  stats?: StatItem[];
  predictions?: PredictionItem[];
  categories?: MiniPrediction[];
  actions?: ActionItem[];
  timelineItems?: TimelineItem[];
  opportunities?: { title: string; timeline: string; desc: string; why: string; who: string }[];
  content?: {
    left: { title: string; list: string[] };
    right: { title: string; list: string[] };
  };
}