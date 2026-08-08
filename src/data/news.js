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
  {title:"How to watch Tottenham vs Getafe: TV channel and live stream for pre-season friendly today - London Evening Standard", source:"Google News", date:"08 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMisAFBVV95cUxPdVZhc3Y4WWhFVEpUWnJEVnYtSUdrcE1MQWVZRUNCM2VpeW5YSUluU25ZaDJSTkZrbHR0bGw3TWlocFhlZEVVREduRHBoMEJBNFBaN3NtTHB2ei03RVEzMEo0akx1c21wQlU3NFc0MWt6YTBDTUNMWDNrbkZ5M3FwYzlONE1wX2NDOFFwM0RGb3g1eng0d3NDeDQ0R0NDQ1FLYm00eGhXWHYxRXlBaFNrYw?oc=5"},
  {title:"Tottenham expected team vs Getafe CF as summer signing given first minutes - Football London", source:"Google News", date:"08 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMirgFBVV95cUxQZ2JvV1pSOHlLMDBQNTBoYlI5WXJvUXhXdUdTbEdTNWxsdVpncE90M05Ldjdodlp6bFBDeWlZRXcxSHZoWURQbjctbWJvQ05RSjlqX0xrbDBRMFpiRDBJbzBoV3FOUC05WE5FaXI0QmJLcU9CUVlmU3dCN0Q0SGsyYUlSM243V2lDUGlkb1BTVVAyVzNUUWRuUTVyU2EwRkZaZGFXak1hcWZnZ0RlSWc?oc=5"},
  {title:"Tottenham predicted team vs Getafe CF as Roberto De Zerbi hands debut to summer signing", source:"football.london", date:"08 Aug 2026", tag:"Official", url:"https://www.football.london/tottenham-hotspur-fc/fixtures-results/tottenham-predicted-team-vs-getafe-34419814"},
  {title:"Tottenham star refused to join pre-season tour to force through blockbuster transfer - Football London", source:"Google News", date:"08 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMimgFBVV95cUxOXzhHMlVhOXNyZ2dld20xc2FfTTZIQUhvZC1GNjdlcXRWTVowR1lCQmlkRjJTNDYzUUluQ3BiM2NYbDdGUkYweUk4c04xbDVEN2hjUnVCSElMN2w3S3FObzdWVkkyS2Z5WjBYZEVUWHd2dVhQdUJTa081T1duSkRFSFBmSFJCVHBsQ3dXazg1NWxBOTBEN0xOMF9R0gGfAUFVX3lxTE5hdTY0dXF0R2RGdmRqbFJNbmE5MHppTzlJUG9QandUd3BSVklsRXNTQWxKbXZ5WExsT2E1SWVWWDNEY0pmZW5ubWZSX0t6dmtpQVNaY0YxcFJrSFhKcEJrSDhVc081SU5HZTV2TWU0eUFuWGdFVk9QQjZGSkpZbjZHbld1MnRmYlBBU01TWFZtTzhSMFFVMmtZcmJlT19VMA?oc=5"},
  {title:"Tottenham Hotspur vs Getafe: Club Friendlies stats &amp; head-to-head - BBC", source:"Google News", date:"08 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMiZEFVX3lxTE5xcG1qZ09uQmlRLVpYSHdfZUdTV1F1eGRPd3NaSm1WTlBjaDhsRkNjVVRiNXRNeXZSRHVaQmJBdWR1V1ZqczhQSjAyMHlwQV9VeEN2UzdOVmhsUkMxdHoxeFZnaC0?oc=5"},
  {title:"Tottenham build-up analysis: Is Roberto De Zerbi reviving the classic Spurs DNA?", source:"SpursWeb", date:"07 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/tottenham-hotspur-fan-articles/tottenham-build-up-analysis-is-roberto-de-zerbi-reviving-the-classic-spurs-dna/"},
  {title:"Predicted Tottenham XI vs Getafe as Jan Paul van Hecke and Kevin Danso start", source:"SpursWeb", date:"07 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/predicted-tottenham-xi-vs-getafe-as-jan-paul-van-hecke-and-kevin-danso-start/"},
  {title:"Ferran Torres makes big admission about his future amid Tottenham interest", source:"SpursWeb", date:"07 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/ferran-torres-makes-big-admission-about-his-future-amid-tottenham-interest/"},
  {title:"Tottenham ramping up pressure on Man City to force through a Savinho transfer", source:"SpursWeb", date:"07 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/tottenham-ramping-up-pressure-on-man-city-to-force-through-a-savinho-transfer/"},
  {title:"Tottenham insider reveals details on Micky van de Ven&#8217;s new bumper contract", source:"SpursWeb", date:"07 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/tottenham-insiders-reveal-details-on-micky-van-de-vens-new-bumper-contract/"},
  {title:"Antonio Nusa responds to speculation linking him with £51m Tottenham switch", source:"SpursWeb", date:"07 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/antonio-nusa-responds-to-speculation-linking-him-with-51m-tottenham-switch/"},
  {title:"Glenn Hoddle slams Daniel Levy while reacting to Tottenham&#8217;s summer business", source:"SpursWeb", date:"07 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/glenn-hoddle-slams-daniel-levy-while-reacting-to-tottenhams-summer-business/"},
  {title:"Former Tottenham player admits he was &#8216;in the nightclubs more than the training ground&#8217;", source:"SpursWeb", date:"07 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/former-tottenham-player-admits-he-was-in-the-nightclubs-more-than-the-training-ground/"},
  {title:"&#8216;Would love to see it&#8217; &#8211; Tottenham fans react as Arsenal enquire about Cristian Romero", source:"SpursWeb", date:"07 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/would-love-to-see-it-tottenham-fans-react-as-arsenal-enquire-about-cristian-romero/"},
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
