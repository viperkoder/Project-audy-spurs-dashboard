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
  {title:"Tottenham transfer news LIVE: Cody Gakpo update, Victor Osimhen twist, Djed Spence latest", source:"football.london", date:"14 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/news/tottenham-transfer-news-live-cody-34456777"},
  {title:"Tottenham transfer news recap: Savinho boost, Folarin Balogun move, Osimhen bid rejected", source:"football.london", date:"14 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/news/tottenham-live-transfer-news-balogun-34442792"},
  {title:"The Hoddle of Coffee: Tottenham Hotspur News and Links for Friday, August 14 - Cartilage Free Captain", source:"Google News", date:"14 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMi1gFBVV95cUxQVENHbHQzWmkwRGhPTkFZclY0azRiWV9UeWRaUjB5MGJhOWI4ZG9pUlJza1BSaUZhaVpVMWhBbFZBVFhfYnlZc19NYVRoejNRSVBVSFNKWng5Wl9DWjg4bzMtX1h4a3YyNzZfeXFxbEF1MkhGeUhmRHNJdFlvTDhQQ1F1Mmt6elpSbm5NUHFLbkV6QVpsazJJT3JyQ0F6V2N6dkJfbTZpc1BPYXN4TkktdkEwRXljN3pPRWpnR2h5eDNXczgwRGN0aW8wWnk1M0h1OWRNZmpR?oc=5"},
  {title:"Roberto De Zerbi states what he wants to happen at Tottenham and it should excite the fanbase", source:"football.london", date:"14 Aug 2026", tag:"Club", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/roberto-de-zerbi-states-what-34456037"},
  {title:"Video: Tottenham star seen arriving in major European city to sign for new club - CaughtOffside", source:"Google News", date:"14 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMihwFBVV95cUxQLW80R0VYTFFnUzZuNzF6OURMUUR6OFUzVmEyNV9lSlhVNnFiLUJmVGNXZ1A2QXZPOWRWeDduQm9NOHg3NVoxRXpURlV3a0l5dzhEeXBLMlVqUG5zdE9CZ1BuOWVfaXRhRURHTVFNVC1yOTJZbUNiWExITGpaVi12WjlReUplMVHSAYwBQVVfeXFMUGR1TGtGSkxRYTFiU3ZEd0dZZFRYWTNSWXAwa2dSelRuSHYwd2lndnNHN1VLejYtbVo3VlpaQ1VSMHRLVXVfYkZpWndqTHNhMGtLd3FjejZKZndqd2dZMDNpSWVBREZkNTJWVzVsN2hyU1VUd2MyQ1A4ZmhrQkZ2TjNCUGNXcU5aSlFwdDk?oc=5"},
  {title:"Tottenham dream line-up after £55m Victor Osimhen swoop and £120m double signing - Football London", source:"Google News", date:"14 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMilwFBVV95cUxOUngwV2ZRa2NfN0hDSGh0VHh0a1FxdWlGLXg5MXI4eWpINUY3SWtNUlRTMFJXMGZKSjRpZzJoNy1OR09RTW1iT21HTFRXRHVLc2VYdmd4ZHJpVVNOcDg4cXI1elpTOXExRGxIMDNucEM3a3VrZ2FEYXYtb09XcWR6ZEJibUFzbTZNb1N3RTdEUGdoTHF4bkJz0gGcAUFVX3lxTFBwWExUTUkwVElkUmtiMEVIakhFSnI4NXFtZ2F1bXVWb0I2RHlvTkIwVXl6dFd4UWxza21RV2E0Sm9RcEJkb0g4WjV2aXZDX19SN3pESVR4cWNkZXBsNklnLWxzTEhXVE1FTFkzeEFHSExreVNQQ1l4cHVfZV9zTmJIR09wOHNHa201NWI1XzIwYjhWTFlmRHlJRmlWeA?oc=5"},
  {title:"Spurs agree next transfer deal in Arsenal blow as medical booked - London Evening Standard", source:"Google News", date:"14 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMivwFBVV95cUxPcHlKbmFwWFlRSzFMa1lhbVhIdzlrWWJ3S3VNejgtbU5hN251VWF2SHl1U1ZKNGJTaEtuZS1aRnFuR2MxRWo4c2dLT2trQ2UyWm1MVGxvTmhKTjNqSmk1N3p4alI5RlRqalNyMk1XUDh1YkxVS0N4Qk1ETlVZLWE1cG5Dd1pYdG5VYmdHekdqWlBnQUE2UTNlQk1RUnFwVVh4ZUFPOHc3X1NKRVhlVU9mUnMwR3JOTEZTTWk3dFE1Yw?oc=5"},
  {title:"Tottenham Hotspur vs Hoffenheim: Club Friendlies stats &amp; head-to-head - bbc.co.uk", source:"Google News", date:"14 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMiZkFVX3lxTFBzOEFBWTNpUE1FQUdLeUVpLWE4dUpEaGxSc0t3VjNhcXJJeU54dmhDT25TLTl1UUVUWVlCbC0yOVF6dGtpcHRQQzlwb2plWUxrT3A4b0M2ZkFObFJFc3BUS2swMjdUQQ?oc=5"},
  {title:"Tottenham's Djed Spence lands in Italy to complete Inter transfer - ESPN", source:"Google News", date:"13 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMimgFBVV95cUxNQWxwejcySlB4R2U2b1BCcHgya3p5UU5ubEdrUWgtQlQ4emRpU2ZTclZMWE9JeE5paU8xZmo2ejBucGxzcUt2dXQ4VFpqdkdoeU5TN1pja1NfYzNrSHlzcVZqLWFtX2N5SGpnQkpsb0lYYlE1VWJDNW9UUEt5WVFSTzltSEZmYlZqWFhLSDBYVFVwMDlsMEZEWU1B?oc=5"},
  {title:"Tottenham take action to complete Liverpool transfer as summer spending continues", source:"football.london", date:"13 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-cody-gakpo-liverpool-transfer-34456361"},
  {title:"Tottenham want to replace Djed Spence with right-back with 23 G/A in two seasons", source:"SpursWeb", date:"13 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-want-to-replace-djed-spence-with-right-back-with-23-g-a-in-two-seasons/"},
  {title:"Tottenham 20-year-old emerges as &#8216;priority target&#8217; for Porto in the Champions League", source:"SpursWeb", date:"13 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/tottenham-20-year-old-emerges-as-priority-target-for-porto-in-the-champions-league/"},
  {title:"Tottenham could sign striker who destroyed them in the Europa League for £55m", source:"SpursWeb", date:"13 Aug 2026", tag:"Official", url:"https://www.spurs-web.com/spurs-news/tottenham-could-sign-striker-who-destroyed-them-in-the-europa-league-for-55m/"},
  {title:"Barcelona make contact over shock deal for 26-year-old Tottenham superstar", source:"SpursWeb", date:"13 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/barcelona-make-contact-over-shock-deal-for-26-year-old-tottenham-superstar/"},
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
