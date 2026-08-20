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
  {title:"Spurs in talks over Man City pair Savinho and Marmoush", source:"Sky Sports Spurs", date:"20 Aug 2026", tag:"Club", url:"https://www.skysports.com/football/news/12040/13574823/tottenham-transfer-news-spurs-target-man-city-duo-savinho-and-marmoush-as-search-for-three-new-forwards-gathers-pace"},
  {title:"Tottenham transfer news LIVE: Blockbuster Savinho and Marmoush talks, Neto price, Gakpo confusion", source:"football.london", date:"20 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-transfer-news-live-blockbuster-34487036"},
  {title:"Tottenham transfer news recap: Savinho and Marmoush bombshell, Pedro Neto price named", source:"football.london", date:"20 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-transfer-news-live-savinho-34480828"},
  {title:"The Hoddle of Coffee: Tottenham Hotspur News and Links for Thursday, August 20 - Cartilage Free Captain", source:"Google News", date:"20 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMi2AFBVV95cUxPX29ONGw1bzdackM2OG8xRzg2b1VfZUhSSTN4Vm1BOHVJS2gwRDVYTzhzOVFTZHZrTm80dFlzOWx4UEhxWDZTcmNwYXV3WVdKdmtyWTZiMzNvaEpKelFQMFVyQ2JNbi1FSmNLMS1FNVRaUmJjdXdyMjdTRDkyeEYtSnpNMEN2d1VHREdYcjdET3ZNU2w5d0U0SUJrVEZXb210TnExTlBiQXZYdVctVndlSGtfRHJlNDVBUDMyNUpsSlZTa2lwYnVsb3VzdzB5bzRLaTh3UExzSU4?oc=5"},
  {title:"Forget Bergvall: £50m Star Surely Has No Future at Tottenham After De Zerbi Decision - GiveMeSport", source:"Google News", date:"20 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMiigFBVV95cUxQZTFzNFpFRERIeEVOTWcwWTNWYzFsRU5fbVE0NGUzaGVld1djQ1lsUXJ6VUthRGxxcXVyX3VjRmN4N0ViUDg3RkJDWEQxcUZBbzlOTWFXSFhQa2tuaFJWUUVUcTBMVUt1QTM0NU1HSjFJVE5qRWFkTzJHQ3VPRzFRa0hPRFlfY3hTZEE?oc=5"},
  {title:"Liverpool to regret Tottenham transfer decision as Johan Lange pounces on &apos;massive opportunity&apos;", source:"football.london", date:"20 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/news/liverpool-regret-tottenham-transfer-decision-34485605"},
  {title:"Spurs' Vicario joins Juventus on loan", source:"BBC Sport Spurs", date:"20 Aug 2026", tag:"Interview", url:"https://www.bbc.co.uk/sport/football/articles/cgk451r4z76o?at_medium=RSS&amp;at_campaign=rss"},
  {title:"Tottenham handed triple injury boost ahead of Brentford opener - London Evening Standard", source:"Google News", date:"20 Aug 2026", tag:"Injury", url:"https://news.google.com/rss/articles/CBMikwFBVV95cUxPVE0xNTEzbkd1bVhQWjZGZUUwTVBlN3FTY0RzRTlrekNNd3JDLWN5NHVJeVlZdFpCek8wQmxSOHpXMXNaTUFUNUlxTkwydlZTYUROaWd1Mjh4dUZiQkhDaENGZ2dBS0dKQThKWW10T1B0cXFoOXowTnhjRWRPMG1IdzZsNXY3MUNIVDQ0Y1h3SnZGMGs?oc=5"},
  {title:"Spurs rising star Luca Williams-Barnett: A 17-year-old No 10 with an eye for a wonder goal - nytimes.com", source:"Google News", date:"20 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMipAFBVV95cUxQVzdNU1MzXzNrcnlHUmFhVk5HUXdVdjI1VHhoYno2N2U4ZUdjd0R3bnU2ODhFOGNHOUtMWEZFZmtPTk9qYTNqYk9YLWRGNDJLN1Q3UW15c2RYYWFUa2JmeWJZSVJweTJNV3VPaHZCdm9hT2F2am91ZmlxMHprLWxEYm1fbnlqd0RQNW9MYVh1T2ZKOUo4b0gyWG5SNDJIcmhLTEJkdA?oc=5"},
  {title:"Tottenham could revisit shock move for striker they chose Solanke over back in 2024", source:"SpursWeb", date:"19 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-could-revisit-shock-move-for-striker-they-chose-solanke-over-back-in-2024/"},
  {title:"Cristian Romero and the complicated legacy of one of Tottenham&#8217;s most polarising captains", source:"SpursWeb", date:"19 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/cristian-romero-and-the-complicated-legacy-of-one-of-tottenhams-most-polarising-captains/"},
  {title:"Tottenham to spend over £450m with triple signing next after Ornstein, Romano updates - Football365", source:"Google News", date:"19 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMiygFBVV95cUxQTmhfZElWdHZjRmd0ZjFSSlF0Z1I4Q1k1MjM3RFN5VWpPdkxLcGoybEVQZDNONjRDT2trZlk3M3VlcndQc01CdEFuQjJSd1ZVMkt3RnBDV2NpTldLUVpLRHRZTXZzaVc3eXUyVWVHUG4tVW1zaWhMSjhhOGlnUnhFeHA4cmFYQUEwU2txQWJsbi1IclFJQVVYVTl4ZzhhX2s5T3hMaU9mNnJOT0RUVzhtcm9Fc09kemRSRUhGSFRuQXBkbnhyNG54dHdR?oc=5"},
  {title:"Ruud Gullit thinks £60m transfer to Tottenham could get attacker back to his best", source:"SpursWeb", date:"19 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/ruud-gullit-thinks-60m-transfer-to-tottenham-could-get-attacker-back-to-his-best/"},
  {title:"Tottenham battle Man United for late deal for £42.7m Bundesliga star", source:"SpursWeb", date:"19 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/tottenham-battle-man-united-for-late-deal-for-42-7m-bundesliga-star/"},
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
