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
  {title:"Tottenham transfer news LIVE: Balogun &apos;interested&apos;, Savinho latest, contract signed", source:"football.london", date:"11 Aug 2026", tag:"Official", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-transfer-news-live-balogun-34430460"},
  {title:"The Hoddle of Coffee: Tottenham Hotspur News and Links for Tuesday, August 11 - Cartilage Free Captain", source:"Google News", date:"11 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMi1wFBVV95cUxPVnV5SkxQR0p1dkw4R3NtWldUZW1LeTdlRjJMbGFxYlNRX05Ua1hWc196RlVWZ3VRYXRLZjItS1R2SlVHRVlnRnlBNW5OTnZiSGtJUW1IdEJYZ0pEZGlpb0RQMU54TXUtRmFFVDRaLTdHYmZsWWxRODZGa2dMTU9XY08tTnFjNHZKYXZONXRfMnBrekxGVXl0YUp1YThjOVZtX3g0STJyQ3E4R0ZCWV81UTIxMndXQnU4Ui10THVZTk1DV0dvcXdnZnpQM1dzOFg2WUpnOVpKVQ?oc=5"},
  {title:"Tottenham Hotspur Daily News Roundup - LiveScore", source:"Google News", date:"11 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMiugFBVV95cUxOSTR0OTR4VkNhaTM0NFhhdThZckRCdUdCRVZFWnNrcFd6WDBUNFdvdVVsUzZnRTZJQms3UHZaaHAyQzVFTk9nRVgxaEM5UVRtall3YWJXd2N2ZGhPVnRRWDd0cnNab1VPdTdOWk5RbWZmbkhzdzNpV0toN2tVWVN3QW9OZG9SZ2pMdnd1OWxRYWlENEdoSVpKbUtoX0ExSmhJQXFjU0w4SENlN0lCeDAzVkM2VU1tSGlrV3c?oc=5"},
  {title:"James Maddison and Luca Williams-Barnett injury updates as De Zerbi faces Tottenham problem", source:"football.london", date:"11 Aug 2026", tag:"Injury", url:"https://www.football.london/tottenham-hotspur-fc/news/james-maddison-luca-williams-barnett-34435911"},
  {title:"Tottenham transfer enters &apos;final stages&apos; as two details remain after green light given", source:"football.london", date:"10 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/cristian-romero-tottenham-transfer-latest-34436172"},
  {title:"Tottenham and Arsenal had &#8216;genuine interest&#8217; in £43m forward before PSG gazumped them", source:"SpursWeb", date:"10 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-and-arsenal-had-genuine-interest-in-43m-forward-before-psg-gazumped-them/"},
  {title:"Van de Ven signs new long-term deal with Spurs", source:"BBC Sport Spurs", date:"10 Aug 2026", tag:"Official", url:"https://www.bbc.co.uk/sport/football/articles/c4g362n1e28o?at_medium=RSS&amp;at_campaign=rss"},
  {title:"Micky van de Ven&apos;s promise after Tottenham announcement says it all as Roberto De Zerbi reacts", source:"football.london", date:"10 Aug 2026", tag:"Interview", url:"https://www.football.london/tottenham-hotspur-fc/news/van-de-ven-tottenham-contract-34436107"},
  {title:"&#039;I&#039;ve always loved Spurs&#039; - Tottenham star signs new contract until 2032", source:"SpursWeb", date:"10 Aug 2026", tag:"Official", url:"https://www.spurs-web.com/spurs-news/ive-always-loved-spurs-micky-van-de-ven-signs-new-tottenham-contract-until-2032/"},
  {title:"Micky van de Ven signs new Tottenham contract - ESPN", source:"Google News", date:"10 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMiqAFBVV95cUxQeWFxbWN6cFZVZHM0R3lWRV9zQ0dmMXVNSG52eDN5ZG5zVDd4bHZybGlnZXFPai1IS1hGWDdxY3BYRnpRS3c4OS16TjFqVzctYlhRZWl2SlNIN0ZsQTU1aEFKd0tFMlhmcTV6MkFFSEZLNDc2N2o3OUJINHN0ZnBkTHdQRmQ1UzJ2Vl93SjRYVl93aDdxQ2FvdVNiN3BtUDNoQzMyNDJqeUs?oc=5"},
  {title:"Tottenham Hotspur fans slam &#8216;lack of ambition&#8217; as transfer reality sets in", source:"SpursWeb", date:"10 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/tottenham-hotspur-fans-slam-lack-of-ambition-as-transfer-reality-sets-in/"},
  {title:"New deal for Micky van de Ven - Tottenham Hotspur", source:"Google News", date:"10 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMigAFBVV95cUxOeDV3NFhVZFJESi1FRTRCRTd5NExEWC1LTF9vV1Z1MjlaLVdJMVJEb1VLdXZ6Y21vd2s3ZEcwYjRlb1Z1WlNoRVNRLWpzYW5ZYzhyWkpDQncwQmZyUHhWNHdNLU5lY3VIQ2YxOVhiQ3V0TEF1blEtYkUwQzhMWXVPVQ?oc=5"},
  {title:"Tottenham fans will love what James Maddison just said about his injury rumours", source:"SpursWeb", date:"10 Aug 2026", tag:"Injury", url:"https://www.spurs-web.com/spurs-news/james-maddison-responds-firmly-to-injury-rumours-tottenham/"},
  {title:"&#8216;Finally a decent draw&#8217; &#8211; Tottenham fans react to Carabao Cup second round opponents", source:"SpursWeb", date:"10 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/finally-a-decent-draw-tottenham-fans-react-to-carabao-cup-second-round-opponents/"},
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
