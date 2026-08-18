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
  {title:"Tottenham transfer news LIVE: Savinho moving closer, medical booked, Gakpo latest", source:"football.london", date:"18 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-transfer-news-live-savinho-34474637"},
  {title:"Tottenham transfer news: Savinho progress made, Gakpo latest, new £20m deal emerges", source:"football.london", date:"18 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/news/tottenham-transfer-news-live-savinho-34468569"},
  {title:"The Hoddle of Coffee: Tottenham Hotspur News and Links for Tuesday, August 18 - Cartilage Free Captain", source:"Google News", date:"18 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMi1wFBVV95cUxQZHU5SHhYZVdBdVdVcldTTUNleGlueGlFTnlmbFdGUVR1NnJEdVNHN3g5MGdTcktnUDBZWWtoN3F1XzhESUNfSUpKZnZVeDJRbll0Z3JPa2hqWHJEMGdaTFFOMU9RekRRbVRUNG5QV2ZaMmpHWHZNbUFtQ2FOVkNCQkV3T2hGY1pyMGFoWTU5OF92c0w4M1l3dFYxYVRhT2tNUl82SHVOUlNTQzNKd0VVVWVDeWJVTFRUSFo5M3pieVNFZk5LMzdmWmpHemk0dTllc0MyUkRWMA?oc=5"},
  {title:"Full confirmed list of 39 Tottenham ins and outs for summer transfer window with £213m in sales - Football London", source:"Google News", date:"18 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMipwFBVV95cUxOQUhHQk1IMWVOWFphNm5fTGtoSWRFb3BtX190Nnc4dEs2UHdmNTRmZ0VOT1djOVVWRnlYd2xJOFBjdHBSdTVKN2hiQTdNMWhXNUU1UkYxcmFITmpPb1FQZXZCWl9BeFNJb1hIT2MxZ2paTnhlWnpXMXZWeDItZDl1ZzNaMzRUZG1HQ1A3aGpwbE5IcEJyVFh1d3hMdHVQcDhXbXZ6aUphd9IBrAFBVV95cUxNMmZickJUWl82Y3JobkpfN3JVVXFWb2diTXluRU11SGdUV0JnV3pVS2FKNGJoTlVNSlBKb04wdkcwNG5wWkhINnp5MEpKS3pfM1hBcmk3U2JBNFg2V3dFSWoxb1NFQV9LZHZtZlIwdzBZQ1J5c3hESHVzOXRtT1J1WUR3VFFDZlJJLVM2TEFKWWU3d05jZ0psMDBkdGhIbzROWmRfQzZSbmhmSXVo?oc=5"},
  {title:"Arsenal and Tottenham can both offer Victor Osimhen one thing he wants in transfer battle", source:"football.london", date:"18 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/news/arsenal-tottenham-can-both-offer-34471251"},
  {title:"Tottenham&apos;s dream starting XI for Brentford clash with two signings and three exits", source:"football.london", date:"18 Aug 2026", tag:"Official", url:"https://www.football.london/tottenham-hotspur-fc/news/tottenhams-dream-starting-xi-brentford-34469944"},
  {title:"Jamie Carragher's prediction for Tottenham and Chelsea as Spurs eye Cody Gakpo - liverpool.com", source:"Google News", date:"18 Aug 2026", tag:"Interview", url:"https://news.google.com/rss/articles/CBMiqwFBVV95cUxQdnZ2MTZYc0xWSmp4cjdBTmdBUjRVMklzdkR6ZmtBSWFEVVk5QWVCVWp2blBEeXlTQUI4SUVQX1JkU1gtVFNYX2xKbEEtcjc4ODltTzhkVWYtRk5IWFh0aldScGowS0RQZFpPYXl2WXpWRl9vWmpNQndldU0tZ2hDNk4tV3Q1dzhmTm40UDZhQUNXeF8td3l1NVpJUU1fQmFYTzNBdm9xY1ZkODTSAbABQVVfeXFMTmhFOEZzSlh3VkEwZG41aEo5VktTVENuRmF6RENVaV9YZjByVklUcEg1RHAyaWhjSTBGZUpaVndDd0gtcWtuOWZHQy1DM3NtZHAyN3d5bUgwYkhyWWpBcEhyRVJyQWk3YVJmTEl6Q1lMQ0toSlIxSlhEVFB1R2F2M01rTFRNVzZhZU5LWk9WS0RoQjVrMnoyd05RQnZJS1RwUmRKcXVNSWtyVWZJYUZGRE8?oc=5"},
  {title:"Lucas Bergvall transfer stance revealed after four straight starts at Tottenham", source:"SpursWeb", date:"17 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/lucas-bergvall-transfer-stance-revealed-after-four-straight-starts-at-tottenham/"},
  {title:"&#8216;Several&#8217; things need to happen before Cody Gakpo can join Tottenham for £60m+", source:"SpursWeb", date:"17 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/several-things-need-to-happen-before-cody-gakpo-can-join-tottenham-for-60m/"},
  {title:"&#8216;Still deemed too high&#8217; &#8211; Rival transfer may be holding up Savinho to Tottenham", source:"SpursWeb", date:"17 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/still-deemed-too-high-rival-transfer-may-be-holding-up-savinho-to-tottenham/"},
  {title:"Ben Davies gives big insight into how De Zerbi&#8217;s tactics have changed at Tottenham", source:"SpursWeb", date:"17 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/ben-davies-gives-big-insight-into-how-de-zerbis-tactics-have-changed-at-tottenham/"},
  {title:"Galatasaray tell Tottenham and Arsenal how much late Victor Osimhen deal will cost", source:"SpursWeb", date:"17 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/galatasaray-tell-tottenham-and-arsenal-how-much-late-victor-osimhen-deal-will-cost/"},
  {title:"Big Mikey Moore to Köln transfer update after eye-catching Tottenham brace", source:"SpursWeb", date:"17 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/big-mikey-moore-to-koln-transfer-update-after-eye-catching-tottenham-brace/"},
  {title:"Cody Gakpo and Savinho may not be the only two attackers Tottenham sign", source:"SpursWeb", date:"17 Aug 2026", tag:"Official", url:"https://www.spurs-web.com/spurs-news/cody-gakpo-and-savinho-may-not-be-the-only-two-attackers-tottenham-sign/"},
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
