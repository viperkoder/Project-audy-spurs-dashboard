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
  {title:"Tottenham latest: De Zerbi says Bergvall is '100 per cent' staying at Spurs", source:"Sky Sports Spurs", date:"22 Aug 2026", tag:"Interview", url:"https://www.skysports.com/football/live-blog/12040/13025489/tottenham-transfer-news-rumours-and-gossip-live-updates-and-latest-on-deals-signings-loans-and-contracts"},
  {title:"Watch Brentford vs Spurs: TV channel, live stream, NOW TV, team news and score prediction - Sky Sports", source:"Google News", date:"22 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMi1wFBVV95cUxPNElTOUZ4ZmFMYW0xd2NLbWJMTFlpZlltZVpZODlSTWcwTUs5dXpzTGRLOENmRGJwdTZFMzRmVzMzUFBUSUFzN3RaVTM1Tl9nWGVySS1uMG5VSTNOQnBoQV9CWU9iZVlZVjdPSTdXSjVpUFJacGUxMWROVWZMUE1uTkZ4cFc3MGh2U3FCNnR6c1pmb21EeEJ0OVFYamRfZm84cE9TTS1ZNEUtb1hqLUZwNHhYQ292TG5UY0tSRVd5bjQzU1Rja0pPcnVENHBzV3lydjdjemk2aw?oc=5"},
  {title:"I left Tottenham for Brentford against my wishes - it left me very confused", source:"football.london", date:"22 Aug 2026", tag:"Club", url:"https://www.football.london/tottenham-hotspur-fc/news/sergio-reguilon-tottenham-brentford-transfer-34481536"},
  {title:"James Maddison: Tottenham midfielder on how having five young children helped distract from injury - BBC", source:"Google News", date:"22 Aug 2026", tag:"Injury", url:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9aeFJxOUVPbjJNak5aRzB0dzl0a2x4M0FIdU8zZjNDUHlrTnAwV2k4eXBhNGVueXpkSWRXNFZ0cml5WWVtLUxTZXZwZjB2ZlFBVWpGZERNVHQ3bUNvTy1kWmsyQlhDTW8?oc=5"},
  {title:"Spurs drop Savinho, Marmoush and Gakpo hint as shirt numbers confirmed - London Evening Standard", source:"Google News", date:"22 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMirwFBVV95cUxOUnRSckxoNk9CNXpKYkl6OUMwendSMmRWM0h6c3NTZDV1MG9YM0RLUUoway04M3Jtc1UzZWlpM0NKX3ZLYV83Q0NNQVVvb05IUWR1MkJ2RHotS3o4S2diajY4cjlDOUJ2RXFELU4yaUoxU2c4eTJIY3BLeTV3YW5HSGw4LUNQazJQNzlnQzhIcFI5NE9OU3BucHRITHVGd2NVbmtCaV9wUzZVTkFLY0Rn?oc=5"},
  {title:"Terry Dyson, winger whose goals helped Tottenham win the Double and find glory in Europe - The Telegraph", source:"Google News", date:"22 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMirgFBVV95cUxPVUl4TFFSd1c5aVd3eGV1RFVkTUhWeHN0dmk3SEdmYzd3Y2N0eXRHeFhqNFlkbVN6bXZsUEYzNm14WGsxTkVhNGFxbnc0cjk5LTJxTEZvTXdEeEhSdHhGV0Myd0VlQWJxQUxuOFJuTXdvZFVMY1FDMkxoN2xWbmlqU2FQYkFhaDhFSlBybmtYQll5Yzc3QmhfbnZfNWdCa21Tcmh4Y0Q3MEx4RllNcEE?oc=5"},
  {title:"13 players could miss Brentford vs Tottenham as Roberto De Zerbi rules stars out", source:"football.london", date:"22 Aug 2026", tag:"Club", url:"https://www.football.london/tottenham-hotspur-fc/news/brentford-vs-tottenham-injury-news-34500240"},
  {title:"De Zerbi defends Spurs transfer spree and claims every club ‘wanted to kill us’ - The Guardian", source:"Google News", date:"21 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMitgFBVV95cUxQVGg1WmhWdGRfRk83M3FwU3l0VmNEMjdfQnVFSl8wWmNxeHVPRHY1dXQzal85SzNYMXRtWkFqRXF6MU5xU0k2NklPRkRmOGhsS291ZDFPWWM4QkxJYVphbVMtWWZZa0YzQ2VXX3I0N09QSXducWItREk4VUxmV0QzV091YmQzeXBjMUtBZkdhcndOaG5ONm0tNjN5aTBKVGNpajZVd3VFRDllRllOUnREV3Zob0tRZw?oc=5"},
  {title:"De Zerbi delivers Lucas Bergvall transfer update and admits another Tottenham star may leave", source:"football.london", date:"21 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/de-zerbi-delivers-lucas-bergvall-34499484"},
  {title:"‘I think now he wants to stay’ – Spurs boss De Zerbi on the futures of midfield duo - hayters.com", source:"Google News", date:"21 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMiogFBVV95cUxQcE5ja2NxcXNKUVdxeUJHZ2d5T2lDWnFYLUVKamh0SFFVTERmQmY1YzJhM3RfUjdkYmtKQ180a2ZLd2FJRWl1Nk03ZnB0OFZxVDlSOEg3Y1NEam5Jc3o5azE3eWt3QWJwcWJpZExITkFwUE42LU1RbkU4cGdvcTF5Yks4VjF6RkNhMzlFcnFBbjlrME1CM1ZVU21NaXRDSVVSMGfSAacBQVVfeXFMTjFIRUZHNUhyM3ZnNjBNenE1ejBqN2JieW82QkY5NVljcjk5V3VMNU9KcjcxWTVSNW1TNmhuNzBObkRpLWxnaDE4dDBfMTczSUVoUkNjcjF1VGtZZHo0MHZ5dWdvSnZGVjVHSlYxUjFoR0EzMmhUQ0MyLXFxcDJtOFA1OTRzcnFlWmRVTm1kV2pDc1p0YzJqRHBubkktQlJMd0p6UkFYVkE?oc=5"},
  {title:"Contrasting reports emerge on Tottenham receiving £15.4m bid for Pape Matar Sarr", source:"SpursWeb", date:"21 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/contrasting-reports-emerge-on-tottenham-receiving-15-4m-bid-for-pape-matar-sarr/"},
  {title:"Newcastle beat Tottenham in three-horse race for 18-year-old midfield starlet", source:"SpursWeb", date:"21 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/newcastle-beat-tottenham-in-three-horse-race-for-18-year-old-midfield-starlet/"},
  {title:"Tottenham seek £50m for peripheral player as Al-Ahli and Aston Villa sniff around", source:"SpursWeb", date:"21 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-seek-50m-for-peripheral-player-as-al-ahli-and-aston-villa-sniff-around/"},
  {title:"Tottenham offer was rejected by two-time Serie A-winning midfielder this month", source:"SpursWeb", date:"21 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-offer-was-rejected-by-two-time-serie-a-winning-midfielder-this-month/"},
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
