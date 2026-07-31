// News Centre — cached fallback headlines + RSS configuration
// The dashboard fetches ALL RSS_SOURCES simultaneously on every load.
// Falls back to NEWS array below if all feeds fail.
// NO 24-hour cache — fresh on every load so you never miss breaking news.
//
// NOTE: this array is intentionally kept short right now. It previously
// contained 14 entries pulled from Sky Sports' /rss/12040 feed, but that
// feed leaks general Sky Sports content (Wimbledon, rugby, F1, golf, NFL)
// during quiet news periods rather than staying Spurs-only — 12 of the 14
// were off-topic. Rather than fabricate replacement headlines with unverified
// URLs, this was trimmed to the entries that were confirmed accurate.
// Tomorrow's automation run will repopulate this properly via
// updateNewsFallback(), which now filters every headline through
// isSpursRelevant() before writing here (see shared.js + update-dashboard.js).
export const NEWS = [
  {title:"Pape Sarr&#8217;s stance on Tottenham future revealed as London rivals show interest", source:"SpursWeb", date:"31 Jul 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/pape-sarrs-stance-on-tottenham-future-revealed-as-london-rivals-show-interest/"},
  {title:"Update: James Maddison - Tottenham Hotspur", source:"Google News", date:"31 Jul 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMidkFVX3lxTE1RR2NUTldXeDFZSVRQVHpvc2NRN3NlZWRkTi0yX3JJYmR2bUNoYld0MTUzYVZrRC1YUGJpWDFPclgzb2F1MlpHLTdrZjhXUUp0WEFfRW04dVg0TFRRWmM4TEQ3dHJkOWdEZVNELVpMVnBWRWJGaEE?oc=5"},
  {title:"Sandro Tonali reveals who will be the Tottenham &#8216;six&#8217; out of him and Mateus Fernandes", source:"SpursWeb", date:"31 Jul 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/sandro-tonali-reveals-what-roberto-de-zerbi-wants-from-him-and-mateus-fernandes-at-tottenham/"},
  {title:"Romero camp initiate talks with three Spanish giants as planned Tottenham exit plan hits major hurdle - TEAMtalk", source:"Google News", date:"31 Jul 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMirwFBVV95cUxPSk9aV3NIczBTb3VrVGxPZ3lPOWJ5NFNSMlFKcWhsREtsN0NTdUJIcHR3UHVhV1NHNWdhZkpxSDR1WHgwdHU3cmF0M3VKYkJmZm92YWF5MV9keFlCdG5XM3RXcmRWdUhYeDhVR1ozMGZIeF9wUGJndHBWa1ZnVEpnN0xjTWtGa2s5NHZhSUlodDYyRTFMdzhCZGEzQW5ST2FlXzExa25VSHNGRllOR19V?oc=5"},
  {title:"Roberto De Zerbi reveals exactly what he meant by 'bomba' in fresh Tottenham transfer update - talkSPORT", source:"Google News", date:"31 Jul 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMimgFBVV95cUxOd3N4b1lqclFrMll5WWx2Z2ZXQktabkw0TlQyMXhoT24xeTZiTUJKZEh2NV9iMmxZOXAxOUQzLWI5eXpuVG5sSnBieUU3eEtGOGptRWNVYURiU0JRTHgtRTI2RDJ3ZHJmYVZ0bHF4X2xFTjJ0UWp6cEJVVm5la0FiWU9weUVRM25fTDZZYVphZENQTUViaF9iS2FR?oc=5"},
  {title:"Tottenham press conference LIVE - Roberto De Zerbi on transfer bomba, injuries, Maddison and Chelsea - Football London", source:"Google News", date:"31 Jul 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMipAFBVV95cUxQNk5PdUFRcGpvVDhmeXpKVFdDNzZyMUdCQVpac05wbDd1U0RlMER2eXhULWh2MVVMWHNtbVBLdV9EVjk4a2tQR1BmUXI1SHJlaE9SR29PS0JWSFE1enFFZFkzSlBqMU9OTWpvY3Y4SEZ6V2ZtQXJnS3U1UGRvVXVfS0JrQzZZb1lhVjNuTmtxUlNfVjRUaVA4VE9xQUdySmpCSXhNbtIBqgFBVV95cUxNZDh1TTZpVmlqLTQ2ZnJ0UkxtV2hwOXlKblkxY3hiQTFkdWxDZDV3YjdpbFQ3cG5wVTg3aUQyVGU0U3R0OFY4UC1KNXlnTW9BUmxDdjd1cE9EWk9PdUxJbUpTNUVHclNaWlFBa255S3NGNnUzMFlZTU1XWVFFZC1INVpWU1ZmbGdqbVZqNkl3cllmUm5ZMkQyb3c4amlNY1VRMWp6TEl5TGtfUQ?oc=5"},
  {title:"Gallery | Open training in Sydney - Tottenham Hotspur", source:"Google News", date:"31 Jul 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMigwFBVV95cUxOZjVnd0ZjZEl1aHVveDdVTUVsNGpDY1d0VW5kbzFVQTVOUHowNEFCYlRkX0NMYVhmVXg3Q3plZno5aHdxa3NRN3g5TnE0SGdNVnBfejg3VWdXSkl5elpiNjN0bTluR2psamVxZG5kaFRpeDVxeEVqaUhRckNPRzhEWkNuZw?oc=5"},
  {title:"Roberto De Zerbi reveals how many more signings he expects at Tottenham this summer", source:"SpursWeb", date:"31 Jul 2026", tag:"Official", url:"https://www.spurs-web.com/spurs-news/roberto-de-zerbi-reveals-how-many-more-signings-he-expects-at-tottenham-this-summer/"},
  {title:"Roberto De Zerbi admits Tottenham midfielder has a &#8216;problem&#8217; after missing training today", source:"SpursWeb", date:"31 Jul 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/roberto-de-zerbi-admits-tottenham-midfielder-has-a-problem-after-missing-training-today/"},
  {title:"Tottenham can benefit from Marcus Rashford transfer U-turn as Man Utd star says goodbye", source:"football.london", date:"31 Jul 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-marcus-rashford-arsenal-transfer-34382111"},
  {title:"Mateus Fernandes injury update as four Tottenham players miss open training session", source:"SpursWeb", date:"31 Jul 2026", tag:"Injury", url:"https://www.spurs-web.com/spurs-news/mateus-fernandes-injury-update-as-four-tottenham-players-miss-open-training-session/"},
  {title:"Roberto De Zerbi clarifies Tottenham transfer &apos;bomba&apos; claim as three-player shortlist emerges", source:"football.london", date:"31 Jul 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/news/breaking-tottenham-transfer-bomba-update-34382491"},
  {title:"Tottenham trio return for pre-season training but no sign of Cristian Romero and Djed Spence", source:"SpursWeb", date:"31 Jul 2026", tag:"Official", url:"https://www.spurs-web.com/spurs-news/tottenham-trio-return-for-pre-season-training-but-no-sign-of-cristian-romero-and-djed-spence/"},
  {title:"Amanda Staveley makes decision on Tottenham investment as update emerges on ex-Newcastle owner", source:"football.london", date:"31 Jul 2026", tag:"Club", url:"https://www.football.london/tottenham-hotspur-fc/news/amanda-staveley-tottenham-west-ham-34381597"},
];

// RSS sources — ALL fetched simultaneously on every page load.
// These sites carry breaking news from Romano, Ornstein, O'Keefe, Jacobs, Moretto, Szy, Gold
// within minutes of their posts on X.
// r/coys is a COMMUNITY source (isCommunity:true) — often reposts/quotes the same
// journalists above, so it's treated as a corroborating signal in the automation's
// confidence scoring, never a standalone primary source. See NewsPanel for the
// "Community" badge shown on its items.
export const RSS_SOURCES = [
  { name:"Sky Sports Spurs",   url:"https://www.skysports.com/rss/12040",                                                                    priority:1 },
  { name:"BBC Sport Spurs",    url:"https://feeds.bbci.co.uk/sport/football/teams/tottenham-hotspur/rss.xml",                                priority:1 },
  { name:"TEAMtalk",           url:"https://www.teamtalk.com/feed",                                                                          priority:2 },
  { name:"SpursWeb",           url:"https://www.spurs-web.com/feed",                                                                         priority:2 },
  { name:"football.london",    url:"https://www.football.london/tottenham-hotspur-fc/?service=rss",                                          priority:2 },
  { name:"Google News Spurs",  url:"https://news.google.com/rss/search?q=Tottenham+Hotspur&hl=en-GB&gl=GB&ceid=GB:en",                      priority:3 },
  { name:"r/coys (Reddit)",    url:"https://www.reddit.com/r/coys/new.rss",                                                                   priority:3, isCommunity:true },
];

// CORS proxies for browser-based RSS fetching, tried in order per source.
// Free public proxies (allorigins, codetabs, corsproxy) are unreliable/rate-limited
// individually, but trying several in sequence makes live fetch far more resilient —
// only fails for a source if ALL of these are down at once.
export const CORS_PROXIES = [
  "https://api.allorigins.win/raw?url=",
  "https://api.codetabs.com/v1/proxy?quest=",
  "https://corsproxy.io/?url=",
];

// Journalists monitored for Spurs intelligence.
// Their breaking news reaches the RSS_SOURCES above within 5-30 minutes.
export const JOURNALISTS = [
  { name:"Fabrizio Romano",   handle:"@FabrizioRomano",  beat:"Transfer confirmations — Here We Go",         platform:"X / Substack"      },
  { name:"David Ornstein",    handle:"@David_Ornstein",   beat:"Official club confirmations",                  platform:"The Athletic / X"  },
  { name:"Paul O'Keefe",      handle:"@pokeefe1",         beat:"Spurs-specific daily intel and replies",       platform:"X"                 },
  { name:"Alasdair Gold",     handle:"@AlasdairGold",     beat:"Dedicated Spurs correspondent — club, squad, boardroom", platform:"football.london / X" },
  { name:"Matteo Moretto",    handle:"@MatteMoretto",     beat:"European transfers, Italian and Spanish links",platform:"Relevo / X"        },
  { name:"Ben Jacobs",        handle:"@JacobsBen",        beat:"Transfer intel, Premier League",               platform:"CBS Sports / X"    },
  { name:"Szy",               handle:"@SzymonStefanik",   beat:"Central European player links",                platform:"X"                 },
  { name:"Gianluca Di Marzio",handle:"@DiMarzio",         beat:"Italian club and player transfers",            platform:"Sky Sport Italia"  },
];
