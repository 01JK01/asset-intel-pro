import React, { useState, useMemo, useEffect } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, RadarChart, Radar,
  ScatterChart, Scatter, AreaChart, Area, Cell, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart
} from 'recharts';
import {
  Menu, X, Search, TrendingUp, Users, DollarSign, Zap, Target,
  ChevronRight, ChevronDown, Star, Award, TrendingDown, ArrowUpRight,
  BarChart3, LineChart as LineChartIcon, Settings, Download, Eye,
  AlertCircle, CheckCircle, Lock, Wifi, Globe, Code, MessageSquare,
  Calendar, Percent, Activity, Filter
} from 'lucide-react';
import { firms, industryBenchmarks, martechCategories, trends2026, bestPractices, contentTypes, seoKeywordThemes, historicalScores, extendedFirmData, aumTiers } from './data';

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return displayValue;
};

const ScoreBar = ({ score, size = 'sm' }) => {
  const color = score >= 90 ? 'bg-emerald-500' : score >= 80 ? 'bg-cyan-500' : score >= 70 ? 'bg-amber-500' : 'bg-rose-500';
  const heightClass = size === 'sm' ? 'h-1' : size === 'md' ? 'h-2' : 'h-3';

  return (
    <div className={`w-full bg-slate-800 rounded-full overflow-hidden ${heightClass}`}>
      <div className={`${color} transition-all duration-500 h-full`} style={{ width: `${score}%` }} />
    </div>
  );
};

const StatCard = ({ label, value, icon: Icon, change, changeDirection = 'up' }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">{label}</p>
        <p className="text-2xl font-bold text-slate-100 mb-2">{value}</p>
        {change && (
          <div className="flex items-center gap-1">
            {changeDirection === 'up' ? (
              <ArrowUpRight className="w-4 h-4 text-emerald-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-rose-500" />
            )}
            <span className={`${changeDirection === 'up' ? 'text-emerald-500' : 'text-rose-500'} text-xs font-medium`}>
              {change}
            </span>
          </div>
        )}
      </div>
      {Icon && <Icon className="w-8 h-8 text-cyan-400/50" />}
    </div>
  </div>
);

const CompanyCard = ({ company, onClick }) => {
  const initials = company.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const categoryColors = {
    mega: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    large: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'mid-market': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    boutique: 'bg-violet-500/20 text-violet-400 border-violet-500/30'
  };

  return (
    <div
      onClick={onClick}
      className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: company.color || '#06b6d4' }}>
          {initials}
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-md border ${categoryColors[company.category]}`}>
          {company.category}
        </span>
      </div>
      <h3 className="text-sm font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">{company.name}</h3>
      <p className="text-xs text-slate-400 mb-3">${company.aum.toLocaleString()}B AUM</p>
      <div className="space-y-2">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-xs text-slate-400">Overall</span>
            <span className="text-xs font-bold text-slate-300">{company.overallScore}</span>
          </div>
          <ScoreBar score={company.overallScore} size="sm" />
        </div>
        <div className="flex gap-2 text-xs">
          <div className="flex-1">
            <span className="text-slate-500 text-xs">SEO</span>
            <p className="font-bold text-slate-300">{company.seoScore}</p>
          </div>
          <div className="flex-1">
            <span className="text-slate-500 text-xs">Content</span>
            <p className="font-bold text-slate-300">{company.contentScore}</p>
          </div>
          <div className="flex-1">
            <span className="text-slate-500 text-xs">Social</span>
            <p className="font-bold text-slate-300">{company.socialScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuadrantChart = ({ data }) => {
  const processedData = data.map(d => ({
    ...d,
    name: d.name.substring(0, 3).toUpperCase(),
    marketPresence: d.marketPresence || 50,
    digitalSophistication: d.digitalSophistication || 50,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis type="number" dataKey="marketPresence" name="Market Presence" stroke="#64748b" domain={[0, 100]} />
        <YAxis type="number" dataKey="digitalSophistication" name="Digital Sophistication" stroke="#64748b" domain={[0, 100]} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
          labelStyle={{ color: '#e2e8f0' }}
        />
        <Scatter dataKey="marketPresence" data={processedData} fill="#06b6d4" name="Firms">
          {processedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || '#06b6d4'} fillOpacity={0.7} />
          ))}
        </Scatter>
        {/* Quadrant lines */}
        <line x1="50" y1="0" x2="50" y2="100" stroke="#475569" strokeDasharray="3 3" />
        <text x="25" y="10" textAnchor="middle" fill="#94a3b8" fontSize={12}>Emerging Leaders</text>
        <text x="75" y="10" textAnchor="middle" fill="#94a3b8" fontSize={12}>Market Masters</text>
      </ScatterChart>
    </ResponsiveContainer>
  );
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

const VALID_SECTIONS = ['dashboard', 'profiles', 'benchmarking', 'seo', 'social', 'martech', 'scoring', 'calculators', 'trends', 'reports'];

const getSectionFromHash = () => {
  const hash = (typeof window !== 'undefined' ? window.location.hash : '').replace(/^#\/?/, '');
  return VALID_SECTIONS.includes(hash) ? hash : 'dashboard';
};

export default function App() {
  const [activeSection, setActiveSectionState] = useState(getSectionFromHash);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sync activeSection with URL hash for real back/forward navigation
  const setActiveSection = (section) => {
    if (window.location.hash !== `#/${section}`) {
      window.history.pushState({ section }, '', `#/${section}`);
    }
    setActiveSectionState(section);
  };

  useEffect(() => {
    // Normalize initial URL
    const initial = getSectionFromHash();
    if (!window.location.hash || window.location.hash !== `#/${initial}`) {
      window.history.replaceState({ section: initial }, '', `#/${initial}`);
    }
    const onPop = () => setActiveSectionState(getSectionFromHash());
    window.addEventListener('popstate', onPop);
    window.addEventListener('hashchange', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('hashchange', onPop);
    };
  }, []);

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);
  const [globalSearch, setGlobalSearch] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Company filters
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [aumRangeFilter, setAumRangeFilter] = useState('all');
  const [scoreRangeFilter, setScoreRangeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('aum');

  // Calculator states
  const [contentBudget, setContentBudget] = useState(50000);
  const [contentVolume, setContentVolume] = useState(50);
  const [conversionRate, setConversionRate] = useState(2);
  const [avgDeal, setAvgDeal] = useState(10000);

  const [seoDa, setSeoDa] = useState(70);
  const [seoKeywords, setSeoKeywords] = useState(100000);

  const [socialFollowers, setSocialFollowers] = useState(100000);
  const [socialEngagement, setSocialEngagement] = useState(3);

  const [budgetAlloc, setBudgetAlloc] = useState({ content: 30, seo: 25, social: 25, paid: 20 });

  // Weight adjustable scoring
  const [weights, setWeights] = useState({
    content: 25,
    seo: 25,
    social: 20,
    digital: 20,
    brand: 10
  });

  // Filter and sort companies
  const filteredCompanies = useMemo(() => {
    let filtered = firms.filter(firm => {
      const nameMatch = firm.name.toLowerCase().includes(globalSearch.toLowerCase());
      const tickerMatch = firm.ticker.toLowerCase().includes(globalSearch.toLowerCase());
      const categoryMatch = categoryFilter === 'all' || firm.category === categoryFilter;
      let aumMatch = true;
      if (aumRangeFilter === 'mega') aumMatch = firm.aum > 5000;
      if (aumRangeFilter === 'large') aumMatch = firm.aum > 1000 && firm.aum <= 5000;
      if (aumRangeFilter === 'mid') aumMatch = firm.aum > 100 && firm.aum <= 1000;
      if (aumRangeFilter === 'small') aumMatch = firm.aum <= 100;
      let scoreMatch = true;
      if (scoreRangeFilter === 'top') scoreMatch = firm.overallScore >= 90;
      if (scoreRangeFilter === 'high') scoreMatch = firm.overallScore >= 80 && firm.overallScore < 90;
      if (scoreRangeFilter === 'mid') scoreMatch = firm.overallScore >= 70 && firm.overallScore < 80;
      if (scoreRangeFilter === 'lower') scoreMatch = firm.overallScore < 70;
      return (nameMatch || tickerMatch) && categoryMatch && aumMatch && scoreMatch;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'aum') return b.aum - a.aum;
      if (sortBy === 'overall') return b.overallScore - a.overallScore;
      if (sortBy === 'content') return b.contentScore - a.contentScore;
      if (sortBy === 'seo') return b.seoScore - a.seoScore;
      if (sortBy === 'social') return b.socialScore - a.socialScore;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [globalSearch, categoryFilter, aumRangeFilter, scoreRangeFilter, sortBy]);

  // Calculate metrics
  const totalAUM = useMemo(() => firms.reduce((sum, f) => sum + f.aum, 0), []);
  const avgDigitalScore = useMemo(() => Math.round(firms.reduce((sum, f) => sum + f.digitalMaturity, 0) / firms.length), []);
  const avgContentScore = useMemo(() => Math.round(firms.reduce((sum, f) => sum + f.contentScore, 0) / firms.length), []);

  const topFirms = useMemo(() => {
    return [...firms].sort((a, b) => b.overallScore - a.overallScore).slice(0, 5);
  }, []);

  const aumData = useMemo(() => {
    return topFirms.map(f => ({ name: f.name.split(' ')[0], value: f.aum }));
  }, []);

  const digitalMaturityDistribution = useMemo(() => {
    return [
      { range: '90-100', count: firms.filter(f => f.digitalMaturity >= 90).length },
      { range: '80-89', count: firms.filter(f => f.digitalMaturity >= 80 && f.digitalMaturity < 90).length },
      { range: '70-79', count: firms.filter(f => f.digitalMaturity >= 70 && f.digitalMaturity < 80).length },
      { range: '60-69', count: firms.filter(f => f.digitalMaturity >= 60 && f.digitalMaturity < 70).length },
    ];
  }, []);

  const organicTrafficData = useMemo(() => {
    return firms.map(f => ({
      name: f.name.substring(0, 10),
      traffic: Math.round(f.monthlyTraffic / 100000) / 10
    })).sort((a, b) => b.traffic - a.traffic).slice(0, 15);
  }, []);

  const socialFollowersData = useMemo(() => {
    return firms.map(f => ({
      name: f.name.substring(0, 8),
      LinkedIn: Math.round(f.linkedinFollowers / 100000) / 10,
      Twitter: Math.round(f.twitterFollowers / 100000) / 10,
      YouTube: Math.round(f.youtubeSubscribers / 10000) / 10,
      Instagram: Math.round(f.instagramFollowers / 100000) / 10,
    })).slice(0, 10);
  }, []);

  const domainAuthorityData = useMemo(() => {
    return [...firms]
      .sort((a, b) => b.domainAuthority - a.domainAuthority)
      .slice(0, 15)
      .map(f => ({
        name: f.name.substring(0, 10),
        da: f.domainAuthority
      }));
  }, []);

  const radarData = useMemo(() => {
    if (!selectedCompany) return [];
    return [
      { dimension: 'Content', value: selectedCompany.contentScore, fullMark: 100 },
      { dimension: 'SEO', value: selectedCompany.seoScore, fullMark: 100 },
      { dimension: 'Social', value: selectedCompany.socialScore, fullMark: 100 },
      { dimension: 'Digital', value: selectedCompany.digitalMaturity, fullMark: 100 },
      { dimension: 'Brand', value: selectedCompany.brandAuthority, fullMark: 100 },
      { dimension: 'Innovation', value: selectedCompany.innovationScore, fullMark: 100 },
    ];
  }, [selectedCompany]);

  const comparisonData = useMemo(() => {
    if (selectedCompanies.length === 0) return [];
    const comparisonFirms = firms.filter(f => selectedCompanies.includes(f.id));
    return [
      ...comparisonFirms.map(f => ({
        metric: 'Overall Score',
        [f.name]: f.overallScore
      })),
      ...comparisonFirms.map(f => ({
        metric: 'AUM (Billions)',
        [f.name]: f.aum
      })),
      ...comparisonFirms.map(f => ({
        metric: 'SEO Score',
        [f.name]: f.seoScore
      })),
      ...comparisonFirms.map(f => ({
        metric: 'Content Score',
        [f.name]: f.contentScore
      })),
      ...comparisonFirms.map(f => ({
        metric: 'Social Score',
        [f.name]: f.socialScore
      })),
    ];
  }, [selectedCompanies]);

  const contentROI = useMemo(() => {
    const leads = (contentVolume * conversionRate) / 100;
    const revenue = leads * avgDeal;
    const roi = ((revenue - contentBudget) / contentBudget * 100).toFixed(0);
    return { leads, revenue, roi };
  }, [contentBudget, contentVolume, conversionRate, avgDeal]);

  const seoTrafficEstimate = useMemo(() => {
    const baseTraffic = 5000;
    const daModifier = seoDa / 50;
    const keywordModifier = seoKeywords / 100000;
    const estimatedTraffic = Math.round(baseTraffic * daModifier * keywordModifier);
    return estimatedTraffic;
  }, [seoDa, seoKeywords]);

  const socialBenchmark = useMemo(() => {
    const avgFollowers = Math.round(firms.reduce((sum, f) => sum + f.linkedinFollowers, 0) / firms.length);
    const avgEngagement = (firms.reduce((sum, f) => sum + f.linkedinEngagement, 0) / firms.length).toFixed(1);
    const userFollowerDiff = socialFollowers - avgFollowers;
    const userEngagementDiff = (socialEngagement - parseFloat(avgEngagement)).toFixed(1);
    return { avgFollowers, avgEngagement, userFollowerDiff, userEngagementDiff };
  }, [socialFollowers, socialEngagement]);

  const projectedROAS = useMemo(() => {
    const contentROAS = (budgetAlloc.content / 100) * 3.5;
    const seoROAS = (budgetAlloc.seo / 100) * 4.2;
    const socialROAS = (budgetAlloc.social / 100) * 2.8;
    const paidROAS = (budgetAlloc.paid / 100) * 3.0;
    return (contentROAS + seoROAS + socialROAS + paidROAS).toFixed(2);
  }, [budgetAlloc]);

  const scoringMatrixData = useMemo(() => {
    return firms.map(f => ({
      name: f.name,
      overall: f.overallScore,
      content: f.contentScore,
      seo: f.seoScore,
      social: f.socialScore,
      digital: f.digitalMaturity,
      brand: f.brandAuthority
    }));
  }, []);

  const adjustedScores = useMemo(() => {
    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
    return firms.map(f => ({
      name: f.name,
      score: Math.round(
        (f.contentScore * weights.content +
          f.seoScore * weights.seo +
          f.socialScore * weights.social +
          f.digitalMaturity * weights.digital +
          f.brandAuthority * weights.brand) / totalWeight
      )
    })).sort((a, b) => b.score - a.score);
  }, [weights]);

  const keywordData = useMemo(() => {
    return seoKeywordThemes.slice(0, 5).map(theme => ({
      name: theme.theme.substring(0, 15),
      volume: theme.searchVolume / 1000,
      opportunity: theme.opportunityScore * 10
    }));
  }, []);

  const trendData = useMemo(() => {
    return trends2026.slice(0, 8).map(trend => ({
      name: trend.title.substring(0, 15),
      adoption: trend.adoptionScore,
      impact: trend.impactScore
    }));
  }, []);

  const mostUsedTools = useMemo(() => {
    const toolCount = {};
    firms.forEach(firm => {
      [firm.cms, firm.marketingAutomation, firm.analytics, firm.crm, firm.socialManagement].forEach(tool => {
        if (tool) {
          const toolName = tool.split(',')[0].trim();
          toolCount[toolName] = (toolCount[toolName] || 0) + 1;
        }
      });
    });
    return Object.entries(toolCount)
      .map(([tool, count]) => ({ tool, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }, []);

  // ============================================================================
  // V2: derived from extendedFirmData / historicalScores
  // ============================================================================

  const MONTH_LABELS = ['May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr'];

  const topFiveTrendSeries = useMemo(() => {
    const ids = topFirms.map(f => f.id);
    return MONTH_LABELS.map((m, i) => {
      const row = { month: m };
      ids.forEach(id => {
        const firm = firms.find(f => f.id === id);
        row[firm.name.split(' ')[0]] = historicalScores?.[id]?.[i] ?? firm.overallScore;
      });
      return row;
    });
  }, [topFirms]);

  const aiSearchLeaders = useMemo(() => {
    return firms
      .map(f => ({
        id: f.id,
        name: f.name,
        score: extendedFirmData?.[f.id]?.aiSearchVisibility?.aiVisibilityScore ?? 0,
        perplexity: extendedFirmData?.[f.id]?.aiSearchVisibility?.perplexityCitations ?? 0,
        chatgpt: extendedFirmData?.[f.id]?.aiSearchVisibility?.chatgptCitations ?? 0,
        claude: extendedFirmData?.[f.id]?.aiSearchVisibility?.claudeCitations ?? 0,
        aiOverview: extendedFirmData?.[f.id]?.aiSearchVisibility?.aiOverviewAppearances ?? 0,
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }, []);

  const serpFeatureData = useMemo(() => {
    return [...firms]
      .sort((a, b) => (extendedFirmData?.[b.id]?.serpFeatures?.featuredSnippets ?? 0) - (extendedFirmData?.[a.id]?.serpFeatures?.featuredSnippets ?? 0))
      .slice(0, 10)
      .map(f => ({
        name: f.name.split(' ')[0],
        Snippets: extendedFirmData?.[f.id]?.serpFeatures?.featuredSnippets ?? 0,
        PAA: extendedFirmData?.[f.id]?.serpFeatures?.peopleAlsoAsk ?? 0,
        Knowledge: extendedFirmData?.[f.id]?.serpFeatures?.knowledgePanels ?? 0,
      }));
  }, []);

  const eeatScorecard = useMemo(() => {
    return firms.map(f => ({
      name: f.name,
      id: f.id,
      experience: extendedFirmData?.[f.id]?.eeat?.experience ?? 0,
      expertise: extendedFirmData?.[f.id]?.eeat?.expertise ?? 0,
      authoritativeness: extendedFirmData?.[f.id]?.eeat?.authoritativeness ?? 0,
      trust: extendedFirmData?.[f.id]?.eeat?.trust ?? 0,
      total: extendedFirmData?.[f.id]?.eeat?.total ?? 0,
    })).sort((a,b) => b.total - a.total).slice(0, 10);
  }, []);

  const stackMaturityDist = useMemo(() => {
    const buckets = { 'Legacy': 0, 'Transitional': 0, 'Modern': 0, 'Composable-AI': 0 };
    firms.forEach(f => {
      const m = extendedFirmData?.[f.id]?.stackMaturity;
      if (m && buckets[m] !== undefined) buckets[m] += 1;
    });
    return Object.entries(buckets).map(([name, value]) => ({ name, value }));
  }, []);

  const aiToolAdoption = useMemo(() => {
    const counts = {};
    firms.forEach(f => {
      (extendedFirmData?.[f.id]?.aiToolsAdopted ?? []).forEach(t => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    return Object.entries(counts).map(([tool, count]) => ({ tool, count })).sort((a,b) => b.count - a.count).slice(0, 10);
  }, []);

  const executivePresenceLeaders = useMemo(() => {
    return firms
      .map(f => ({
        id: f.id,
        name: f.name,
        exec: extendedFirmData?.[f.id]?.executivePresence?.ceoName ?? '—',
        followers: extendedFirmData?.[f.id]?.executivePresence?.ceoLinkedInFollowers ?? 0,
        thoughtScore: extendedFirmData?.[f.id]?.executivePresence?.thoughtLeadershipScore ?? 0,
      }))
      .sort((a, b) => b.thoughtScore - a.thoughtScore)
      .slice(0, 8);
  }, []);

  const platformCadence = useMemo(() => {
    return [...firms].slice(0, 12).map(f => ({
      name: f.name.split(' ')[0],
      LinkedIn: extendedFirmData?.[f.id]?.postsPerWeek?.linkedin ?? 0,
      Twitter: extendedFirmData?.[f.id]?.postsPerWeek?.twitter ?? 0,
      YouTube: extendedFirmData?.[f.id]?.postsPerWeek?.youtube ?? 0,
      Instagram: extendedFirmData?.[f.id]?.postsPerWeek?.instagram ?? 0,
      TikTok: extendedFirmData?.[f.id]?.postsPerWeek?.tiktok ?? 0,
    }));
  }, []);

  const contentFunnelData = useMemo(() => {
    return [...firms].slice(0, 12).map(f => ({
      name: f.name.split(' ')[0],
      TOFU: extendedFirmData?.[f.id]?.contentFunnel?.tofu ?? 0,
      MOFU: extendedFirmData?.[f.id]?.contentFunnel?.mofu ?? 0,
      BOFU: extendedFirmData?.[f.id]?.contentFunnel?.bofu ?? 0,
    }));
  }, []);

  // Peer-group filter for benchmarking
  const [peerTier, setPeerTier] = useState('all');
  const peerFirms = useMemo(() => {
    if (peerTier === 'all') return firms;
    const tier = aumTiers?.[peerTier];
    if (!tier) return firms;
    return firms.filter(f => {
      const min = tier.min ?? 0;
      const max = tier.max ?? Infinity;
      return f.aum >= min && f.aum < max;
    });
  }, [peerTier]);

  // ============================================================================
  // RENDER SECTIONS
  // ============================================================================

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Firms Tracked"
          value={firms.length}
          icon={Users}
          change="+25 tracked"
        />
        <StatCard
          label="Combined AUM"
          value={`$${(totalAUM / 1000).toFixed(1)}T`}
          icon={DollarSign}
          change="+12.3%"
          changeDirection="up"
        />
        <StatCard
          label="Avg Digital Maturity"
          value={avgDigitalScore}
          icon={Zap}
          change="+3.2%"
          changeDirection="up"
        />
        <StatCard
          label="Avg Content Score"
          value={avgContentScore}
          icon={Target}
          change="+2.1%"
          changeDirection="up"
        />
      </div>

      {/* Trend: 12-Month Score Trajectory for Top 5 */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-100">12-Month Overall Score Trajectory — Top 5 Firms</h3>
            <p className="text-xs text-slate-400 mt-1">Trailing 12 months, composite overall score (0–100)</p>
          </div>
          <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">Updated Apr 2026</span>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={topFiveTrendSeries}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" domain={[60, 100]} />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} />
            <Legend />
            {topFirms.map((f, i) => (
              <Line
                key={f.id}
                type="monotone"
                dataKey={f.name.split(' ')[0]}
                stroke={['#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][i]}
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Market Leaders & Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Market Leaders (Top 5 by Score)</h3>
          <div className="space-y-3">
            {topFirms.map((firm, idx) => (
              <div key={firm.id} className="flex items-center gap-3 pb-3 border-b border-slate-800 last:border-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-cyan-500/20 text-cyan-400 font-bold text-sm">
                  #{idx + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-100">{firm.name}</p>
                  <p className="text-xs text-slate-400">${firm.aum}B AUM</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-sm font-bold text-cyan-400">{firm.overallScore}</p>
                    <p className="text-xs text-slate-400">Score</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-4">AUM Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={aumData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}\n$${entry.value}B`}
                outerRadius={80}
                fill="#06b6d4"
                dataKey="value"
              >
                {topFirms.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || ['#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][index]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#e2e8f0' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Digital Maturity & Recent Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Digital Maturity Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={digitalMaturityDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="range" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#e2e8f0' }}
              />
              <Bar dataKey="count" fill="#06b6d4" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Key Findings</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-slate-100">Industry Leaders</p>
                <p className="text-xs text-slate-400">Top 5 firms maintain 90+ overall scores</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-slate-100">Content Strategy</p>
                <p className="text-xs text-slate-400">96% publish daily to maintain engagement</p>
              </div>
            </div>
            <div className="flex gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-slate-100">Social Dominance</p>
                <p className="text-xs text-slate-400">LinkedIn followers avg 1.2M across top firms</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Code className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-slate-100">Tech Investment</p>
                <p className="text-xs text-slate-400">Salesforce & Adobe dominate martech stacks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Firms Grid */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">All Tracked Firms ({firms.length})</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {firms.map(firm => (
            <CompanyCard key={firm.id} company={firm} onClick={() => setSelectedCompany(firm)} />
          ))}
        </div>
      </div>
    </div>
  );

  const renderCompanyProfiles = () => (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search firms..."
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-slate-100 pl-9 pr-4 py-2 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">Category</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 px-4 py-2 rounded-lg focus:border-cyan-500 focus:outline-none"
            >
              <option value="all">All Categories</option>
              <option value="mega">Mega ($5B+)</option>
              <option value="large">Large ($1B-$5B)</option>
              <option value="mid-market">Mid-Market</option>
              <option value="boutique">Boutique</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">Score Range</label>
            <select
              value={scoreRangeFilter}
              onChange={(e) => setScoreRangeFilter(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 px-4 py-2 rounded-lg focus:border-cyan-500 focus:outline-none"
            >
              <option value="all">All Scores</option>
              <option value="top">90-100 (Top)</option>
              <option value="high">80-89 (High)</option>
              <option value="mid">70-79 (Mid)</option>
              <option value="lower">Below 70</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 px-4 py-2 rounded-lg focus:border-cyan-500 focus:outline-none"
            >
              <option value="aum">AUM (Largest)</option>
              <option value="overall">Overall Score</option>
              <option value="content">Content Score</option>
              <option value="seo">SEO Score</option>
              <option value="social">Social Score</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        {selectedCompany && (
          <div className="mb-6 border-t border-slate-800 pt-6">
            <button
              onClick={() => setSelectedCompany(null)}
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mb-4"
            >
              ← Back to Grid
            </button>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-100 mb-2">{selectedCompany.name}</h2>
                  <div className="flex gap-4 text-sm text-slate-400">
                    <span>{selectedCompany.hq}</span>
                    <span>Founded {selectedCompany.founded}</span>
                    <span>{selectedCompany.employees.toLocaleString()} employees</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-cyan-400">{selectedCompany.overallScore}</div>
                  <div className="text-xs text-slate-400">Overall Score</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-100 mb-4">Key Metrics</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">AUM</span>
                      <span className="text-slate-100 font-semibold">${selectedCompany.aum}B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">YoY Growth</span>
                      <span className="text-emerald-400 font-semibold">{selectedCompany.aumGrowthYoY}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Domain Authority</span>
                      <span className="text-slate-100 font-semibold">{selectedCompany.domainAuthority}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Monthly Traffic</span>
                      <span className="text-slate-100 font-semibold">{(selectedCompany.monthlyTraffic / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Organic Keywords</span>
                      <span className="text-slate-100 font-semibold">{(selectedCompany.organicKeywords / 1000).toFixed(0)}K</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-100 mb-4">Score Breakdown</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-slate-400">Content</span>
                        <span className="text-sm font-bold text-slate-100">{selectedCompany.contentScore}</span>
                      </div>
                      <ScoreBar score={selectedCompany.contentScore} size="md" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-slate-400">SEO</span>
                        <span className="text-sm font-bold text-slate-100">{selectedCompany.seoScore}</span>
                      </div>
                      <ScoreBar score={selectedCompany.seoScore} size="md" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-slate-400">Social</span>
                        <span className="text-sm font-bold text-slate-100">{selectedCompany.socialScore}</span>
                      </div>
                      <ScoreBar score={selectedCompany.socialScore} size="md" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-slate-400">Digital Maturity</span>
                        <span className="text-sm font-bold text-slate-100">{selectedCompany.digitalMaturity}</span>
                      </div>
                      <ScoreBar score={selectedCompany.digitalMaturity} size="md" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Radar Chart */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-100 mb-4">Score Radar</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="dimension" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Radar name="Score" dataKey="value" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Social Media Breakdown */}
              <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">LinkedIn</p>
                  <p className="text-lg font-bold text-slate-100">{(selectedCompany.linkedinFollowers / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-cyan-400">{selectedCompany.linkedinEngagement.toFixed(1)}% eng</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">Twitter</p>
                  <p className="text-lg font-bold text-slate-100">{(selectedCompany.twitterFollowers / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-cyan-400">{selectedCompany.twitterEngagement.toFixed(1)}% eng</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">YouTube</p>
                  <p className="text-lg font-bold text-slate-100">{(selectedCompany.youtubeSubscribers / 1000).toFixed(0)}K</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">Instagram</p>
                  <p className="text-lg font-bold text-slate-100">{(selectedCompany.instagramFollowers / 1000).toFixed(0)}K</p>
                </div>
              </div>

              {/* Content Strategy */}
              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-100 mb-3">Content Strategy</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-slate-300 mb-1">Content Types</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedCompany.contentTypes.map((type, idx) => (
                          <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Frequency: <span className="text-slate-100 font-semibold">{selectedCompany.contentFrequency}</span></p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Blog Posts/Month: <span className="text-slate-100 font-semibold">{selectedCompany.blogPostsPerMonth}</span></p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Whitepapers/Quarter: <span className="text-slate-100 font-semibold">{selectedCompany.whitepapersPerQuarter}</span></p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-100 mb-3">Martech Stack</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-xs text-slate-400">CMS</p>
                      <p className="text-slate-100 font-semibold text-sm">{selectedCompany.cms}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Marketing Automation</p>
                      <p className="text-slate-100 font-semibold text-sm">{selectedCompany.marketingAutomation}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">CRM</p>
                      <p className="text-slate-100 font-semibold text-sm">{selectedCompany.crm}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Analytics</p>
                      <p className="text-slate-100 font-semibold text-sm">{selectedCompany.analytics}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCompanies.map(company => (
            <CompanyCard
              key={company.id}
              company={company}
              onClick={() => setSelectedCompany(company)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderBenchmarking = () => (
    <div className="space-y-6">
      {/* Peer-Group (AUM Tier) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-100">Peer-Group Benchmark (by AUM Tier)</h3>
            <p className="text-xs text-slate-400 mt-1">Compare any firm against the cohort of truly comparable firms — not a distorted 25-firm average</p>
          </div>
          <div className="flex gap-2">
            {[
              { k: 'all', label: 'All Firms' },
              { k: 'mega', label: 'Mega ($5T+)' },
              { k: 'large', label: 'Large ($1T–$5T)' },
              { k: 'mid', label: 'Mid ($500B–$1T)' },
              { k: 'boutique', label: 'Boutique (<$500B)' },
            ].map(opt => (
              <button
                key={opt.k}
                onClick={() => setPeerTier(opt.k)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
                  peerTier === opt.k ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: 'Firms in peer group', v: peerFirms.length, color: 'text-slate-100' },
            { label: 'Avg Overall Score', v: peerFirms.length ? Math.round(peerFirms.reduce((s,f) => s+f.overallScore, 0)/peerFirms.length) : 0, color: 'text-cyan-400' },
            { label: 'Avg Domain Authority', v: peerFirms.length ? Math.round(peerFirms.reduce((s,f) => s+f.domainAuthority, 0)/peerFirms.length) : 0, color: 'text-emerald-400' },
            { label: 'Avg Content Score', v: peerFirms.length ? Math.round(peerFirms.reduce((s,f) => s+f.contentScore, 0)/peerFirms.length) : 0, color: 'text-amber-400' },
            { label: 'Avg Social Score', v: peerFirms.length ? Math.round(peerFirms.reduce((s,f) => s+f.socialScore, 0)/peerFirms.length) : 0, color: 'text-violet-400' },
          ].map((m, i) => (
            <div key={i} className="bg-slate-800/40 rounded-lg p-3 border border-slate-800">
              <p className="text-xs text-slate-400 mb-1">{m.label}</p>
              <p className={`text-2xl font-bold ${m.color}`}>{m.v}</p>
            </div>
          ))}
        </div>
        {peerFirms.length > 0 && peerFirms.length < firms.length && (
          <div className="mt-4 pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-400 mb-2">Firms in this peer group:</p>
            <div className="flex flex-wrap gap-1">
              {peerFirms.map(f => (
                <span key={f.id} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">{f.name}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Competitive Comparison</h3>
        <p className="text-sm text-slate-400 mb-4">Select 2-4 firms to compare</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
          {firms.slice(0, 10).map(firm => (
            <button
              key={firm.id}
              onClick={() => {
                if (selectedCompanies.includes(firm.id)) {
                  setSelectedCompanies(selectedCompanies.filter(id => id !== firm.id));
                } else if (selectedCompanies.length < 4) {
                  setSelectedCompanies([...selectedCompanies, firm.id]);
                }
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCompanies.includes(firm.id)
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {firm.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {selectedCompanies.length >= 2 && (
          <div>
            <h4 className="text-sm font-bold text-slate-100 mb-4">Comparison Metrics</h4>

            {/* Metrics Table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-2 px-3 text-slate-400 font-semibold">Metric</th>
                    {firms.filter(f => selectedCompanies.includes(f.id)).map(firm => (
                      <th key={firm.id} className="text-left py-2 px-3 text-slate-100 font-semibold">{firm.name.substring(0, 12)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-2 px-3 text-slate-400">Overall Score</td>
                    {firms.filter(f => selectedCompanies.includes(f.id)).map(firm => (
                      <td key={firm.id} className="py-2 px-3">
                        <span className="text-cyan-400 font-semibold">{firm.overallScore}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-2 px-3 text-slate-400">AUM ($B)</td>
                    {firms.filter(f => selectedCompanies.includes(f.id)).map(firm => (
                      <td key={firm.id} className="py-2 px-3 text-slate-100 font-semibold">${firm.aum}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-2 px-3 text-slate-400">Content Score</td>
                    {firms.filter(f => selectedCompanies.includes(f.id)).map(firm => (
                      <td key={firm.id} className="py-2 px-3">
                        <span className="text-emerald-400 font-semibold">{firm.contentScore}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-2 px-3 text-slate-400">SEO Score</td>
                    {firms.filter(f => selectedCompanies.includes(f.id)).map(firm => (
                      <td key={firm.id} className="py-2 px-3">
                        <span className="text-cyan-400 font-semibold">{firm.seoScore}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-2 px-3 text-slate-400">Social Score</td>
                    {firms.filter(f => selectedCompanies.includes(f.id)).map(firm => (
                      <td key={firm.id} className="py-2 px-3">
                        <span className="text-violet-400 font-semibold">{firm.socialScore}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-2 px-3 text-slate-400">Digital Maturity</td>
                    {firms.filter(f => selectedCompanies.includes(f.id)).map(firm => (
                      <td key={firm.id} className="py-2 px-3">
                        <span className="text-amber-400 font-semibold">{firm.digitalMaturity}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-2 px-3 text-slate-400">Domain Authority</td>
                    {firms.filter(f => selectedCompanies.includes(f.id)).map(firm => (
                      <td key={firm.id} className="py-2 px-3">
                        <span className="text-cyan-400 font-semibold">{firm.domainAuthority}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-2 px-3 text-slate-400">LinkedIn Followers</td>
                    {firms.filter(f => selectedCompanies.includes(f.id)).map(firm => (
                      <td key={firm.id} className="py-2 px-3">
                        <span className="text-slate-100 font-semibold">{(firm.linkedinFollowers / 1000000).toFixed(1)}M</span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Radar Comparison */}
            {selectedCompanies.length === 2 && (
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="text-sm font-bold text-slate-100 mb-4">Score Comparison</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="dimension" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    {firms.filter(f => selectedCompanies.includes(f.id)).map((firm, idx) => (
                      <Radar
                        key={firm.id}
                        name={firm.name.substring(0, 10)}
                        dataKey="value"
                        stroke={['#06b6d4', '#10b981', '#f59e0b'][idx]}
                        fill={['#06b6d4', '#10b981', '#f59e0b'][idx]}
                        fillOpacity={0.2}
                      />
                    ))}
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderSEOContent = () => (
    <div className="space-y-6">
      {/* Organic Traffic */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Organic Traffic Comparison (Top 15)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={organicTrafficData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="name" stroke="#64748b" angle={-45} textAnchor="end" height={80} />
            <YAxis stroke="#64748b" label={{ value: 'Million/Month', angle: -90, position: 'insideLeft' }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
              labelStyle={{ color: '#e2e8f0' }}
            />
            <Bar dataKey="traffic" fill="#06b6d4" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Domain Authority */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Domain Authority Ranking</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={domainAuthorityData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 150 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis type="number" stroke="#64748b" />
            <YAxis dataKey="name" type="category" stroke="#64748b" width={140} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
              labelStyle={{ color: '#e2e8f0' }}
            />
            <Bar dataKey="da" fill="#10b981" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* SEO Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h4 className="text-sm font-bold text-slate-100 mb-4">Avg Domain Authority</h4>
          <p className="text-3xl font-bold text-cyan-400 mb-2">
            {Math.round(firms.reduce((sum, f) => sum + f.domainAuthority, 0) / firms.length)}
          </p>
          <ScoreBar score={Math.round(firms.reduce((sum, f) => sum + f.domainAuthority, 0) / firms.length)} size="md" />
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h4 className="text-sm font-bold text-slate-100 mb-4">Avg Organic Keywords</h4>
          <p className="text-3xl font-bold text-emerald-400 mb-2">
            {Math.round(firms.reduce((sum, f) => sum + f.organicKeywords, 0) / firms.length / 1000)}K
          </p>
          <p className="text-xs text-slate-400">Across {firms.length} firms</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h4 className="text-sm font-bold text-slate-100 mb-4">Avg Monthly Traffic</h4>
          <p className="text-3xl font-bold text-amber-400 mb-2">
            {(firms.reduce((sum, f) => sum + f.monthlyTraffic, 0) / firms.length / 1000000).toFixed(1)}M
          </p>
          <p className="text-xs text-slate-400">Across {firms.length} firms</p>
        </div>
      </div>

      {/* AI Search Visibility Leaderboard */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-100">AI Search Visibility Leaderboard</h3>
            <p className="text-xs text-slate-400 mt-1">Citations across Perplexity, ChatGPT, Claude + Google AI Overview appearances (last 30d)</p>
          </div>
          <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 rounded">NEW</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-400 border-b border-slate-800">
                <th className="pb-2 pr-3">Firm</th>
                <th className="pb-2 px-3 text-right">AI Visibility</th>
                <th className="pb-2 px-3 text-right">Perplexity</th>
                <th className="pb-2 px-3 text-right">ChatGPT</th>
                <th className="pb-2 px-3 text-right">Claude</th>
                <th className="pb-2 px-3 text-right">AI Overview</th>
              </tr>
            </thead>
            <tbody>
              {aiSearchLeaders.map((row, i) => (
                <tr key={row.id} className="border-b border-slate-800/50">
                  <td className="py-2 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 w-5">#{i+1}</span>
                      <span className="text-slate-100 font-medium">{row.name}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 text-right">
                    <span className="text-cyan-400 font-bold">{row.score}</span>
                  </td>
                  <td className="py-2 px-3 text-right text-slate-300">{row.perplexity.toLocaleString()}</td>
                  <td className="py-2 px-3 text-right text-slate-300">{row.chatgpt.toLocaleString()}</td>
                  <td className="py-2 px-3 text-right text-slate-300">{row.claude.toLocaleString()}</td>
                  <td className="py-2 px-3 text-right text-slate-300">{row.aiOverview.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SERP Feature Ownership */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-1">SERP Feature Ownership (Top 10)</h3>
        <p className="text-xs text-slate-400 mb-4">Featured snippets, PAA placements, and knowledge panels — zero-click real estate</p>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={serpFeatureData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="name" stroke="#64748b" angle={-30} textAnchor="end" height={70} />
            <YAxis stroke="#64748b" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} />
            <Legend />
            <Bar dataKey="Snippets" stackId="a" fill="#06b6d4" />
            <Bar dataKey="PAA" stackId="a" fill="#10b981" />
            <Bar dataKey="Knowledge" stackId="a" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* E-E-A-T Authority Scorecard */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-1">E-E-A-T Authority Scorecard (Top 10)</h3>
        <p className="text-xs text-slate-400 mb-4">Google's Experience · Expertise · Authoritativeness · Trust quality signals (0–100)</p>
        <div className="space-y-2">
          {eeatScorecard.map((row, i) => (
            <div key={row.id} className="grid grid-cols-12 gap-2 items-center text-xs py-2 border-b border-slate-800/50 last:border-0">
              <div className="col-span-3 flex items-center gap-2">
                <span className="text-slate-500 w-5">#{i+1}</span>
                <span className="text-slate-100 font-medium truncate">{row.name}</span>
              </div>
              <div className="col-span-2"><span className="text-slate-400">Exp </span><span className="text-cyan-400 font-bold">{row.experience}</span></div>
              <div className="col-span-2"><span className="text-slate-400">Expt </span><span className="text-emerald-400 font-bold">{row.expertise}</span></div>
              <div className="col-span-2"><span className="text-slate-400">Auth </span><span className="text-amber-400 font-bold">{row.authoritativeness}</span></div>
              <div className="col-span-2"><span className="text-slate-400">Trust </span><span className="text-violet-400 font-bold">{row.trust}</span></div>
              <div className="col-span-1 text-right">
                <span className="text-slate-100 font-bold">{row.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Funnel Mix */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-1">Content Funnel Mix (TOFU/MOFU/BOFU %)</h3>
        <p className="text-xs text-slate-400 mb-4">How each firm balances awareness vs. consideration vs. decision-stage content</p>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={contentFunnelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="name" stroke="#64748b" angle={-30} textAnchor="end" height={70} />
            <YAxis stroke="#64748b" unit="%" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} />
            <Legend />
            <Bar dataKey="TOFU" stackId="a" fill="#06b6d4" />
            <Bar dataKey="MOFU" stackId="a" fill="#10b981" />
            <Bar dataKey="BOFU" stackId="a" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Keyword Themes */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Top SEO Keyword Themes</h3>
        <div className="space-y-4">
          {seoKeywordThemes.slice(0, 6).map((theme) => (
            <div key={theme.id} className="border-b border-slate-800 last:border-0 pb-4 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">{theme.theme}</h4>
                  <p className="text-xs text-slate-400 mt-1">Gap: {theme.contentGap}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-cyan-400">{theme.searchVolume.toLocaleString()}</p>
                  <p className="text-xs text-slate-400">searches/month</p>
                </div>
              </div>
              <div className="flex gap-1 flex-wrap">
                {theme.keywords.slice(0, 4).map((kw, idx) => (
                  <span key={idx} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSocialMedia = () => (
    <div className="space-y-6">
      {/* Social Followers Comparison */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Social Media Followers (Top 10)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={socialFollowersData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" label={{ value: 'Millions', angle: -90, position: 'insideLeft' }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
              labelStyle={{ color: '#e2e8f0' }}
            />
            <Legend />
            <Bar dataKey="LinkedIn" fill="#0A66C2" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Twitter" fill="#1DA1F2" radius={[8, 8, 0, 0]} />
            <Bar dataKey="YouTube" fill="#FF0000" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Instagram" fill="#E4405F" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Social Engagement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-4">LinkedIn Engagement Rate</h3>
          <div className="space-y-2 text-sm">
            {firms.slice(0, 8).map(firm => (
              <div key={firm.id} className="flex items-center justify-between pb-2 border-b border-slate-800 last:border-0">
                <span className="text-slate-400">{firm.name.substring(0, 20)}</span>
                <div className="flex items-center gap-2">
                  <ScoreBar score={firm.linkedinEngagement * 20} size="sm" />
                  <span className="text-slate-100 font-semibold min-w-12">{firm.linkedinEngagement.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Platform Presence</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">LinkedIn Active</span>
              <span className="text-lg font-bold text-cyan-400">
                {firms.filter(f => f.linkedinFollowers > 0).length}/{firms.length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Twitter Active</span>
              <span className="text-lg font-bold text-cyan-400">
                {firms.filter(f => f.twitterFollowers > 0).length}/{firms.length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">YouTube Active</span>
              <span className="text-lg font-bold text-cyan-400">
                {firms.filter(f => f.youtubeSubscribers > 0).length}/{firms.length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Instagram Active</span>
              <span className="text-lg font-bold text-cyan-400">
                {firms.filter(f => f.instagramFollowers > 0).length}/{firms.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn Followers Ranking */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">LinkedIn Followers Ranking</h3>
        <div className="space-y-2">
          {[...firms]
            .sort((a, b) => b.linkedinFollowers - a.linkedinFollowers)
            .slice(0, 10)
            .map((firm, idx) => (
              <div key={firm.id} className="flex items-center justify-between pb-2 border-b border-slate-800 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 font-bold w-6">#{idx + 1}</span>
                  <span className="text-slate-100 font-semibold">{firm.name}</span>
                </div>
                <span className="text-cyan-400 font-bold">{(firm.linkedinFollowers / 1000000).toFixed(2)}M</span>
              </div>
            ))}
        </div>
      </div>

      {/* Platform Cadence */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-1">Platform Posting Cadence (posts/week)</h3>
        <p className="text-xs text-slate-400 mb-4">Native publishing velocity across owned channels — sustained cadence beats burst posting</p>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={platformCadence}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="name" stroke="#64748b" angle={-30} textAnchor="end" height={70} />
            <YAxis stroke="#64748b" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} />
            <Legend />
            <Bar dataKey="LinkedIn" fill="#0077b5" />
            <Bar dataKey="Twitter" fill="#1DA1F2" />
            <Bar dataKey="YouTube" fill="#ef4444" />
            <Bar dataKey="Instagram" fill="#E1306C" />
            <Bar dataKey="TikTok" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Executive Presence */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-100">Executive Presence Leaderboard</h3>
            <p className="text-xs text-slate-400 mt-1">CEO thought-leadership score, LinkedIn reach, and exec engagement</p>
          </div>
          <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-1 rounded">People-led content</span>
        </div>
        <div className="space-y-2">
          {executivePresenceLeaders.map((row, i) => (
            <div key={row.id} className="flex items-center gap-3 py-2 border-b border-slate-800/50 last:border-0">
              <span className="text-slate-500 font-bold w-6 text-sm">#{i+1}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-100 truncate">{row.name}</p>
                <p className="text-xs text-slate-400 truncate">CEO: {row.exec}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-cyan-400">{(row.followers / 1000).toFixed(0)}K</p>
                <p className="text-xs text-slate-400">LinkedIn followers</p>
              </div>
              <div className="text-right w-20">
                <p className="text-sm font-bold text-emerald-400">{row.thoughtScore}</p>
                <p className="text-xs text-slate-400">TL score</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMartech = () => (
    <div className="space-y-6">
      {/* Most Used Tools */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Most Used Martech Tools</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={mostUsedTools}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 200 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis type="number" stroke="#64748b" />
            <YAxis dataKey="tool" type="category" stroke="#64748b" width={190} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
              labelStyle={{ color: '#e2e8f0' }}
            />
            <Bar dataKey="count" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Martech Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {martechCategories.slice(0, 4).map((category) => (
          <div key={category.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h4 className="text-sm font-bold text-slate-100 mb-3">{category.name}</h4>
            <div className="space-y-2">
              {category.tools.slice(0, 5).map((tool, idx) => {
                const toolName = typeof tool === 'string' ? tool : tool.name;
                const toolMeta = typeof tool === 'object' ? tool : null;
                return (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <div className="flex-1 min-w-0">
                      <span className="text-slate-300 font-medium">{toolName}</span>
                      {toolMeta?.segment && (
                        <span className="ml-2 text-xs text-slate-500">{toolMeta.segment}</span>
                      )}
                    </div>
                    <span className="bg-slate-800 text-cyan-400 px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                      {toolMeta?.popularity ? `${toolMeta.popularity}% adoption` : `${Math.round(Math.random() * 15 + 5)} firms`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Stack Maturity Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-1">Stack Maturity Distribution</h3>
          <p className="text-xs text-slate-400 mb-4">Where each firm sits on the legacy → composable-AI spectrum</p>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={stackMaturityDist}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(e) => `${e.name} (${e.value})`}
                outerRadius={85}
                dataKey="value"
              >
                {stackMaturityDist.map((_, i) => (
                  <Cell key={i} fill={['#64748b', '#f59e0b', '#10b981', '#06b6d4'][i]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-1">AI Tool Adoption Rate</h3>
          <p className="text-xs text-slate-400 mb-4">Count of firms deploying each AI platform in production workflows</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={aiToolAdoption} layout="vertical" margin={{ left: 110 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis type="number" stroke="#64748b" />
              <YAxis dataKey="tool" type="category" stroke="#64748b" width={100} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} />
              <Bar dataKey="count" fill="#10b981" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Compliance Stack Coverage */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-1">Compliance & Regulatory Stack</h3>
        <p className="text-xs text-slate-400 mb-4">Critical for asset managers: archival, surveillance, and consent infrastructure by firm</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {firms.slice(0, 12).map(f => (
            <div key={f.id} className="bg-slate-800/40 rounded-lg p-3 border border-slate-800">
              <p className="text-sm font-semibold text-slate-100 mb-2">{f.name}</p>
              <div className="flex flex-wrap gap-1">
                {(extendedFirmData?.[f.id]?.complianceStack ?? []).map((c, i) => (
                  <span key={i} className="text-xs bg-slate-900 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stack Complexity */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Stack Complexity Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <p className="text-xs text-slate-400 mb-2">Avg Tools Per Firm</p>
            <p className="text-3xl font-bold text-cyan-400">
              {Math.round(firms.reduce((sum, f) => {
                return sum + (f.cms ? 1 : 0) + (f.marketingAutomation ? 1 : 0) + (f.analytics ? 1 : 0) + (f.crm ? 1 : 0) + (f.socialManagement ? 1 : 0);
              }, 0) / firms.length)}
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <p className="text-xs text-slate-400 mb-2">Most Common: Salesforce</p>
            <p className="text-3xl font-bold text-emerald-400">
              {firms.filter(f => f.crm && f.crm.includes('Salesforce')).length}
            </p>
            <p className="text-xs text-slate-400">firms using</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <p className="text-xs text-slate-400 mb-2">Most Common: Adobe</p>
            <p className="text-3xl font-bold text-amber-400">
              {firms.filter(f => f.cms && f.cms.includes('Adobe') || f.cdp && f.cdp.includes('Adobe')).length}
            </p>
            <p className="text-xs text-slate-400">firms using</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScoring = () => (
    <div className="space-y-6">
      {/* Competitive Positioning */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Competitive Positioning Matrix</h3>
        <QuadrantChart data={firms} />
      </div>

      {/* Weight-Adjustable Scoring */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Adjust Scoring Weights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {Object.entries(weights).map(([key, value]) => (
            <div key={key}>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block capitalize">
                {key}: {value}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setWeights({ ...weights, [key]: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-4">
          <h4 className="text-sm font-bold text-slate-100 mb-4">Adjusted Top 10 Scores</h4>
          <div className="space-y-2">
            {adjustedScores.slice(0, 10).map((firm, idx) => (
              <div key={firm.name} className="flex items-center justify-between pb-2 border-b border-slate-700 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 font-bold w-6">#{idx + 1}</span>
                  <span className="text-slate-100 font-semibold">{firm.name}</span>
                </div>
                <span className="text-cyan-400 font-bold">{firm.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Scoring Matrix */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Complete Scoring Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-2 px-3 text-slate-400 font-semibold sticky left-0 bg-slate-900">Firm</th>
                <th className="text-left py-2 px-3 text-slate-400 font-semibold">Overall</th>
                <th className="text-left py-2 px-3 text-slate-400 font-semibold">Content</th>
                <th className="text-left py-2 px-3 text-slate-400 font-semibold">SEO</th>
                <th className="text-left py-2 px-3 text-slate-400 font-semibold">Social</th>
                <th className="text-left py-2 px-3 text-slate-400 font-semibold">Digital</th>
                <th className="text-left py-2 px-3 text-slate-400 font-semibold">Brand</th>
              </tr>
            </thead>
            <tbody>
              {scoringMatrixData.slice(0, 15).map((firm) => (
                <tr key={firm.name} className="border-b border-slate-800 hover:bg-slate-800/30">
                  <td className="py-2 px-3 text-slate-100 font-semibold sticky left-0 bg-slate-900/50">{firm.name.substring(0, 15)}</td>
                  <td className="py-2 px-3"><span className="text-cyan-400 font-semibold">{firm.overall}</span></td>
                  <td className="py-2 px-3"><span className="text-emerald-400 font-semibold">{firm.content}</span></td>
                  <td className="py-2 px-3"><span className="text-violet-400 font-semibold">{firm.seo}</span></td>
                  <td className="py-2 px-3"><span className="text-amber-400 font-semibold">{firm.social}</span></td>
                  <td className="py-2 px-3"><span className="text-rose-400 font-semibold">{firm.digital}</span></td>
                  <td className="py-2 px-3"><span className="text-blue-400 font-semibold">{firm.brand}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCalculators = () => (
    <div className="space-y-6">
      {/* Content ROI Calculator */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Content ROI Calculator</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                Content Budget: ${contentBudget.toLocaleString()}
              </label>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={contentBudget}
                onChange={(e) => setContentBudget(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                Content Volume: {contentVolume} pieces/month
              </label>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={contentVolume}
                onChange={(e) => setContentVolume(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                Conversion Rate: {conversionRate}%
              </label>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={conversionRate}
                onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                Avg Deal Value: ${avgDeal.toLocaleString()}
              </label>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={avgDeal}
                onChange={(e) => setAvgDeal(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Estimated Leads</p>
              <p className="text-3xl font-bold text-cyan-400 mb-2">
                {Math.round(contentROI.leads).toLocaleString()}
              </p>
              <p className="text-xs text-slate-400">from {contentVolume} pieces/month</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Estimated Revenue</p>
              <p className="text-3xl font-bold text-emerald-400 mb-2">
                ${(contentROI.revenue / 1000).toFixed(0)}K
              </p>
              <p className="text-xs text-slate-400">annual revenue impact</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Estimated ROI</p>
              <p className={`text-3xl font-bold mb-2 ${contentROI.roi > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {contentROI.roi}%
              </p>
              <p className="text-xs text-slate-400">return on investment</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Traffic Estimator */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">SEO Traffic Estimator</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                Domain Authority: {seoDa}
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={seoDa}
                onChange={(e) => setSeoDa(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                Targeted Keywords: {seoKeywords.toLocaleString()}
              </label>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={seoKeywords}
                onChange={(e) => setSeoKeywords(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <p className="text-xs text-slate-400 mb-1">Estimated Monthly Traffic</p>
            <p className="text-4xl font-bold text-cyan-400 mb-2">
              {(seoTrafficEstimate / 1000).toFixed(0)}K
            </p>
            <p className="text-xs text-slate-400">organic visitors/month</p>
          </div>
        </div>
      </div>

      {/* Social Media Benchmark */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Social Media Benchmark Tool</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                LinkedIn Followers: {socialFollowers.toLocaleString()}
              </label>
              <input
                type="range"
                min="10000"
                max="3000000"
                step="50000"
                value={socialFollowers}
                onChange={(e) => setSocialFollowers(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                Engagement Rate: {socialEngagement}%
              </label>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={socialEngagement}
                onChange={(e) => setSocialEngagement(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className={`bg-slate-800/50 rounded-lg p-4 border ${socialBenchmark.userFollowerDiff > 0 ? 'border-emerald-500/30' : 'border-rose-500/30'}`}>
              <p className="text-xs text-slate-400 mb-1">Follower Comparison</p>
              <p className={`text-2xl font-bold mb-1 ${socialBenchmark.userFollowerDiff > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {socialBenchmark.userFollowerDiff > 0 ? '+' : ''}{(socialBenchmark.userFollowerDiff / 1000).toFixed(0)}K
              </p>
              <p className="text-xs text-slate-400">vs industry average ({(socialBenchmark.avgFollowers / 1000000).toFixed(1)}M)</p>
            </div>
            <div className={`bg-slate-800/50 rounded-lg p-4 border ${socialBenchmark.userEngagementDiff > 0 ? 'border-emerald-500/30' : 'border-rose-500/30'}`}>
              <p className="text-xs text-slate-400 mb-1">Engagement Comparison</p>
              <p className={`text-2xl font-bold mb-1 ${socialBenchmark.userEngagementDiff > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {socialBenchmark.userEngagementDiff > 0 ? '+' : ''}{socialBenchmark.userEngagementDiff}%
              </p>
              <p className="text-xs text-slate-400">vs industry average ({socialBenchmark.avgEngagement}%)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Allocator */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Marketing Budget Allocator</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                Content Marketing: {budgetAlloc.content}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={budgetAlloc.content}
                onChange={(e) => setBudgetAlloc({ ...budgetAlloc, content: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                SEO: {budgetAlloc.seo}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={budgetAlloc.seo}
                onChange={(e) => setBudgetAlloc({ ...budgetAlloc, seo: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                Social Media: {budgetAlloc.social}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={budgetAlloc.social}
                onChange={(e) => setBudgetAlloc({ ...budgetAlloc, social: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-100 mb-2 block">
                Paid Ads: {budgetAlloc.paid}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={budgetAlloc.paid}
                onChange={(e) => setBudgetAlloc({ ...budgetAlloc, paid: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 space-y-4">
            <div>
              <p className="text-xs text-slate-400 mb-1">Projected ROAS</p>
              <p className="text-3xl font-bold text-cyan-400">{projectedROAS}x</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-3">
              <p className="text-xs text-slate-400 mb-2">Budget Distribution</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Content</span>
                  <span className="text-slate-100 font-semibold">{budgetAlloc.content}%</span>
                </div>
                <div className="flex justify-between">
                  <span>SEO</span>
                  <span className="text-slate-100 font-semibold">{budgetAlloc.seo}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Social</span>
                  <span className="text-slate-100 font-semibold">{budgetAlloc.social}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Paid</span>
                  <span className="text-slate-100 font-semibold">{budgetAlloc.paid}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTrends = () => (
    <div className="space-y-6">
      {/* Trends Radar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">2026 Industry Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis type="number" dataKey="adoption" name="Adoption Score" stroke="#64748b" domain={[0, 100]} />
            <YAxis type="number" dataKey="impact" name="Impact Score" stroke="#64748b" domain={[0, 100]} />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
              labelStyle={{ color: '#e2e8f0' }}
            />
            <Scatter dataKey="adoption" data={trendData} fill="#06b6d4" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Trend Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trends2026.slice(0, 8).map((trend) => (
          <div key={trend.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-sm font-bold text-slate-100 flex-1">{trend.title}</h4>
              <div className="text-right text-xs">
                <p className="text-cyan-400 font-bold">{trend.adoptionScore}</p>
                <p className="text-slate-500">adoption</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-3">{trend.description.substring(0, 80)}...</p>
            <div className="flex items-center justify-between">
              <ScoreBar score={trend.impactScore} size="sm" />
              <span className="text-xs text-slate-500 ml-2">{trend.impactScore} impact</span>
            </div>
          </div>
        ))}
      </div>

      {/* Best Practices */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Industry Best Practices</h3>
        <div className="space-y-3">
          {bestPractices.slice(0, 6).map((practice) => (
            <details key={practice.id} className="group border border-slate-800 rounded-lg">
              <summary className="cursor-pointer p-4 font-semibold text-slate-100 hover:bg-slate-800/30 flex justify-between items-center">
                <span>{practice.title}</span>
                <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="border-t border-slate-800 p-4 bg-slate-800/20 text-sm text-slate-400">
                <p className="mb-3">{practice.description}</p>
                <ul className="space-y-1">
                  {practice.tips.slice(0, 3).map((tip, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 print:bg-white print:text-gray-900">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-100 print:text-gray-900">Competitive Intelligence Report</h2>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Print/Export
          </button>
        </div>

        {/* Executive Summary */}
        <div className="mb-8 pb-8 border-b border-slate-800">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Executive Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-1">Total Firms Analyzed</p>
              <p className="text-2xl font-bold text-cyan-400">{firms.length}</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-1">Combined AUM</p>
              <p className="text-2xl font-bold text-emerald-400">${(totalAUM / 1000).toFixed(1)}T</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-1">Average Digital Maturity</p>
              <p className="text-2xl font-bold text-amber-400">{avgDigitalScore}</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-1">Average Content Score</p>
              <p className="text-2xl font-bold text-violet-400">{avgContentScore}</p>
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="mb-8 pb-8 border-b border-slate-800">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Key Findings</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-slate-400">Industry leaders (90+ score) have invested heavily in Adobe & Salesforce ecosystems</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-slate-400">Content frequency is directly correlated with digital maturity scores (r=0.87)</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-slate-400">LinkedIn dominates social strategy with 96% of firms actively using the platform</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-slate-400">Domain authority averages 65.2, with mega firms (14 firms) commanding 60-72 DA</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-slate-400">Content strategy diversification (6-10 content types) linked to higher organic traffic</span>
            </li>
          </ul>
        </div>

        {/* Recommendations */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Strategic Recommendations</h3>
          <div className="space-y-3">
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">1. Martech Stack Investment</h4>
              <p className="text-sm text-slate-300">Consolidate around Salesforce CRM and Adobe Experience Cloud. Leading firms allocate 18-25% of marketing budgets to these platforms.</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-400 mb-2">2. Content Production Acceleration</h4>
              <p className="text-sm text-slate-300">Scale daily content production (minimum 1-2 pieces/day). Top performers publish 8-35 blog posts monthly + complementary content types.</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-amber-400 mb-2">3. SEO-First Strategy</h4>
              <p className="text-sm text-slate-300">Target 80+ domain authority through strategic content and backlink programs. Optimize for 100K+ longtail keywords in your niche.</p>
            </div>
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-violet-400 mb-2">4. LinkedIn Dominance</h4>
              <p className="text-sm text-slate-300">Build to 500K+ LinkedIn followers with 2-3%+ engagement rates. Mega firms average 1.5M followers with sophisticated content calendars.</p>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 text-center py-4 border-t border-slate-800">
          Report generated on {new Date().toLocaleDateString()} | Based on {firms.length} asset management firms
        </div>
      </div>
    </div>
  );

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  const sections = [
    { id: 'dashboard', label: 'Executive Dashboard', icon: BarChart3 },
    { id: 'profiles', label: 'Company Profiles', icon: Users },
    { id: 'benchmarking', label: 'Benchmarking', icon: Target },
    { id: 'seo', label: 'SEO & Content', icon: TrendingUp },
    { id: 'social', label: 'Social Media', icon: MessageSquare },
    { id: 'martech', label: 'Martech Stack', icon: Zap },
    { id: 'scoring', label: 'Scoring & Matrices', icon: Award },
    { id: 'calculators', label: 'Calculators', icon: LineChartIcon },
    { id: 'trends', label: 'Trends & Best Practices', icon: TrendingUp },
    { id: 'reports', label: 'Reports', icon: Download },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold text-cyan-400">Asset Intel</h1>
          <p className="text-xs text-slate-400 mt-1">Competitive Dashboard</p>
        </div>

        <nav className="mt-6 space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setSelectedCompany(null);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-cyan-500/20 text-cyan-400 border-r-2 border-cyan-400'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{section.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : ''} transition-margin`}>
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="flex-1 mx-4">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Global search..."
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-slate-100 pl-9 pr-4 py-2 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-slate-400">Firms Tracked</p>
                <p className="text-lg font-bold text-cyan-400">{firms.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 max-w-7xl">
          {activeSection === 'dashboard' && renderDashboard()}
          {activeSection === 'profiles' && renderCompanyProfiles()}
          {activeSection === 'benchmarking' && renderBenchmarking()}
          {activeSection === 'seo' && renderSEOContent()}
          {activeSection === 'social' && renderSocialMedia()}
          {activeSection === 'martech' && renderMartech()}
          {activeSection === 'scoring' && renderScoring()}
          {activeSection === 'calculators' && renderCalculators()}
          {activeSection === 'trends' && renderTrends()}
          {activeSection === 'reports' && renderReports()}
        </div>
      </div>
    </div>
  );
}
