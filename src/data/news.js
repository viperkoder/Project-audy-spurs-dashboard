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
  {title:"Spurs interested in Liverpool's Gakpo", source:"Sky Sports Spurs", date:"03 Aug 2026", tag:"Interview", url:"https://www.skysports.com/football/news/12040/13569350/cody-gakpo-tottenham-interested-in-signing-liverpool-forward-as-roberto-de-zerbi-aims-to-improve-spurs-attack"},
  {title:"Cody Gakpo: Tottenham interested in signing Liverpool forward as Roberto De Zerbi aims to improve Spurs attack - Sky Sports", source:"Google News", date:"03 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMi9wFBVV95cUxQUzlUWjZzOVhKUWFLVFQ2OVRxNWVhQUNmV2NSdExPdGh6Zm5PYXExOHVtNDJVMzA3c24yQkl6Yy1kVFc2b2V6aWJtaDEyVk9KNFo3MXdrcUJyQnZreGh6YktmSzZ3WElLeHNGNGU2RndqNjNsT0tuNmxlUGMzT2UzTWJUYmdpMVpBV3JMeWpFVHhjRkgtZTZwRU5KdTFVRzVWcUU0VXBKWnZCczRfUEpJVUl0UGpNTERnb2Y0SE5ydUdNRGtzN3dHOFg0SUdOQ2pheVFDWm5Qbkx1YUcxWHEyaU8zZmRpLWM0TnJUTGpnVGU2bV94QnU0?oc=5"},
  {title:"Porto ready to &#8216;push ahead&#8217; with talks to sign exciting £13m Tottenham starlet", source:"SpursWeb", date:"03 Aug 2026", tag:"Official", url:"https://www.spurs-web.com/spurs-news/porto-ready-to-push-ahead-with-talks-to-sign-exciting-13m-tottenham-starlet/"},
  {title:"Tottenham get sale boost after tour omission as PSG submit £28.3m transfer offer", source:"football.london", date:"03 Aug 2026", tag:"Transfer", url:"https://www.football.london/tottenham-hotspur-fc/transfer-news/tottenham-transfer-news-vicario-juventus-34394297"},
  {title:"PSG on track to beat Tottenham, Arsenal to signing 65-goal Barcelona attacker - TEAMtalk", source:"Google News", date:"03 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMiowFBVV95cUxNS0xxTERiUkZxS0hhb2s3bGZ5RHVwSUNwMi1tWG1GM3RGQ21obXN4NndwVVRFODdmVDQ3RnB2UGZOWWRyMHhxNDF0TlFVRWMyZWd3MkpZbGVoNkNDbEFIODJpMlg0ME1vdmt0dUYxWUtDNFR6QzBvZlUwQlVOUWlGRm9EaHg3YnppbkpNSzRfZ3FSdXBsMnNRWi01UEFKb0ItUkxF?oc=5"},
  {title:"Tottenham beat Arsenal to sign Isaac Allen as Vinai Venkatesham backs up his promise", source:"SpursWeb", date:"03 Aug 2026", tag:"Official", url:"https://www.spurs-web.com/spurs-news/tottenham-beat-arsenal-to-sign-isaac-allen-as-vinai-venkatesham-backs-up-his-promise/"},
  {title:"Tottenham teenager Mikey Moore set for another loan as Bundesliga club lead race for highly-rated star - The Independent", source:"Google News", date:"03 Aug 2026", tag:"Club", url:"https://news.google.com/rss/articles/CBMiowFBVV95cUxOWkJJRmdzOWRYMmRuSWkzMEx2bWh3c2RJQ2d3UXVBSlE5UVVpejFMS2tES2lIb19YRDFCZXlCREk2dGdmaHlaMmNDaUJHMU45bzV1RUtHbVF1N3prMFhLY0NfMHFmczZ5SGhYa1FUVDktZXVic0JaakxHVWRrbHViMjJIeUJyMFlpNHFIN3VoMzUwRkRQcEpUUWZxekdKX2ptQkNr?oc=5"},
  {title:"Eight transfers Tottenham could complete this week as Roberto De Zerbi eyes £100m 'bomba' deal - Football London", source:"Google News", date:"03 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMisgFBVV95cUxQSk5qX0toZ241N1RtV0l3Y3ktZXVIYWRHOHI1U0lMajJOUEhxZTNEOGpXNWJjcWxHTHdXblFQMkNhQXo2ZkROanZGTDY1LXdDcGRTZHJGcERZVEZxOGlpVkdudHM5RUQwYWQySGt4UEk0bUhaaDY4NlV1N3Q5d3dQbU9CelR6bXhDYjFNc3d1Q296MmFwVm1PU3pkTGVzX2djUnlIOHRublkxaXVlNGdnVFJR0gG3AUFVX3lxTE1hQVdTQ0VFMjBiaGY3blROQnFrS3Z0bGJIdzdsek9mQWpPekNwcENJTmItWXZUc2sxdmZPVlYxNXFuSW45Y0ZMRENISi1ZYzZqT1lEZTVKd3pNMXhKR3RxUzN2WEdjaHU4Z2Y0NVg3Tk9xXzIwZmlVdk5ZTzVEZzBCeEhlZ29ROE5GN3NxYmYxZGpJUmxpU09vd0dyT1luR0JyTnN4UVpGeVNoYVBBUTBacjFhcTI5UQ?oc=5"},
  {title:"‘Deal could be completed next week’: Fabrizio Romano drops Tottenham transfer update confirming official bid - CaughtOffside", source:"Google News", date:"02 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMilgFBVV95cUxPSGJyc1djZVBlczdkeFhRNEdwUzh0LXg5eDUtV0lEZ0VSdGZkN0lrb0VpR0dWV3BnZzFWV1F0Q0FSMlp3eTMtOTVScFJQZ284ZHpvbGcyQ3dUcGVEYzdINDNRVTJpZVZhZ3JfTTNybEhzZnVJTDF0Sk1ZY09XRnNMWEF4TnJtejhWbmlfVlltSFNCbEFFcEHSAZsBQVVfeXFMT1JlUFV3a0R5d1JQV2VrRGRwMC00MkZza0FKMjVwU0Q4WS1ac0Y4QVNRc2JZVWNGeF9EakdPZmoyQXRrS3BIdmNncEV2MkRycmlBQTRmLTU2amQwaGRNRUJneVpQbTVTd2pLNUJtS1M1cnA5aGZDN0tNSFRjN0F5ZC1ncldQMkFhOUNXOGpSTmhEWkt5VDZxaUFiNG8?oc=5"},
  {title:"Transfer news LIVE: Tottenham eye £65m striker, Man Utd medical, Bruno Guimaraes twist - Daily Express", source:"Google News", date:"02 Aug 2026", tag:"Transfer", url:"https://news.google.com/rss/articles/CBMipwFBVV95cUxNUHRSVTlHQ2dzNlB4R09aeDlQUFAzeGQ5RW9Wb0Y0VUJDXzc4VURlVWh6RkJ0RE5mQ2xDeFZESUJsbXVDVk0yN281TFR3MmlfRlU3VzFzM1Q1TmtnU3ZSUG9FOHZwZy1NMjlxVzhGT0NfN010S1VTeXFaZnZLb0luUVdqRnB1SmNKQlMxSEZ1NXlQaTF4RGxBQzluYmJLajhJT3ZjZXV2b9IBrAFBVV95cUxNaXRQVWNTT093TkJndnFsMlRwY1hqRFExUktBVEw5ZjRXV29IRmdaQnRZTFlBeFhpUTU5bFZFXy1tNFVZR1ljQkppUnJuWmpnUWNBcVpwbVIxV3dsU3dKekxXc1dNNU8yQmFtVDZ0WEh4Rlp5bWNiVVFNd2FHTGQ3cmgzLVhzeVFZZ1hESW1IVDl3N2Z6eUM0V0h0ZzNzQlhRZjEzT2s0UzNVTnNo?oc=5"},
  {title:"Tottenham could be about to loan Mikey Moore to team who finished 14th last season", source:"SpursWeb", date:"02 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-could-be-about-to-loan-mikey-moore-to-team-who-finished-14th-last-season/"},
  {title:"Major update in ex-Rangers star Mikey Moore transfer saga as 'official bid sent to Tottenham with several clubs keen' - The Scottish Sun", source:"Google News", date:"02 Aug 2026", tag:"Official", url:"https://news.google.com/rss/articles/CBMiowFBVV95cUxNX2M5REF4RnNJaUlRQ0gza3ZWaVlXbkp4M3c5OF9yTThDZjFpNFZBYnFISnZQcTVYcmRwUXlPUDhHRkN0Z2RNTVd0YUJJeGJwWWpqNUFSUXh1THJPMTRjSlBYWDF0Z2V4Y0NUNXFzdEN0MjRQSlBtbG95YjlmdEEyV25vU1VyNnVQaklLcHZjLXF3bTBxM1liNElqN3ZjaEYxQmVB?oc=5"},
  {title:"Tottenham receive big £34.5m Andreas Schjelderup boost as Savinho move stalls", source:"SpursWeb", date:"02 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenham-receive-big-34-5m-andreas-schjelderup-boost-as-savinho-move-stalls/"},
  {title:"Tottenham&#8217;s Mikey Moore could play in a front three with Will Lankshear next season", source:"SpursWeb", date:"02 Aug 2026", tag:"Club", url:"https://www.spurs-web.com/spurs-news/tottenhams-mikey-moore-could-play-in-a-front-three-with-will-lankshear-next-season/"},
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
