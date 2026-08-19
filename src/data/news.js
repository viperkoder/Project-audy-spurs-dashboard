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
  {title:"Tottenham transfer news LIVE: Savinho deadline, Pedro Neto price named, deal confirmed", source:"football.london", date:"19 Aug 2026", tag:"Official", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-transfer-news-live-savinho-34480828"},
  {title:"Even Better Than Tonali: Tottenham Plotting Ambitious Move for Champions League Winner - GiveMeSport", source:"Google News", date:"19 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMijAFBVV95cUxNRGt1ZHpKWlpwZHBrZUZpZkR1cjR0MmxuNW11ZXk2WXhfdE1RcElZUlRoMElnV0d2cG40clBPUHkzbWdIMEZaV2xqOUo5a3AxMVN3Si1fTXg1bUNuN3MwVDVWYVhxVlUtS1VteFprVmt3WVRrZk4tOVJBVS1acXpGRUctbHdfZHlfZzduTw?oc=5"},
  {title:"Tottenham missed out on the perfect backup RB for Pedro Porro (and to a rival, no less) - LiveScore", source:"Google News", date:"19 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMi6gFBVV95cUxNcy16N3FQeEZwV2dQQ2hFeUdZanI4aS1tOTZZXzUzLW9COXRyejZadkREclpnMmRQTWFQbzkyc1FGa1UxOG8tT1QxbXUxc05YSTF6N1ZDTlhOcm5JSW1lVnFGanZXamQ0V3pWUjdnSzZCZHhrbDE5eF9kWVZTZU04RHJ1TThRdm5ibWhTVzRSb0hicm80eDNOZUNuWHg5cDFPeHhTVTkwU1BCNGw0eWozemdoMC0zMUpaakNxUXpKT3VTVk00Ty00XzNuZVo1c0xIZ0NrdHNHS3dGS0xKTUZwb01HbW96NzJSVVE?oc=5"},
  {title:"Tottenham given Champions League qualification verdict as transfer agreement reached - Football London", source:"Google News", date:"19 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMirgFBVV95cUxQWkh2SnhtN1lSaHN5ZTBleWZZRXAtNEhxOFUwUGxwb0lkVTdUVElxd09xRU5rQmxGWVg2OHNaWUhGUmU1TDBkSUlqYVI2WDgxeVl5MWF4NUx1RE1jT0FlWjQ0WXVsVjBKRGltRl91cmtpQ0FfNEFlUWhMeWFWTnhRT0VaMWpZYjcyVGluRTZ3bVY1ZUxlZ1psTkpLakh2XzdZc1NqcFJEanhOcTM1SFHSAbMBQVVfeXFMTWh2Mm0zZkpnSTEwZ2IzSlRnWjIzVThWT3JrVmFJUXRzSjFBYkhBZ1hDaV8yV2JheFpLVThMU19CWWdSWDItZmZybVJDd2VzMlV1QzdUUkdrNmNUOWpYTmxDWVFnRmZGSGxmc0VKb3ByVGtuaUJ4eUw3eGNrZzNGUUxadnZxQTk1bXhlLUJlQnJBNS1NT1dlWGtqa3hDa1ZhUDFaQlFUQTBxSk41Rm94dzk1RHM?oc=5"},
  {title:"De Zerbi told Tottenham transfer decision could be a seismic £100m blunder - TEAMtalk", source:"Google News", date:"19 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMioAFBVV95cUxPYXM3UmcyOGhmX053TW9yRHFPRjBGTm80MDZEaktJMkVpTHdqWUdFX1Ruc0ZtMERwUTNldlE5YWozdE1OYjhPWHdIbmpGeVFlVjF3V3ZWNnkwTmREaDdLaWc5QXlZTEF1UmxKRXczQk9vRnVERzFYUWs4ZHRIQmN1Y0pmUFgzTFlEeWNaZlE0WXNUZDBYRXd2cVFQeXBCQnFV?oc=5"},
  {title:"Tottenham given Marcus Rashford encouragement as Robert De Zerbi able to offer major carrot", source:"football.london", date:"19 Aug 2026", tag:"Club", url:"https://www.football.london/tottenham-hotspur-fc/news/tottenham-given-marcus-rashford-encouragement-34477402"},
  {title:"'Tottenham feels like an ambitious football club now'", source:"BBC Sport Spurs", date:"18 Aug 2026", tag:"Transfer", url:"https://www.bbc.co.uk/sport/videos/cjrvwd1ve74o?at_medium=RSS&amp;at_campaign=rss"},
  {title:"What De Zerbi has told Richarlison as Everton in &#8216;regular contact&#8217; over late Tottenham transfer", source:"SpursWeb", date:"18 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/what-de-zerbi-has-told-richarlison-as-everton-in-regular-contact-over-late-tottenham-transfer/"},
  {title:"Everton In Talks Over £30m Return As Spurs Open Door: Best Deal For The Toffees? - The 4th Official", source:"Google News", date:"18 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMiswFBVV95cUxQQjBQd2k0MVVDUnUxc2FueXZrcUVsWGkzQ0dnUG5iTG9fWlU0MVFheThxZ1l6SDRlMmk2bExpRm5fQXdjRWZnaEZJYVk1QXdXOEJWYldSWkF4bEFzVzN4NXNsYTk2M1hCYm9oamhkRUFiTjhYYUJwaTlEbkdLTkJDazFRclFMSEduZGZSTG9BX09VQWtTNENTY2xpXzFnU0xwMllWMXVxcXN2cEY4MGczTHAzcw?oc=5"},
  {title:"Tottenham transfer news LIVE: Savinho moving closer, Gakpo latest, deal confirmed", source:"football.london", date:"18 Aug 2026", tag:"Official", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-transfer-news-live-savinho-34474637"},
  {title:"Tottenham finally set for major cash injection with deal close after team-mate confirms exit", source:"football.london", date:"18 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/troy-parrott-transfer-betis-tottenham-34480436"},
  {title:"Roberto De Zerbi intervened to halt Tottenham loan just before player boarded flight", source:"SpursWeb", date:"18 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/roberto-de-zerbi-intervened-to-halt-tottenham-loan-just-before-player-boarded-flight/"},
  {title:"Supercomputer predicts where Tottenham will finish in 26/27 Premier League table", source:"SpursWeb", date:"18 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/supercomputer-predicts-where-tottenham-will-finish-this-season-premier-league/"},
  {title:"Ashley Young makes shocking prediction on where Tottenham will finish this season", source:"SpursWeb", date:"18 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/ashley-young-makes-shocking-prediction-on-where-tottenham-will-finish-this-season/"},
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
