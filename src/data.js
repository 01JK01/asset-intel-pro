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


// =============================================================================
// EXTENDED FIRM DATA — v2 (added per multi-expert panel review)
// =============================================================================

export const historicalScores = {
  "1": [
    85.8,
    86.6,
    86.6,
    86.4,
    86.1,
    86.9,
    87.4,
    87.9,
    87.6,
    87.3,
    87.3,
    94
  ],
  "2": [
    89.9,
    90.1,
    89.8,
    90.9,
    91.4,
    92.2,
    92.1,
    92.5,
    93.5,
    94.1,
    94.0,
    92
  ],
  "3": [
    86.8,
    87.2,
    87.6,
    87.7,
    88.7,
    88.9,
    88.9,
    89.3,
    90.1,
    90.0,
    90.1,
    91
  ],
  "4": [
    80.9,
    82.1,
    83.2,
    84.1,
    84.0,
    84.4,
    84.3,
    84.6,
    84.2,
    84.5,
    85.6,
    87
  ],
  "5": [
    82.9,
    83.8,
    84.5,
    85.1,
    86.3,
    86.9,
    86.5,
    87.4,
    87.5,
    88.2,
    89.3,
    88
  ],
  "6": [
    84.0,
    84.9,
    85.2,
    85.3,
    86.2,
    86.1,
    85.8,
    85.7,
    85.8,
    86.8,
    87.9,
    90
  ],
  "7": [
    80.7,
    81.2,
    81.8,
    81.9,
    82.8,
    83.6,
    84.3,
    84.3,
    84.2,
    83.8,
    83.8,
    89
  ],
  "8": [
    79.1,
    78.7,
    79.8,
    80.3,
    80.6,
    81.7,
    81.8,
    82.0,
    83.1,
    84.0,
    84.5,
    85
  ],
  "9": [
    78.7,
    79.6,
    79.5,
    79.6,
    80.1,
    81.2,
    81.7,
    82.7,
    82.9,
    84.0,
    84.0,
    86
  ],
  "10": [
    78.9,
    78.6,
    78.6,
    79.3,
    79.4,
    79.9,
    80.3,
    80.7,
    81.0,
    81.8,
    81.9,
    84
  ],
  "11": [
    77.1,
    77.1,
    77.7,
    78.0,
    78.5,
    78.2,
    79.3,
    79.1,
    79.9,
    80.5,
    80.5,
    82
  ],
  "12": [
    74.3,
    75.2,
    76.4,
    76.7,
    77.0,
    77.1,
    76.8,
    76.7,
    77.0,
    77.3,
    78.0,
    81
  ],
  "13": [
    74.9,
    75.5,
    76.1,
    77.1,
    77.4,
    77.8,
    77.9,
    78.8,
    79.0,
    80.0,
    81.0,
    79
  ],
  "14": [
    78.3,
    78.3,
    78.5,
    79.2,
    79.1,
    79.0,
    79.6,
    79.8,
    80.5,
    80.9,
    81.4,
    83
  ],
  "15": [
    73.4,
    73.4,
    73.3,
    74.4,
    75.5,
    76.6,
    76.7,
    77.7,
    78.6,
    78.9,
    78.6,
    80
  ],
  "16": [
    76.0,
    76.7,
    76.4,
    76.4,
    77.6,
    78.7,
    79.6,
    79.3,
    79.3,
    79.9,
    81.1,
    82
  ],
  "17": [
    74.6,
    74.3,
    75.1,
    76.0,
    76.7,
    77.5,
    78.2,
    78.2,
    78.5,
    78.5,
    78.6,
    81
  ],
  "18": [
    75.2,
    75.5,
    75.4,
    75.5,
    75.6,
    76.7,
    77.3,
    78.3,
    78.1,
    78.9,
    78.6,
    79
  ],
  "19": [
    70.0,
    70.8,
    70.5,
    71.1,
    71.6,
    71.5,
    72.3,
    72.5,
    73.6,
    74.3,
    74.1,
    75
  ],
  "20": [
    72.8,
    73.5,
    73.2,
    73.8,
    74.0,
    74.1,
    74.6,
    74.8,
    74.8,
    75.8,
    76.9,
    78
  ],
  "21": [
    72.2,
    73.3,
    74.5,
    74.8,
    74.9,
    75.1,
    75.5,
    76.7,
    77.6,
    78.5,
    78.3,
    76
  ],
  "22": [
    71.6,
    71.2,
    71.6,
    71.6,
    71.4,
    71.7,
    72.3,
    72.3,
    72.5,
    73.2,
    72.9,
    77
  ],
  "23": [
    69.0,
    69.3,
    70.4,
    70.8,
    71.2,
    72.3,
    72.7,
    73.6,
    74.4,
    74.1,
    74.6,
    74
  ],
  "24": [
    75.2,
    75.3,
    76.3,
    76.7,
    76.5,
    77.5,
    77.8,
    78.8,
    79.1,
    78.9,
    79.6,
    78
  ],
  "25": [
    75.0,
    76.0,
    76.0,
    76.6,
    77.1,
    76.9,
    77.0,
    77.4,
    77.8,
    77.7,
    78.8,
    81
  ]
};

export const extendedFirmData = {
  "1": {
    "emergingPlatforms": {
      "tiktokFollowers": 106480,
      "tiktokVideoViewsMonthly": 390342,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 28003,
      "substackSubscribers": 17242
    },
    "youtubeExtended": {
      "monthlyViews": 1436636,
      "avgViewDurationSec": 306,
      "uploadsPerMonth": 12,
      "clickThroughRate": 3.5
    },
    "postsPerWeek": {
      "linkedin": 16,
      "twitter": 53,
      "youtube": 5,
      "instagram": 1,
      "tiktok": 1,
      "threads": 6
    },
    "executivePresence": {
      "ceoName": "Larry Fink",
      "ceoLinkedinFollowers": 140642,
      "executiveCount": 8,
      "monthlyExecPosts": 46,
      "thoughtLeadershipScore": 90,
      "mediaAppearancesMonthly": 4
    },
    "serpFeatures": {
      "featuredSnippets": 171,
      "paaOwnership": 101,
      "knowledgePanels": 24,
      "aiOverviewCitations": 209,
      "videoCarouselRank": 46
    },
    "aiSearchVisibility": {
      "perplexityCitations": 830,
      "chatgptCitationEstimate": 3346,
      "claudeCitationEstimate": 1725,
      "googleAIOverviewPresencePct": 73,
      "aiVisibilityScore": 84
    },
    "eeat": {
      "authorBiosCount": 77,
      "credentialsCoverage": 91,
      "schemaMarkupScore": 88,
      "complianceDisclosureScore": 90,
      "overallEEATScore": 89
    },
    "contentFunnel": {
      "tofuPct": 33,
      "mofuPct": 37,
      "bofuPct": 30
    },
    "interactiveTools": {
      "count": 11,
      "examples": [
        "College Savings Planner",
        "Retirement Calculator",
        "Fee Comparison Calculator",
        "Factor Analysis Tool",
        "Risk Analyzer",
        "Monte Carlo Simulator"
      ]
    },
    "newsletter": {
      "subscribers": 223222,
      "avgOpenRate": 46.4,
      "frequency": "Daily"
    },
    "aiToolsAdopted": [
      "Glean",
      "Gamma",
      "Midjourney"
    ],
    "complianceStack": [
      "NICE Actimize",
      "Mimecast",
      "Proofpoint Archive"
    ],
    "stackMaturity": "Composable-AI",
    "stackAge": 9,
    "brandedTrafficPct": 33.8,
    "socialShareOfVoice": 7.89,
    "contentRefreshRate": 34.1,
    "avgContentAgeMonths": 2.7
  },
  "2": {
    "emergingPlatforms": {
      "tiktokFollowers": 101169,
      "tiktokVideoViewsMonthly": 391412,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 28757,
      "substackSubscribers": 14263
    },
    "youtubeExtended": {
      "monthlyViews": 1596887,
      "avgViewDurationSec": 114,
      "uploadsPerMonth": 5,
      "clickThroughRate": 2.8
    },
    "postsPerWeek": {
      "linkedin": 13,
      "twitter": 55,
      "youtube": 6,
      "instagram": 9,
      "tiktok": 1,
      "threads": 6
    },
    "executivePresence": {
      "ceoName": "Salim Ramji",
      "ceoLinkedinFollowers": 154317,
      "executiveCount": 10,
      "monthlyExecPosts": 41,
      "thoughtLeadershipScore": 88,
      "mediaAppearancesMonthly": 37
    },
    "serpFeatures": {
      "featuredSnippets": 177,
      "paaOwnership": 85,
      "knowledgePanels": 7,
      "aiOverviewCitations": 253,
      "videoCarouselRank": 50
    },
    "aiSearchVisibility": {
      "perplexityCitations": 744,
      "chatgptCitationEstimate": 3126,
      "claudeCitationEstimate": 1590,
      "googleAIOverviewPresencePct": 64,
      "aiVisibilityScore": 85
    },
    "eeat": {
      "authorBiosCount": 88,
      "credentialsCoverage": 90,
      "schemaMarkupScore": 93,
      "complianceDisclosureScore": 99,
      "overallEEATScore": 86
    },
    "contentFunnel": {
      "tofuPct": 46,
      "mofuPct": 28,
      "bofuPct": 26
    },
    "interactiveTools": {
      "count": 12,
      "examples": [
        "Goal Planner",
        "Retirement Calculator",
        "Fee Comparison Calculator",
        "RMD Calculator",
        "Rebalancing Tool",
        "ESG Rating Tool",
        "Monte Carlo Simulator"
      ]
    },
    "newsletter": {
      "subscribers": 270131,
      "avgOpenRate": 37.6,
      "frequency": "Monthly"
    },
    "aiToolsAdopted": [
      "Jasper"
    ],
    "complianceStack": [
      "Proofpoint Archive",
      "OneTrust",
      "Smarsh",
      "Global Relay"
    ],
    "stackMaturity": "Composable-AI",
    "stackAge": 2,
    "brandedTrafficPct": 28.4,
    "socialShareOfVoice": 9.83,
    "contentRefreshRate": 10.4,
    "avgContentAgeMonths": 11.1
  },
  "3": {
    "emergingPlatforms": {
      "tiktokFollowers": 98143,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 27522,
      "substackSubscribers": 0
    },
    "youtubeExtended": {
      "monthlyViews": 1642388,
      "avgViewDurationSec": 207,
      "uploadsPerMonth": 20,
      "clickThroughRate": 3.2
    },
    "postsPerWeek": {
      "linkedin": 7,
      "twitter": 50,
      "youtube": 0,
      "instagram": 3,
      "tiktok": 1,
      "threads": 0
    },
    "executivePresence": {
      "ceoName": "Abigail Johnson",
      "ceoLinkedinFollowers": 177262,
      "executiveCount": 4,
      "monthlyExecPosts": 40,
      "thoughtLeadershipScore": 86,
      "mediaAppearancesMonthly": 19
    },
    "serpFeatures": {
      "featuredSnippets": 168,
      "paaOwnership": 91,
      "knowledgePanels": 8,
      "aiOverviewCitations": 256,
      "videoCarouselRank": 55
    },
    "aiSearchVisibility": {
      "perplexityCitations": 818,
      "chatgptCitationEstimate": 2768,
      "claudeCitationEstimate": 1785,
      "googleAIOverviewPresencePct": 63,
      "aiVisibilityScore": 85
    },
    "eeat": {
      "authorBiosCount": 79,
      "credentialsCoverage": 94,
      "schemaMarkupScore": 87,
      "complianceDisclosureScore": 92,
      "overallEEATScore": 89
    },
    "contentFunnel": {
      "tofuPct": 44,
      "mofuPct": 26,
      "bofuPct": 30
    },
    "interactiveTools": {
      "count": 6,
      "examples": [
        "RMD Calculator",
        "College Savings Planner",
        "Fee Comparison Calculator"
      ]
    },
    "newsletter": {
      "subscribers": 261642,
      "avgOpenRate": 24.8,
      "frequency": "Weekly"
    },
    "aiToolsAdopted": [
      "Glean",
      "Custom LLMs",
      "Writer.com",
      "GitHub Copilot"
    ],
    "complianceStack": [
      "Proofpoint Archive",
      "NICE Actimize",
      "OneTrust"
    ],
    "stackMaturity": "Composable-AI",
    "stackAge": 2,
    "brandedTrafficPct": 42.7,
    "socialShareOfVoice": 14.34,
    "contentRefreshRate": 26.7,
    "avgContentAgeMonths": 2.6
  },
  "4": {
    "emergingPlatforms": {
      "tiktokFollowers": 64122,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 6.5,
      "threadsFollowers": 19826,
      "substackSubscribers": 9322
    },
    "youtubeExtended": {
      "monthlyViews": 976572,
      "avgViewDurationSec": 119,
      "uploadsPerMonth": 20,
      "clickThroughRate": 6.0
    },
    "postsPerWeek": {
      "linkedin": 6,
      "twitter": 52,
      "youtube": 5,
      "instagram": 0,
      "tiktok": 0,
      "threads": 9
    },
    "executivePresence": {
      "ceoName": "Yie-Hsin Hung",
      "ceoLinkedinFollowers": 103275,
      "executiveCount": 11,
      "monthlyExecPosts": 18,
      "thoughtLeadershipScore": 79,
      "mediaAppearancesMonthly": 34
    },
    "serpFeatures": {
      "featuredSnippets": 90,
      "paaOwnership": 58,
      "knowledgePanels": 4,
      "aiOverviewCitations": 164,
      "videoCarouselRank": 29
    },
    "aiSearchVisibility": {
      "perplexityCitations": 460,
      "chatgptCitationEstimate": 2178,
      "claudeCitationEstimate": 1080,
      "googleAIOverviewPresencePct": 71,
      "aiVisibilityScore": 77
    },
    "eeat": {
      "authorBiosCount": 57,
      "credentialsCoverage": 87,
      "schemaMarkupScore": 80,
      "complianceDisclosureScore": 85,
      "overallEEATScore": 89
    },
    "contentFunnel": {
      "tofuPct": 52,
      "mofuPct": 35,
      "bofuPct": 13
    },
    "interactiveTools": {
      "count": 10,
      "examples": [
        "RMD Calculator",
        "Retirement Calculator",
        "Monte Carlo Simulator",
        "Factor Analysis Tool",
        "Asset Allocation Tool"
      ]
    },
    "newsletter": {
      "subscribers": 153998,
      "avgOpenRate": 46.2,
      "frequency": "Daily"
    },
    "aiToolsAdopted": [
      "Custom LLMs"
    ],
    "complianceStack": [
      "Global Relay",
      "Osano"
    ],
    "stackMaturity": "Modern",
    "stackAge": 5,
    "brandedTrafficPct": 30.3,
    "socialShareOfVoice": 5.32,
    "contentRefreshRate": 10.3,
    "avgContentAgeMonths": 4.9
  },
  "5": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 11180,
      "substackSubscribers": 6817
    },
    "youtubeExtended": {
      "monthlyViews": 583090,
      "avgViewDurationSec": 414,
      "uploadsPerMonth": 10,
      "clickThroughRate": 4.8
    },
    "postsPerWeek": {
      "linkedin": 19,
      "twitter": 59,
      "youtube": 0,
      "instagram": 1,
      "tiktok": 10,
      "threads": 6
    },
    "executivePresence": {
      "ceoName": "Dan Simkowitz",
      "ceoLinkedinFollowers": 70323,
      "executiveCount": 3,
      "monthlyExecPosts": 8,
      "thoughtLeadershipScore": 85,
      "mediaAppearancesMonthly": 10
    },
    "serpFeatures": {
      "featuredSnippets": 66,
      "paaOwnership": 37,
      "knowledgePanels": 28,
      "aiOverviewCitations": 97,
      "videoCarouselRank": 19
    },
    "aiSearchVisibility": {
      "perplexityCitations": 272,
      "chatgptCitationEstimate": 1047,
      "claudeCitationEstimate": 802,
      "googleAIOverviewPresencePct": 69,
      "aiVisibilityScore": 77
    },
    "eeat": {
      "authorBiosCount": 39,
      "credentialsCoverage": 82,
      "schemaMarkupScore": 86,
      "complianceDisclosureScore": 85,
      "overallEEATScore": 80
    },
    "contentFunnel": {
      "tofuPct": 39,
      "mofuPct": 36,
      "bofuPct": 25
    },
    "interactiveTools": {
      "count": 4,
      "examples": [
        "Goal Planner",
        "Monte Carlo Simulator",
        "Risk Analyzer",
        "Rebalancing Tool",
        "Portfolio Builder"
      ]
    },
    "newsletter": {
      "subscribers": 91785,
      "avgOpenRate": 36.6,
      "frequency": "Monthly"
    },
    "aiToolsAdopted": [
      "Midjourney",
      "Writer.com",
      "Perplexity Enterprise"
    ],
    "complianceStack": [
      "Smarsh",
      "Hearsay",
      "Theta Lake",
      "Mimecast",
      "OneTrust"
    ],
    "stackMaturity": "Modern",
    "stackAge": 4,
    "brandedTrafficPct": 35.7,
    "socialShareOfVoice": 5.38,
    "contentRefreshRate": 11.7,
    "avgContentAgeMonths": 12.5
  },
  "6": {
    "emergingPlatforms": {
      "tiktokFollowers": 63043,
      "tiktokVideoViewsMonthly": 262824,
      "tiktokEngagementRate": 3.0,
      "threadsFollowers": 22251,
      "substackSubscribers": 0
    },
    "youtubeExtended": {
      "monthlyViews": 1184310,
      "avgViewDurationSec": 225,
      "uploadsPerMonth": 3,
      "clickThroughRate": 2.6
    },
    "postsPerWeek": {
      "linkedin": 30,
      "twitter": 27,
      "youtube": 5,
      "instagram": 6,
      "tiktok": 9,
      "threads": 8
    },
    "executivePresence": {
      "ceoName": "George Gatch",
      "ceoLinkedinFollowers": 92008,
      "executiveCount": 12,
      "monthlyExecPosts": 20,
      "thoughtLeadershipScore": 86,
      "mediaAppearancesMonthly": 4
    },
    "serpFeatures": {
      "featuredSnippets": 110,
      "paaOwnership": 55,
      "knowledgePanels": 34,
      "aiOverviewCitations": 164,
      "videoCarouselRank": 36
    },
    "aiSearchVisibility": {
      "perplexityCitations": 556,
      "chatgptCitationEstimate": 1772,
      "claudeCitationEstimate": 1145,
      "googleAIOverviewPresencePct": 65,
      "aiVisibilityScore": 88
    },
    "eeat": {
      "authorBiosCount": 61,
      "credentialsCoverage": 83,
      "schemaMarkupScore": 84,
      "complianceDisclosureScore": 93,
      "overallEEATScore": 86
    },
    "contentFunnel": {
      "tofuPct": 51,
      "mofuPct": 38,
      "bofuPct": 11
    },
    "interactiveTools": {
      "count": 13,
      "examples": [
        "Tax-Loss Harvester",
        "ESG Rating Tool",
        "Retirement Calculator",
        "Risk Analyzer",
        "Goal Planner",
        "Monte Carlo Simulator"
      ]
    },
    "newsletter": {
      "subscribers": 176609,
      "avgOpenRate": 39.6,
      "frequency": "Weekly"
    },
    "aiToolsAdopted": [
      "GitHub Copilot",
      "Glean",
      "ChatGPT Enterprise",
      "Claude for Business",
      "Runway"
    ],
    "complianceStack": [
      "Mimecast",
      "Theta Lake",
      "NICE Actimize"
    ],
    "stackMaturity": "Composable-AI",
    "stackAge": 4,
    "brandedTrafficPct": 45.4,
    "socialShareOfVoice": 8.79,
    "contentRefreshRate": 40.6,
    "avgContentAgeMonths": 10.8
  },
  "7": {
    "emergingPlatforms": {
      "tiktokFollowers": 56670,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 3.3,
      "threadsFollowers": 20648,
      "substackSubscribers": 0
    },
    "youtubeExtended": {
      "monthlyViews": 960123,
      "avgViewDurationSec": 92,
      "uploadsPerMonth": 5,
      "clickThroughRate": 6.3
    },
    "postsPerWeek": {
      "linkedin": 17,
      "twitter": 16,
      "youtube": 8,
      "instagram": 7,
      "tiktok": 0,
      "threads": 8
    },
    "executivePresence": {
      "ceoName": "Marc Nachmann",
      "ceoLinkedinFollowers": 96174,
      "executiveCount": 4,
      "monthlyExecPosts": 37,
      "thoughtLeadershipScore": 83,
      "mediaAppearancesMonthly": 31
    },
    "serpFeatures": {
      "featuredSnippets": 109,
      "paaOwnership": 74,
      "knowledgePanels": 20,
      "aiOverviewCitations": 177,
      "videoCarouselRank": 36
    },
    "aiSearchVisibility": {
      "perplexityCitations": 537,
      "chatgptCitationEstimate": 2078,
      "claudeCitationEstimate": 1171,
      "googleAIOverviewPresencePct": 60,
      "aiVisibilityScore": 82
    },
    "eeat": {
      "authorBiosCount": 62,
      "credentialsCoverage": 94,
      "schemaMarkupScore": 88,
      "complianceDisclosureScore": 88,
      "overallEEATScore": 93
    },
    "contentFunnel": {
      "tofuPct": 37,
      "mofuPct": 33,
      "bofuPct": 30
    },
    "interactiveTools": {
      "count": 19,
      "examples": [
        "Market Outlook Dashboard",
        "Asset Allocation Tool",
        "Income Estimator",
        "Portfolio Builder",
        "College Savings Planner",
        "Rebalancing Tool"
      ]
    },
    "newsletter": {
      "subscribers": 143574,
      "avgOpenRate": 30.7,
      "frequency": "Daily"
    },
    "aiToolsAdopted": [
      "Writer.com",
      "Midjourney",
      "GitHub Copilot"
    ],
    "complianceStack": [
      "OneTrust",
      "Global Relay",
      "Mimecast"
    ],
    "stackMaturity": "Composable-AI",
    "stackAge": 9,
    "brandedTrafficPct": 43.6,
    "socialShareOfVoice": 3.09,
    "contentRefreshRate": 36.3,
    "avgContentAgeMonths": 6.7
  },
  "8": {
    "emergingPlatforms": {
      "tiktokFollowers": 72757,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 19416,
      "substackSubscribers": 0
    },
    "youtubeExtended": {
      "monthlyViews": 1092688,
      "avgViewDurationSec": 297,
      "uploadsPerMonth": 25,
      "clickThroughRate": 2.9
    },
    "postsPerWeek": {
      "linkedin": 32,
      "twitter": 13,
      "youtube": 8,
      "instagram": 0,
      "tiktok": 6,
      "threads": 9
    },
    "executivePresence": {
      "ceoName": "Mike Gitlin",
      "ceoLinkedinFollowers": 106009,
      "executiveCount": 3,
      "monthlyExecPosts": 13,
      "thoughtLeadershipScore": 87,
      "mediaAppearancesMonthly": 29
    },
    "serpFeatures": {
      "featuredSnippets": 92,
      "paaOwnership": 64,
      "knowledgePanels": 3,
      "aiOverviewCitations": 144,
      "videoCarouselRank": 30
    },
    "aiSearchVisibility": {
      "perplexityCitations": 512,
      "chatgptCitationEstimate": 1854,
      "claudeCitationEstimate": 1303,
      "googleAIOverviewPresencePct": 62,
      "aiVisibilityScore": 86
    },
    "eeat": {
      "authorBiosCount": 54,
      "credentialsCoverage": 77,
      "schemaMarkupScore": 85,
      "complianceDisclosureScore": 80,
      "overallEEATScore": 88
    },
    "contentFunnel": {
      "tofuPct": 47,
      "mofuPct": 26,
      "bofuPct": 27
    },
    "interactiveTools": {
      "count": 14,
      "examples": [
        "Retirement Calculator",
        "RMD Calculator",
        "Monte Carlo Simulator",
        "ETF Screener"
      ]
    },
    "newsletter": {
      "subscribers": 167898,
      "avgOpenRate": 46.7,
      "frequency": "Weekly"
    },
    "aiToolsAdopted": [
      "Tome"
    ],
    "complianceStack": [
      "OneTrust",
      "Hearsay",
      "NICE Actimize"
    ],
    "stackMaturity": "Composable-AI",
    "stackAge": 4,
    "brandedTrafficPct": 43.6,
    "socialShareOfVoice": 4.6,
    "contentRefreshRate": 20.5,
    "avgContentAgeMonths": 9.3
  },
  "9": {
    "emergingPlatforms": {
      "tiktokFollowers": 36914,
      "tiktokVideoViewsMonthly": 150475,
      "tiktokEngagementRate": 5.7,
      "threadsFollowers": 13066,
      "substackSubscribers": 5518
    },
    "youtubeExtended": {
      "monthlyViews": 646287,
      "avgViewDurationSec": 279,
      "uploadsPerMonth": 4,
      "clickThroughRate": 4.8
    },
    "postsPerWeek": {
      "linkedin": 24,
      "twitter": 5,
      "youtube": 6,
      "instagram": 7,
      "tiktok": 1,
      "threads": 6
    },
    "executivePresence": {
      "ceoName": "Emmanuel Roman",
      "ceoLinkedinFollowers": 72847,
      "executiveCount": 13,
      "monthlyExecPosts": 37,
      "thoughtLeadershipScore": 89,
      "mediaAppearancesMonthly": 11
    },
    "serpFeatures": {
      "featuredSnippets": 62,
      "paaOwnership": 42,
      "knowledgePanels": 17,
      "aiOverviewCitations": 99,
      "videoCarouselRank": 22
    },
    "aiSearchVisibility": {
      "perplexityCitations": 346,
      "chatgptCitationEstimate": 1187,
      "claudeCitationEstimate": 790,
      "googleAIOverviewPresencePct": 63,
      "aiVisibilityScore": 84
    },
    "eeat": {
      "authorBiosCount": 39,
      "credentialsCoverage": 78,
      "schemaMarkupScore": 79,
      "complianceDisclosureScore": 88,
      "overallEEATScore": 81
    },
    "contentFunnel": {
      "tofuPct": 54,
      "mofuPct": 39,
      "bofuPct": 7
    },
    "interactiveTools": {
      "count": 21,
      "examples": [
        "RMD Calculator",
        "Fee Comparison Calculator",
        "ETF Screener",
        "Market Outlook Dashboard",
        "Rebalancing Tool",
        "Retirement Calculator",
        "Income Estimator"
      ]
    },
    "newsletter": {
      "subscribers": 87709,
      "avgOpenRate": 42.7,
      "frequency": "Bi-weekly"
    },
    "aiToolsAdopted": [
      "Tome",
      "Gamma",
      "Claude for Business",
      "Glean",
      "ChatGPT Enterprise"
    ],
    "complianceStack": [
      "Global Relay",
      "OneTrust",
      "Mimecast"
    ],
    "stackMaturity": "Modern",
    "stackAge": 8,
    "brandedTrafficPct": 47.2,
    "socialShareOfVoice": 2.75,
    "contentRefreshRate": 24.2,
    "avgContentAgeMonths": 10.5
  },
  "10": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 10893,
      "substackSubscribers": 0
    },
    "youtubeExtended": {
      "monthlyViews": 646885,
      "avgViewDurationSec": 184,
      "uploadsPerMonth": 8,
      "clickThroughRate": 3.2
    },
    "postsPerWeek": {
      "linkedin": 33,
      "twitter": 22,
      "youtube": 8,
      "instagram": 9,
      "tiktok": 4,
      "threads": 1
    },
    "executivePresence": {
      "ceoName": "Rob Sharps",
      "ceoLinkedinFollowers": 70386,
      "executiveCount": 7,
      "monthlyExecPosts": 22,
      "thoughtLeadershipScore": 81,
      "mediaAppearancesMonthly": 13
    },
    "serpFeatures": {
      "featuredSnippets": 60,
      "paaOwnership": 42,
      "knowledgePanels": 8,
      "aiOverviewCitations": 89,
      "videoCarouselRank": 22
    },
    "aiSearchVisibility": {
      "perplexityCitations": 325,
      "chatgptCitationEstimate": 1271,
      "claudeCitationEstimate": 639,
      "googleAIOverviewPresencePct": 54,
      "aiVisibilityScore": 75
    },
    "eeat": {
      "authorBiosCount": 40,
      "credentialsCoverage": 83,
      "schemaMarkupScore": 84,
      "complianceDisclosureScore": 86,
      "overallEEATScore": 83
    },
    "contentFunnel": {
      "tofuPct": 40,
      "mofuPct": 30,
      "bofuPct": 30
    },
    "interactiveTools": {
      "count": 4,
      "examples": [
        "Income Estimator",
        "Portfolio Builder",
        "Factor Analysis Tool",
        "Rebalancing Tool",
        "Goal Planner"
      ]
    },
    "newsletter": {
      "subscribers": 95762,
      "avgOpenRate": 37.0,
      "frequency": "Daily"
    },
    "aiToolsAdopted": [
      "Writer.com",
      "Perplexity Enterprise",
      "Tome"
    ],
    "complianceStack": [
      "Global Relay",
      "OneTrust",
      "Ketch",
      "Proofpoint Archive"
    ],
    "stackMaturity": "Modern",
    "stackAge": 7,
    "brandedTrafficPct": 49.3,
    "socialShareOfVoice": 5.4,
    "contentRefreshRate": 15.7,
    "avgContentAgeMonths": 8.3
  },
  "11": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 11670,
      "substackSubscribers": 6342
    },
    "youtubeExtended": {
      "monthlyViews": 550266,
      "avgViewDurationSec": 237,
      "uploadsPerMonth": 24,
      "clickThroughRate": 3.6
    },
    "postsPerWeek": {
      "linkedin": 32,
      "twitter": 9,
      "youtube": 3,
      "instagram": 4,
      "tiktok": 12,
      "threads": 10
    },
    "executivePresence": {
      "ceoName": "Andrew Schlossberg",
      "ceoLinkedinFollowers": 65723,
      "executiveCount": 15,
      "monthlyExecPosts": 20,
      "thoughtLeadershipScore": 80,
      "mediaAppearancesMonthly": 9
    },
    "serpFeatures": {
      "featuredSnippets": 64,
      "paaOwnership": 41,
      "knowledgePanels": 17,
      "aiOverviewCitations": 105,
      "videoCarouselRank": 17
    },
    "aiSearchVisibility": {
      "perplexityCitations": 287,
      "chatgptCitationEstimate": 1130,
      "claudeCitationEstimate": 773,
      "googleAIOverviewPresencePct": 58,
      "aiVisibilityScore": 84
    },
    "eeat": {
      "authorBiosCount": 31,
      "credentialsCoverage": 81,
      "schemaMarkupScore": 79,
      "complianceDisclosureScore": 81,
      "overallEEATScore": 82
    },
    "contentFunnel": {
      "tofuPct": 47,
      "mofuPct": 40,
      "bofuPct": 13
    },
    "interactiveTools": {
      "count": 17,
      "examples": [
        "Portfolio Builder",
        "Rebalancing Tool",
        "Goal Planner"
      ]
    },
    "newsletter": {
      "subscribers": 102754,
      "avgOpenRate": 37.7,
      "frequency": "Daily"
    },
    "aiToolsAdopted": [
      "Midjourney",
      "Runway"
    ],
    "complianceStack": [
      "Proofpoint Archive",
      "Smarsh"
    ],
    "stackMaturity": "Modern",
    "stackAge": 3,
    "brandedTrafficPct": 43.8,
    "socialShareOfVoice": 4.73,
    "contentRefreshRate": 39.1,
    "avgContentAgeMonths": 4.2
  },
  "12": {
    "emergingPlatforms": {
      "tiktokFollowers": 34440,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 10617,
      "substackSubscribers": 7100
    },
    "youtubeExtended": {
      "monthlyViews": 702386,
      "avgViewDurationSec": 90,
      "uploadsPerMonth": 23,
      "clickThroughRate": 6.8
    },
    "postsPerWeek": {
      "linkedin": 32,
      "twitter": 31,
      "youtube": 0,
      "instagram": 3,
      "tiktok": 8,
      "threads": 5
    },
    "executivePresence": {
      "ceoName": "Jenny Johnson",
      "ceoLinkedinFollowers": 66354,
      "executiveCount": 10,
      "monthlyExecPosts": 48,
      "thoughtLeadershipScore": 80,
      "mediaAppearancesMonthly": 5
    },
    "serpFeatures": {
      "featuredSnippets": 58,
      "paaOwnership": 40,
      "knowledgePanels": 18,
      "aiOverviewCitations": 94,
      "videoCarouselRank": 21
    },
    "aiSearchVisibility": {
      "perplexityCitations": 283,
      "chatgptCitationEstimate": 1370,
      "claudeCitationEstimate": 743,
      "googleAIOverviewPresencePct": 59,
      "aiVisibilityScore": 74
    },
    "eeat": {
      "authorBiosCount": 33,
      "credentialsCoverage": 71,
      "schemaMarkupScore": 83,
      "complianceDisclosureScore": 82,
      "overallEEATScore": 74
    },
    "contentFunnel": {
      "tofuPct": 37,
      "mofuPct": 28,
      "bofuPct": 35
    },
    "interactiveTools": {
      "count": 17,
      "examples": [
        "Asset Allocation Tool",
        "Market Outlook Dashboard",
        "College Savings Planner"
      ]
    },
    "newsletter": {
      "subscribers": 90005,
      "avgOpenRate": 40.3,
      "frequency": "Monthly"
    },
    "aiToolsAdopted": [
      "Custom LLMs",
      "Midjourney",
      "Notion AI",
      "Glean",
      "Writer.com",
      "GitHub Copilot",
      "Perplexity Enterprise",
      "Claude for Business"
    ],
    "complianceStack": [
      "Global Relay",
      "Proofpoint Archive",
      "Mimecast"
    ],
    "stackMaturity": "Modern",
    "stackAge": 6,
    "brandedTrafficPct": 62.4,
    "socialShareOfVoice": 4.04,
    "contentRefreshRate": 35.9,
    "avgContentAgeMonths": 5.4
  },
  "13": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 4.1,
      "threadsFollowers": 11345,
      "substackSubscribers": 0
    },
    "youtubeExtended": {
      "monthlyViews": 719378,
      "avgViewDurationSec": 285,
      "uploadsPerMonth": 14,
      "clickThroughRate": 7.4
    },
    "postsPerWeek": {
      "linkedin": 12,
      "twitter": 36,
      "youtube": 0,
      "instagram": 2,
      "tiktok": 8,
      "threads": 9
    },
    "executivePresence": {
      "ceoName": "Daniel Gamba",
      "ceoLinkedinFollowers": 60774,
      "executiveCount": 4,
      "monthlyExecPosts": 36,
      "thoughtLeadershipScore": 72,
      "mediaAppearancesMonthly": 35
    },
    "serpFeatures": {
      "featuredSnippets": 71,
      "paaOwnership": 34,
      "knowledgePanels": 9,
      "aiOverviewCitations": 93,
      "videoCarouselRank": 20
    },
    "aiSearchVisibility": {
      "perplexityCitations": 286,
      "chatgptCitationEstimate": 1189,
      "claudeCitationEstimate": 821,
      "googleAIOverviewPresencePct": 54,
      "aiVisibilityScore": 79
    },
    "eeat": {
      "authorBiosCount": 37,
      "credentialsCoverage": 79,
      "schemaMarkupScore": 81,
      "complianceDisclosureScore": 80,
      "overallEEATScore": 76
    },
    "contentFunnel": {
      "tofuPct": 50,
      "mofuPct": 40,
      "bofuPct": 10
    },
    "interactiveTools": {
      "count": 20,
      "examples": [
        "Retirement Calculator",
        "Risk Analyzer",
        "Monte Carlo Simulator"
      ]
    },
    "newsletter": {
      "subscribers": 101310,
      "avgOpenRate": 29.5,
      "frequency": "Weekly"
    },
    "aiToolsAdopted": [
      "GitHub Copilot",
      "Jasper"
    ],
    "complianceStack": [
      "NICE Actimize",
      "Hearsay"
    ],
    "stackMaturity": "Modern",
    "stackAge": 5,
    "brandedTrafficPct": 61.1,
    "socialShareOfVoice": 1.82,
    "contentRefreshRate": 35.1,
    "avgContentAgeMonths": 5.5
  },
  "14": {
    "emergingPlatforms": {
      "tiktokFollowers": 39514,
      "tiktokVideoViewsMonthly": 179147,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 11235,
      "substackSubscribers": 5581
    },
    "youtubeExtended": {
      "monthlyViews": 725485,
      "avgViewDurationSec": 390,
      "uploadsPerMonth": 11,
      "clickThroughRate": 5.5
    },
    "postsPerWeek": {
      "linkedin": 30,
      "twitter": 49,
      "youtube": 4,
      "instagram": 7,
      "tiktok": 4,
      "threads": 3
    },
    "executivePresence": {
      "ceoName": "Jean Hynes",
      "ceoLinkedinFollowers": 73587,
      "executiveCount": 10,
      "monthlyExecPosts": 14,
      "thoughtLeadershipScore": 78,
      "mediaAppearancesMonthly": 26
    },
    "serpFeatures": {
      "featuredSnippets": 65,
      "paaOwnership": 40,
      "knowledgePanels": 18,
      "aiOverviewCitations": 82,
      "videoCarouselRank": 21
    },
    "aiSearchVisibility": {
      "perplexityCitations": 309,
      "chatgptCitationEstimate": 1022,
      "claudeCitationEstimate": 798,
      "googleAIOverviewPresencePct": 67,
      "aiVisibilityScore": 86
    },
    "eeat": {
      "authorBiosCount": 39,
      "credentialsCoverage": 82,
      "schemaMarkupScore": 75,
      "complianceDisclosureScore": 87,
      "overallEEATScore": 87
    },
    "contentFunnel": {
      "tofuPct": 41,
      "mofuPct": 32,
      "bofuPct": 27
    },
    "interactiveTools": {
      "count": 9,
      "examples": [
        "ESG Rating Tool",
        "Monte Carlo Simulator",
        "RMD Calculator",
        "College Savings Planner",
        "Rebalancing Tool",
        "Factor Analysis Tool",
        "Retirement Calculator"
      ]
    },
    "newsletter": {
      "subscribers": 99693,
      "avgOpenRate": 45.5,
      "frequency": "Daily"
    },
    "aiToolsAdopted": [
      "Perplexity Enterprise",
      "Custom LLMs",
      "ChatGPT Enterprise",
      "Tome",
      "Copy.ai"
    ],
    "complianceStack": [
      "Global Relay",
      "Proofpoint Archive",
      "Theta Lake"
    ],
    "stackMaturity": "Modern",
    "stackAge": 7,
    "brandedTrafficPct": 32.0,
    "socialShareOfVoice": 2.23,
    "contentRefreshRate": 26.3,
    "avgContentAgeMonths": 13.7
  },
  "15": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 168371,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 13244,
      "substackSubscribers": 5613
    },
    "youtubeExtended": {
      "monthlyViews": 619758,
      "avgViewDurationSec": 225,
      "uploadsPerMonth": 19,
      "clickThroughRate": 2.7
    },
    "postsPerWeek": {
      "linkedin": 26,
      "twitter": 48,
      "youtube": 4,
      "instagram": 9,
      "tiktok": 6,
      "threads": 10
    },
    "executivePresence": {
      "ceoName": "Jose Minaya",
      "ceoLinkedinFollowers": 72453,
      "executiveCount": 4,
      "monthlyExecPosts": 51,
      "thoughtLeadershipScore": 75,
      "mediaAppearancesMonthly": 32
    },
    "serpFeatures": {
      "featuredSnippets": 54,
      "paaOwnership": 44,
      "knowledgePanels": 35,
      "aiOverviewCitations": 91,
      "videoCarouselRank": 20
    },
    "aiSearchVisibility": {
      "perplexityCitations": 334,
      "chatgptCitationEstimate": 1248,
      "claudeCitationEstimate": 712,
      "googleAIOverviewPresencePct": 56,
      "aiVisibilityScore": 81
    },
    "eeat": {
      "authorBiosCount": 31,
      "credentialsCoverage": 71,
      "schemaMarkupScore": 66,
      "complianceDisclosureScore": 79,
      "overallEEATScore": 79
    },
    "contentFunnel": {
      "tofuPct": 33,
      "mofuPct": 28,
      "bofuPct": 39
    },
    "interactiveTools": {
      "count": 10,
      "examples": [
        "Asset Allocation Tool",
        "Goal Planner",
        "Market Outlook Dashboard",
        "Fee Comparison Calculator",
        "Monte Carlo Simulator",
        "ESG Rating Tool",
        "Rebalancing Tool"
      ]
    },
    "newsletter": {
      "subscribers": 98515,
      "avgOpenRate": 40.9,
      "frequency": "Monthly"
    },
    "aiToolsAdopted": [
      "Notion AI",
      "Custom LLMs"
    ],
    "complianceStack": [
      "Proofpoint Archive",
      "Smarsh",
      "Theta Lake",
      "Global Relay",
      "OneTrust"
    ],
    "stackMaturity": "Modern",
    "stackAge": 8,
    "brandedTrafficPct": 63.0,
    "socialShareOfVoice": 5.71,
    "contentRefreshRate": 11.4,
    "avgContentAgeMonths": 10.2
  },
  "16": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 282384,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 21429,
      "substackSubscribers": 10669
    },
    "youtubeExtended": {
      "monthlyViews": 1137672,
      "avgViewDurationSec": 209,
      "uploadsPerMonth": 12,
      "clickThroughRate": 6.3
    },
    "postsPerWeek": {
      "linkedin": 3,
      "twitter": 22,
      "youtube": 2,
      "instagram": 2,
      "tiktok": 8,
      "threads": 4
    },
    "executivePresence": {
      "ceoName": "Valerie Baudson",
      "ceoLinkedinFollowers": 113313,
      "executiveCount": 4,
      "monthlyExecPosts": 50,
      "thoughtLeadershipScore": 87,
      "mediaAppearancesMonthly": 3
    },
    "serpFeatures": {
      "featuredSnippets": 92,
      "paaOwnership": 62,
      "knowledgePanels": 15,
      "aiOverviewCitations": 160,
      "videoCarouselRank": 27
    },
    "aiSearchVisibility": {
      "perplexityCitations": 483,
      "chatgptCitationEstimate": 1731,
      "claudeCitationEstimate": 1142,
      "googleAIOverviewPresencePct": 64,
      "aiVisibilityScore": 72
    },
    "eeat": {
      "authorBiosCount": 58,
      "credentialsCoverage": 83,
      "schemaMarkupScore": 83,
      "complianceDisclosureScore": 86,
      "overallEEATScore": 75
    },
    "contentFunnel": {
      "tofuPct": 44,
      "mofuPct": 32,
      "bofuPct": 24
    },
    "interactiveTools": {
      "count": 22,
      "examples": [
        "Tax-Loss Harvester",
        "Market Outlook Dashboard",
        "Monte Carlo Simulator"
      ]
    },
    "newsletter": {
      "subscribers": 177716,
      "avgOpenRate": 23.6,
      "frequency": "Monthly"
    },
    "aiToolsAdopted": [
      "GitHub Copilot",
      "Runway",
      "Jasper",
      "Custom LLMs",
      "Perplexity Enterprise",
      "Gamma",
      "Glean"
    ],
    "complianceStack": [
      "Ketch",
      "Hearsay",
      "Global Relay",
      "NICE Actimize"
    ],
    "stackMaturity": "Modern",
    "stackAge": 9,
    "brandedTrafficPct": 53.5,
    "socialShareOfVoice": 5.57,
    "contentRefreshRate": 28.3,
    "avgContentAgeMonths": 5.5
  },
  "17": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 20465,
      "substackSubscribers": 0
    },
    "youtubeExtended": {
      "monthlyViews": 931623,
      "avgViewDurationSec": 332,
      "uploadsPerMonth": 4,
      "clickThroughRate": 2.5
    },
    "postsPerWeek": {
      "linkedin": 8,
      "twitter": 10,
      "youtube": 6,
      "instagram": 1,
      "tiktok": 11,
      "threads": 5
    },
    "executivePresence": {
      "ceoName": "Hanneke Smits",
      "ceoLinkedinFollowers": 113727,
      "executiveCount": 11,
      "monthlyExecPosts": 11,
      "thoughtLeadershipScore": 82,
      "mediaAppearancesMonthly": 37
    },
    "serpFeatures": {
      "featuredSnippets": 105,
      "paaOwnership": 68,
      "knowledgePanels": 26,
      "aiOverviewCitations": 149,
      "videoCarouselRank": 34
    },
    "aiSearchVisibility": {
      "perplexityCitations": 559,
      "chatgptCitationEstimate": 2165,
      "claudeCitationEstimate": 1247,
      "googleAIOverviewPresencePct": 57,
      "aiVisibilityScore": 78
    },
    "eeat": {
      "authorBiosCount": 55,
      "credentialsCoverage": 77,
      "schemaMarkupScore": 70,
      "complianceDisclosureScore": 86,
      "overallEEATScore": 80
    },
    "contentFunnel": {
      "tofuPct": 37,
      "mofuPct": 28,
      "bofuPct": 35
    },
    "interactiveTools": {
      "count": 14,
      "examples": [
        "College Savings Planner",
        "Portfolio Builder",
        "RMD Calculator",
        "Asset Allocation Tool",
        "Tax-Loss Harvester",
        "Risk Analyzer",
        "Goal Planner"
      ]
    },
    "newsletter": {
      "subscribers": 172153,
      "avgOpenRate": 47.3,
      "frequency": "Daily"
    },
    "aiToolsAdopted": [
      "ChatGPT Enterprise",
      "Writer.com",
      "Claude for Business",
      "Gamma",
      "Copy.ai"
    ],
    "complianceStack": [
      "Smarsh",
      "Hearsay",
      "Osano",
      "Proofpoint Archive"
    ],
    "stackMaturity": "Composable-AI",
    "stackAge": 2,
    "brandedTrafficPct": 30.7,
    "socialShareOfVoice": 7.54,
    "contentRefreshRate": 9.0,
    "avgContentAgeMonths": 11.0
  },
  "18": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 4.2,
      "threadsFollowers": 6860,
      "substackSubscribers": 3814
    },
    "youtubeExtended": {
      "monthlyViews": 353306,
      "avgViewDurationSec": 393,
      "uploadsPerMonth": 17,
      "clickThroughRate": 4.9
    },
    "postsPerWeek": {
      "linkedin": 22,
      "twitter": 7,
      "youtube": 3,
      "instagram": 6,
      "tiktok": 9,
      "threads": 0
    },
    "executivePresence": {
      "ceoName": "Peter Harrison",
      "ceoLinkedinFollowers": 34092,
      "executiveCount": 7,
      "monthlyExecPosts": 21,
      "thoughtLeadershipScore": 83,
      "mediaAppearancesMonthly": 10
    },
    "serpFeatures": {
      "featuredSnippets": 43,
      "paaOwnership": 23,
      "knowledgePanels": 0,
      "aiOverviewCitations": 51,
      "videoCarouselRank": 13
    },
    "aiSearchVisibility": {
      "perplexityCitations": 180,
      "chatgptCitationEstimate": 723,
      "claudeCitationEstimate": 477,
      "googleAIOverviewPresencePct": 53,
      "aiVisibilityScore": 69
    },
    "eeat": {
      "authorBiosCount": 21,
      "credentialsCoverage": 70,
      "schemaMarkupScore": 77,
      "complianceDisclosureScore": 74,
      "overallEEATScore": 78
    },
    "contentFunnel": {
      "tofuPct": 32,
      "mofuPct": 35,
      "bofuPct": 33
    },
    "interactiveTools": {
      "count": 21,
      "examples": [
        "RMD Calculator",
        "College Savings Planner",
        "Monte Carlo Simulator",
        "Goal Planner",
        "Asset Allocation Tool",
        "Portfolio Builder"
      ]
    },
    "newsletter": {
      "subscribers": 58290,
      "avgOpenRate": 47.1,
      "frequency": "Weekly"
    },
    "aiToolsAdopted": [
      "Notion AI",
      "Gamma",
      "Copy.ai"
    ],
    "complianceStack": [
      "Mimecast",
      "Global Relay"
    ],
    "stackMaturity": "Transitional",
    "stackAge": 7,
    "brandedTrafficPct": 48.6,
    "socialShareOfVoice": 2.57,
    "contentRefreshRate": 21.5,
    "avgContentAgeMonths": 5.7
  },
  "19": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 4849,
      "substackSubscribers": 0
    },
    "youtubeExtended": {
      "monthlyViews": 272493,
      "avgViewDurationSec": 411,
      "uploadsPerMonth": 17,
      "clickThroughRate": 4.6
    },
    "postsPerWeek": {
      "linkedin": 31,
      "twitter": 48,
      "youtube": 5,
      "instagram": 10,
      "tiktok": 0,
      "threads": 5
    },
    "executivePresence": {
      "ceoName": "Stephen Bird",
      "ceoLinkedinFollowers": 21486,
      "executiveCount": 4,
      "monthlyExecPosts": 38,
      "thoughtLeadershipScore": 74,
      "mediaAppearancesMonthly": 21
    },
    "serpFeatures": {
      "featuredSnippets": 26,
      "paaOwnership": 15,
      "knowledgePanels": 2,
      "aiOverviewCitations": 36,
      "videoCarouselRank": 7
    },
    "aiSearchVisibility": {
      "perplexityCitations": 118,
      "chatgptCitationEstimate": 390,
      "claudeCitationEstimate": 296,
      "googleAIOverviewPresencePct": 58,
      "aiVisibilityScore": 65
    },
    "eeat": {
      "authorBiosCount": 13,
      "credentialsCoverage": 77,
      "schemaMarkupScore": 74,
      "complianceDisclosureScore": 79,
      "overallEEATScore": 75
    },
    "contentFunnel": {
      "tofuPct": 55,
      "mofuPct": 26,
      "bofuPct": 19
    },
    "interactiveTools": {
      "count": 17,
      "examples": [
        "Goal Planner",
        "Fee Comparison Calculator",
        "Tax-Loss Harvester",
        "Market Outlook Dashboard",
        "ESG Rating Tool",
        "Retirement Calculator",
        "ETF Screener"
      ]
    },
    "newsletter": {
      "subscribers": 35465,
      "avgOpenRate": 43.1,
      "frequency": "Bi-weekly"
    },
    "aiToolsAdopted": [],
    "complianceStack": [
      "Smarsh",
      "OneTrust",
      "NICE Actimize"
    ],
    "stackMaturity": "Legacy",
    "stackAge": 9,
    "brandedTrafficPct": 45.9,
    "socialShareOfVoice": 0.89,
    "contentRefreshRate": 20.7,
    "avgContentAgeMonths": 5.4
  },
  "20": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 6.2,
      "threadsFollowers": 7073,
      "substackSubscribers": 4194
    },
    "youtubeExtended": {
      "monthlyViews": 355474,
      "avgViewDurationSec": 133,
      "uploadsPerMonth": 11,
      "clickThroughRate": 5.1
    },
    "postsPerWeek": {
      "linkedin": 24,
      "twitter": 57,
      "youtube": 2,
      "instagram": 10,
      "tiktok": 11,
      "threads": 10
    },
    "executivePresence": {
      "ceoName": "Mike Roberge",
      "ceoLinkedinFollowers": 44949,
      "executiveCount": 4,
      "monthlyExecPosts": 49,
      "thoughtLeadershipScore": 80,
      "mediaAppearancesMonthly": 29
    },
    "serpFeatures": {
      "featuredSnippets": 40,
      "paaOwnership": 21,
      "knowledgePanels": 2,
      "aiOverviewCitations": 54,
      "videoCarouselRank": 11
    },
    "aiSearchVisibility": {
      "perplexityCitations": 226,
      "chatgptCitationEstimate": 746,
      "claudeCitationEstimate": 413,
      "googleAIOverviewPresencePct": 59,
      "aiVisibilityScore": 70
    },
    "eeat": {
      "authorBiosCount": 19,
      "credentialsCoverage": 71,
      "schemaMarkupScore": 79,
      "complianceDisclosureScore": 85,
      "overallEEATScore": 78
    },
    "contentFunnel": {
      "tofuPct": 53,
      "mofuPct": 26,
      "bofuPct": 21
    },
    "interactiveTools": {
      "count": 13,
      "examples": [
        "Asset Allocation Tool",
        "Tax-Loss Harvester",
        "Goal Planner",
        "Retirement Calculator",
        "RMD Calculator",
        "College Savings Planner",
        "Rebalancing Tool"
      ]
    },
    "newsletter": {
      "subscribers": 65562,
      "avgOpenRate": 26.3,
      "frequency": "Monthly"
    },
    "aiToolsAdopted": [],
    "complianceStack": [
      "Theta Lake",
      "OneTrust",
      "NICE Actimize",
      "Proofpoint Archive",
      "Hearsay"
    ],
    "stackMaturity": "Modern",
    "stackAge": 8,
    "brandedTrafficPct": 34.4,
    "socialShareOfVoice": 1.72,
    "contentRefreshRate": 40.8,
    "avgContentAgeMonths": 11.4
  },
  "21": {
    "emergingPlatforms": {
      "tiktokFollowers": 16683,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 4966,
      "substackSubscribers": 2245
    },
    "youtubeExtended": {
      "monthlyViews": 258944,
      "avgViewDurationSec": 229,
      "uploadsPerMonth": 16,
      "clickThroughRate": 7.0
    },
    "postsPerWeek": {
      "linkedin": 12,
      "twitter": 58,
      "youtube": 6,
      "instagram": 1,
      "tiktok": 0,
      "threads": 3
    },
    "executivePresence": {
      "ceoName": "Brian Langstraat",
      "ceoLinkedinFollowers": 26280,
      "executiveCount": 8,
      "monthlyExecPosts": 9,
      "thoughtLeadershipScore": 74,
      "mediaAppearancesMonthly": 5
    },
    "serpFeatures": {
      "featuredSnippets": 23,
      "paaOwnership": 14,
      "knowledgePanels": 3,
      "aiOverviewCitations": 41,
      "videoCarouselRank": 7
    },
    "aiSearchVisibility": {
      "perplexityCitations": 103,
      "chatgptCitationEstimate": 508,
      "claudeCitationEstimate": 297,
      "googleAIOverviewPresencePct": 51,
      "aiVisibilityScore": 68
    },
    "eeat": {
      "authorBiosCount": 12,
      "credentialsCoverage": 75,
      "schemaMarkupScore": 76,
      "complianceDisclosureScore": 82,
      "overallEEATScore": 70
    },
    "contentFunnel": {
      "tofuPct": 54,
      "mofuPct": 40,
      "bofuPct": 6
    },
    "interactiveTools": {
      "count": 17,
      "examples": [
        "ETF Screener",
        "Rebalancing Tool",
        "Portfolio Builder",
        "Income Estimator",
        "Asset Allocation Tool",
        "Risk Analyzer",
        "Retirement Calculator"
      ]
    },
    "newsletter": {
      "subscribers": 36527,
      "avgOpenRate": 40.9,
      "frequency": "Monthly"
    },
    "aiToolsAdopted": [],
    "complianceStack": [
      "OneTrust",
      "Proofpoint Archive",
      "Global Relay",
      "Smarsh"
    ],
    "stackMaturity": "Transitional",
    "stackAge": 7,
    "brandedTrafficPct": 50.6,
    "socialShareOfVoice": 1.72,
    "contentRefreshRate": 10.1,
    "avgContentAgeMonths": 12.0
  },
  "22": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 5159,
      "substackSubscribers": 2321
    },
    "youtubeExtended": {
      "monthlyViews": 237849,
      "avgViewDurationSec": 415,
      "uploadsPerMonth": 14,
      "clickThroughRate": 7.4
    },
    "postsPerWeek": {
      "linkedin": 19,
      "twitter": 52,
      "youtube": 0,
      "instagram": 5,
      "tiktok": 0,
      "threads": 1
    },
    "executivePresence": {
      "ceoName": "Tom Faust",
      "ceoLinkedinFollowers": 22882,
      "executiveCount": 14,
      "monthlyExecPosts": 50,
      "thoughtLeadershipScore": 79,
      "mediaAppearancesMonthly": 8
    },
    "serpFeatures": {
      "featuredSnippets": 25,
      "paaOwnership": 16,
      "knowledgePanels": 2,
      "aiOverviewCitations": 32,
      "videoCarouselRank": 7
    },
    "aiSearchVisibility": {
      "perplexityCitations": 114,
      "chatgptCitationEstimate": 469,
      "claudeCitationEstimate": 296,
      "googleAIOverviewPresencePct": 48,
      "aiVisibilityScore": 80
    },
    "eeat": {
      "authorBiosCount": 14,
      "credentialsCoverage": 71,
      "schemaMarkupScore": 64,
      "complianceDisclosureScore": 83,
      "overallEEATScore": 81
    },
    "contentFunnel": {
      "tofuPct": 44,
      "mofuPct": 26,
      "bofuPct": 30
    },
    "interactiveTools": {
      "count": 12,
      "examples": [
        "Portfolio Builder",
        "RMD Calculator",
        "Risk Analyzer",
        "ETF Screener"
      ]
    },
    "newsletter": {
      "subscribers": 34008,
      "avgOpenRate": 30.1,
      "frequency": "Monthly"
    },
    "aiToolsAdopted": [
      "Claude for Business",
      "ChatGPT Enterprise",
      "Runway"
    ],
    "complianceStack": [
      "Proofpoint Archive",
      "Theta Lake",
      "Smarsh"
    ],
    "stackMaturity": "Modern",
    "stackAge": 6,
    "brandedTrafficPct": 35.9,
    "socialShareOfVoice": 2.04,
    "contentRefreshRate": 22.9,
    "avgContentAgeMonths": 6.8
  },
  "23": {
    "emergingPlatforms": {
      "tiktokFollowers": 14195,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 3.7,
      "threadsFollowers": 4638,
      "substackSubscribers": 0
    },
    "youtubeExtended": {
      "monthlyViews": 253663,
      "avgViewDurationSec": 269,
      "uploadsPerMonth": 16,
      "clickThroughRate": 2.2
    },
    "postsPerWeek": {
      "linkedin": 25,
      "twitter": 44,
      "youtube": 6,
      "instagram": 4,
      "tiktok": 0,
      "threads": 10
    },
    "executivePresence": {
      "ceoName": "Michelle Seitz",
      "ceoLinkedinFollowers": 27456,
      "executiveCount": 3,
      "monthlyExecPosts": 12,
      "thoughtLeadershipScore": 76,
      "mediaAppearancesMonthly": 27
    },
    "serpFeatures": {
      "featuredSnippets": 23,
      "paaOwnership": 16,
      "knowledgePanels": 5,
      "aiOverviewCitations": 32,
      "videoCarouselRank": 6
    },
    "aiSearchVisibility": {
      "perplexityCitations": 132,
      "chatgptCitationEstimate": 474,
      "claudeCitationEstimate": 264,
      "googleAIOverviewPresencePct": 55,
      "aiVisibilityScore": 64
    },
    "eeat": {
      "authorBiosCount": 12,
      "credentialsCoverage": 75,
      "schemaMarkupScore": 70,
      "complianceDisclosureScore": 75,
      "overallEEATScore": 75
    },
    "contentFunnel": {
      "tofuPct": 31,
      "mofuPct": 29,
      "bofuPct": 40
    },
    "interactiveTools": {
      "count": 17,
      "examples": [
        "College Savings Planner",
        "Market Outlook Dashboard",
        "RMD Calculator",
        "Portfolio Builder",
        "Tax-Loss Harvester"
      ]
    },
    "newsletter": {
      "subscribers": 32087,
      "avgOpenRate": 31.5,
      "frequency": "Bi-weekly"
    },
    "aiToolsAdopted": [
      "Midjourney",
      "Jasper"
    ],
    "complianceStack": [
      "Hearsay",
      "NICE Actimize"
    ],
    "stackMaturity": "Modern",
    "stackAge": 7,
    "brandedTrafficPct": 61.5,
    "socialShareOfVoice": 0.81,
    "contentRefreshRate": 34.3,
    "avgContentAgeMonths": 10.4
  },
  "24": {
    "emergingPlatforms": {
      "tiktokFollowers": 0,
      "tiktokVideoViewsMonthly": 0,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 7594,
      "substackSubscribers": 4421
    },
    "youtubeExtended": {
      "monthlyViews": 425417,
      "avgViewDurationSec": 416,
      "uploadsPerMonth": 7,
      "clickThroughRate": 6.4
    },
    "postsPerWeek": {
      "linkedin": 35,
      "twitter": 19,
      "youtube": 1,
      "instagram": 3,
      "tiktok": 12,
      "threads": 2
    },
    "executivePresence": {
      "ceoName": "Seth Bernstein",
      "ceoLinkedinFollowers": 36840,
      "executiveCount": 10,
      "monthlyExecPosts": 9,
      "thoughtLeadershipScore": 75,
      "mediaAppearancesMonthly": 37
    },
    "serpFeatures": {
      "featuredSnippets": 40,
      "paaOwnership": 24,
      "knowledgePanels": 4,
      "aiOverviewCitations": 53,
      "videoCarouselRank": 13
    },
    "aiSearchVisibility": {
      "perplexityCitations": 173,
      "chatgptCitationEstimate": 727,
      "claudeCitationEstimate": 479,
      "googleAIOverviewPresencePct": 48,
      "aiVisibilityScore": 79
    },
    "eeat": {
      "authorBiosCount": 24,
      "credentialsCoverage": 70,
      "schemaMarkupScore": 67,
      "complianceDisclosureScore": 78,
      "overallEEATScore": 80
    },
    "contentFunnel": {
      "tofuPct": 32,
      "mofuPct": 39,
      "bofuPct": 29
    },
    "interactiveTools": {
      "count": 17,
      "examples": [
        "College Savings Planner",
        "Retirement Calculator",
        "Factor Analysis Tool",
        "RMD Calculator",
        "ESG Rating Tool",
        "Monte Carlo Simulator",
        "Tax-Loss Harvester"
      ]
    },
    "newsletter": {
      "subscribers": 54275,
      "avgOpenRate": 47.1,
      "frequency": "Monthly"
    },
    "aiToolsAdopted": [],
    "complianceStack": [
      "Osano",
      "Hearsay"
    ],
    "stackMaturity": "Legacy",
    "stackAge": 3,
    "brandedTrafficPct": 31.5,
    "socialShareOfVoice": 3.8,
    "contentRefreshRate": 15.7,
    "avgContentAgeMonths": 13.4
  },
  "25": {
    "emergingPlatforms": {
      "tiktokFollowers": 26654,
      "tiktokVideoViewsMonthly": 110275,
      "tiktokEngagementRate": 0,
      "threadsFollowers": 8231,
      "substackSubscribers": 0
    },
    "youtubeExtended": {
      "monthlyViews": 345455,
      "avgViewDurationSec": 418,
      "uploadsPerMonth": 20,
      "clickThroughRate": 3.5
    },
    "postsPerWeek": {
      "linkedin": 16,
      "twitter": 54,
      "youtube": 6,
      "instagram": 9,
      "tiktok": 10,
      "threads": 0
    },
    "executivePresence": {
      "ceoName": "Dave Butler",
      "ceoLinkedinFollowers": 39976,
      "executiveCount": 13,
      "monthlyExecPosts": 42,
      "thoughtLeadershipScore": 77,
      "mediaAppearancesMonthly": 21
    },
    "serpFeatures": {
      "featuredSnippets": 39,
      "paaOwnership": 27,
      "knowledgePanels": 5,
      "aiOverviewCitations": 58,
      "videoCarouselRank": 12
    },
    "aiSearchVisibility": {
      "perplexityCitations": 211,
      "chatgptCitationEstimate": 673,
      "claudeCitationEstimate": 438,
      "googleAIOverviewPresencePct": 52,
      "aiVisibilityScore": 75
    },
    "eeat": {
      "authorBiosCount": 21,
      "credentialsCoverage": 75,
      "schemaMarkupScore": 76,
      "complianceDisclosureScore": 89,
      "overallEEATScore": 84
    },
    "contentFunnel": {
      "tofuPct": 40,
      "mofuPct": 36,
      "bofuPct": 24
    },
    "interactiveTools": {
      "count": 15,
      "examples": [
        "College Savings Planner",
        "ESG Rating Tool",
        "Rebalancing Tool",
        "Portfolio Builder"
      ]
    },
    "newsletter": {
      "subscribers": 56744,
      "avgOpenRate": 34.1,
      "frequency": "Bi-weekly"
    },
    "aiToolsAdopted": [
      "Midjourney",
      "Writer.com",
      "Jasper"
    ],
    "complianceStack": [
      "Proofpoint Archive",
      "Mimecast"
    ],
    "stackMaturity": "Modern",
    "stackAge": 7,
    "brandedTrafficPct": 34.9,
    "socialShareOfVoice": 3.6,
    "contentRefreshRate": 13.4,
    "avgContentAgeMonths": 5.9
  }
};

export const aumTiers = {
  mega: { label: 'Mega ($5T+)', min: 5000 },
  large: { label: 'Large ($1T–$5T)', min: 1000, max: 5000 },
  mid: { label: 'Mid ($500B–$1T)', min: 500, max: 1000 },
  boutique: { label: 'Boutique (<$500B)', max: 500},
};



export default {
  firms,
  industryBenchmarks,
  martechCategories,
  trends2026,
  bestPractices,
  contentTypes,
  seoKeywordThemes,
  historicalScores,
  extendedFirmData,
  aumTiers
};
