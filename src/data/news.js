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
  {title:"Tottenham Hotspur Daily News Roundup - LiveScore", source:"Google News", date:"16 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMiuAFBVV95cUxPWGlhWDFIb0s3dHhwZDlCTFo1T2VKSkl2dWEtSzFUUVR1TVIyN0t0Q2dScjYxZ3c1ekJvN0JlVXJsbUZpc2JVcW5sbUZiMVl2MFdURWdHaFA1b0tkcjlYdjlOSHlUZWd2NnJnMTU0QjlYZjRIYXNmUnNNVXBtWXFqcHZHZVpIaEFmaUxuWFk3Y0JLTHpxbF9hUnlZRVFBcE15NG5jaFhHZGZ4TU83Y3lRZDhldm41UHQz?oc=5"},
  {title:"Victor Osimhen&apos;s dream transfer as Arsenal and Tottenham linked with huge offer on table", source:"football.london", date:"16 Aug 2026", tag:"Transfer", url:"https://www.football.london/premier-league/victor-osimhens-dream-transfer-arsenal-34459528"},
  {title:"Tottenham Hotspur 3-0 TSG Hoffenheim: Top 10 talking points - Cartilage Free Captain", source:"Google News", date:"16 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMi1AFBVV95cUxQTjVZLUY3VDZpTmh1N2tkUGphaTZfSHMtMmRYLXZpNmtOX3dMWENOcXUxQlRiSVBvQm9CYnNlRDhnOWpDamZuZnJGMm5OclEyalZ2Rlp0eU51TC1MSkgwTVpBYlp3dXExS3R6LUZxMl9UU0N3QURhT0taQ3RNN3lxaTZnXzg5dUV6U2NFUkxCeDBZRzRrM0NURE85TWRfeE4zbXlGM1BFSTBLTnNrVkgxUXhjWHNRUVJXRHpMeGdTRkFsbEQ3Undxd2RtcTBLSG9EM1VWSQ?oc=5"},
  {title:"Tottenham predicted XI to face Hoffenheim in second friendly in 24 hours", source:"SpursWeb", date:"15 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-predicted-xi-to-face-hoffenheim-in-second-friendly-in-24-hours/"},
  {title:"How to watch Tottenham vs Hoffenheim part two on Sunday: Team news, TV channel and prediction", source:"SpursWeb", date:"15 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/how-to-watch-tottenham-vs-hoffenheim-part-two-on-sunday-team-news-tv-channel-and-prediction/"},
  {title:"De Zerbi knows how Cody Gakpo feels about Tottenham move after one-to-one chat", source:"SpursWeb", date:"15 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/de-zerbi-knows-how-cody-gakpo-feels-about-tottenham-move-after-one-to-one-chat/"},
  {title:"Tottenham &#8216;close in&#8217; on blockbuster striker deal, according to source in Nigeria", source:"SpursWeb", date:"15 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/tottenham-close-in-on-blockbuster-striker-deal-according-to-source-in-nigeria/"},
  {title:"Tottenham submit opening offer for Cody Gakpo after agreement in principle", source:"SpursWeb", date:"15 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-submit-opening-offer-for-cody-gakpo-after-agreement-in-principle/"},
  {title:"Five things we learned as Tottenham beat Hoffenheim 3-0 in pre-season", source:"SpursWeb", date:"15 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/five-things-we-learned-as-tottenham-beat-hoffenheim-3-0-in-pre-season/"},
  {title:"Inter sign England full-back Spence from Tottenham", source:"BBC Sport Spurs", date:"15 Aug 2026", tag:"Official", url:"https://www.bbc.co.uk/sport/football/articles/cz64vg6znz1o?at_medium=RSS&amp;at_campaign=rss"},
  {title:"Djed Spence transfer news: Tottenham defender completes £30m Inter Milan move - Sky Sports", source:"Google News", date:"15 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMizAFBVV95cUxNYjhNTG90eW9hcEdXM1F4aW84V3dHVUNPcHcyVS1jQVo3cFliV1pSYTIzUFFtS01mcTNMS1Nkenc1Vy1pMDctRU9YbEEyM3VHMWNkOW5WaF9USzV4aC1TR1c2RlJERmUtcXNFbnJiQzM5NmhnVmFlUHZTUkV6djNJTjNCa3RWVVFON2pOb3doaWZFZDdJVWM3cnRJQXE4aUFQXzF2bGVHRjhSYmk2T2Fidk9YZkRNakJGRXpRZFJacGtSbnFrZmNzZTg0bk0?oc=5"},
  {title:"Djed Spence completes €30m transfer from Tottenham to Inter Milan: 'Time for a new chapter' - ESPN", source:"Google News", date:"15 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMirwFBVV95cUxNQVZSOTg4NTZ2UVdZYmxaem9ueEJnVk9PQ29SNFFnTTRObEZCRElfa2l2V2JUcXZQalZoWUVvbnJsMXdtbTRfWV9BRlBoSS1PeEZ5QjEyN2ZLWFd5V2pjWmNtaVhkd05lRGpSMlpFbDM1OUZDUV90Yk5VNjkzZVlVVklFYWZ6MzR0WTJrMmo5dmVER1g0U0dCNklGZ3UwVGtlLWRteTFBMWFxb040WHg0?oc=5"},
  {title:"Tottenham sales climb over £200m after 10th summer exit is officially announced", source:"SpursWeb", date:"15 Aug 2026", tag:"Official", url:"https://www.spurs-web.com/spurs-news/tottenham-sales-climb-over-200m-after-10th-summer-exit-is-officially-announced/"},
  {title:"Djed Spence follows Cristian Romero out of Tottenham in £30m transfer exit", source:"football.london", date:"15 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/djed-spence-inter-milan-confirmed-34464942"},
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
