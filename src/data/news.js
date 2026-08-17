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
  {title:"Tottenham transfer news LIVE: Savinho progress made, Gakpo latest, new £20m deal emerges", source:"football.london", date:"17 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/news/tottenham-transfer-news-live-savinho-34468569"},
  {title:"Tottenham transfer news: Osimhen battle, Jackson update, two deals confirmed", source:"football.london", date:"17 Aug 2026", tag:"Official", url:"https://www.football.london/tottenham-hotspur-fc/news/tottenham-transfer-news-live-osimhen-34466030"},
  {title:"The Hoddle of Coffee: Tottenham Hotspur News and Links for Monday, August 17 - Cartilage Free Captain", source:"Google News", date:"17 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMi1gFBVV95cUxOLWdPcXZMVzVOYlNCSlVEZkVJclE1VUhJWjdsWmVrN3RhLTUxVUxfbjFXVms5MzIySEQxbi0zRGxEZlJ0aTR1aU9Ia21hRkZscnFLbE9KTnFIQVZYYU1BU2RnTGtRY1JOZllpdUhpT0gxUkNCNVFqTHFESkxZbDJXZzFzNDNDamNmV3JkVmw4UzNxLW9maFo1QXQ0VHFtS1RYMUYtQVFldUZ0XzVTeEJtN1JzdHc0QVNCX2k4Nno0Ym1rSEhHd1N5SmVDVldkOHlUNUlZRW1n?oc=5"},
  {title:"Spurs injury update: Van de Ven, Kudus and Solanke latest return dates - London Evening Standard", source:"Google News", date:"17 Aug 2026", tag:"Injury", url:"https://news.google.com/rss/articles/CBMiyAFBVV95cUxQdW5WWnlfMjZXV1RuSE0wSTVGODI4dTBCalRBUTVTak9mNElBZ1FxVl8yOFBRaU9UZDAyemI1Y1NXRTgzT2NtX0tTTVo0OXh2U1NsWXdWUVdWVTVyNTlmbXAxUjVQMldvNXpiSm9KeW92ZGU3OXFoNUpNWkpCczBpOUpSdHNtYkJ5NlRJTmVWdFJkTWdwSFVZUV80YXhMYkpVbERxbURrM25IMC1vdDdGOFZzb0RMbnV1S2wtenRQRlVtalhPVlJyRQ?oc=5"},
  {title:"Tottenham in transfer talks over next move after deal called off - Football London", source:"Google News", date:"17 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMipgFBVV95cUxNa0huaTJpbDc1R2kxRTZzUFpLTXlpNXhkQWFEUlhfOE9wdkxjUUdHSS1zQ3ZfZUJuY3VQZk0ta3BiMUFFLVpjcW9GU1A5OXo2U19pOHM2SEc1Vm11TVpKZ2FvV0tYS01zZ1FWVjBUYW5wUFV0dk03WU5wNUJNNjNXYTBsMEtKZXEta2FYRW1xcnNVRE95S0Z4WUZmREJCWFZONE5iSnJ30gGrAUFVX3lxTE5ERlRQaU1rVDhab003VHpOTUlkX3NwUm12dHJsaTZwV19HRDRyZFRxOWdNeTJjeDVRV3laRldaaFR1c2JDMThINXVpSHdtUVhZaklqMlo4aEE1bzNkMWFpZEttNDRjTkhsWUJJaU81cE1GVG81TEVvQm1HX2hSNzlXcktQMzdtT3dNTDNzSkRZNzJVWE1IUVItWXJscVlzRTlDaG9PZzk0N0o2UQ?oc=5"},
  {title:"Five transfers Tottenham can complete this week - New striker arrives and £145m spent", source:"football.london", date:"17 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/news/tottenham-transfer-news-savinho-gakpo-34466316"},
  {title:"Tottenham Hotspur vs Hoffenheim: Club Friendlies stats &amp; head-to-head - BBC", source:"Google News", date:"17 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMiZkFVX3lxTE91RDRrY2lPMVU2WnQtTXlaX1ZkMXB6RWJVOFBuOGZFNlJxOUtndnpiaEpfSHdxdWdaWVFaOXFwYmhIN3MyUjRvVk10c1poMnZaeTRydC1uM3NfWGhaZmFycV91RkFvQQ?oc=5"},
  {title:"Reports: Juventus looking to sign Tottenham’s Guglielmo Vicario on loan with option to buy - blackwhitereadallover.com", source:"Google News", date:"16 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMi_gFBVV95cUxNdlgwWnhJOTg5eGh0NXc5d0FJRDEyWUNRXzcybFRER2RrTFVYODlXWUQxeVZxVXM3d2N3WXVYem9aTHlJSE01SXNhZzU1U01FdFNpQnJGelJ5RVdOejBibkZrUGJqdUx5RVRIc2R3QWJ6ekFmeDFtM2E3LXVudVhka1U5Q1BjOEdfTjc1aU9vd2t1WWxKOWlXOUlDVFRLSnNOZWVfeUhoZmI1eTg3OU1GQ0RUUFVXdDVjQjBtRkxKTlFsdWJsU1Raclc4UEpROGd1SUlBQmwzVzdUb04wWmxib1hudE9ndWdQUnJGdkF3ZjlwV3FFMXpNd0h0eU1odw?oc=5"},
  {title:"Where Tottenham stand in all-time Premier League points table amid claims Aston Villa are bigger", source:"SpursWeb", date:"16 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/where-tottenham-stand-in-all-time-premier-league-points-table-amid-claims-aston-villa-are-bigger/"},
  {title:"‘Closed Tomorrow’ – Deal With Tottenham Hotspur Accelerates Quickly - Inside Futbol", source:"Google News", date:"16 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMiqwFBVV95cUxNN2N1dnR3YVhacExMSUY1ak1fQUp0bUNkWlBDMFd6MFZiQlJRVzI5V1JxZzZFU1Q5bE8xdFU1UGluenp6UkJ5Z0J2NnJaajVLYjE1OVJjLUJBYmh3UGdKcWhoMHdVeS1FWjk4TEt2NWlrUFE4QTJVd0RQM2MxTlpYZVEwZWdxdWhoTUd0VWVodGYtTHl0QjVuZ0hqOTNDSlV0MjVPNGs0Wks0SzA?oc=5"},
  {title:"Essential Tottenham Hotspur figure promoted to Sweden&#8217;s new assistant coach", source:"SpursWeb", date:"16 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/essential-tottenham-hotspur-figure-promoted-to-swedens-new-assistant-coach/"},
  {title:"Tottenham and Arsenal could battle for Victor Osimhen but there are two big problems", source:"SpursWeb", date:"16 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-and-arsenal-could-battle-for-victor-osimhen-but-there-are-two-big-problems/"},
  {title:"Tottenham identify 6ft 5in &#8216;basketball player&#8217; as surprise striker option after 15 goal season", source:"SpursWeb", date:"16 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-identify-6ft-5in-basketball-player-as-surprise-striker-option-after-15-goal-season/"},
  {title:"Heurelho Gomes hails one &#8216;incredible&#8217; Tottenham player who &#8216;will become top&#8217;", source:"SpursWeb", date:"16 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/heurelho-gomes-hails-one-incredible-tottenham-player-who-will-become-top/"},
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
