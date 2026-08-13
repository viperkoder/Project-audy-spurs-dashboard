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
  {title:"Atletico agree deal to sign Spurs captain Romero", source:"Sky Sports Spurs", date:"13 Aug 2026", tag:"Official", url:"https://www.skysports.com/football/news/12040/13571751/cristian-romero-atletico-madrid-agree-deal-with-tottenham-to-sign-argentina-defender-after-long-term-interest"},
  {title:"Djed Spence had to leave Tottenham for one incredibly simple reason - LiveScore", source:"Google News", date:"13 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMi0wFBVV95cUxPS2xtMFFSQkktdG0yX3pNbEJib3UwdVdRbjlIU09CUm5DNThsWlNLV2NDVXZNWnpLZFkxa3NyTUhWMmJCdXRNaGZvN2loTlByUUx1cFZwelRYQmUybmlsdU9WTVMwbU4yNkJSTnRrdXlIRUdfdGJXUGI4czdQMzlUaE5sckJHTzZNaU9CcE9kQjVsNU91UkF2a3NkUXpnLUw5bWxMcFlQMGNrbmx4UVl4NkxpNlFEM0JHXzJDVWxERTVpX3R2NGFGMjVoT3FzSTI5MFln?oc=5"},
  {title:"The Hoddle of Coffee: Tottenham Hotspur News and Links for Thursday, August 13 - cartilagefreecaptain.sbnation.com", source:"Google News", date:"13 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMi2AFBVV95cUxOdm5nZmtEbkRrdE1pRmtTQm9lLUFxTS15UXpyR0pfV1JNMGZoOURaQ1d1blNtbkJXS3oxbTBHbmFQYWZZeXV4dkk4c2dEejhwa3FNTmZ3dDF0OE40c3YwSVl2a21lT01vQzJROE9pZGlnc1d2VFBuV1dsZFdUeUlpNTVKRUFiZHl2aHRqZkh1eFV3azNqQW9rLWxSYnpsVUNHYzhncXR6MGpsM2duTFYyN3ZmeUdURjBwVmpSeHV2VHJwN2oxQUtYR2ZBVW1qcUNRYjBoWE90bmw?oc=5"},
  {title:"Roberto De Zerbi's Dream Tottenham XI vs Brentford After 3 More Signings Made - GiveMeSport", source:"Google News", date:"13 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMimAFBVV95cUxQVnZmQ3d0ZHNWR2tSaV8xdGVSekFka3lzMm9UMUJSSUhEWnhCd3ptRmJwMVk5MXh0RC15WGRyZkdNZGpxRi15ZTlWUW1mOUNId09WaDFERElwaTlDSVctdjFrdzRZM2Z6ZWlVY1d0STBjOVF6VVNPamVGdG9nSmx0T3RUSkZYYklkVzFFblljSS1vQlRyMFlKUQ?oc=5"},
  {title:"Tottenham transfer priority becomes crystal clear as Roberto De Zerbi given £128m verdict - football.london", source:"Google News", date:"13 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMitgFBVV95cUxPbEczYVA2VldGdmhfTG9WTG80SGYxSHM3eHduX2pEbTlKNkNrZk9oUDZkZGJtMEZRZTVRUkZfWXo0WnNNRllNVmhnX21RWFZxblhoUFZxWW1XbWo2UWZEb0d3dm9VdEpKTlNzcGZvS1RBeWIyYUpJdmY2MlRHZEhLX2E1TGowSnVwRmFPb3VfS1JLNkZyTTE3b1lFTXREVXMxVTVkNFVNRUhWTzltc2xBNDZvVGszQdIBuwFBVV95cUxQMXFfMkwteWx4Q1p3dVl5RjlnS0VTRXYxNTdCTWJsdUR6dUNTTlNHVDBFdEVXbEhJUnEtVzFFR0FmUnExZE9uNGxPM0FleG5QN3hwWHZWUnRKdTY3VEpPX1RpUEt4ek1PdzdOUzM5bVc4MVJWZXhUNU1CQWJrQk15bGk4NnJzQXlKQS1aRElMeV8wV3hRUVhCVXRwT0R0bnQzR1NjbUpncl9qeWtxMjcyR2pLSzF3SWtFZGtz?oc=5"},
  {title:"Source reveals sell-on clause Tottenham have secured in €40m Romero transfer to Atletico Madrid - LiveScore", source:"Google News", date:"13 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMi9AFBVV95cUxQbVhjS3FWVWg2VVFWd0daeVFFOWlYLXJsODRTTkJLUS1ha0pVZ0J0RUdRZGZSQ01keFBWU3U4eUYwOHliaHBMQkJlcUs5dDJzc2hXaTF1RGdXekFmOThKOGxfNy1EZl9NYTZib01aLVMya3BQLWFPcWtFSEVOZzIyNU1leFNmOFVFWUgxODd2UFozRUY0M1FOUFVlS0VsNVZoU3AtWkdybkJNb3Y3elg1ODJGY093QU9iNlk2WkkwYzdfaFI1Z3lTUng3SXNnQjdLNXZBcjlLR3NyVXdSS18wMGtLTE5pM3Q0TDNMMkdGT3VFcmNi?oc=5"},
  {title:"Cristian Romero to Atletico Madrid: Key clause 'revealed' as Tottenham Hotspur 'reach agreement' to sell defender - Sports Mole", source:"Google News", date:"12 Aug 2026", tag:"Interview", url:"https://news.google.com/rss/articles/CBMiggJBVV95cUxPUkFiUkhQNllPS24zT3U2NVY2OEl2eFVRUlA5cUdWdWNMRzhncUNOTHYwbFhqaWppRnpPS25BclRqZktWQ2dVejlTbW9GWTJjM3RRbU5jbldhS0tCeGxqZmJmODRhMmMtMmwtcVZuVExmbEpsVVcwVndIeGZUaTNJVDJSVXcyT01uUHZhVVhYck54Y2RkTTZtcXE5MW0xV3lsNDJ6X1ozTlFVTDlKSGFvVkRfeWpLRjRrQ1c1alhRR2xCcDJZOExLdGxId3Z6X3pVRTFsMHl5YXdFclU2NW9HbmlqZGctejU3TlZYWGVwREZ4NVNxTzZHMHZWbFhIeHFRdGc?oc=5"},
  {title:"Tottenham Hotspur make move for €60m Newcastle United striker target - Read Newcastle", source:"Google News", date:"12 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMimAFBVV95cUxOYUluVTRualYwdVlQaFU2N0tsR1o4akluSEU1MGVhNU93X1BZbDR6b2tqYk5rT25UMWctUXN1WHpwRWdjRXVtSW1mR1RBbDNpVjNPX0VOQS14bUdTTHFuWmNjNDVDb3lSeUFnbWRja2NUX3dBaXFGYVptaFRxc3JzRWp6NFZnbURqUXhJSXhObF9KSURBUGtLWA?oc=5"},
  {title:"Tottenham transfer news LIVE: Cristian Romero agreement, Balogun bid readied, Osimhen bombshell", source:"football.london", date:"12 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/news/tottenham-transfer-news-live-balogun-34442792"},
  {title:"Tottenham transfer news live as Spence in advanced talks and Osimhen bombshell - football.london", source:"Google News", date:"12 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMioAFBVV95cUxOY3BVRVRyaTZIaE1LUmEyMVhLRE5jaFFYYUJmeEs5eGpaT2xtWmd4eVpWX0VRdmtONFdvY2ozejhpNUtkTXZpNDJHbzVpTkMtVWlnUE1obzIzRmRoT0QyaDNzdnlaMXl6M2RPUzdJTk5RVkZEeHA2TWYyVXp4eTlDSEVDV2tVYnV4U183SFNSUXJQallGTkJ0M0U2ZDZ5OWJk?oc=5"},
  {title:"Cristian Romero set for Spurs exit as Atletico Madrid strike £34.2m agreement for Tottenham captain - Goal.com", source:"Google News", date:"12 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMipgFBVV95cUxOVXRMYnZqOTlRZGZvS3lUODN4dHlTYzl4SDVPcUhSb3RhejNnT0NuM29lenZPUXlFUzdEZktKcW9YNTJCSkJYZElYWXNxZUl3Q2RRVGlnY3o0MU1IOWJfVFhMbzBORjhES2xlRk1GSlZVMmpEQ29wTGktcWkxaEluQ1UxYmVTM09teXVYY21ESjMtNkozOGR1RWJDUzBVWlJKMVM5VUd3?oc=5"},
  {title:"Atletico agree £34m deal for Tottenham's Romero", source:"BBC Sport Spurs", date:"12 Aug 2026", tag:"Transfer", url:"https://www.bbc.co.uk/sport/football/articles/cy8e2vx2l30o?at_medium=RSS&amp;at_campaign=rss"},
  {title:"How Lucas Bergvall has reacted to De Zerbi&#8217;s coaching at Tottenham in pre-season", source:"SpursWeb", date:"12 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/alasdair-gold-reveals-how-lucas-bergvall-has-reacted-to-de-zerbis-coaching-over-recent-weeks-tottenham/"},
  {title:"Tottenham fans receive contrasting update on Savinho and Cody Gakpo, confident on one deal", source:"SpursWeb", date:"12 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/tottenham-fans-receive-contrasting-update-on-savinho-and-cody-gakpo-confident-on-one-deal/"},
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
