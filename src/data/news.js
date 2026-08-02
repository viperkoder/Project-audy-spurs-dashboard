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
  {title:"Cristian Romero to Inter Milan hits hiccup as Tottenham wait for £34m payday", source:"SpursWeb", date:"02 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/cristian-romeros-representatives-take-next-step-as-inter-milan-move-stalls-tottenham/"},
  {title:"Another blockbuster! Tottenham accelerate their ambitious chase for a £65m 'best striker in the world' after nearly £240m spending spree - Goal.com", source:"Google News", date:"02 Aug 2026", tag:"Interview", url:"https://news.google.com/rss/articles/CBMijgFBVV95cUxPSlhTMFowUG5RcXE5bWlWeGdWa2JycDNvNkFlNUFVTzRPU2FyekJTTjhHM3Z6MlZzX1NJZEF3b0N4R0c0eFlXSFdnVWl2NkRaTEZTeW9sVFZENmliSkxCaExSOXRPVlZpRml0VXRCOVJoXzhzTmlEMHVPVVNiM2pnU2QzdVdzaHhWcnhLaHpR?oc=5"},
  {title:"&#8216;I texted Cuti&#8217; &#8211; De Zerbi comments on Cristian Romero&#8217;s Tottenham future amid £34m rumours", source:"SpursWeb", date:"02 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/i-texted-cuti-de-zerbi-comments-on-cristian-romeros-tottenham-future-amid-34m-rumours/"},
  {title:"Tottenham and Inter Milan agree Cristian Romero fee, cheaper than Brennan Johnson", source:"SpursWeb", date:"02 Aug 2026", tag:"Transfer", url:"https://www.spurs-web.com/spurs-news/tottenham-and-inter-milan-agree-cristian-romero-fee-cheaper-than-brennan-johnson/"},
  {title:"Toby Alderweireld says Tottenham teammate was even better than Harry Kane or Eden Hazard", source:"SpursWeb", date:"02 Aug 2026", tag:"Interview", url:"https://www.spurs-web.com/spurs-news/toby-alderweireld-names-best-player-he-played-with-not-harry-kane-or-eden-hazard-tottenham/"},
  {title:"Matheus Fernandes reveals two reasons for rejecting Man Utd to sign for Tottenham - football365.com", source:"Google News", date:"02 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMisgFBVV95cUxOWVpXQXIxb2tWZFFhdXpNX2t6WXBiV2hYck95RmVGTjdWQmRLbkx1R1JsXzM5NFZVMTZfNTRrdk90dTFSaXctNUp5cWVlV1BfSDZ2eEFPalN6VHBWY0ozRDVDNXdBWHZ6bXJTTEpjSWpNVmhxcHZwRU9VcVRfOEpnRFQ1UVRQX2doYUhQTFhBQ2t4V3c1bDZJXzZxUnFtZExmZ2k0OWpWUWZLR1p4TEVBSzdn?oc=5"},
  {title:"30 clubs interested in taking Tottenham starlet on loan, but Lincoln City lead the race", source:"SpursWeb", date:"02 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/30-clubs-interested-in-taking-tottenham-starlet-on-loan-but-lincoln-city-lead-the-race/"},
  {title:"Conor Gallagher opens up on Tottenham midfield competition with £185m Tonali and Fernandes", source:"SpursWeb", date:"02 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/conor-gallagher-opens-up-on-tottenham-midfield-competition-with-185m-tonali-and-fernandes/"},
  {title:"Revealed: Why Mateus Fernandes rejected Man Utd as the £85m Tottenham star details how Roberto De Zerbi secured the transfer with a unique family promise - Goal.com", source:"Google News", date:"02 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMixAFBVV95cUxOVlpSZzdyNVFOaElZcllyVTk4a08wQVVxaUNqRkJfYzdvWmFibWZUYThpU1hBTzdwSDhtOUlUdUxfRHpvaWVMTGozd3Q3b0tWWTh4RjhQLUVDUFJBcW9NN3U3RUtpdmNhbjlGODhMRzJ1WTVyZlVKeHZXNnZ4cWVhU2N4WkZSRzRQdkhPV1I3LUlBWTFzWE1jVnBobkM1MU1tZVJrS2dkUGZ6SGpDa0tSLTh0YnpOcDNuWGJtSVVlQXhmVVhS?oc=5"},
  {title:"Roberto De Zerbi names Tottenham academy trio he thinks can make the step up", source:"SpursWeb", date:"02 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/roberto-de-zerbi-names-tottenham-academy-trio-he-thinks-can-make-the-step-up/"},
  {title:"Tottenham receive 'approval' for £65m star as 'blockbuster' seventh signing - football365.com", source:"Google News", date:"02 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMipgFBVV95cUxPSG1aVEJZOHprNXU4U0MwWFUySlB3bTc0WDBuOFRVVmlFYVBBcHMyYXlNWGZsMk1uRmlSMXQyTXVEdjRFLS1JZ1kzaUhlZDE3a09ISnpueWN3clp5aDVMblRnMkNNOXo0RWo4LW9HRFAwSU9YaWx4dDVPQ0hMNFhGaFVqRzVZMEhkWTZIWXQyQWU4ZzJQelpudG5OUXlxOEJ4dEZNa3BR?oc=5"},
  {title:"Tottenham make shock Victor Osimhen approach as Roberto De Zerbi plots next transfer", source:"football.london", date:"02 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-make-shock-victor-osimhen-34391373"},
  {title:"Savinho gestures whether he’s joining Tottenham after Liverpool decide on Gakpo sale - TEAMtalk", source:"Google News", date:"02 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMitAFBVV95cUxPTjktaWgxbEZqMGZOVXBtMmZTRnZpUENMYmtJT2tYdkc3elV3ZzNQdWlROHg2b1RrQ3RYcXR5WW4tcndRT0FvemtNdGdJTkhFV1dCRHlYU3Ezb3l1cjhCQ3o2eDhPZDUxVWRjUDhnQXc2TU5RWDM2cEtBVVViTmVuRUNvYmlfR191N0I4RU4tUVZDa3NuTFNHdWxaZncwZ3E2OHN3c2hKRWhHUXB2NEVxT2VVaGc?oc=5"},
  {title:"Life on Tour - Tottenham Hotspur", source:"Google News", date:"02 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMitwFBVV95cUxPZWFIYXE1UVEzQWZ1c0x6ZlJ0bElTdktwcU1BTzUwLU5aS3ZNbGJzQm5Pb0l4RzhYaWlrSFgzVEdrd3ZFbEpMSUtYVXp4bE54cU9sM3VHZHBTNUkxU2x5T0JSMC1RT3F3YmNseDJ1MTBzeXhWOUN6OFV1MWFka3BYTUlQQlFRdmYzTTJ1Tk9yT09DSkFWSjZVREpJdGFEZHJkcE5FVWV4eEh2RGpmV08tanp1NVZWdFU?oc=5"},
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
