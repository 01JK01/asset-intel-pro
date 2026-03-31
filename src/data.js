/**
 * Asset Management Intelligence Dashboard - Data Module
 * Comprehensive data for 25 major asset management firms
 * Including digital metrics, social presence, content strategy, and martech stacks
 */

// ============================================================================
// FIRMS DATA - 25 Asset Management Firms
// ============================================================================

export const firms = [
  {
    id: 1,
    name: "BlackRock",
    ticker: "BLK",
    hq: "New York, NY",
    founded: 1988,
    aum: 14042,
    aumGrowthYoY: 15.2,
    employees: 25000,
    parentCompany: "Public",
    keyFocus: ["ETFs", "Index", "Active", "Alternatives", "Technology"],
    website: "blackrock.com",

    // Digital metrics
    domainAuthority: 66,
    monthlyTraffic: 2550000,
    organicKeywords: 185000,
    backlinks: 2130000,
    avgSessionDuration: "4:32",
    bounceRate: 38.2,
    pagesPerSession: 4.8,

    // Social
    linkedinFollowers: 2927462,
    twitterFollowers: 1000000,
    youtubeSubscribers: 30800,
    instagramFollowers: 400000,
    linkedinEngagement: 3.2,
    twitterEngagement: 1.8,

    // Content
    contentTypes: ["Blog", "Whitepapers", "Podcasts", "Webinars", "Videos", "Newsletters"],
    contentFrequency: "Daily",
    notableContent: ["The Bid Podcast", "BlackRock Investment Institute", "Weekly Commentary"],
    contentThemes: ["Market Insights", "ETF Education", "Retirement", "Sustainable Investing"],
    blogPostsPerMonth: 25,
    whitepapersPerQuarter: 12,

    // Martech
    cms: "Adobe Experience Manager",
    marketingAutomation: "Marketo",
    analytics: "Google Analytics + Custom",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "Salesforce Marketing Cloud",
    cdp: "Adobe CDP",
    seoTools: "SEMrush, Adobe Analytics",

    // Scores (0-100)
    overallScore: 94,
    contentScore: 96,
    seoScore: 92,
    socialScore: 95,
    digitalMaturity: 97,
    brandAuthority: 98,
    innovationScore: 93,

    // Quadrant positioning
    marketPresence: 98,
    digitalSophistication: 95,

    color: "#000000",
    category: "mega"
  },
  {
    id: 2,
    name: "Vanguard",
    ticker: "VTI",
    hq: "Malvern, PA",
    founded: 1975,
    aum: 11600,
    aumGrowthYoY: 12.8,
    employees: 23000,
    parentCompany: "Mutual (Member-owned)",
    keyFocus: ["Index", "Mutual Funds", "ETFs", "Retirement", "Passive"],
    website: "vanguard.com",

    domainAuthority: 72,
    monthlyTraffic: 3100000,
    organicKeywords: 205000,
    backlinks: 2450000,
    avgSessionDuration: "5:15",
    bounceRate: 35.8,
    pagesPerSession: 5.2,

    linkedinFollowers: 1540000,
    twitterFollowers: 825000,
    youtubeSubscribers: 51200,
    instagramFollowers: 385000,
    linkedinEngagement: 2.8,
    twitterEngagement: 1.5,

    contentTypes: ["Blog", "Videos", "Whitepapers", "Webinars", "Newsletters", "Research"],
    contentFrequency: "Daily",
    notableContent: ["Vanguard Research", "Market Insights", "Investor Education Series"],
    contentThemes: ["Long-term Investing", "Diversification", "Retirement Planning", "Cost Reduction"],
    blogPostsPerMonth: 30,
    whiteapapersPerQuarter: 10,

    cms: "Adobe Experience Manager",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics + Custom",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "SEMrush",

    overallScore: 92,
    contentScore: 94,
    seoScore: 94,
    socialScore: 90,
    digitalMaturity: 96,
    brandAuthority: 97,
    innovationScore: 88,

    marketPresence: 97,
    digitalSophistication: 94,

    color: "#8B2131",
    category: "mega"
  },
  {
    id: 3,
    name: "Fidelity Investments",
    ticker: "FDX",
    hq: "Boston, MA",
    founded: 1946,
    aum: 18000,
    aumGrowthYoY: 10.5,
    employees: 35000,
    parentCompany: "Private",
    keyFocus: ["Active", "Index", "Retirement", "Brokerage", "Wealth Management"],
    website: "fidelity.com",

    domainAuthority: 70,
    monthlyTraffic: 2800000,
    organicKeywords: 195000,
    backlinks: 2080000,
    avgSessionDuration: "6:10",
    bounceRate: 32.5,
    pagesPerSession: 6.1,

    linkedinFollowers: 1190000,
    twitterFollowers: 950000,
    youtubeSubscribers: 48500,
    instagramFollowers: 320000,
    linkedinEngagement: 3.4,
    twitterEngagement: 2.1,

    contentTypes: ["Blog", "Videos", "Webinars", "Newsletters", "Mobile Apps", "Guides"],
    contentFrequency: "Daily",
    notableContent: ["Fidelity Research", "Investor Alerts", "Planning & Analysis"],
    contentThemes: ["Financial Planning", "Investment Strategy", "Retirement", "Trading Education"],
    blogPostsPerMonth: 35,
    whiteapapersPerQuarter: 14,

    cms: "Custom Built",
    marketingAutomation: "Marketo",
    analytics: "Google Analytics + Adobe Analytics",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "Custom",
    cdp: "Adobe CDP",
    seoTools: "SEMrush, Screaming Frog",

    overallScore: 93,
    contentScore: 95,
    seoScore: 91,
    socialScore: 93,
    digitalMaturity: 96,
    brandAuthority: 96,
    innovationScore: 94,

    marketPresence: 96,
    digitalSophistication: 95,

    color: "#4B8B3B",
    category: "mega"
  },
  {
    id: 4,
    name: "State Street Global Advisors",
    ticker: "STT",
    hq: "Boston, MA",
    founded: 1989,
    aum: 5000,
    aumGrowthYoY: 8.2,
    employees: 7500,
    parentCompany: "State Street Corporation (Public)",
    keyFocus: ["ETFs", "Index", "Institutional", "Alternatives", "ESG"],
    website: "ssga.com",

    domainAuthority: 64,
    monthlyTraffic: 820000,
    organicKeywords: 92000,
    backlinks: 845000,
    avgSessionDuration: "4:15",
    bounceRate: 41.2,
    pagesPerSession: 4.3,

    linkedinFollowers: 512000,
    twitterFollowers: 203000,
    youtubeSubscribers: 28500,
    instagramFollowers: 85000,
    linkedinEngagement: 2.9,
    twitterEngagement: 1.2,

    contentTypes: ["Whitepapers", "Blog", "Webinars", "Research", "Videos"],
    contentFrequency: "3x Weekly",
    notableContent: ["Insights", "Thought Leadership", "ETF Research"],
    contentThemes: ["ETF Strategy", "Institutional Investing", "ESG Integration", "Market Analysis"],
    blogPostsPerMonth: 12,
    whiteapapersPerQuarter: 16,

    cms: "Drupal",
    marketingAutomation: "Marketo",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "Marketo",
    cdp: "Tealium",
    seoTools: "SEMrush",

    overallScore: 85,
    contentScore: 88,
    seoScore: 84,
    socialScore: 82,
    digitalMaturity: 88,
    brandAuthority: 90,
    innovationScore: 85,

    marketPresence: 87,
    digitalSophistication: 86,

    color: "#003C71",
    category: "large"
  },
  {
    id: 5,
    name: "Morgan Stanley Investment Management",
    ticker: "MS",
    hq: "New York, NY",
    founded: 1987,
    aum: 1895,
    aumGrowthYoY: 13.7,
    employees: 5200,
    parentCompany: "Morgan Stanley (Public)",
    keyFocus: ["Active", "Alternatives", "Fixed Income", "Equities", "Wealth Management"],
    website: "morganstanley.com/im",

    domainAuthority: 63,
    monthlyTraffic: 1520000,
    organicKeywords: 125000,
    backlinks: 1450000,
    avgSessionDuration: "4:42",
    bounceRate: 39.8,
    pagesPerSession: 4.6,

    linkedinFollowers: 987000,
    twitterFollowers: 485000,
    youtubeSubscribers: 42100,
    instagramFollowers: 175000,
    linkedinEngagement: 3.1,
    twitterEngagement: 1.6,

    contentTypes: ["Blog", "Whitepapers", "Podcasts", "Videos", "Newsletters"],
    contentFrequency: "3x Weekly",
    notableContent: ["Investment Insights", "Thought Leadership", "Market Commentary"],
    contentThemes: ["Asset Allocation", "Alternative Investments", "Wealth Strategy", "Market Outlook"],
    blogPostsPerMonth: 18,
    whiteapapersPerQuarter: 11,

    cms: "Adobe Experience Manager",
    marketingAutomation: "Marketo",
    analytics: "Google Analytics + Custom",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "Salesforce Marketing Cloud",
    cdp: "Adobe CDP",
    seoTools: "SEMrush",

    overallScore: 88,
    contentScore: 89,
    seoScore: 87,
    socialScore: 86,
    digitalMaturity: 90,
    brandAuthority: 93,
    innovationScore: 87,

    marketPresence: 91,
    digitalSophistication: 89,

    color: "#003986",
    category: "large"
  },
  {
    id: 6,
    name: "JPMorgan Asset Management",
    ticker: "JPM",
    hq: "New York, NY",
    founded: 1997,
    aum: 4300,
    aumGrowthYoY: 11.3,
    employees: 6800,
    parentCompany: "JPMorgan Chase (Public)",
    keyFocus: ["Active", "Alternatives", "Fixed Income", "Equities", "Solutions"],
    website: "am.jpmorgan.com",

    domainAuthority: 65,
    monthlyTraffic: 2020000,
    organicKeywords: 145000,
    backlinks: 1650000,
    avgSessionDuration: "4:58",
    bounceRate: 37.5,
    pagesPerSession: 4.9,

    linkedinFollowers: 815000,
    twitterFollowers: 598000,
    youtubeSubscribers: 41200,
    instagramFollowers: 260000,
    linkedinEngagement: 3.3,
    twitterEngagement: 1.9,

    contentTypes: ["Blog", "Whitepapers", "Videos", "Webinars", "Newsletters"],
    contentFrequency: "Daily",
    notableContent: ["Market Insights", "Asset Class Guides", "Investor Commentary"],
    contentThemes: ["Investment Solutions", "Multi-Asset", "Retirement Planning", "Market Trends"],
    blogPostsPerMonth: 22,
    whiteapapersPerQuarter: 13,

    cms: "Adobe Experience Manager",
    marketingAutomation: "Salesforce Marketing Cloud",
    analytics: "Google Analytics + Adobe Analytics",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "Salesforce Marketing Cloud",
    cdp: "Salesforce CDP",
    seoTools: "SEMrush, Screaming Frog",

    overallScore: 89,
    contentScore: 91,
    seoScore: 88,
    socialScore: 88,
    digitalMaturity: 91,
    brandAuthority: 94,
    innovationScore: 89,

    marketPresence: 92,
    digitalSophistication: 90,

    color: "#005EB8",
    category: "large"
  },
  {
    id: 7,
    name: "Goldman Sachs Asset Management",
    ticker: "GS",
    hq: "New York, NY",
    founded: 2000,
    aum: 3610,
    aumGrowthYoY: 9.8,
    employees: 5100,
    parentCompany: "Goldman Sachs Group (Public)",
    keyFocus: ["Active", "Alternatives", "Private Markets", "Solutions", "Wealth"],
    website: "gsam.com",

    domainAuthority: 62,
    monthlyTraffic: 1180000,
    organicKeywords: 98000,
    backlinks: 980000,
    avgSessionDuration: "4:25",
    bounceRate: 42.1,
    pagesPerSession: 4.4,

    linkedinFollowers: 658000,
    twitterFollowers: 512000,
    youtubeSubscribers: 35800,
    instagramFollowers: 195000,
    linkedinEngagement: 3.0,
    twitterEngagement: 1.7,

    contentTypes: ["Blog", "Whitepapers", "Videos", "Podcasts", "Research"],
    contentFrequency: "3x Weekly",
    notableContent: ["Goldman Sachs Research", "Insights", "Market Commentary"],
    contentThemes: ["Investment Strategy", "Alternative Investments", "Private Markets", "Global Trends"],
    blogPostsPerMonth: 16,
    whiteapapersPerQuarter: 15,

    cms: "Adobe Experience Manager",
    marketingAutomation: "Marketo",
    analytics: "Google Analytics + Custom",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "Marketo",
    cdp: "Adobe CDP",
    seoTools: "SEMrush",

    overallScore: 87,
    contentScore: 90,
    seoScore: 85,
    socialScore: 86,
    digitalMaturity: 89,
    brandAuthority: 95,
    innovationScore: 88,

    marketPresence: 92,
    digitalSophistication: 88,

    color: "#6B3FA0",
    category: "large"
  },
  {
    id: 8,
    name: "Capital Group",
    ticker: "CGI",
    hq: "Los Angeles, CA",
    founded: 1931,
    aum: 2300,
    aumGrowthYoY: 7.5,
    employees: 5800,
    parentCompany: "Private",
    keyFocus: ["Active", "Mutual Funds", "Equities", "Fixed Income", "Solutions"],
    website: "capitalgroup.com",

    domainAuthority: 61,
    monthlyTraffic: 925000,
    organicKeywords: 78000,
    backlinks: 752000,
    avgSessionDuration: "4:08",
    bounceRate: 43.5,
    pagesPerSession: 4.2,

    linkedinFollowers: 285000,
    twitterFollowers: 178000,
    youtubeSubscribers: 24500,
    instagramFollowers: 98000,
    linkedinEngagement: 2.5,
    twitterEngagement: 1.1,

    contentTypes: ["Blog", "Videos", "Whitepapers", "Webinars", "Newsletters"],
    contentFrequency: "2x Weekly",
    notableContent: ["Market Perspectives", "Investor Education", "Fund Insights"],
    contentThemes: ["Long-term Investing", "Diversification", "Risk Management", "Financial Planning"],
    blogPostsPerMonth: 14,
    whiteapapersPerQuarter: 9,

    cms: "WordPress",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "SEMrush",

    overallScore: 82,
    contentScore: 85,
    seoScore: 81,
    socialScore: 78,
    digitalMaturity: 84,
    brandAuthority: 91,
    innovationScore: 80,

    marketPresence: 86,
    digitalSophistication: 82,

    color: "#002D72",
    category: "large"
  },
  {
    id: 9,
    name: "PIMCO",
    ticker: "PIMCO",
    hq: "Newport Beach, CA",
    founded: 1971,
    aum: 2090,
    aumGrowthYoY: 6.8,
    employees: 3000,
    parentCompany: "Allianz SE (Public, German)",
    keyFocus: ["Fixed Income", "Multi-Asset", "Alternatives", "Solutions", "ETFs"],
    website: "pimco.com",

    domainAuthority: 60,
    monthlyTraffic: 625000,
    organicKeywords: 68000,
    backlinks: 628000,
    avgSessionDuration: "4:35",
    bounceRate: 40.2,
    pagesPerSession: 4.5,

    linkedinFollowers: 328000,
    twitterFollowers: 256000,
    youtubeSubscribers: 31200,
    instagramFollowers: 125000,
    linkedinEngagement: 2.7,
    twitterEngagement: 1.4,

    contentTypes: ["Blog", "Research", "Whitepapers", "Podcasts", "Videos"],
    contentFrequency: "3x Weekly",
    notableContent: ["PIMCO Blog", "Investment Insights", "Audio Digest"],
    contentThemes: ["Fixed Income Strategy", "Market Commentary", "Bond Markets", "Portfolio Construction"],
    blogPostsPerMonth: 18,
    whiteapapersPerQuarter: 13,

    cms: "Adobe Experience Manager",
    marketingAutomation: "Marketo",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "Marketo",
    cdp: "Tealium",
    seoTools: "SEMrush",

    overallScore: 84,
    contentScore: 87,
    seoScore: 83,
    socialScore: 82,
    digitalMaturity: 86,
    brandAuthority: 92,
    innovationScore: 84,

    marketPresence: 88,
    digitalSophistication: 85,

    color: "#003366",
    category: "large"
  },
  {
    id: 10,
    name: "T. Rowe Price",
    ticker: "TROW",
    hq: "Baltimore, MD",
    founded: 1937,
    aum: 1800,
    aumGrowthYoY: 5.2,
    employees: 4200,
    parentCompany: "Public",
    keyFocus: ["Active", "Mutual Funds", "Equities", "Fixed Income", "Retirement"],
    website: "troweprice.com",

    domainAuthority: 63,
    monthlyTraffic: 512000,
    organicKeywords: 62000,
    backlinks: 598000,
    avgSessionDuration: "4:22",
    bounceRate: 41.8,
    pagesPerSession: 4.3,

    linkedinFollowers: 234000,
    twitterFollowers: 189000,
    youtubeSubscribers: 28900,
    instagramFollowers: 112000,
    linkedinEngagement: 2.4,
    twitterEngagement: 1.2,

    contentTypes: ["Blog", "Videos", "Webinars", "Whitepapers", "Newsletters"],
    contentFrequency: "3x Weekly",
    notableContent: ["Market Insights", "Investor Education", "Financial Planning Guides"],
    contentThemes: ["Retirement Planning", "Investment Strategy", "Market Commentary", "Long-term Investing"],
    blogPostsPerMonth: 15,
    whiteapapersPerQuarter: 8,

    cms: "Adobe Experience Manager",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "SEMrush",

    overallScore: 83,
    contentScore: 85,
    seoScore: 84,
    socialScore: 80,
    digitalMaturity: 85,
    brandAuthority: 90,
    innovationScore: 82,

    marketPresence: 85,
    digitalSophistication: 83,

    color: "#003B5C",
    category: "large"
  },
  {
    id: 11,
    name: "Invesco",
    ticker: "IVZ",
    hq: "Atlanta, GA",
    founded: 1978,
    aum: 2258,
    aumGrowthYoY: 10.1,
    employees: 3500,
    parentCompany: "Public",
    keyFocus: ["ETFs", "Active", "Index", "Alternatives", "Solutions"],
    website: "invesco.com",

    domainAuthority: 62,
    monthlyTraffic: 982000,
    organicKeywords: 88000,
    backlinks: 825000,
    avgSessionDuration: "4:18",
    bounceRate: 42.5,
    pagesPerSession: 4.4,

    linkedinFollowers: 312000,
    twitterFollowers: 245000,
    youtubeSubscribers: 33500,
    instagramFollowers: 145000,
    linkedinEngagement: 2.8,
    twitterEngagement: 1.5,

    contentTypes: ["Blog", "Videos", "Webinars", "Research", "Newsletters"],
    contentFrequency: "Daily",
    notableContent: ["QQQ Blog", "ETF Insights", "Investment Commentary"],
    contentThemes: ["ETF Strategy", "Asset Allocation", "Market Trends", "Retirement Solutions"],
    blogPostsPerMonth: 20,
    whiteapapersPerQuarter: 10,

    cms: "Drupal",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "SEMrush",

    overallScore: 84,
    contentScore: 86,
    seoScore: 85,
    socialScore: 83,
    digitalMaturity: 87,
    brandAuthority: 89,
    innovationScore: 85,

    marketPresence: 87,
    digitalSophistication: 85,

    color: "#003DA5",
    category: "large"
  },
  {
    id: 12,
    name: "Franklin Templeton",
    ticker: "BEN",
    hq: "San Mateo, CA",
    founded: 1947,
    aum: 1680,
    aumGrowthYoY: 8.3,
    employees: 3800,
    parentCompany: "Public",
    keyFocus: ["Active", "Mutual Funds", "ETFs", "Alternatives", "Solutions"],
    website: "franklintempleton.com",

    domainAuthority: 61,
    monthlyTraffic: 735000,
    organicKeywords: 75000,
    backlinks: 685000,
    avgSessionDuration: "4:12",
    bounceRate: 43.2,
    pagesPerSession: 4.3,

    linkedinFollowers: 387000,
    twitterFollowers: 215000,
    youtubeSubscribers: 29800,
    instagramFollowers: 185000,
    linkedinEngagement: 2.6,
    twitterEngagement: 1.3,

    contentTypes: ["Blog", "Videos", "Whitepapers", "Webinars", "Newsletters"],
    contentFrequency: "3x Weekly",
    notableContent: ["Investor Insights", "Market Commentary", "Fund Performance"],
    contentThemes: ["Portfolio Strategy", "Market Analysis", "Fund Selection", "Investment Trends"],
    blogPostsPerMonth: 16,
    whiteapapersPerQuarter: 9,

    cms: "WordPress",
    marketingAutomation: "Marketo",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "Marketo",
    cdp: "Tealium",
    seoTools: "SEMrush",

    overallScore: 82,
    contentScore: 84,
    seoScore: 82,
    socialScore: 81,
    digitalMaturity: 85,
    brandAuthority: 88,
    innovationScore: 81,

    marketPresence: 84,
    digitalSophistication: 83,

    color: "#0B3D91",
    category: "large"
  },
  {
    id: 13,
    name: "Northern Trust Asset Management",
    ticker: "NTRS",
    hq: "Chicago, IL",
    founded: 1947,
    aum: 1800,
    aumGrowthYoY: 6.9,
    employees: 3200,
    parentCompany: "Northern Trust Corp (Public)",
    keyFocus: ["Institutional", "Active", "Index", "Alternatives", "ESG"],
    website: "northerntrust.com",

    domainAuthority: 60,
    monthlyTraffic: 685000,
    organicKeywords: 72000,
    backlinks: 612000,
    avgSessionDuration: "4:28",
    bounceRate: 41.5,
    pagesPerSession: 4.4,

    linkedinFollowers: 451000,
    twitterFollowers: 156000,
    youtubeSubscribers: 22100,
    instagramFollowers: 75000,
    linkedinEngagement: 2.5,
    twitterEngagement: 1.0,

    contentTypes: ["Whitepapers", "Blog", "Research", "Webinars", "Videos"],
    contentFrequency: "2x Weekly",
    notableContent: ["Investment Insights", "Thought Leadership", "Research Reports"],
    contentThemes: ["Institutional Investing", "Asset Management", "ESG Strategy", "Market Analysis"],
    blogPostsPerMonth: 12,
    whiteapapersPerQuarter: 14,

    cms: "Adobe Experience Manager",
    marketingAutomation: "Marketo",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "Marketo",
    cdp: "Tealium",
    seoTools: "SEMrush",

    overallScore: 82,
    contentScore: 84,
    seoScore: 81,
    socialScore: 77,
    digitalMaturity: 84,
    brandAuthority: 89,
    innovationScore: 81,

    marketPresence: 84,
    digitalSophistication: 82,

    color: "#5D4E37",
    category: "large"
  },
  {
    id: 14,
    name: "Wellington Management",
    ticker: "WLMT",
    hq: "Boston, MA",
    founded: 1928,
    aum: 572.56,
    aumGrowthYoY: 4.1,
    employees: 1800,
    parentCompany: "Private",
    keyFocus: ["Active", "Multi-Asset", "Equities", "Fixed Income", "Solutions"],
    website: "wellington.com",

    domainAuthority: 57,
    monthlyTraffic: 428000,
    organicKeywords: 52000,
    backlinks: 385000,
    avgSessionDuration: "4:05",
    bounceRate: 44.2,
    pagesPerSession: 4.2,

    linkedinFollowers: 156000,
    twitterFollowers: 92000,
    youtubeSubscribers: 16800,
    instagramFollowers: 48000,
    linkedinEngagement: 2.2,
    twitterEngagement: 0.9,

    contentTypes: ["Blog", "Whitepapers", "Research", "Webinars", "Videos"],
    contentFrequency: "2x Weekly",
    notableContent: ["Investment Insights", "Market Analysis", "Industry Research"],
    contentThemes: ["Asset Allocation", "Market Strategy", "Portfolio Management", "Investment Philosophy"],
    blogPostsPerMonth: 10,
    whiteapapersPerQuarter: 11,

    cms: "Drupal",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "SEMrush",

    overallScore: 78,
    contentScore: 80,
    seoScore: 77,
    socialScore: 73,
    digitalMaturity: 79,
    brandAuthority: 85,
    innovationScore: 76,

    marketPresence: 78,
    digitalSophistication: 76,

    color: "#00263A",
    category: "mid"
  },
  {
    id: 15,
    name: "Nuveen (TIAA)",
    ticker: "TIAA",
    hq: "Chicago, IL",
    founded: 1927,
    aum: 1400,
    aumGrowthYoY: 11.5,
    employees: 2800,
    parentCompany: "TIAA (Nonprofit)",
    keyFocus: ["Active", "Fixed Income", "Solutions", "Alternatives", "Real Estate"],
    website: "nuveen.com",

    domainAuthority: 58,
    monthlyTraffic: 625000,
    organicKeywords: 61000,
    backlinks: 545000,
    avgSessionDuration: "4:35",
    bounceRate: 40.8,
    pagesPerSession: 4.5,

    linkedinFollowers: 248000,
    twitterFollowers: 128000,
    youtubeSubscribers: 25200,
    instagramFollowers: 92000,
    linkedinEngagement: 2.6,
    twitterEngagement: 1.1,

    contentTypes: ["Blog", "Videos", "Webinars", "Whitepapers", "Newsletters"],
    contentFrequency: "3x Weekly",
    notableContent: ["Investment Insights", "Market Commentary", "Educational Content"],
    contentThemes: ["Retirement Planning", "Income Strategy", "Market Trends", "Asset Allocation"],
    blogPostsPerMonth: 14,
    whiteapapersPerQuarter: 10,

    cms: "WordPress",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "SEMrush",

    overallScore: 81,
    contentScore: 83,
    seoScore: 80,
    socialScore: 79,
    digitalMaturity: 83,
    brandAuthority: 86,
    innovationScore: 80,

    marketPresence: 82,
    digitalSophistication: 81,

    color: "#004C97",
    category: "large"
  },
  {
    id: 16,
    name: "Amundi",
    ticker: "AMUN",
    hq: "Paris, France",
    founded: 2004,
    aum: 2600,
    aumGrowthYoY: 7.3,
    employees: 4600,
    parentCompany: "Crédit Agricole (Public, French)",
    keyFocus: ["Index", "Active", "ETFs", "Alternatives", "Sustainable"],
    website: "amundi.com",

    domainAuthority: 59,
    monthlyTraffic: 545000,
    organicKeywords: 58000,
    backlinks: 512000,
    avgSessionDuration: "4:15",
    bounceRate: 42.5,
    pagesPerSession: 4.3,

    linkedinFollowers: 195000,
    twitterFollowers: 142000,
    youtubeSubscribers: 27500,
    instagramFollowers: 115000,
    linkedinEngagement: 2.4,
    twitterEngagement: 1.2,

    contentTypes: ["Blog", "Whitepapers", "Videos", "Webinars", "Research"],
    contentFrequency: "3x Weekly",
    notableContent: ["Investment Insights", "ESG Research", "Market Commentary"],
    contentThemes: ["Sustainable Investing", "ETF Strategy", "Asset Allocation", "European Markets"],
    blogPostsPerMonth: 13,
    whiteapapersPerQuarter: 12,

    cms: "Adobe Experience Manager",
    marketingAutomation: "Marketo",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "Marketo",
    cdp: "Tealium",
    seoTools: "SEMrush",

    overallScore: 81,
    contentScore: 83,
    seoScore: 80,
    socialScore: 80,
    digitalMaturity: 84,
    brandAuthority: 85,
    innovationScore: 82,

    marketPresence: 83,
    digitalSophistication: 82,

    color: "#1D428A",
    category: "large"
  },
  {
    id: 17,
    name: "BNY Mellon Investment Management",
    ticker: "BK",
    hq: "New York, NY",
    founded: 1995,
    aum: 2100,
    aumGrowthYoY: 5.6,
    employees: 2900,
    parentCompany: "BNY Mellon Corp (Public)",
    keyFocus: ["Institutional", "Active", "Solutions", "Alternatives", "Index"],
    website: "bnymellon.com",

    domainAuthority: 59,
    monthlyTraffic: 525000,
    organicKeywords: 55000,
    backlinks: 485000,
    avgSessionDuration: "4:22",
    bounceRate: 42.1,
    pagesPerSession: 4.3,

    linkedinFollowers: 375000,
    twitterFollowers: 128000,
    youtubeSubscribers: 19500,
    instagramFollowers: 65000,
    linkedinEngagement: 2.3,
    twitterEngagement: 0.9,

    contentTypes: ["Whitepapers", "Blog", "Research", "Videos", "Webinars"],
    contentFrequency: "2x Weekly",
    notableContent: ["Investment Insights", "Market Research", "Thought Leadership"],
    contentThemes: ["Institutional Strategy", "Market Analysis", "Digital Assets", "Investment Solutions"],
    blogPostsPerMonth: 11,
    whiteapapersPerQuarter: 13,

    cms: "Adobe Experience Manager",
    marketingAutomation: "Marketo",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "Marketo",
    cdp: "Tealium",
    seoTools: "SEMrush",

    overallScore: 79,
    contentScore: 81,
    seoScore: 78,
    socialScore: 75,
    digitalMaturity: 81,
    brandAuthority: 87,
    innovationScore: 79,

    marketPresence: 82,
    digitalSophistication: 79,

    color: "#00A3AD",
    category: "large"
  },
  {
    id: 18,
    name: "Schroders",
    ticker: "SDR",
    hq: "London, UK",
    founded: 1804,
    aum: 1040,
    aumGrowthYoY: 3.2,
    employees: 3100,
    parentCompany: "Public",
    keyFocus: ["Active", "Alternatives", "Real Estate", "Equities", "Fixed Income"],
    website: "schroders.com",

    domainAuthority: 58,
    monthlyTraffic: 485000,
    organicKeywords: 52000,
    backlinks: 445000,
    avgSessionDuration: "4:18",
    bounceRate: 43.5,
    pagesPerSession: 4.2,

    linkedinFollowers: 245000,
    twitterFollowers: 156000,
    youtubeSubscribers: 21800,
    instagramFollowers: 85000,
    linkedinEngagement: 2.3,
    twitterEngagement: 1.0,

    contentTypes: ["Blog", "Whitepapers", "Research", "Videos", "Webinars"],
    contentFrequency: "2x Weekly",
    notableContent: ["Investment Insights", "Market Commentary", "Thought Leadership"],
    contentThemes: ["Global Markets", "Alternative Investments", "Sustainable Investing", "Asset Allocation"],
    blogPostsPerMonth: 12,
    whiteapapersPerQuarter: 11,

    cms: "Drupal",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "SEMrush",

    overallScore: 79,
    contentScore: 81,
    seoScore: 78,
    socialScore: 77,
    digitalMaturity: 80,
    brandAuthority: 86,
    innovationScore: 77,

    marketPresence: 80,
    digitalSophistication: 78,

    color: "#00205B",
    category: "mid"
  },
  {
    id: 19,
    name: "abrdn",
    ticker: "ABDN",
    hq: "Edinburgh, Scotland",
    founded: 1883,
    aum: 493,
    aumGrowthYoY: 2.1,
    employees: 2200,
    parentCompany: "Public",
    keyFocus: ["Active", "Real Estate", "Equities", "Fixed Income", "Solutions"],
    website: "abrdn.com",

    domainAuthority: 55,
    monthlyTraffic: 325000,
    organicKeywords: 38000,
    backlinks: 285000,
    avgSessionDuration: "4:05",
    bounceRate: 44.8,
    pagesPerSession: 4.1,

    linkedinFollowers: 187000,
    twitterFollowers: 98000,
    youtubeSubscribers: 16200,
    instagramFollowers: 58000,
    linkedinEngagement: 2.0,
    twitterEngagement: 0.8,

    contentTypes: ["Blog", "Whitepapers", "Videos", "Webinars", "Newsletters"],
    contentFrequency: "2x Weekly",
    notableContent: ["Market Insights", "Investment Commentary", "Educational Guides"],
    contentThemes: ["Investment Strategy", "Real Estate", "Market Analysis", "Retirement Planning"],
    blogPostsPerMonth: 10,
    whiteapapersPerQuarter: 8,

    cms: "WordPress",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "SEMrush",

    overallScore: 75,
    contentScore: 77,
    seoScore: 75,
    socialScore: 72,
    digitalMaturity: 76,
    brandAuthority: 81,
    innovationScore: 73,

    marketPresence: 74,
    digitalSophistication: 74,

    color: "#FF6600",
    category: "mid"
  },
  {
    id: 20,
    name: "MFS Investment Management",
    ticker: "MFSV",
    hq: "Boston, MA",
    founded: 1924,
    aum: 669.8,
    aumGrowthYoY: 6.7,
    employees: 1800,
    parentCompany: "Sun Life Financial (Public, Canadian)",
    keyFocus: ["Active", "Mutual Funds", "Equities", "Fixed Income", "Solutions"],
    website: "mfs.com",

    domainAuthority: 56,
    monthlyTraffic: 328000,
    organicKeywords: 41000,
    backlinks: 298000,
    avgSessionDuration: "4:12",
    bounceRate: 43.5,
    pagesPerSession: 4.2,

    linkedinFollowers: 112000,
    twitterFollowers: 68000,
    youtubeSubscribers: 14900,
    instagramFollowers: 45000,
    linkedinEngagement: 2.1,
    twitterEngagement: 0.8,

    contentTypes: ["Blog", "Videos", "Whitepapers", "Webinars", "Newsletters"],
    contentFrequency: "Weekly",
    notableContent: ["Investment Insights", "Market Commentary", "Fund Analysis"],
    contentThemes: ["Active Investing", "Portfolio Strategy", "Market Trends", "Financial Planning"],
    blogPostsPerMonth: 9,
    whiteapapersPerQuarter: 7,

    cms: "WordPress",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "SEMrush",

    overallScore: 76,
    contentScore: 78,
    seoScore: 76,
    socialScore: 71,
    digitalMaturity: 77,
    brandAuthority: 82,
    innovationScore: 74,

    marketPresence: 75,
    digitalSophistication: 75,

    color: "#00386B",
    category: "mid"
  },
  {
    id: 21,
    name: "Parametric Portfolio Associates",
    ticker: "PRCTC",
    hq: "Seattle, WA",
    founded: 1993,
    aum: 694,
    aumGrowthYoY: 9.2,
    employees: 950,
    parentCompany: "Affiliated with Morningstar",
    keyFocus: ["Active", "Indexes", "Tax-Efficient", "Alternatives", "Solutions"],
    website: "parametric.com",

    domainAuthority: 54,
    monthlyTraffic: 185000,
    organicKeywords: 28000,
    backlinks: 165000,
    avgSessionDuration: "4:08",
    bounceRate: 45.2,
    pagesPerSession: 4.1,

    linkedinFollowers: 68000,
    twitterFollowers: 35000,
    youtubeSubscribers: 8900,
    instagramFollowers: 22000,
    linkedinEngagement: 1.8,
    twitterEngagement: 0.7,

    contentTypes: ["Blog", "Whitepapers", "Videos", "Webinars", "Research"],
    contentFrequency: "Weekly",
    notableContent: ["Market Insights", "Tax Efficiency Guides", "Research Papers"],
    contentThemes: ["Tax Efficiency", "Wealth Management", "Indexing Strategy", "Portfolio Management"],
    blogPostsPerMonth: 8,
    whiteapapersPerQuarter: 9,

    cms: "WordPress",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics",
    crm: "HubSpot",
    socialManagement: "Hootsuite",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "Yoast, SEMrush",

    overallScore: 72,
    contentScore: 74,
    seoScore: 71,
    socialScore: 66,
    digitalMaturity: 73,
    brandAuthority: 78,
    innovationScore: 72,

    marketPresence: 70,
    digitalSophistication: 71,

    color: "#0072CE",
    category: "mid"
  },
  {
    id: 22,
    name: "Eaton Vance",
    ticker: "EVC",
    hq: "Boston, MA",
    founded: 1924,
    aum: 84.9,
    aumGrowthYoY: 2.8,
    employees: 650,
    parentCompany: "Morgan Stanley (Public)",
    keyFocus: ["Active", "Fixed Income", "Equities", "Solutions", "Municipal Bonds"],
    website: "eatonvance.com",

    domainAuthority: 52,
    monthlyTraffic: 142000,
    organicKeywords: 22000,
    backlinks: 128000,
    avgSessionDuration: "3:58",
    bounceRate: 46.5,
    pagesPerSession: 4.0,

    linkedinFollowers: 45000,
    twitterFollowers: 22000,
    youtubeSubscribers: 6800,
    instagramFollowers: 15000,
    linkedinEngagement: 1.6,
    twitterEngagement: 0.6,

    contentTypes: ["Blog", "Whitepapers", "Videos", "Webinars", "Newsletters"],
    contentFrequency: "Weekly",
    notableContent: ["Market Insights", "Fund Updates", "Educational Content"],
    contentThemes: ["Fixed Income", "Municipal Bonds", "Portfolio Management", "Investment Strategy"],
    blogPostsPerMonth: 6,
    whiteapapersPerQuarter: 6,

    cms: "WordPress",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "Yoast",

    overallScore: 68,
    contentScore: 70,
    seoScore: 67,
    socialScore: 62,
    digitalMaturity: 69,
    brandAuthority: 75,
    innovationScore: 66,

    marketPresence: 65,
    digitalSophistication: 66,

    color: "#1B365D",
    category: "boutique"
  },
  {
    id: 23,
    name: "Russell Investments",
    ticker: "RUSOX",
    hq: "Seattle, WA",
    founded: 1969,
    aum: 355,
    aumGrowthYoY: 4.5,
    employees: 1200,
    parentCompany: "TA Associates (Private Equity)",
    keyFocus: ["Index", "Active", "Solutions", "Wealth Management", "Alternatives"],
    website: "russell.com",

    domainAuthority: 55,
    monthlyTraffic: 268000,
    organicKeywords: 35000,
    backlinks: 215000,
    avgSessionDuration: "4:15",
    bounceRate: 44.2,
    pagesPerSession: 4.2,

    linkedinFollowers: 95000,
    twitterFollowers: 52000,
    youtubeSubscribers: 12500,
    instagramFollowers: 38000,
    linkedinEngagement: 2.0,
    twitterEngagement: 0.8,

    contentTypes: ["Blog", "Whitepapers", "Videos", "Webinars", "Research"],
    contentFrequency: "2x Weekly",
    notableContent: ["Investment Insights", "Index Research", "Market Commentary"],
    contentThemes: ["Index Strategy", "Asset Allocation", "Market Research", "Portfolio Construction"],
    blogPostsPerMonth: 11,
    whiteapapersPerQuarter: 8,

    cms: "Drupal",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "SEMrush",

    overallScore: 76,
    contentScore: 78,
    seoScore: 76,
    socialScore: 73,
    digitalMaturity: 77,
    brandAuthority: 81,
    innovationScore: 75,

    marketPresence: 76,
    digitalSophistication: 75,

    color: "#E31837",
    category: "mid"
  },
  {
    id: 24,
    name: "AllianceBernstein",
    ticker: "AB",
    hq: "New York, NY",
    founded: 1966,
    aum: 867,
    aumGrowthYoY: 5.9,
    employees: 1650,
    parentCompany: "Public",
    keyFocus: ["Active", "Equities", "Fixed Income", "Solutions", "Alternatives"],
    website: "alliancebernstein.com",

    domainAuthority: 57,
    monthlyTraffic: 415000,
    organicKeywords: 48000,
    backlinks: 365000,
    avgSessionDuration: "4:22",
    bounceRate: 42.8,
    pagesPerSession: 4.3,

    linkedinFollowers: 168000,
    twitterFollowers: 95000,
    youtubeSubscribers: 18700,
    instagramFollowers: 72000,
    linkedinEngagement: 2.2,
    twitterEngagement: 0.9,

    contentTypes: ["Blog", "Whitepapers", "Videos", "Webinars", "Newsletters"],
    contentFrequency: "2x Weekly",
    notableContent: ["Investment Insights", "Market Commentary", "Research Reports"],
    contentThemes: ["Active Management", "Portfolio Strategy", "Market Analysis", "Investment Trends"],
    blogPostsPerMonth: 12,
    whiteapapersPerQuarter: 9,

    cms: "WordPress",
    marketingAutomation: "Marketo",
    analytics: "Google Analytics",
    crm: "Salesforce",
    socialManagement: "Sprout Social",
    emailPlatform: "Marketo",
    cdp: "Tealium",
    seoTools: "SEMrush",

    overallScore: 78,
    contentScore: 80,
    seoScore: 78,
    socialScore: 76,
    digitalMaturity: 79,
    brandAuthority: 84,
    innovationScore: 77,

    marketPresence: 79,
    digitalSophistication: 77,

    color: "#009CDE",
    category: "mid"
  },
  {
    id: 25,
    name: "Dimensional Fund Advisors",
    ticker: "DFA",
    hq: "Austin, TX",
    founded: 1981,
    aum: 1000,
    aumGrowthYoY: 7.8,
    employees: 1200,
    parentCompany: "Private",
    keyFocus: ["Index", "Factor-Based", "Active", "Alternatives", "Academically-Driven"],
    website: "dimensional.com",

    domainAuthority: 56,
    monthlyTraffic: 325000,
    organicKeywords: 42000,
    backlinks: 285000,
    avgSessionDuration: "4:42",
    bounceRate: 40.5,
    pagesPerSession: 4.5,

    linkedinFollowers: 98000,
    twitterFollowers: 62000,
    youtubeSubscribers: 14200,
    instagramFollowers: 35000,
    linkedinEngagement: 2.3,
    twitterEngagement: 0.9,

    contentTypes: ["Blog", "Whitepapers", "Research", "Videos", "Webinars"],
    contentFrequency: "Weekly",
    notableContent: ["Research Library", "Market Commentary", "Academic Insights"],
    contentThemes: ["Factor Investing", "Research-Driven", "Portfolio Strategy", "Market Efficiency"],
    blogPostsPerMonth: 10,
    whiteapapersPerQuarter: 12,

    cms: "WordPress",
    marketingAutomation: "HubSpot",
    analytics: "Google Analytics + Custom",
    crm: "Salesforce",
    socialManagement: "Hootsuite",
    emailPlatform: "HubSpot",
    cdp: "Segment",
    seoTools: "SEMrush",

    overallScore: 79,
    contentScore: 82,
    seoScore: 79,
    socialScore: 75,
    digitalMaturity: 81,
    brandAuthority: 86,
    innovationScore: 80,

    marketPresence: 80,
    digitalSophistication: 79,

    color: "#003087",
    category: "mid"
  }
];

// ============================================================================
// INDUSTRY BENCHMARKS
// ============================================================================

export const industryBenchmarks = {
  averageAUM: 2847.8,
  medianAUM: 1040,
  averageGrowthYoY: 7.4,
  averageEmployees: 4920,
  averageDomainAuthority: 59.2,
  averageMonthlyTraffic: 833500,
  averageOrganicKeywords: 72400,
  averageBacklinks: 623000,
  averageSessionDuration: "4:22",
  averageBounceRate: 41.8,
  averagePagesPerSession: 4.3,
  averageLinkedInFollowers: 362000,
  averageTwitterFollowers: 213000,
  averageYouTubeSubscribers: 25500,
  averageInstagramFollowers: 128000,
  averageLinkedInEngagement: 2.4,
  averageTwitterEngagement: 1.1,
  averageBlogPostsPerMonth: 14.2,
  averageWhitepapersPerQuarter: 10.3,
  averageContentScore: 84.4,
  averageSEOScore: 81.5,
  averageSocialScore: 79.8,
  averageDigitalMaturity: 84.2,
  averageBrandAuthority: 87.5,
  averageInnovationScore: 81.3,
  averageOverallScore: 82.1,
  categoryDistribution: {
    mega: 3,
    large: 12,
    mid: 8,
    boutique: 2
  }
};

// ============================================================================
// MARTECH CATEGORIES & TOOLS
// ============================================================================

export const martechCategories = [
  {
    id: "cms",
    name: "Content Management System (CMS)",
    tools: [
      { name: "Adobe Experience Manager", popularity: 92, segment: "Enterprise" },
      { name: "WordPress", popularity: 78, segment: "Mid-Market" },
      { name: "Drupal", popularity: 65, segment: "Technical" },
      { name: "HubSpot CMS", popularity: 71, segment: "Integrated" },
      { name: "Custom Built", popularity: 45, segment: "Enterprise" }
    ]
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation",
    tools: [
      { name: "Marketo", popularity: 88, segment: "Enterprise" },
      { name: "HubSpot", popularity: 82, segment: "All-in-One" },
      { name: "Salesforce Marketing Cloud", popularity: 85, segment: "Enterprise" },
      { name: "Pardot", popularity: 68, segment: "Enterprise Salesforce" },
      { name: "ActiveCampaign", popularity: 55, segment: "Mid-Market" }
    ]
  },
  {
    id: "analytics",
    name: "Analytics & Data",
    tools: [
      { name: "Google Analytics", popularity: 98, segment: "Standard" },
      { name: "Adobe Analytics", popularity: 85, segment: "Enterprise" },
      { name: "Mixpanel", popularity: 62, segment: "Product Analytics" },
      { name: "Amplitude", popularity: 58, segment: "Product Analytics" },
      { name: "Custom Solutions", popularity: 48, segment: "Enterprise" }
    ]
  },
  {
    id: "crm",
    name: "Customer Relationship Management",
    tools: [
      { name: "Salesforce", popularity: 95, segment: "Standard" },
      { name: "Microsoft Dynamics 365", popularity: 65, segment: "Enterprise" },
      { name: "HubSpot CRM", popularity: 78, segment: "Mid-Market" },
      { name: "Pipedrive", popularity: 52, segment: "SMB" },
      { name: "Zoho CRM", popularity: 48, segment: "Budget" }
    ]
  },
  {
    id: "social-management",
    name: "Social Media Management",
    tools: [
      { name: "Sprout Social", popularity: 82, segment: "Enterprise" },
      { name: "Hootsuite", popularity: 78, segment: "All-in-One" },
      { name: "Buffer", popularity: 65, segment: "SMB" },
      { name: "Later", popularity: 58, segment: "Visual Content" },
      { name: "Agorapulse", popularity: 52, segment: "Mid-Market" }
    ]
  },
  {
    id: "email",
    name: "Email Marketing Platform",
    tools: [
      { name: "Salesforce Marketing Cloud", popularity: 82, segment: "Enterprise" },
      { name: "Marketo", popularity: 80, segment: "Enterprise" },
      { name: "HubSpot", popularity: 75, segment: "All-in-One" },
      { name: "Klaviyo", popularity: 68, segment: "Ecommerce" },
      { name: "Constant Contact", popularity: 52, segment: "SMB" }
    ]
  },
  {
    id: "cdp",
    name: "Customer Data Platform (CDP)",
    tools: [
      { name: "Adobe CDP", popularity: 78, segment: "Enterprise" },
      { name: "Segment", popularity: 75, segment: "Developer-Friendly" },
      { name: "Tealium", popularity: 70, segment: "Tag Management" },
      { name: "mParticle", popularity: 55, segment: "Mobile-First" },
      { name: "Treasure Data", popularity: 48, segment: "Data-Driven" }
    ]
  },
  {
    id: "seo",
    name: "SEO & Keyword Tools",
    tools: [
      { name: "SEMrush", popularity: 92, segment: "Comprehensive" },
      { name: "Ahrefs", popularity: 88, segment: "Backlink Focus" },
      { name: "Screaming Frog", popularity: 72, segment: "Technical" },
      { name: "Yoast", popularity: 85, segment: "On-Page" },
      { name: "Moz", popularity: 78, segment: "Classic" }
    ]
  }
];

// ============================================================================
// 2026 TRENDS IN ASSET MANAGEMENT MARKETING
// ============================================================================

export const trends2026 = [
  {
    id: "ai-personalization",
    title: "AI-Powered Personalization",
    description: "Machine learning algorithms tailoring investor communications and recommendations in real-time",
    impact: 9,
    adoption: 72,
    category: "Technology",
    icon: "🤖"
  },
  {
    id: "esg-transparency",
    title: "ESG Transparency & Reporting",
    description: "Enhanced disclosure of environmental, social, and governance metrics in marketing and communications",
    impact: 9,
    adoption: 88,
    category: "Compliance",
    icon: "🌍"
  },
  {
    id: "content-diversification",
    title: "Content Diversification Beyond Blog Posts",
    description: "Shift from text-heavy content to podcasts, interactive tools, video series, and AI-generated content variations",
    impact: 8,
    adoption: 81,
    category: "Content",
    icon: "🎬"
  },
  {
    id: "voice-search-optimization",
    title: "Voice Search Optimization",
    description: "Optimizing for conversational queries as voice-activated investment research tools gain adoption",
    impact: 7,
    adoption: 45,
    category: "SEO",
    icon: "🎙️"
  },
  {
    id: "first-party-data",
    title: "First-Party Data Strategy",
    description: "Building owned audiences through email, loyalty programs, and registered user accounts post-cookie deprecation",
    impact: 9,
    adoption: 92,
    category: "Data",
    icon: "📊"
  },
  {
    id: "community-building",
    title: "Community & Creator Platforms",
    description: "Building engaged communities through forums, Discord servers, and creator collaboration programs",
    impact: 8,
    adoption: 58,
    category: "Social",
    icon: "👥"
  },
  {
    id: "microsegmentation",
    title: "Advanced Microsegmentation",
    description: "Hyper-targeted messaging based on investor personas, risk tolerance, and life stage",
    impact: 8,
    adoption: 76,
    category: "Marketing",
    icon: "🎯"
  },
  {
    id: "sustainability-marketing",
    title: "Sustainability & Impact Reporting",
    description: "Transparent communication of firm's own carbon footprint and sustainable practices",
    impact: 8,
    adoption: 68,
    category: "Corporate",
    icon: "♻️"
  },
  {
    id: "video-first-content",
    title: "Video-First Content Strategy",
    description: "Prioritizing short-form and long-form video across platforms (YouTube, TikTok, Instagram Reels)",
    impact: 9,
    adoption: 85,
    category: "Content",
    icon: "📹"
  },
  {
    id: "interactive-tools",
    title: "Interactive Calculators & Tools",
    description: "Web-based tools for retirement planning, asset allocation, and tax optimization",
    impact: 7,
    adoption: 71,
    category: "Digital",
    icon: "🧮"
  },
  {
    id: "omnichannel-integration",
    title: "Seamless Omnichannel Experience",
    description: "Unified experience across web, mobile, email, social, and in-person touchpoints",
    impact: 8,
    adoption: 79,
    category: "Digital",
    icon: "🔄"
  },
  {
    id: "ai-content-generation",
    title: "AI-Assisted Content Creation",
    description: "Using LLMs to generate first drafts, optimize SEO, and personalize at scale",
    impact: 8,
    adoption: 64,
    category: "Content",
    icon: "✍️"
  },
  {
    id: "predictive-analytics",
    title: "Predictive Customer Analytics",
    description: "Using historical data to predict churn, lifetime value, and next best actions",
    impact: 8,
    adoption: 62,
    category: "Data",
    icon: "🔮"
  },
  {
    id: "brand-safety",
    title: "Enhanced Brand Safety & Verification",
    description: "Stricter controls on ad placements and partnering to avoid misinformation and controversies",
    impact: 7,
    adoption: 75,
    category: "Marketing",
    icon: "🛡️"
  },
  {
    id: "retail-engagement",
    title: "Retail Investor Engagement Programs",
    description: "Dedicated marketing efforts to younger, digitally-native retail investors",
    impact: 8,
    adoption: 73,
    category: "Audience",
    icon: "💼"
  }
];

// ============================================================================
// BEST PRACTICES IN ASSET MANAGEMENT MARKETING
// ============================================================================

export const bestPractices = [
  {
    id: "content-pillars",
    category: "Content Strategy",
    title: "Establish Clear Content Pillars",
    description: "Define 3-5 core content themes aligned with firm expertise and investor interests (e.g., ETF Education, ESG, Retirement Planning)",
    tips: [
      "Audit existing content to identify natural clusters",
      "Map pillars to investor journey stages",
      "Create content hub for each pillar",
      "Ensure consistent messaging across channels"
    ],
    metrics: {
      traffic_increase: "25-40%",
      engagement_rate: "3-5%",
      content_efficiency: "30% less duplicated effort"
    }
  },
  {
    id: "seo-keyword-strategy",
    category: "SEO",
    title: "Intent-Driven Keyword Strategy",
    description: "Target keywords mapped to investor search intent: educational, comparison, problem-solving, or action-oriented",
    tips: [
      "Segment keywords by search intent (informational vs. transactional)",
      "Prioritize long-tail keywords with commercial intent",
      "Create pillar pages with comprehensive content clusters",
      "Update legacy content for keyword relevance"
    ],
    metrics: {
      organic_traffic_growth: "40-60%",
      keyword_ranking_improvement: "2-3 position gain",
      conversion_rate: "2-4%"
    }
  },
  {
    id: "email-segmentation",
    category: "Email Marketing",
    title: "Behavioral Email Segmentation",
    description: "Segment email lists by investor profile, asset class interest, engagement level, and lifecycle stage",
    tips: [
      "Create dynamic segments based on website behavior",
      "Develop journey-specific email sequences",
      "Test subject lines and send times by segment",
      "Automate re-engagement campaigns"
    ],
    metrics: {
      open_rate: "25-35%",
      click_rate: "3-6%",
      conversion_rate: "1-3%",
      unsubscribe_rate: "<0.5%"
    }
  },
  {
    id: "social-listening",
    category: "Social Media",
    title: "Social Listening & Rapid Response",
    description: "Monitor brand mentions, industry news, and market events to identify content opportunities and manage reputation",
    tips: [
      "Use social listening tools to track mentions across platforms",
      "Develop rapid-response protocols for market events",
      "Create trending topic calendar aligned with investor interests",
      "Train team on timely, compliant social responses"
    ],
    metrics: {
      response_time: "<4 hours",
      sentiment_score: ">75%",
      engagement_on_trending_content: "2-3x higher"
    }
  },
  {
    id: "video-optimization",
    category: "Video Marketing",
    title: "Video Content for Asset Management",
    description: "Produce short-form and long-form video content optimized for each platform and investor segment",
    tips: [
      "Create fund explainer videos (2-3 minutes)",
      "Produce market commentary series (weekly)",
      "Develop thought leadership interviews (15-30 min)",
      "Optimize for platform: YouTube, LinkedIn, TikTok, Instagram"
    ],
    metrics: {
      youtube_subscribers_growth: "15-25% YoY",
      average_view_duration: ">50% of video length",
      share_rate: "3-5%",
      link_clicks: "5-10%"
    }
  },
  {
    id: "crm-integration",
    category: "Marketing Technology",
    title: "Deep CRM & Marketing Automation Integration",
    description: "Align CRM data with marketing automation to enable personalization, lead scoring, and sales-marketing alignment",
    tips: [
      "Implement lead scoring model",
      "Create marketing-qualified lead (MQL) criteria",
      "Automate lead handoff to sales",
      "Build feedback loop from sales on lead quality"
    ],
    metrics: {
      mql_to_sql_rate: "25-40%",
      sales_follow_up_time: "<24 hours",
      deal_size: "10-15% increase",
      sales_productivity: "20% efficiency gain"
    }
  },
  {
    id: "mobile-optimization",
    category: "Digital Experience",
    title: "Mobile-First Design & Experience",
    description: "Ensure all digital experiences are optimized for mobile devices where majority of traffic originates",
    tips: [
      "Implement responsive design across all properties",
      "Create mobile-specific content experiences",
      "Optimize forms for mobile conversion (2-3 fields max)",
      "Test page speed and Core Web Vitals monthly"
    ],
    metrics: {
      mobile_traffic_percentage: "60-70%",
      mobile_conversion_rate: "1-3%",
      page_load_time: "<2 seconds",
      mobile_bounce_rate: "<45%"
    }
  },
  {
    id: "thought-leadership",
    category: "Content Strategy",
    title: "Executive Thought Leadership Program",
    description: "Establish firm executives as industry experts through speaking engagements, published articles, and media features",
    tips: [
      "Identify top 5-10 executives with thought leadership potential",
      "Create content calendar for speaking engagements",
      "Pitch executives to major publications quarterly",
      "Amplify content across owned channels"
    ],
    metrics: {
      media_mentions: "40-60 per quarter",
      speaking_engagements: "15-25 per year",
      article_publications: "10-15 per year",
      brand_lift: "15-25%"
    }
  },
  {
    id: "conversion-rate-optimization",
    category: "Digital Experience",
    title: "Continuous Conversion Rate Optimization (CRO)",
    description: "Run ongoing A/B tests on website elements to improve conversion rates and user experience",
    tips: [
      "Establish baseline metrics for key pages",
      "Test headlines, CTAs, form fields, imagery",
      "Analyze user behavior with heat maps and session recordings",
      "Prioritize tests by potential impact"
    ],
    metrics: {
      conversion_rate_improvement: "20-40%",
      cost_per_conversion: "-30% reduction",
      average_order_value: "+15% increase",
      landing_page_ctr: "5-12%"
    }
  },
  {
    id: "compliance-messaging",
    category: "Compliance",
    title: "Compliant Marketing Messaging Framework",
    description: "Establish guardrails for consistent, compliant messaging across all marketing channels",
    tips: [
      "Create brand messaging guidelines with compliance input",
      "Develop pre-approved templates for common content types",
      "Implement approval workflows for external content",
      "Train team on regulatory requirements"
    ],
    metrics: {
      content_approval_time: "<5 business days",
      compliance_violations: "0 per quarter",
      team_training_completion: "100%",
      regulatory_citations: "0 in 12 months"
    }
  }
];

// ============================================================================
// CONTENT TYPE PERFORMANCE
// ============================================================================

export const contentTypes = [
  {
    id: "blog-posts",
    name: "Blog Posts",
    averageTraffic: 12500,
    averageEngagement: 3.2,
    avgTimeOnPage: "3:45",
    averageConversionRate: 2.1,
    shareability: 7,
    seoValue: 8,
    productionTime: "4-6 hours",
    bestFor: ["SEO", "Awareness", "Thought Leadership"],
    frequency: "2-3 per week"
  },
  {
    id: "whitepapers",
    name: "Whitepapers & Research Reports",
    averageTraffic: 3200,
    averageEngagement: 2.8,
    avgTimeOnPage: "6:20",
    averageConversionRate: 8.5,
    shareability: 6,
    seoValue: 6,
    productionTime: "40-60 hours",
    bestFor: ["Lead Generation", "Authority", "B2B"],
    frequency: "1 per quarter"
  },
  {
    id: "webinars",
    name: "Webinars & Virtual Events",
    averageTraffic: 450,
    averageEngagement: 4.5,
    avgTimeOnPage: "45:00",
    averageConversionRate: 12.3,
    shareability: 5,
    seoValue: 4,
    productionTime: "20-30 hours",
    bestFor: ["Lead Gen", "Education", "Product Launch"],
    frequency: "2 per month"
  },
  {
    id: "videos",
    name: "Video Content",
    averageTraffic: 8900,
    averageEngagement: 5.2,
    avgTimeOnPage: "4:32",
    averageConversionRate: 3.8,
    shareability: 9,
    seoValue: 7,
    productionTime: "10-20 hours",
    bestFor: ["Social", "Engagement", "Retention"],
    frequency: "2-4 per month"
  },
  {
    id: "podcasts",
    name: "Podcasts & Audio Content",
    averageTraffic: 2100,
    averageEngagement: 5.8,
    avgTimeOnPage: "35:00",
    averageConversionRate: 4.2,
    shareability: 7,
    seoValue: 5,
    productionTime: "8-12 hours",
    bestFor: ["Loyalty", "Authority", "Commute"],
    frequency: "1-2 per month"
  },
  {
    id: "newsletters",
    name: "Email Newsletters",
    averageTraffic: 1850,
    averageEngagement: 3.5,
    avgTimeOnPage: "2:15",
    averageConversionRate: 2.2,
    shareability: 4,
    seoValue: 2,
    productionTime: "3-4 hours",
    bestFor: ["Retention", "Direct Response", "Updates"],
    frequency: "Weekly or Bi-weekly"
  },
  {
    id: "infographics",
    name: "Infographics & Data Visualizations",
    averageTraffic: 4200,
    averageEngagement: 4.1,
    avgTimeOnPage: "2:30",
    averageConversionRate: 1.8,
    shareability: 8,
    seoValue: 5,
    productionTime: "6-10 hours",
    bestFor: ["Social", "Shareability", "Simplification"],
    frequency: "1-2 per month"
  },
  {
    id: "case-studies",
    name: "Case Studies",
    averageTraffic: 2800,
    averageEngagement: 3.6,
    avgTimeOnPage: "5:45",
    averageConversionRate: 7.2,
    shareability: 5,
    seoValue: 6,
    productionTime: "15-25 hours",
    bestFor: ["B2B Sales", "Social Proof", "Conversion"],
    frequency: "1-2 per quarter"
  },
  {
    id: "interactive-tools",
    name: "Interactive Tools & Calculators",
    averageTraffic: 5600,
    averageEngagement: 6.2,
    avgTimeOnPage: "8:15",
    averageConversionRate: 6.8,
    shareability: 6,
    seoValue: 7,
    productionTime: "30-60 hours",
    bestFor: ["Conversion", "Engagement", "Utility"],
    frequency: "1-2 per year"
  },
  {
    id: "ebooks",
    name: "E-books & Guides",
    averageTraffic: 3900,
    averageEngagement: 3.2,
    avgTimeOnPage: "8:30",
    averageConversionRate: 9.1,
    shareability: 5,
    seoValue: 6,
    productionTime: "50-100 hours",
    bestFor: ["Lead Gen", "Authority", "Retention"],
    frequency: "1 per quarter"
  }
];

// ============================================================================
// SEO KEYWORD THEMES FOR ASSET MANAGEMENT
// ============================================================================

export const seoKeywordThemes = [
  {
    id: "etf-investing",
    theme: "ETF Investing & Strategy",
    keywords: [
      "best ETFs 2026",
      "ETF investing for beginners",
      "low-cost ETF comparison",
      "dividend ETF strategy",
      "international ETF allocation",
      "sector rotation ETFs",
      "smart beta ETF",
      "ETF vs mutual funds"
    ],
    searchVolume: 485000,
    competitionLevel: "High",
    opportunityScore: 7,
    contentGap: "How-to guides, beginner resources"
  },
  {
    id: "retirement-planning",
    theme: "Retirement Planning & Income",
    keywords: [
      "retirement planning calculator",
      "how much to save for retirement",
      "4% rule retirement",
      "401k contribution limits 2026",
      "Roth IRA vs traditional IRA",
      "early retirement strategy",
      "retirement withdrawal strategy",
      "retirement income plan"
    ],
    searchVolume: 620000,
    competitionLevel: "High",
    opportunityScore: 8,
    contentGap: "Interactive tools, age-specific guides"
  },
  {
    id: "passive-vs-active",
    theme: "Passive vs. Active Investing",
    keywords: [
      "passive investing vs active",
      "index funds vs active management",
      "cost of active management",
      "active fund performance 2025",
      "why passive investing wins",
      "active fund selection",
      "performance fees worth it",
      "managed vs self-directed"
    ],
    searchVolume: 320000,
    competitionLevel: "Medium",
    opportunityScore: 7,
    contentGap: "Comparison tools, research reports"
  },
  {
    id: "sustainable-investing",
    theme: "Sustainable & ESG Investing",
    keywords: [
      "ESG investing definition",
      "best ESG funds 2026",
      "sustainable investing strategy",
      "environmental impact investing",
      "green bonds",
      "ESG performance analysis",
      "impact investing returns",
      "socially responsible investing"
    ],
    searchVolume: 280000,
    competitionLevel: "Medium",
    opportunityScore: 8,
    contentGap: "Impact metrics, research studies"
  },
  {
    id: "asset-allocation",
    theme: "Asset Allocation & Diversification",
    keywords: [
      "asset allocation strategy",
      "portfolio diversification",
      "60/40 portfolio",
      "age-based asset allocation",
      "optimal portfolio allocation",
      "tactical asset allocation",
      "rebalancing portfolio",
      "modern portfolio theory"
    ],
    searchVolume: 245000,
    competitionLevel: "Medium-High",
    opportunityScore: 7,
    contentGap: "Interactive allocation tools"
  },
  {
    id: "market-analysis",
    theme: "Market Commentary & Analysis",
    keywords: [
      "market outlook 2026",
      "fed interest rate forecast",
      "stock market predictions",
      "economic recession signals",
      "inflation impact on investments",
      "geopolitical market risk",
      "market correction recovery",
      "sector performance analysis"
    ],
    searchVolume: 380000,
    competitionLevel: "High",
    opportunityScore: 6,
    contentGap: "Real-time analysis, data visualizations"
  },
  {
    id: "alternatives",
    theme: "Alternative Investments",
    keywords: [
      "alternative investments explained",
      "private equity investing",
      "hedge fund strategy",
      "real estate investment funds",
      "commodities in portfolio",
      "cryptocurrency and portfolio",
      "fine art investments",
      "infrastructure investments"
    ],
    searchVolume: 185000,
    competitionLevel: "Medium",
    opportunityScore: 6,
    contentGap: "Accessibility guides, minimum investment info"
  },
  {
    id: "investor-education",
    theme: "Investor Education & Fundamentals",
    keywords: [
      "investing for beginners",
      "stock market basics",
      "financial planning 101",
      "types of mutual funds",
      "investment risk tolerance",
      "bonds explained",
      "compound interest calculator",
      "dollar-cost averaging strategy"
    ],
    searchVolume: 720000,
    competitionLevel: "Very High",
    opportunityScore: 5,
    contentGap: "Interactive learning modules, video series"
  },
  {
    id: "wealth-management",
    theme: "Wealth Management & High Net Worth",
    keywords: [
      "wealth management services",
      "high net worth investing",
      "tax-efficient investing",
      "generational wealth planning",
      "family office services",
      "concentrated position strategy",
      "net worth tracking",
      "financial goals planning"
    ],
    searchVolume: 165000,
    competitionLevel: "Medium",
    opportunityScore: 7,
    contentGap: "Case studies, premium content"
  },
  {
    id: "regulatory-compliance",
    theme: "Regulatory Updates & Compliance",
    keywords: [
      "SEC filing requirements",
      "fiduciary responsibility investing",
      "regulatory compliance 2026",
      "investment advisor registration",
      "FINRA compliance",
      "AML requirements investing",
      "GDPR privacy investing",
      "fund prospectus requirements"
    ],
    searchVolume: 95000,
    competitionLevel: "Low-Medium",
    opportunityScore: 6,
    contentGap: "Explainers, regulatory tracking"
  }
];

// ============================================================================
// EXPORT SUMMARY
// ============================================================================

export default {
  firms,
  industryBenchmarks,
  martechCategories,
  trends2026,
  bestPractices,
  contentTypes,
  seoKeywordThemes
};
