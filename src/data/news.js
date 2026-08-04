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
  {title:"Mateus Fernandes believes Tottenham can fight for the Premier League title", source:"SpursWeb", date:"04 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/mateus-fernandes-believes-tottenham-can-fight-for-the-premier-league-title/"},
  {title:"Liverpool 'will accept' £70m Spurs offer as another 'not happy' Reds star wants to leave - Football365", source:"Google News", date:"04 Aug 2026", tag:"Interview", url:"https://news.google.com/rss/articles/CBMirgFBVV95cUxNNklqbzlFb2drUW1YdUlIZF8xNkZBcmVCWmJ3OW9PbVlILUltZDdlRkVMUDJpcU9TYnFtbWxDUThkUXFUYnZxbXBtZElRTnlSQ1hGTGFGLS1PVzhfODlhNHJoay1ROUloT0t6cDIxelY0YlFFSTNETklDblZPamgxQ3duYmtWdmZuM3lKQ2tpU0JPbTVwUF9nWWlsdXViSzFGd0dXMXpxaW9FcUZtWVE?oc=5"},
  {title:"Tottenham Target Opens Door to Transfer as Fabrizio Romano Issues 'Concrete' Update - GiveMeSport", source:"Google News", date:"04 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMikwFBVV95cUxPRlltOHVXVHZZYzVYMTZ5SWxvNklqTGpxLXk3Nk9vX1NoQk5yeUduVnJGMWRab1RDWVA1ZEVjRm9ITzdTTDdyaVpseHlIZFZQd1k2dDJvbXNDeHE0MnZCenVGNUhzQUR2RmRCeGtudjktcUJlT2kyYVFiaVFneUxaZ3ZqVUpBcl9jNnRuZWctLXhsSms?oc=5"},
  {title:"Tottenham now told to pay 'truly extraordinary' fee for 'special' World Cup gem despite £47m bid - Sports Mole", source:"Google News", date:"04 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMi5AFBVV95cUxORUcxQnlrRFgtM1FGc0F4dm9NV2c2YUI5ZnBXQTdjanNyTHRmZ3d2akdQMEVXVGNfRExSbE1KenNvLS1SVU1WV2dHVWdjVGZqbHIzVlNISHY4WnBpaU1XVWQwY1hiZFhiblNrZ2tSbFBJR1BsVDU2MlJkUDNZbko2WVh1VlB0Tk50TUpCbmlNdHA0V19iaXA3Mzk1d05XQWZWU0hQc1NKUWZaSlJOVjlwTWFoV2NaajVHYjM2VmlOdGxmdDVKM0pRTTdEUDFyMncxUGk3WDR1WGlKVkJRNzhZaHNqclc?oc=5"},
  {title:"Roberto De Zerbi needs cash injection to build dream Tottenham frontline around Cody Gakpo", source:"football.london", date:"04 Aug 2026", tag:"Club", url:"https://www.football.london/tottenham-hotspur-fc/news/cody-gakpo-tottenham-transfer-liverpool-34397422"},
  {title:"Tottenham Submit Offer to Sign 'Diamond' Forward as Asking Price Met - GiveMeSport", source:"Google News", date:"04 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMihAFBVV95cUxNNVpfTXJVdy1YRV9KTjd0QVFJYVBOUi1MSWhSaEJvR2xqSExEcDhHaXh0djRidnRyVGlEbEE5TmFZeTdieGpqSFo2bnpqTjBqX0t1b0JDRmp6bnJFRzl6V21WYzBVWXVTbXFRbllHbGtieTN0NHdvWHlaUm50dnhTNUk4TV8?oc=5"},
  {title:"&#8216;Soon&#8217; &#8211; Fabrizio Romano provides big update on Tottenham talks for Cody Gakpo", source:"SpursWeb", date:"03 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/soon-fabrizio-romano-provides-big-update-on-tottenham-talks-for-cody-gakpo/"},
  {title:"&#8216;We&#8217;ll consider it&#8217; &#8211; Director open to selling star player if Tottenham bid £51.4m", source:"SpursWeb", date:"03 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/well-consider-it-director-signals-openness-to-offer-as-tottenham-circle-over-25-year-old-midfielder/"},
  {title:"West Ham eye transfer for forgotten Tottenham star, 27, who hasn't played for the club in three years - The Sun", source:"Google News", date:"03 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMikAFBVV95cUxQbmM2dVFvekNZSktvcDNpTmZwMFZ2S3lJZm93eFBuOUtKck9ORVVnemFONUd3cDN1MDJEZ3pBNGVjczNnZjJmaTltc3NTOE1kdzMzODctVkN5My0xdFJ1QVVHcjVCaW40UjVSRjU0dkpVUlRXY1Y5dG5qWkZYeXhCdVRPclpMSkVrNWVZY1FnT0M?oc=5"},
  {title:"Tottenham reach out to £43m-rated Italian defender to guage contract demands", source:"SpursWeb", date:"03 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/tottenham-reach-out-to-43m-rated-italian-defender-to-guage-contract-demands/"},
  {title:"&#8216;My second dad&#8217; &#8211; How De Zerbi convinced Matues Fernandes to join Tottenham", source:"SpursWeb", date:"03 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/my-second-dad-how-de-zerbi-convinced-matues-fernandes-to-join-tottenham/"},
  {title:"Cody Gakpo&#8217;s best and worst Premier League seasons show what Tottenham would be getting", source:"SpursWeb", date:"03 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/cody-gakpos-best-and-worst-premier-league-seasons-show-what-tottenham-would-be-getting/"},
  {title:"How Tottenham are &#8216;dismantling&#8217; Daniel Levy&#8217;s tired structure behind the scenes", source:"SpursWeb", date:"03 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/how-tottenham-are-dismantling-daniel-levys-tired-structure-behind-the-scenes/"},
  {title:"The Tottenham shirt numbers Cody Gakpo could take if £72m transfer goes through", source:"SpursWeb", date:"03 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/the-tottenham-shirt-numbers-cody-gakpo-could-take-if-72m-transfer-goes-through/"},
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
