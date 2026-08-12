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
  {title:"Levy goes up against Spurs owners to buy London's NBA Europe team", source:"Sky Sports Spurs", date:"12 Aug 2026", tag:"Interview", url:"https://www.skysports.com/nba/news/12040/13572016/nba-europe-former-tottenham-chairman-daniel-levy-vying-with-spurs-owners-to-buy-london-based-team-in-new-basketball-league"},
  {title:"Inter Milan in talks over Spurs and England defender Spence", source:"Sky Sports Spurs", date:"12 Aug 2026", tag:"Club", url:"https://www.skysports.com/football/news/12040/13572037/djed-spence-transfer-news-inter-milan-in-talks-to-sign-spurs-and-england-defender"},
  {title:"Tottenham transfer news – Rashford update and Spence 'bid' prepared - football.london", source:"Google News", date:"12 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMirAFBVV95cUxPOUYySUllcXRheHJSTmhtcll6TW5OdzBaNjR2blRGU1FpM1lJMENMaHIwTkpOUF9aWVJCN2x5Nnl4VElmQi1lT0RfLTFhSVdVb2hIU1BjSkxtR2kwb0ZzTWpwc2RUNEEzbERJWV9MOFk1Nm82ZUo5MWFiVHdjcFBZbTdudzdvNDV0N0pYUVNrRVVFYjZWSk5sXzRReHBpbXZORFdnVVc0M3dTdkFV?oc=5"},
  {title:"Djed Spence transfer news: Inter Milan in talks to sign Spurs and England defender - Sky Sports", source:"Google News", date:"12 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMi0gFBVV95cUxQNi0tSG0wS3FuS2NndG8tLWdWNjdvWnUwY2lqYVRBMlB0X2lQSlhwYlFuZWZrcU1Sd1ZUYjBGOUVSQ2hreGZIZnpSXzZQYmMzdkpTWElfYlBrQUljNzJRNmdHX2JaUEg1WWJ3SUVrRzRicXltbXd3NjFRZndSenFxWHFPUmRpX0hxeDM0VFJ2UUJCODdadDdleHBKMENLOEpSVDlkWUdFaER5SXJXdWlzakd2a21lRjJWRmNKbVdLUTlBcFhIcGtzR1RUNnlmWGtlVVE?oc=5"},
  {title:"The Hoddle of Coffee: Tottenham Hotspur News and Links for Wednesday, August 12 - Cartilage Free Captain", source:"Google News", date:"12 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMi2gFBVV95cUxOZWtadE8waThsVF9kV0VxOWtBdEhjTHBzWWplQUpLZkVUU1h0MlJvbUt0a2lKYnFiMTVsVWVJeVlFaC1pYXlvTmFzbG5SU3M4NW1yelpjdXZSXzkxYXd2TWRFY1BPY3d1X0RhYlM0bUJJVF9GZjFmdnFWYjI0a3dBQnNNQ29VZVBvMEZFUFk4d2F1dXRQSWxxdG5HV0dkVi12UExmRGlBWjFDN003b0x3Z003Q2tua2ItdFNiOWJwOTlzVHk5U0s3d0pyLV9MLVE2dkNhaFhXWXNOUQ?oc=5"},
  {title:"Tottenham Accelerate Move in 'Last Few Hours' to Sign 'Insane' Richarlison Upgrade - GiveMeSport", source:"Google News", date:"12 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMimgFBVV95cUxQQzZSb01qcThEbFNINXlNY3pHQXgzVTVCSnZLVjhaRF9PUWdSMWlDdXduN3pGMzZwTGtuMmtQSkgtTGVpT0pTOTlCVmVTSGowc0JDQ3dmencwUmIzRnhmaGR1Y0dhM0JVSy1XRm1Da2w4ZlVlWnMtYVEtYXhMWmhGcGxFZ0IzNjBVZ2E1TjhGTWVkTzVQSE5wdWl3?oc=5"},
  {title:"Tottenham transfer news: Rashford update, Djed Spence &apos;bid&apos; prepared, Romero future", source:"football.london", date:"12 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-transfer-news-live-balogun-34430460"},
  {title:"Frustrating Premier League rules mean Tottenham cannot register certain transfers - football.london", source:"Google News", date:"12 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMirgFBVV95cUxQOEM1N20wM3prVmdRZGNQX1M1WW5ZMEJnczYzR3ZDN1lOdl9BUUF0ZDBrQlNlN0FJeG9CbTBQNm5EbXpCN3hnQ0V0UmJObEt1eXhBSE1Hd25ha2MxbVVPZ0RHM1UxdmgxTkVrSHlvWkZLdFJTMk94cmR3Q1lrS25vV2tPYko1ZlE5dHBEbXZYTDU3MmNkYUNGOUk0VFdJSl9JaU40a0lYc3duU1ZQa2fSAbMBQVVfeXFMTVhQb212WFVHNlcwcS0tWVZEMkhVQ2c3OGdEQV9ybzl2WUw0QjNGdWowOENucldDN09EVG80MVJuS2lnVzNMemdUQldqNllPTlNfWUJpRDRoXzZ6MFlyNHpuUl90RHNWUUVFSXNLSEw5eTZ2aGJhVHNKVzBSR2liNkEtaFh2WllGaUNqdHNYQjZqdDJTQU92czdUTWFKWjMtTVFhRVVDc2RTQTdiVkx1UlY0bDA?oc=5"},
  {title:"Scholes names clear winner from Arsenal, Tottenham in Guimaraes, Tonali deals - TEAMtalk", source:"Google News", date:"12 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMiqgFBVV95cUxOLWN6bUVuekgtdWp0QlRCbFBZREFZUy1QMXJPUE1scHJLbWQ4VlZqbFZnUEdYdTJRM3MycGVoRWhlX0hHTnRNdi03SGlKN0l0TUNyX1lTaVhLY1Q5NDdtcl9rekdldUNwMDl2RDR0MlR2TVFJUjRHa1RKY0UxRHFZcW91X2xtYkhEM3Z0NDlkOW9TdTd5ZEJnRVFoNXZQUjBWMW5NcU9IZVJ0UQ?oc=5"},
  {title:"Why Spurs selling Romero and Spence would signal a big shift in their transfer policy - The New York Times", source:"Google News", date:"12 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMilwFBVV95cUxQRWRyM0dLMlNpenVKai04NDl1ZUhsVWJHOW5ZSXhTdHAtb0c2MlJ5QVdyaEpsbjUwV3czaVFCSTRPYlZGTC1YQXFKY2cycDgycElvUXppZnRfU0lxc29EUnVMa2pSWkIyUFRJNE9ZTENmQlJPU2tEQkU1VC1JNzNYM3NhS1JvempBYktJQURtREVPVHY1YVJZ?oc=5"},
  {title:"Djed Spence nears Tottenham exit with Inter in talks over £25.6m move - The Guardian", source:"Google News", date:"11 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMiqgFBVV95cUxNdjJnbk5hcjdLd0VKQXRmbVlfN0FtWFFNck9HRmVOdWYyZjlCNGtpbk5KM0hoREh1M2lzWXZCTm5MUG9XNnVSYmlVX3Z4anRwQjFrRVRrME5mMmNpbU1PUXdIcThWcHBxN2pvUnR6Rm5IV2w1N0wyQUd1RWZhNHdrNzNuV2FYeEg2MXlKRDFJMF9adkZrZ3FmbWEyanRJelQxbENYc2dnSkFpUQ?oc=5"},
  {title:"Latest Pedro Neto update comes as blow to Tottenham&#8217;s Savinho pursuit", source:"SpursWeb", date:"11 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/latest-pedro-neto-update-comes-as-blow-to-tottenhams-savinho-pursuit/"},
  {title:"Roberto De Zerbi shares how Andy Robertson’s time at Liverpool can help Tottenham", source:"SpursWeb", date:"11 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/roberto-de-zerbi-shares-how-andy-robertsons-time-at-liverpool-can-help-tottenham/"},
  {title:"Tottenham striker signing ON as €60m talks opened after Dusan Vlahovic picks next club - TEAMtalk", source:"Google News", date:"11 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMipAFBVV95cUxOR1JRb3ZVRTJIM195THFVMW9leVJKdjlXLU5yMlJhN1ZHM0U0ek1uM1JjV1RlZXZfNkxWTWhldk9idEJlX0dhanQ0bHBNNnNTaEU2R1k3UldwVGl2Sm9rNGx4WWNZVy1mTzFZaGREeUxOOW82NU9lMnVBY0pXcTBTNm5fMERQUHI4M3lFVE9GcjJYZHRrZ1l6b19iMWNoNlZDdnhpTA?oc=5"},
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
