// First Team Squad — 2025/26 into 2026/27
// wc: World Cup 2026 tag — ONLY players officially confirmed in their nation's 26-man squad.
// Sources: FA official (englandfootball.com), CBF/FIFA, FFF, KNVB, SFA, FBF

export const SQUAD = [
  // GOALKEEPERS
  {name:"A. Kinsky",      pos:"GK",e:"🇨🇿",apps:16,g:0,con:"2031+1",wc:null,   st:"NO.1 — NEW 5YR DEAL",  sc:"green"},
  {name:"M. Dubravka",    pos:"GK",e:"🇸🇰",apps:0, g:0,con:"TBC",   wc:null,   st:"NEW — joins Jul 1",    sc:"cyan"},
  {name:"G. Vicario",     pos:"GK",e:"🇮🇹",apps:22,g:0,con:"2028",  wc:null,   st:"SALE EXPECTED",        sc:"amber"},
  // DEFENDERS
  {name:"JP van Hecke",   pos:"CB",e:"🇳🇱",apps:0, g:0,con:"2031",  wc:"NED",  st:"NEW — £52m 5YR",       sc:"cyan"},
  {name:"M. Senesi",      pos:"CB",e:"🇦🇷",apps:0, g:0,con:"2030",  wc:null,   st:"NEW — FREE",           sc:"cyan"},
  {name:"M. van de Ven",  pos:"CB",e:"🇳🇱",apps:28,g:1,con:"2029",  wc:"NED",  st:"CORE",                 sc:"green"},
  {name:"C. Romero",      pos:"CB",e:"🇦🇷",apps:21,g:1,con:"2029",  wc:"ARG",  st:"SALE LINED UP — £50m ASK", sc:"amber"},
  {name:"K. Danso",       pos:"CB",e:"🇦🇹",apps:24,g:0,con:"2030",  wc:"AUT",  st:"CORE",                 sc:"green"},
  {name:"R. Dragusin",    pos:"CB",e:"🇷🇴",apps:18,g:0,con:"2030",  wc:null,   st:"BACKUP",               sc:"muted"},
  {name:"P. Porro",       pos:"RB",e:"🇪🇸",apps:34,g:3,con:"2030",  wc:"ESP",  st:"NEW DEAL 2030",        sc:"green"},
  {name:"D. Udogie",      pos:"LB",e:"🇮🇹",apps:32,g:2,con:"2030",  wc:null,   st:"CORE",                 sc:"green"},
  {name:"A. Robertson",   pos:"LB",e:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",apps:0, g:0,con:"TBC",   wc:null,   st:"NEW — FREE",           sc:"cyan"},
  {name:"B. Davies",      pos:"LB",e:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",apps:5, g:0,con:"2027",  wc:null,   st:"RENEWED JUN 10",       sc:"green"},
  {name:"D. Spence",      pos:"RB",e:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",apps:8, g:0,con:"2029",  wc:"ENG",  st:"TRANSFER TALKS — INTER",sc:"amber"},
  // MIDFIELDERS
  // NOTE: J. Palhinha and R. Bentancur REMOVED from active squad 17 Jul 2026 —
  // both contracts expired 30 Jun and neither is on the books any more (see
  // DEPARTURES in transfers.js for the full record — this list is current
  // squad only, not a transfer history).
  {name:"A. Gray",        pos:"CM",e:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",apps:29,g:2,con:"2030",  wc:null,   st:"CORE",                 sc:"green"},
  {name:"L. Bergvall",    pos:"CM",e:"🇸🇪",apps:26,g:3,con:"2031",  wc:null,   st:"REQUESTED — FOREST BID REJ.",sc:"red"},
  {name:"C. Gallagher",   pos:"CM",e:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",apps:28,g:2,con:"2031",  wc:null,   st:"CORE",                 sc:"green"},
  {name:"PM. Sarr",       pos:"CM",e:"🇸🇳",apps:27,g:3,con:"2030",  wc:"SEN",  st:"CORE",                 sc:"green"},
  {name:"S. Tonali",      pos:"DM",e:"🇮🇹",apps:0, g:0,con:"TBC",   wc:null,   st:"NEW — £100m RECORD, 6YR (reported)", sc:"cyan"},
  {name:"J. Maddison",    pos:"AM",e:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",apps:11,g:2,con:"2028",  wc:null,   st:"RECOVERING (KNEE)",    sc:"amber"},
  {name:"X. Simons",      pos:"CM",e:"🇳🇱",apps:31,g:6,con:"2030",  wc:null,   st:"ACL — FEB 2027",       sc:"red"},
  // FORWARDS
  {name:"M. Fernandes",   pos:"CM",e:"🇵🇹",apps:0, g:0,con:"TBC",   wc:null,   st:"SIGNING — £85m RECORD",sc:"cyan"},
  {name:"D. Kulusevski",  pos:"RW",e:"🇸🇪",apps:0,g:0,con:"2028",  wc:null,   st:"OUT ALL SEASON — KNEE",      sc:"red"},
  {name:"M. Kudus",       pos:"FW",e:"🇬🇭",apps:26,g:6,con:"2031",  wc:null,   st:"BACK IN TRAINING — Aug 22",sc:"green"},
  {name:"M. Tel",         pos:"FW",e:"🇫🇷",apps:28,g:7,con:"2031",  wc:null,   st:"LOAN — BAYERN",        sc:"amber"},
  {name:"D. Solanke",     pos:"ST",e:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",apps:19,g:5,con:"2030",  wc:null,   st:"HAMSTRING",            sc:"amber"},
  {name:"Richarlison",    pos:"ST",e:"🇧🇷",apps:24,g:8,con:"2027",  wc:null,   st:"SALE EXPECTED",        sc:"amber"},
  {name:"W. Odobert",     pos:"LW",e:"🇫🇷",apps:20,g:2,con:"2029",  wc:null,   st:"ACL — NOV 2026",       sc:"red"},
];

// Injury Centre — active injuries only. Source: premierinjuries.com
export const INJURIES = [
  {name:"Xavi Simons",     flag:"NL",emoji:"🇳🇱",pos:"CM",issue:"ACL right knee",        sev:"long",  ret:"20 Feb 2027"},
  {name:"Wilson Odobert",  flag:"FR",emoji:"🇫🇷",pos:"LW",issue:"ACL left knee",          sev:"long",  ret:"28 Nov 2026"},
  {name:"Dejan Kulusevski",flag:"SE",emoji:"🇸🇪",pos:"RW",issue:"Knee (patella/cartilage) — Roberto De Zerbi has publicly stated Kulusevski is 'fit and right' for Spurs per BBC Sport. First managerial confirmation of fitness. Squad status and injury entry should be updated to reflect De Zerbi's public statement, though no confirmed return date or competitive minutes yet.",          sev:"long",ret:"TARGETING 2026/27 SEASON — De Zerbi confirms 'fit and right' (BBC)"},
  // NOTE: Kudus REMOVED from active injuries 17 Jul 2026 — back in full pre-season
  // training, targeting the Aug 22 opener at Brentford. See squad.js SQUAD entry.
];
