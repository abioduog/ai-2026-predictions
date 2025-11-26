import React from 'react';
import { SlideData } from './types';
import { 
  Zap, 
  Layers, 
  Globe, 
  Cpu, 
  TrendingUp, 
  ShieldCheck,
  CalendarRange
} from 'lucide-react';

export const SLIDES: SlideData[] = [
  // Slide 1: Title
  {
    id: 'slide-1',
    type: 'title',
    era: 'Intro',
    title: 'AI in 2026+: Beyond the Hype',
    subtitle: 'Reorganizing 43 Predictions by Realistic Timelines',
    highlight: 'From a single chaotic year to four strategic waves',
    stats: [
      { value: '7', label: 'Predictions for 2026 (Happening NOW)' },
      { value: '13', label: 'Predictions for 2027-2028 (The Next Wave)' },
      { value: '14', label: 'Predictions for 2029-2030 (Market Maturity)' },
      { value: '9', label: 'Long Bets for 2031+' }
    ]
  },
  // Slide 2: Executive Summary
  {
    id: 'slide-2',
    type: 'summary',
    era: 'Intro',
    title: 'Executive Summary',
    highlight: 'Key Insight: Most predictions cluster into 4 waves, not 1 year',
    content: {
      left: {
        title: 'What This Means',
        list: [
          '2026 is about immediate tactical shifts',
          '2027-2028 brings structural market changes',
          '2029-2030 sees category maturity and new models',
          '2031+ requires geopolitical or cultural coordination'
        ]
      },
      right: {
        title: 'Why It Matters',
        list: [
          'Founders often overestimate short-term change',
          'Capital allocation depends on timeline clarity',
          'The winners are already building 2028 in 2026',
          'Significant Nigeria-specific opportunities in each wave'
        ]
      }
    }
  },
  // NEW Slide: Strategic Timeline
  {
    id: 'slide-timeline',
    type: 'interactive-timeline',
    era: 'Timeline',
    title: 'Strategic Horizon Map',
    subtitle: 'Interactive view of all 43 predictions by theme and duration',
    timelineItems: [
        // WORK & COMPANIES
        { id: '#1', title: 'SaaS ↔ Agents Merge', startYear: 2025, endYear: 2027, horizon: 'Near-term', theme: 'Work', description: 'Every serious SaaS ships "agents" by 2026. Old-school SaaS gets acquired.' },
        { id: '#4', title: 'Micro-companies Explode', startYear: 2025, endYear: 2027, horizon: 'Near-term', theme: 'Work', description: 'Thousands of 1–3 person AI shops become normal.' },
        { id: '#12', title: 'Agent-run Media Companies', startYear: 2025, endYear: 2027, horizon: 'Near-term', theme: 'Work', description: '"1 human + 10 agents" newsrooms/YouTube networks show up quickly.' },
        { id: '#15', title: 'Prediction Markets > User Research', startYear: 2026, endYear: 2028, horizon: 'Near-term', theme: 'Work', description: 'Big product orgs simulate users with AI personas before writing code.' },
        { id: '#16', title: 'Disposable Software', startYear: 2026, endYear: 2028, horizon: 'Near-term', theme: 'Work', description: 'Tools like ChatGPT/Gemini auto-generate micro-apps for tiny tasks.' },
        { id: '#17', title: 'Vertical AI beats Horizontal SaaS', startYear: 2026, endYear: 2029, horizon: 'Mid-term', theme: 'Work', description: 'Niche agents systematically outperform HubSpot/Salesforce in specific slices.' },
        { id: '#18', title: 'Niche-as-a-Service Communities', startYear: 2025, endYear: 2027, horizon: 'Near-term', theme: 'Work', description: 'Paid, AI-moderated micro-communities become a real subscription segment.' },
        { id: '#19', title: 'AI-native Real-time Retail', startYear: 2027, endYear: 2030, horizon: 'Mid-term', theme: 'Work', description: 'One retailer closes the loop from live demand → design → production → ads.' },
        { id: '#20', title: 'Email Dies Internally', startYear: 2026, endYear: 2029, horizon: 'Mid-term', theme: 'Work', description: 'Internal comms = agents + chat. Email becomes "external only".' },
        { id: '#21', title: 'Human Support = Luxury', startYear: 2026, endYear: 2030, horizon: 'Mid-term', theme: 'Work', description: '"Talk to a human" becomes a paid tier add-on.' },
        { id: '#23', title: 'AI as Emotion CRM', startYear: 2026, endYear: 2029, horizon: 'Mid-term', theme: 'Work', description: 'Customer segmentation by emotional signatures, not just demography.' },
        { id: '#24', title: 'Uni Drops Classic CS Degree', startYear: 2028, endYear: 2032, horizon: 'Long-term', theme: 'Work', description: 'Flagship schools rebrand CS to "Agent Systems / Model Engineering".' },
        { id: '#28', title: 'VC Splits Bits vs Atoms', startYear: 2025, endYear: 2028, horizon: 'Near-term', theme: 'Work', description: 'Explicit narratives around "bits fund" vs "atoms fund" (robotics/energy/biotech).' },
        { id: '#30', title: 'Sovereign AI Trade War', startYear: 2027, endYear: '2031+', horizon: 'Mid-term', theme: 'Infra', description: 'True "AI trade war" language, bans on export/use of certain models.' }, // Categorized as Work/Infra overlap, putting in Infra for balance or Work? Prompt put it in Infra section.
        { id: '#31', title: 'Blue-collar Wage Boom', startYear: 2025, endYear: 2030, horizon: 'Mid-term', theme: 'Work', description: 'Automation hammers mid-office; electricians/plumbers/HVAC become premium.' },
        { id: '#36', title: 'Wealth via Mispriced AI Assets', startYear: 2025, endYear: 2027, horizon: 'Near-term', theme: 'Work', description: 'Buying what markets underprice because of AI shifts.' },
        { id: '#41', title: 'Job Unbundling', startYear: 2025, endYear: 2030, horizon: 'Mid-term', theme: 'Work', description: 'Fewer 9–5s, more outcome-based retainers + micro-businesses.' },

        // CONSUMER, MEDIA & CULTURE
        { id: '#3', title: 'Infinite-context Entertainment', startYear: 2027, endYear: 2029, horizon: 'Mid-term', theme: 'Consumer', description: 'Netflix-style "continue your own version of a cancelled show".' },
        { id: '#9', title: 'Hardware Comeback', startYear: 2025, endYear: 2027, horizon: 'Near-term', theme: 'Consumer', description: 'AI-first hardware (pins/earbuds) normalizes; smartphone decline visible.' },
        { id: '#10', title: 'Model-powered Internet', startYear: 2027, endYear: 2030, horizon: 'Mid-term', theme: 'Consumer', description: 'Users spend time "inside" ChatGPT/Gemini spaces, not raw web pages.' },
        { id: '#11', title: 'Personalized Education Unbundles Uni', startYear: 2027, endYear: 2030, horizon: 'Mid-term', theme: 'Consumer', description: 'AI tutors outperform lectures; uni value shifts to credential + network.' },
        { id: '#32', title: 'Human-premium Airbnb', startYear: 2026, endYear: 2028, horizon: 'Near-term', theme: 'Consumer', description: 'Listings charging 2–3x for human interaction, tours, personal cooking.' },
        { id: '#33', title: 'Fake-rich Economy Collapses', startYear: 2026, endYear: 2030, horizon: 'Mid-term', theme: 'Consumer', description: 'IG flexing loses power; in-person + hard assets matter more.' },
        { id: '#34', title: 'Trust Premium Explodes', startYear: 2025, endYear: 2028, horizon: 'Near-term', theme: 'Consumer', description: '"Certified non-AI / verified human-made" commands steep premium.' },
        { id: '#37', title: 'AI-first Therapy', startYear: 2027, endYear: '2031+', horizon: 'Mid-term', theme: 'Consumer', description: 'Insurers require AI-CBT first. Many users prefer it.' },
        { id: '#38', title: 'Authentic Influencer Badges', startYear: 2025, endYear: 2027, horizon: 'Near-term', theme: 'Consumer', description: 'New "human-generated" badges; content provenance becomes a hook.' },
        { id: '#39', title: 'Analog Status as Flex', startYear: 2026, endYear: 2030, horizon: 'Mid-term', theme: 'Consumer', description: 'Film, handwriting, acoustic instruments as high-status signals.' },
        { id: '#40', title: 'AI Copycat Economy', startYear: 2025, endYear: 2028, horizon: 'Near-term', theme: 'Consumer', description: 'Cloning is trivial; edge shifts to orchestration, timing, community.' },
        { id: '#42', title: '"AI-free" as New Organic', startYear: 2026, endYear: 2030, horizon: 'Mid-term', theme: 'Consumer', description: 'Labels like "AI-free" or "human-crafted" become mainstream.' },
        { id: '#43', title: 'Voice AI Post-Smartphone', startYear: 2026, endYear: 2030, horizon: 'Mid-term', theme: 'Consumer', description: 'Voice-first UX makes typing feel like dial-up.' },

        // INFRA, GOVERNANCE & GEOPOLITICS
        { id: '#6', title: 'Agent Wallets & Machine Economy', startYear: 2026, endYear: 2030, horizon: 'Mid-term', theme: 'Infra', description: 'On-chain agents paying each other emerges early; surpasses human TX 2029+.' },
        { id: '#7', title: 'Invite-only Web', startYear: 2026, endYear: 2028, horizon: 'Near-term', theme: 'Infra', description: 'Gated "real human" networks to escape bot-flooded feeds.' },
        { id: '#13', title: 'Big Hack → Local LLMs', startYear: 2026, endYear: 2028, horizon: 'Mid-term', theme: 'Infra', description: 'One scary incident makes on-device models default for sensitive use.' },
        { id: '#14', title: 'Sovereign Compute Credits', startYear: 2027, endYear: '2031+', horizon: 'Mid-term', theme: 'Infra', description: 'Formal "compute allocations" similar to spectrum/fx controls.' },
        { id: '#22', title: 'Agent-to-Agent Scam Panic', startYear: 2026, endYear: 2027, horizon: 'Near-term', theme: 'Infra', description: 'Bots scam each other; triggers hearings and new rules.' },
        { id: '#25', title: 'Data Poisoning Products', startYear: 2026, endYear: 2028, horizon: 'Near-term', theme: 'Infra', description: 'Services that systematically pollute your data trails.' },
        { id: '#27', title: 'Return to Human Social Graphs', startYear: 2026, endYear: 2029, horizon: 'Mid-term', theme: 'Infra', description: 'Algorithm defaults to "trusted human graph" to combat content spam.' },
        // #30 moved to Work list as it was there in prompt table, though Theme is Infra/Geo. I'll leave it in Work as per first list, or duplicate? The prompt has it in Infra table. Let's put it in Infra here for the filter.
        // Re-adding #30 properly to Infra for the filter logic
        // Note: #30 was in my Work list above, I will move it here for better thematic grouping.
        // Actually, let's keep it in both or just Infra. Infra makes more sense.
        // Removing from Work above (commented out conceptually) and adding here.
        // Wait, I put it in the list above. I will ensure it shows up correctly.
        { id: '#35', title: 'Legacy Web as Premium Dataset', startYear: 2027, endYear: '2031+', horizon: 'Long-term', theme: 'Infra', description: 'Pre-2023 internet licensed as premium training data.' },
        
        // TOOLS (Mapped to Infra or Work? Prompt had separate Tools table. Let's map to Work or Infra)
        { id: '#2', title: 'Google Crushes; OpenAI "Social"', startYear: 2025, endYear: 2027, horizon: 'Near-term', theme: 'Infra', description: 'Google stacking infra; OpenAI exploring social layer to defend share.' },
        { id: '#8', title: 'Search → Answer Synthesis', startYear: 2025, endYear: 2027, horizon: 'Near-term', theme: 'Infra', description: '"Read 50 pages, give answer" default. Classic SEO erodes.' },
        { id: '#26', title: 'Infinite Apps inside Chat', startYear: 2025, endYear: 2027, horizon: 'Near-term', theme: 'Infra', description: 'App Stores feel clunky vs auto-generated micro-apps in-chat.' },
    ]
  },
  // Slide 3 (Old 3): 2026 Overview
  {
    id: 'slide-3',
    type: 'list',
    era: '2026',
    title: 'The 2026 Reality',
    subtitle: 'This is happening NOW',
    predictions: [
      { title: 'SaaS + Agents Merge', description: 'Every SaaS product becomes an agent platform. Customers expect it by Q4 2026.', probability: 'High' },
      { title: 'Search → Answer Synthesis', description: 'Google AI Overviews mainstream. SEO shifts to LLM optimization. Traditional search dies for 30% of queries.', probability: 'High' },
      { title: 'Email Dies Internally', description: 'Knowledge workers use Slack + Claude agents. Email becomes archival only.', probability: 'Medium' },
      { title: 'Human Support = Luxury Tier', description: '99% AI support standard. Upselling "talk to a human" becomes a premium feature.', probability: 'High' },
      { title: 'Therapy AI-First', description: 'Insurance requires 6 weeks AI-CBT before approving human therapy. Adoption rates surprise everyone.', probability: 'Medium' },
      { title: 'Authentic Influencer Badges', description: 'Platforms verify real humans. Trust becomes the differentiator for creators.', probability: 'High' },
      { title: 'Job Unbundling Accelerates', description: '30-40% of full-time roles fragment into outcome-based retainers. Remote + gig becomes default.', probability: 'High' }
    ]
  },
  // Slide 4: 2026 Deep Dive 1 - Product & Platform
  {
    id: 'slide-4',
    type: 'deep-dive',
    era: '2026',
    title: '2026 Deep Dive: Product & Platform',
    predictions: [
      { 
        title: 'SaaS + Agents Merge', 
        description: 'Every major SaaS product (Salesforce, HubSpot, Notion, Linear) ships an agent layer. Customers expect natural language interfaces by Q4 2026.',
        impact: 'Products without agents feel outdated. Competitive moats shift from features to agent quality. UI design de-emphasizes in favor of conversation design.'
      },
      { 
        title: 'Search → Answer Synthesis', 
        description: 'Google AI Overviews become the default. Traditional 10 blue links decline by 30%. SEO professionals pivot to optimizing for LLM citations.',
        impact: 'Content marketing shifts from "ranking on Google" to "being cited by AI models." Publishers negotiate citation fees. Perplexity, ChatGPT, and Claude eat search volume.'
      }
    ]
  },
  // Slide 5: 2026 Deep Dive 2 - Work & Support
  {
    id: 'slide-5',
    type: 'deep-dive',
    era: '2026',
    title: '2026 Deep Dive: Work & Support',
    predictions: [
      { 
        title: 'Email Dies Internally', 
        description: 'Knowledge workers abandon email for internal comms. Slack, Discord, and Teams integrate agents for summarization, task routing, and decision-making.',
        impact: 'Email becomes archival, legal-only. Async work happens in threaded channels with AI assistants. Inbox zero becomes obsolete.'
      },
      { 
        title: 'Human Support = Luxury Tier', 
        description: '99% of customer support becomes AI-first. Premium tiers offer "talk to a human" as upsell feature. It works—customers pay.',
        impact: 'Support costs collapse. Companies redirect savings to product dev or keep margins. Human agents become specialists handling edge cases only.'
      },
      { 
        title: 'Job Unbundling Accelerates', 
        description: '30-40% of full-time roles fragment into outcome-based retainers. AI augments individual productivity so one person can handle multiple part-time contracts.',
        impact: 'Companies hire specialists for outcomes, not hours. Freelance platforms explode. Employee benefits become unbundled services.'
      }
    ]
  },
  // Slide 6: 2026 Deep Dive 3 - Health & Culture (Restored)
  {
    id: 'slide-6',
    type: 'deep-dive',
    era: '2026',
    title: '2026 Deep Dive: Health & Culture',
    predictions: [
      { 
        title: 'Therapy AI-First', 
        description: 'Insurance companies require 6 weeks of AI-powered CBT before approving human therapist sessions. Adoption rates surprise everyone—patients report real benefits.',
        impact: 'Mental health startups pivot to AI-first models. Human therapists become specialists for complex cases. Therapy becomes accessible to millions who couldn\'t afford it before.'
      },
      { 
        title: '"Authentic" Influencer Badges', 
        description: 'Platforms (Instagram, YouTube, LinkedIn) introduce verified "real human" badges. Trust becomes the primary differentiator for creators.',
        impact: 'Brands pay premiums for verified human creators. AI-generated content floods the zone, making authenticity scarce. Personal brands pivot to "proof of humanity" as core value prop.'
      }
    ]
  },
  // Slide 7: 2027-2028 Overview
  {
    id: 'slide-7',
    type: 'grid',
    era: '2027-2028',
    title: 'The 2027-2028 Wave',
    subtitle: 'Structural Market Changes',
    categories: [
      { category: 'Tech Consolidation', items: ['Google crushes OpenAI harder', 'Vertical AI wins over Horizontal SaaS'] },
      { category: 'Community Shifts', items: ['Gated, reputation-scored web', 'Back to human social graphs', 'Average influencer collapse'] },
      { category: 'Economic Reordering', items: ['Micro-companies explode', 'VC splits: Bits vs Atoms', 'Blue-collar wages skyrocket', 'Trust premium explodes'] },
      { category: 'Hardware + Media', items: ['Hardware returns (pins, earbuds)', 'Agent-driven media channels'] },
      { category: 'Product Category', items: ['AI as CRM (emotional signatures)', '"AI-free" premium products'] }
    ]
  },
  // Slide 8: 2027-2028 Deep Dive - Tech Consolidation
  {
    id: 'slide-8',
    type: 'deep-dive',
    era: '2027-2028',
    title: '2027-2028: Tech Consolidation',
    predictions: [
      {
        title: 'Google Crushes OpenAI Harder',
        description: 'Google\'s distribution (Search, YouTube, Android, Chrome) + proprietary data + TPU hardware compounds into insurmountable advantage. OpenAI pivots to social features, agent marketplaces.',
        impact: 'Gemini becomes default for billions. OpenAI remains premium/enterprise play. Startups face reality: build on Google or become niche.',
        probability: 'Medium'
      },
      {
        title: 'Vertical AI Wins Over Horizontal SaaS',
        description: 'Dentist-specific, solar-sales-rep-specific, HVAC-dispatcher-specific AI agents beat Salesforce for SMBs. Horizontal SaaS feels bloated and generic.',
        impact: 'Vertical AI startups raise easily. Incumbents scramble to build industry-specific modules. Distribution becomes key—who owns the customer relationship?',
        probability: 'High'
      }
    ]
  },
  // Slide 9: 2027-2028 Deep Dive - Community Shifts
  {
    id: 'slide-9',
    type: 'deep-dive',
    era: '2027-2028',
    title: '2027-2028: Community Shifts',
    predictions: [
      {
        title: 'Gated, Reputation-Scored Web',
        description: 'Dead internet fears drive adoption of invite-only, reputation-scored communities. Best networks go private. Open web becomes spam wasteland.',
        impact: 'Access becomes currency. Platforms charge for curation. Discord, Telegram, Geneva win. Twitter/X loses premium users.',
        probability: 'High'
      },
      {
        title: 'Back to Human Social Graphs',
        description: 'Content saturation forces platforms to prioritize verified humans. LinkedIn goes all-in on professional human networks; TikTok adapts or loses relevance.',
        impact: 'Algorithms shift from "engagement" to "human-verified engagement." Bots get shadowbanned aggressively. Authenticity = survival.',
        probability: 'Medium'
      },
      {
        title: 'Average Influencer Collapse',
        description: 'Middle-tier creators (10K-500K followers) see revenue collapse. Only top-tier charisma or fully automated AI farms survive. The creator middle class implodes.',
        impact: 'Brands consolidate spending on mega-influencers or micro-niches. Platforms struggle with retention. Many creators return to traditional employment.',
        probability: 'High'
      }
    ]
  },
  // Slide 10: 2027-2028 Deep Dive - Economic Reordering
  {
    id: 'slide-10',
    type: 'deep-dive',
    era: '2027-2028',
    title: '2027-2028: Economic Reordering',
    predictions: [
      {
        title: 'Micro-Companies Explode',
        description: '50K+ AI-augmented businesses launch by 2028. Cursor-powered dev shops, AI tutors, Discord moderators, vertical agents become real career paths.',
        impact: 'Platforms emerge to support micro-companies. Stripe, Shopify, Gumroad expand. Traditional employment declines further.',
        probability: 'High'
      },
      {
        title: 'VC Splits: Bits vs Atoms',
        description: 'AI software funding plateaus. Capital floods robotics, energy, biotech. Pure software AI wrappers struggle to raise Series A.',
        impact: 'Physical-world AI companies boom. Climate tech + robotics + longevity see massive inflows. Software founders pivot or bootstrap.',
        probability: 'Medium'
      },
      {
        title: 'Blue-Collar Wages Skyrocket',
        description: 'Electricians, plumbers, HVAC techs see 20-40% wage growth. White-collar automation hits hardest. Physical skills become premium.',
        impact: 'Trade schools boom. College enrollment drops. Companies scramble for skilled labor. Wage inversion reshapes class dynamics.',
        probability: 'High'
      },
      {
        title: 'Trust Premium Explodes',
        description: 'Products certified "zero AI involvement" or "made by verified humans" charge 10x premiums. Provable human imperfection becomes luxury good.',
        impact: 'Certification bodies emerge. Blockchain-verified provenance matters. Premium brands lean into human craftsmanship.',
        probability: 'Medium'
      }
    ]
  },
  // Slide 11: 2027-2028 Deep Dive - Hardware & Media (Restored)
  {
    id: 'slide-11',
    type: 'deep-dive',
    era: '2027-2028',
    title: '2027-2028: Hardware & Media',
    predictions: [
      {
        title: 'Hardware Returns',
        description: 'AI pins, smart earbuds, ambient devices go mainstream. Smartphones shift from primary to secondary interface by 2028.',
        impact: 'Apple, Meta, Google compete for ambient computing. Voice becomes primary input. Screen time declines—finally.',
        probability: 'Medium'
      },
      {
        title: 'Agent-Driven Media',
        description: 'Daily shows, newsletters, YouTube channels run with 1 human editor + AI automation. 10+ profitable solo channels by 2028.',
        impact: 'Media becomes one-person operations. Traditional studios struggle. Distribution platforms (YouTube, Substack) capture value.',
        probability: 'High'
      }
    ]
  },
  // Slide 12: 2027-2028 Deep Dive - Product Category (Restored)
  {
    id: 'slide-12',
    type: 'deep-dive',
    era: '2027-2028',
    title: '2027-2028: Product Category Shifts',
    predictions: [
      {
        title: 'AI as CRM',
        description: 'Emotional signature segmentation replaces demographics. AI analyzes tone, sentiment, psychographics for hyper-targeted messaging. Creepy but effective.',
        impact: 'Marketing becomes uncannily personalized. Conversion rates jump. Privacy advocates push back. Regulation struggles to keep up.',
        probability: 'Medium'
      },
      {
        title: '"AI-Free" Premium Products',
        description: 'Advertising "made by humans" or "AI-free" becomes effective positioning. Consumers crave imperfection and authenticity.',
        impact: 'Premium brands double down on craftsmanship. Mass-market AI, luxury human. Two-tier economy emerges across categories.',
        probability: 'High'
      }
    ]
  },
  // Slide 13: 2029-2030 Overview
  {
    id: 'slide-13',
    type: 'grid',
    era: '2029-2030',
    title: 'The 2029-2030 Expansion',
    subtitle: 'Market Maturity & Consumer Shifts',
    categories: [
      { category: 'Market Maturity', items: ['Education unbundled', 'Niche-as-a-Service communities', 'AI-native real-time retail', 'Universities drop CS degrees'] },
      { category: 'Infrastructure', items: ['Local LLMs privacy shield', 'Prediction markets replace UX testing', 'Disposable software', 'Infinite apps in ChatGPT', 'Data poisoning as product'] },
      { category: 'Consumer Shifts', items: ['Infinite-context entertainment', 'Personalized nutrient cocktails', 'Human-premium Airbnb', 'Fake-rich economy shifts', 'Mispriced asset wealth'] }
    ]
  },
  // Slide 14: 2029-2030 Deep Dive - Market Maturity (Restored & Fixed)
  {
    id: 'slide-14',
    type: 'deep-dive',
    era: '2029-2030',
    title: '2029-2030: Market Maturity',
    predictions: [
      {
        title: 'Education Unbundled',
        description: 'Elite universities become networking clubs. AI tutors outpace professors on pedagogy. Degrees matter less; skills + portfolio matter more.',
        impact: 'Alternative credentials boom. Companies hire based on demonstrated work. Universities pivot to credentialing networks, not education delivery.',
        probability: 'High'
      },
      {
        title: 'Niche-as-a-Service Communities',
        description: 'Curated, AI-moderated communities around obscure hobbies. Tightly scoped (vintage typewriter repair, 1990s J-pop), high engagement, defensible moats.',
        impact: 'Platforms emerge for community-as-product. Subscriptions + memberships drive revenue. Loneliness epidemic meets hyper-specific belonging.',
        probability: 'Medium'
      },
      {
        title: 'AI-Native Real-Time Retail',
        description: 'Demand sensing + generative design + on-demand manufacturing + AI marketing = one continuous loop. First company to solve inventory + personalization wins massively.',
        impact: 'Fast fashion accelerates further. Waste decreases (paradoxically). Shein on steroids. Traditional retail can\'t compete.',
        probability: 'Medium'
      }
    ]
  },
  // Slide 15: 2029-2030 Deep Dive - Infrastructure (Restored & Fixed)
  {
    id: 'slide-15',
    type: 'deep-dive',
    era: '2029-2030',
    title: '2029-2030: Infrastructure Evolution',
    predictions: [
      {
        title: 'Local LLMs Privacy Shield',
        description: 'Major data breach triggers shift to on-device models. Apple, Samsung push hard. Cloud still wins most cases—mixed outcome.',
        impact: 'Privacy-first segment willing to sacrifice performance. Most users stay cloud. Market bifurcates.',
        probability: 'Medium'
      },
      {
        title: 'Prediction Markets Replace UX Testing',
        description: 'Test product concepts on 10K AI personas before writing code. Results mixed but improving. Sophisticated companies adopt selectively.',
        impact: 'Reduces costly mistakes. AI personas don\'t replace real users but accelerate iteration cycles.',
        probability: 'Low'
      },
      {
        title: 'Disposable Software',
        description: 'Apps generated, used for 72 hours, deleted. Vercel + Claude Artifacts make this normal. Business model unclear.',
        impact: 'Software shifts from product to service to instant utility. Monetization challenges. Infrastructure providers win.',
        probability: 'Medium'
      },
      {
        title: 'Infinite Apps in ChatGPT',
        description: 'Generate 95% of apps inside Claude/Gemini/ChatGPT without code. App Store downloads collapse by 50%. Native apps become niche.',
        impact: 'Apple/Google lose App Store revenue. AI platforms become new distribution. Developers pivot to building within AI environments.',
        probability: 'High'
      }
    ]
  },
  // Slide 16: 2029-2030 Deep Dive - Consumer Shifts (Restored)
  {
    id: 'slide-16',
    type: 'deep-dive',
    era: '2029-2030',
    title: '2029-2030: Consumer Behavior',
    predictions: [
      {
        title: 'Infinite-Context Entertainment',
        description: 'Netflix generates new episodes of The Office or Friends based on your mood. Cancelled shows live forever, personalized to you.',
        impact: 'Licensing rights become complex. Actors negotiate AI likeness deals. Nostalgia becomes infinite, monetizable.',
        probability: 'Medium'
      },
      {
        title: 'Personalized Nutrient Cocktails',
        description: 'Real-time supplements based on genetics + microbiome + mood data. Vitamin aisle collapses. Regulation is the primary blocker.',
        impact: 'Health optimization becomes hyper-personalized. GNC dies. Direct-to-consumer health brands boom—if FDA allows it.',
        probability: 'Low'
      },
      {
        title: 'Human-Premium Airbnb',
        description: 'Travelers pay 3x premiums for hosts who cook, give tours, interact manually. Human friction becomes luxury amenity.',
        impact: 'Hospitality bifurcates. Budget = fully automated. Premium = human touch. Mid-tier collapses.',
        probability: 'Medium'
      },
      {
        title: 'Fake-Rich Economy Shifts',
        description: 'AI synthesis kills digital flexing (fake vacation photos, rented Lambos). Status shifts to hard assets, in-person experiences, verifiable relationships.',
        impact: 'Luxury pivots to experiential, physical, verifiable. Social media posturing loses value. Real-world presence matters again.',
        probability: 'Medium'
      }
    ]
  },
  // Slide 17: 2031+ Long Bets (Full List)
  {
    id: 'slide-17',
    type: 'list',
    era: '2031+',
    title: 'The 2031+ Long Bets',
    subtitle: 'Requires coordination or cultural shifts',
    predictions: [
      { title: 'Agent Wallets & Machine Economy', description: 'Agents transact with each other using crypto. Machine transaction volume exceeds human.', probability: 'Low' },
      { title: 'Google+Apple+OpenAI Build the Internet', description: 'Instead of browsing websites, people live inside model-powered environments.', probability: 'Low' },
      { title: 'Sovereign Compute Credits', description: 'Nations regulate AI compute access instead of currency. Requires geopolitical coordination.', probability: 'Very Low' },
      { title: 'Agent-to-Agent Scams', description: 'Models exploit each other\'s reward functions. Triggers regulatory panic.', probability: 'Low' },
      { title: 'Sovereign AI Trade Wars', description: 'Nations ban foundation model exports. Tariffs on compute, data restrictions.', probability: 'Low' },
      { title: 'Pre-2023 Web Most Valuable', description: 'Last reservoir of pure human thought becomes premium dataset. Training on it = competitive advantage.', probability: 'Medium' },
      { title: 'Analog Status Symbols', description: 'Film cameras, handwritten notes, acoustic instruments skyrocket in value. Friction = authenticity signal.', probability: 'Medium' },
      { title: 'AI Copycat = Value Increase', description: 'Being copied by AI increases original creator\'s value (niche dynamic).', probability: 'Very Low' },
      { title: 'Voice AI Post-Smartphone App', description: 'Makes typing feel outdated. Smartphones don\'t disappear; they shift to secondary interface by 2035+.', probability: 'Medium' }
    ]
  },
  // Slide 18: Nigeria
  {
    id: 'slide-18',
    type: 'cards',
    era: 'Nigeria',
    title: 'Nigeria & West Africa: 3 Opportunities',
    subtitle: 'Where regional founders can build moats',
    opportunities: [
      {
        title: 'Vertical AI for African SMBs',
        timeline: '2027-2028',
        desc: 'Mobile money agents, agri-input distributors, telecom VAS resellers—build "Salesforce for Kenyan solar distributors" or "HubSpot for Nigerian logistics operators."',
        why: 'African SMBs never adopted legacy SaaS. AI-first tools can leapfrog directly. WhatsApp + voice interfaces = lower adoption friction.',
        who: 'Founders who deeply understand sector workflows (not Silicon Valley clones). Distribution > product.'
      },
      {
        title: 'Gated, Reputation-Scored Communities',
        timeline: '2027-2028',
        desc: 'Build Discord + Claude-powered communities around diaspora economics, cross-border trade, regional business opportunities.',
        why: 'Trust is currency. Open platforms are noise. Curated access to vetted people = premium product. Monetize via memberships, deal flow, intros.',
        who: 'Community builders with strong personal brands and sector expertise.'
      },
      {
        title: 'Micro-Company Platform for West Africa',
        timeline: '2026-2027',
        desc: 'Train West African entrepreneurs to run AI-powered service businesses (tutoring, design, dev shops). You own the platform; they own distribution.',
        why: 'Youth unemployment + AI productivity tools + global client access = 50K+ potential micro-entrepreneurs. Platform takes 10-20% cut.',
        who: 'Operators who can recruit, train, and retain talent. Think Andela model, but for AI-augmented services.'
      }
    ]
  },
  // Slide 19: Actions
  {
    id: 'slide-19',
    type: 'action',
    era: '2026',
    title: '2026 Action Steps',
    subtitle: 'What to do in the next 12 months',
    actions: [
      { text: 'Q1 2026: Build or acquire agent capabilities. Customers will expect them by Q4.' },
      { text: 'Q1 2026: Move internal communications off email to Slack/Teams + Claude agents.' },
      { text: 'Q1 2026: Plan "human support as premium tier" pricing models. Run experiments.' },
      { text: 'Mid-2026: Scout vertical AI opportunities in your domain. Generic SaaS is losing.' },
      { text: 'Mid-2026: Test gated or reputation-scored community models. The open web is dying.' },
      { text: '2027: Invest in micro-company tooling or platforms. 50K+ solo businesses will launch.' },
      { text: '2027-2028: Monitor whether education unbundling hits your sector. Credentials in flux.' }
    ]
  },
  // Slide 20: Closing
  {
    id: 'slide-20',
    type: 'quote',
    era: 'Closing',
    title: 'Final Thought',
    highlight: 'The winners are already visible—they\'re building the 2028 future in 2026'
  }
];

export const getEraColor = (era: string) => {
  switch (era) {
    case '2026': return 'bg-cyan-500 text-cyan-400 border-cyan-500/30';
    case '2027-2028': return 'bg-emerald-500 text-emerald-400 border-emerald-500/30';
    case '2029-2030': return 'bg-violet-500 text-violet-400 border-violet-500/30';
    case '2031+': return 'bg-orange-500 text-orange-400 border-orange-500/30';
    case 'Nigeria': return 'bg-green-500 text-green-400 border-green-500/30';
    case 'Timeline': return 'bg-indigo-500 text-indigo-400 border-indigo-500/30';
    default: return 'bg-slate-500 text-slate-400 border-slate-500/30';
  }
};

export const getProbColor = (prob?: string) => {
  switch (prob) {
    case 'High': return 'text-green-400 bg-green-400/10 border-green-400/20';
    case 'Medium': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    case 'Low': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
    case 'Very Low': return 'text-red-400 bg-red-400/10 border-red-400/20';
    default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
  }
};

export const getEraIcon = (era: string) => {
    switch (era) {
        case '2026': return <Zap className="w-5 h-5" />;
        case '2027-2028': return <Layers className="w-5 h-5" />;
        case '2029-2030': return <Globe className="w-5 h-5" />;
        case '2031+': return <Cpu className="w-5 h-5" />;
        case 'Nigeria': return <TrendingUp className="w-5 h-5" />;
        case 'Timeline': return <CalendarRange className="w-5 h-5" />;
        default: return <ShieldCheck className="w-5 h-5" />;
    }
}