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
  {title:"Papers: Romero open to joining Arsenal but Spurs resist", source:"Sky Sports Spurs", date:"09 Aug 2026", tag:"Club", url:"https://www.skysports.com/football/news/12040/13571259/cristian-romero-open-to-joining-arsenal-but-tottenham-adamant-their-defender-will-not-cross-the-north-london-divide-paper-talk"},
  {title:"Tottenham close in on £60m deal as De Zerbi targets final attacking piece - CaughtOffside", source:"Google News", date:"09 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMikwFBVV95cUxOZFROR3duV3Z1SElXckJwRFFRMWhDOVBJQU1oSU5hemx4Z2lTVGpSNHhET0xrRVNpVlJIRHFFbUxUZHBsWW1WUlBTVE9rWmphUXI0WG5VTGpKUktQUDlZMi1yT01fZWNQZndTLXJZeG95VXJjbFM2MW1nVzZWWngzdzNKT1JxQnBIVnpxdnJjeEVOUTjSAZgBQVVfeXFMT1BjUVdPUFExcE9RMlRXZXlxMUlyLTdPNUpqaFZJS3JlQXM1bzlrc0t6eWRwZ3N4SkxUZHVuSmNjUy1DajVzRDFhRENqZ2JycXdJTks4Q3dGUEM3dEVtQlpwa3dhZnBhamVCTng5WVNlNkw4eEFCdTZSVno5eVdWWDdBUzkzMWtqc0x1SDVXeG42N1QzWEdVV0I?oc=5"},
  {title:"Roberto De Zerbi will love what Sandro Tonali did in Tottenham's feisty pre-season friendly - Football London", source:"Google News", date:"09 Aug 2026", tag:"Interview", url:"https://news.google.com/rss/articles/CBMikwFBVV95cUxOQ2xfaUJVdDBPX0V4cTBCSk9VOTFXYTYyckE3Nk9DTTNTMS1KTmMxWFU5MDM5RUtsVUF6aGpKVGp1UTZyMjMyQ204UU4xM1hDZ0hINTdnLXJOeUg1Q2RxY0F6Z2I0dmxDUWU1N3BJcktxSG9XVElFMVpqazFKWmZMcklxVEc2VUpGWDg5Y1pFa1hNWmPSAZgBQVVfeXFMUG9YclRXNm9uYXZZeWMtVkNBWFVrX2dLTjdBRjVzQjR3NHBjOXd5SE1FRnpBQjdhbGFmS1lRQWtUUlFWckg0S3VpWVc0eVp4THhsRV95NTFRZlVPX09UVHRjLWRZejl0N1FsbG5ZRjN6MHpDOTNwSmtQcnVMcjhzZlZjU1VLb0UyS29NNUxjWllJOFR3TnlaM1A?oc=5"},
  {title:"Tottenham accused of chasing a &#8216;fool&#8217;s errand&#8217; transfer to solve attacking problems", source:"SpursWeb", date:"08 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/tottenham-accused-of-chasing-a-fools-errand-transfer-to-solve-attacking-problems/"},
  {title:"Romano reveals ENIC involvement as Tottenham reach decision on selling Cristian Romero to Arsenal - football365.com", source:"Google News", date:"08 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMiswFBVV95cUxNVDdIb0hPcjZ2OEdCUFpTVWt1bV93SW90UVEySTJYWGFaVEtfbHYzOVVRMHppNmxheDJhdzNaYktlWTBQUU5tWWRIVFUwaElHMjB2VkRHVERjQV9qaWVtQ3lDVERvaWRSb3k2dWJlemw1dExUWFhQWFRndkdQSWVvaWlwV0pJTG5zNVJZcFJhYWRIRHFDeDdHb2hmSm5NR0k5bGFQVWxIOThEVGlCYk1ZZXJXbw?oc=5"},
  {title:"Tottenham transfer held up as defender waits after Liverpool deal", source:"football.london", date:"08 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/romero-transfer-tottenham-latest-liverpool-34427698"},
  {title:"Who is Tottenham target Georges Mikautadze? Georgia forward with 23 goals in 43 games", source:"SpursWeb", date:"08 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/who-is-tottenham-target-georges-mikautadze-georgia-forward-with-23-goals-in-43-games/"},
  {title:"Tottenham star set for imminent West Ham medical after transfer deal agreed - Football London", source:"Google News", date:"08 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMiswFBVV95cUxQVGt0VDZxcDRZRXA0WElPTF9ZTU1OUmZ6VDVUOUFnNDFQd3JHMHd6bHRqaGtLMDg5Z3oxdGNIU0IxYzRtWkg2cDhpTlNXdTFEWlQxT1I2T1VXOWFuZHRRRE9fMWR0enVoOW9jUUlWSzZjcWtUSUhBS2RHdnVhY0NLemdpN0dpRnlvQWZ1Z255QWVFLTBza2hTdnVoX1E4QlN4ZXRiS0lSWkY1X1dwN0UzcmhsMNIBuAFBVV95cUxQT3lPaHN0cHREeVJ6aUZHYUgyVkFqYkV6TW1ZTUdiOUZlaVVJVnhSTzVMZEtBOWFvWVFwblhta25iWVg3TDlXUTlZOXE2Sm9VVFM5MTUxaWlCOFJNUGxHQm9FUHAtWFFqM1BJdm5kQ1Q2Nm5FS1BNSFZ3Y2JTbUFqRU5kQmNCVkhCRUx0VGlGbjZlN01GR3VWbkozNU1nV0RPa2Y5NkdwbFNldDRQQUQtdUxLcDFUd295?oc=5"},
  {title:"West Ham reach agreement in principle to sign Tottenham winger Manor Solomon in £7m deal - Goal.com", source:"Google News", date:"08 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMioAFBVV95cUxNejFld2FuS2hNX2Y1Wm5VbkRjWkc2c0dvTFNiZEJLZzdzOUJzRFZaSTNCbldnSGtjRWZDQnZ5N2h0dkVleWU2Z29vQXJKVzNTQ0gyWHVhQllscnJqd1Rvc3V0ZHNGSGloVVNPZ1JlalA2cDVPLV9rOXRhUEpXVWVsWk5yckhIY2dOS254d2dzR3BUdmRPLWZGWWlsUEYxNW5Q?oc=5"},
  {title:"Tottenham player ratings vs Getafe as 7.5/10 duo look well worth the money", source:"SpursWeb", date:"08 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-continue-their-unbeaten-pre-season-record-with-a-1-1-draw-against-getafe-cf-in-a-behind-closed-doors-friendly-at-hotspur-way/"},
  {title:"What happened in Tottenham vs Getafe behind-closed-doors friendly - goalscorers and result - Football London", source:"Google News", date:"08 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMinAFBVV95cUxPTWpSZDdfZnpzZnYxZlZKWktxb2FQTmJlYUJnb3lGUnB4TkNVSzNLZHNwTVVlY3Y2bWxQckFGdzRzdV9EeGJfclZHMXBzVGk0VWhYQ09Kb013QzlIRlRjWFk3Y2NZLUlZZ0Q5R09Tcm5BRTExVUs1QnlFaVZuSW1nVXV0MjdPZHZuSEFzLS1lQzRDa2o0RTVfdGJPMnfSAaIBQVVfeXFMTTMtZ0U5NzVUZmtud0hyaUxURUZGZ3ZxZm8xMmk2UGtuTGxoT1FXQmFWRzJfM053THlsVGpXcWNOQ1hWYjhqWkRfLUV0RkYxYlhXeUN6Ujg1Y0FYQjBRay1lVlhVSHowOWJKRGNIZmJEYVZzM3g4VXo0aXVZU3VnZDEyTFBacHBhZmFhTjR0WWF1eVJHbzV6YVphVjViZzloNjBB?oc=5"},
  {title:"Former Tottenham star becomes first player to be punished with new rule this season", source:"football.london", date:"08 Aug 2026", tag:"Club", url:"https://www.football.london/tottenham-hotspur-fc/news/will-lankshear-middlesbrough-tottenham-transfer-34427494"},
  {title:"Victor Osimhen wants Premier League move, but Tottenham must sell one of two players", source:"SpursWeb", date:"08 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/victor-osimhen-wants-premier-league-move-but-tottenham-must-sell-one-of-two-players/"},
  {title:"Tottenham summer sales could climb to £140m after latest £7m &#8216;here we go&#8217;", source:"SpursWeb", date:"08 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-summer-sales-could-climb-to-140m-after-latest-7m-here-we-go/"},
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
