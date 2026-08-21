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
  {title:"Team news: Porro, Van de Ven and Sarr out of Brentford opener", source:"Tottenham Hotspur", date:"21 Aug 2026", tag:"Official", url:"https://www.tottenhamhotspur.com/news/1086430/team-news-porro-van-de-ven-out-of-opener-at-brentford"},
  {title:"Micky van de Ven named captain in five-player leadership group", source:"Reuters", date:"21 Aug 2026", tag:"Club", url:"https://www.reuters.com/sports/soccer/van-de-ven-main-tottenham-skipper-de-zerbi-names-five-captains-2026-08-21/"},
  {title:"Tottenham transfer news LIVE: Savinho breakthrough, Marmoush update, double swoop latest", source:"football.london", date:"21 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-transfer-news-live-savinho-34493992"},
  {title:"Tottenham transfer news recap: Blockbuster Savinho and Marmoush talks, Neto price, Gakpo confusion", source:"football.london", date:"21 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-transfer-news-live-blockbuster-34487036"},
  {title:"Spurs agree £75m deal to sign Man City's Savinho", source:"BBC Sport Spurs", date:"21 Aug 2026", tag:"Official", url:"https://www.bbc.co.uk/sport/football/articles/cwyl0r8g4lwo?at_medium=RSS&amp;at_campaign=rss"},
  {title:"Tottenham&apos;s &apos;new stance on Omar Marmoush transfer&apos; after striking huge Savinho agreement", source:"football.london", date:"21 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-transfer-news-omar-marmoush-34493981"},
  {title:"Arsenal champions, £116m flop, Spurs surprise, brutal sacking - Premier League 2026-27 predictions", source:"football.london", date:"21 Aug 2026", tag:"Club", url:"https://www.football.london/premier-league/premier-league-predictions-arsenal-tottenham-34470877"},
  {title:"11 pundits predict where Tottenham will finish this season with European dream alive", source:"football.london", date:"21 Aug 2026", tag:"Club", url:"https://www.football.london/tottenham-hotspur-fc/news/11-pundits-predict-tottenham-finish-34484654"},
  {title:"&#8216;Here we go&#8217; &#8211; Tottenham finally agree Savinho deal as Fabrizio Romano reveals final fee", source:"SpursWeb", date:"20 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/here-we-go-tottenham-finally-agree-savinho-deal-as-fabrizio-romano-reveals-final-fee/"},
  {title:"Tottenham finally have some good news on Destiny Udogie ahead of Brentford clash", source:"SpursWeb", date:"20 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-finally-have-some-good-news-on-destiny-udogie-ahead-of-brentford-clash/"},
  {title:"Five winners and four losers from Tottenham&#8217;s unbeaten pre-season campaign", source:"SpursWeb", date:"20 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/five-winners-and-four-losers-from-tottenhams-unbeaten-pre-season-campaign/"},
  {title:"Tottenham and Man City near agreement on £85m Savinho as talks reach final stage", source:"SpursWeb", date:"20 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-and-man-city-near-agreement-on-85m-savinho-as-talks-reach-final-stage/"},
  {title:"Tottenham receive huge Savinho boost as Man City move for £84m replacement", source:"SpursWeb", date:"20 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-receive-huge-savinho-boost-as-man-city-move-for-84m-replacement/"},
  {title:"Neil Warnock takes another dig at Djed Spence after Tottenham transfer to Inter", source:"football.london", date:"20 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/neil-warnock-takes-another-dig-34493443"},
  {title:"Tottenham transfer roundup: Harry Kane speaks up, Man City double raid and two potential shock exits", source:"SpursWeb", date:"20 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/tottenham-transfer-roundup-harry-kane-speaks-up-man-city-double-raid-and-two-potential-shock-exits/"},
  {title:"Vinai Venkatesham signs off on Tottenham&apos;s new £90m cash move with documents filed", source:"football.london", date:"20 Aug 2026", tag:"Official", url:"https://www.football.london/tottenham-hotspur-fc/news/vinai-venkatesham-signs-tottenhams-new-34493005"},
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
