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
  {title:"Tottenham predicted team vs Hoffenheim - No Van de Ven as De Zerbi makes two big decisions", source:"football.london", date:"15 Aug 2026", tag:"Club", url:"https://www.football.london/tottenham-hotspur-fc/fixtures-results/tottenham-predicted-team-vs-hoffenheim-34463655"},
  {title:"Everything you need to know about Tottenham vs Hoffenheim: Where to watch, team news and predicted line-up", source:"SpursWeb", date:"14 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/tottenham-match-previews/everything-you-need-to-know-about-tottenham-vs-hoffenheim-where-to-watch-team-news-and-predicted-line-up/"},
  {title:"History shows why Tottenham should expect a fast start under De Zerbi this season", source:"SpursWeb", date:"14 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/tottenham-hotspur-fan-articles/who-is-ready-for-the-true-start-of-the-roberto-de-zerbi-era-at-tottenham/"},
  {title:"Roma face major roadblock in plan to sign Tottenham starter for just £23m", source:"SpursWeb", date:"14 Aug 2026", tag:"Official", url:"https://www.spurs-web.com/spurs-news/roma-face-major-roadblock-in-plan-to-sign-tottenham-starter-for-just-23m/"},
  {title:"&#8216;Tottenham won&#8217;t stand in the way&#8217; of £30m star leaving amid new Saudi interest", source:"SpursWeb", date:"14 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-wont-stand-in-the-way-of-30m-star-leaving-amid-new-saudi-interest/"},
  {title:"Departing Romero says he wasn't perfect at Spurs", source:"BBC Sport Spurs", date:"14 Aug 2026", tag:"Interview", url:"https://www.bbc.co.uk/sport/football/articles/c20dyz4vrero?at_medium=RSS&amp;at_campaign=rss"},
  {title:"Predicted Tottenham XI to face Hoffenheim on Saturday as Mateus Fernandes starts", source:"SpursWeb", date:"14 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/predicted-tottenham-xi-to-face-hoffenheim-on-saturday-pre-season/"},
  {title:"Saudi club Al Ahli set sights on signing £30m Tottenham Hotspur midfielder", source:"SpursWeb", date:"14 Aug 2026", tag:"Official", url:"https://www.spurs-web.com/spurs-news/saudi-club-set-sights-on-linked-away-tottenham-man-al-ahli-pape-sarr/"},
  {title:"Cristian Romero sends emotional Tottenham farewell message ahead of Atletico Madrid transfer", source:"football.london", date:"14 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/cristian-romero-tottenham-atletico-transfer-34463279"},
  {title:"&#8216;I know I wasn&#8217;t perfect&#8217; &#8211; Cristian Romero sends emotional 288-word message to Tottenham fans before £34m exit", source:"SpursWeb", date:"14 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/cristian-romero-bids-emotional-farewell-as-34m-atletico-madrid-move-ends-tottenham-chapter/"},
  {title:"Jeff Stelling predicts where Tottenham will finish in 26/27 Premier League table", source:"SpursWeb", date:"14 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/jeff-stelling-predicts-where-tottenham-will-finish-in-26-27-premier-league-table/"},
  {title:"&#8216;Spurs would be ready&#8217; &#8211; Tottenham handed major Omar Marmoush transfer lifeline", source:"SpursWeb", date:"14 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/spurs-would-be-ready-tottenham-handed-major-omar-marmoush-transfer-lifeline/"},
  {title:"&#8216;Create something lasting&#8217; &#8211; De Zerbi wants Tottenham to mimic Argentina in one area", source:"SpursWeb", date:"14 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/create-something-lasting-de-zerbi-wants-tottenham-to-mimic-argentina-in-one-area/"},
  {title:"Tottenham transfer news LIVE: Savinho &apos;bid&apos;, Victor Osimhen twist, Cody Gakpo update", source:"football.london", date:"14 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/news/tottenham-transfer-news-live-cody-34456777"},
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
