// 2025/26 Premier League — Final Table
// Edit this file alone to update standings.
export const STANDINGS = [
  {pos:1, team:"Arsenal",        w:26,d:7, l:5, gf:79,ga:35,gd:44,pts:85,qual:"UCL"},
  {pos:2, team:"Man City",       w:23,d:9, l:6, gf:74,ga:32,gd:42,pts:78,qual:"UCL"},
  {pos:3, team:"Man United",     w:20,d:11,l:7, gf:62,ga:43,gd:19,pts:71,qual:"UCL"},
  {pos:4, team:"Aston Villa",    w:19,d:8, l:11,gf:58,ga:51,gd:7, pts:65,qual:"UCL"},
  {pos:5, team:"Liverpool",      w:17,d:9, l:12,gf:55,ga:45,gd:10,pts:60,qual:"UCL"},
  {pos:6, team:"Bournemouth",    w:13,d:18,l:7, gf:49,ga:45,gd:4, pts:57,qual:"UEL"},
  {pos:7, team:"Sunderland",     w:14,d:12,l:12,gf:47,ga:53,gd:-6,pts:54,qual:"UEL"},
  {pos:8, team:"Brighton",       w:14,d:11,l:13,gf:55,ga:49,gd:6, pts:53,qual:"UECL"},
  {pos:9, team:"Chelsea",        w:14,d:10,l:14,gf:54,ga:48,gd:6, pts:52},
  {pos:10,team:"Fulham",         w:15,d:7, l:16,gf:51,ga:47,gd:4, pts:52},
  {pos:11,team:"Newcastle",      w:14,d:7, l:17,gf:49,ga:51,gd:-2,pts:49},
  {pos:12,team:"Everton",        w:13,d:10,l:15,gf:44,ga:47,gd:-3,pts:49},
  {pos:13,team:"Leeds United",   w:11,d:14,l:13,gf:43,ga:50,gd:-7,pts:47},
  {pos:14,team:"Crystal Palace", w:11,d:12,l:15,gf:40,ga:50,gd:-10,pts:45},
  {pos:15,team:"Nott'm Forest",  w:11,d:11,l:16,gf:42,ga:45,gd:-3,pts:44},
  {pos:16,team:"Brentford",      w:12,d:7, l:19,gf:48,ga:55,gd:-7,pts:43},
  {pos:17,team:"Tottenham",      w:10,d:11,l:17,gf:48,ga:57,gd:-9,pts:41,isSpurs:true},
  {pos:18,team:"West Ham",       w:10,d:9, l:19,gf:38,ga:57,gd:-19,pts:39,rel:true},
  {pos:19,team:"Burnley",        w:4, d:10,l:24,gf:30,ga:67,gd:-37,pts:22,rel:true},
  {pos:20,team:"Wolves",         w:3, d:11,l:24,gf:28,ga:69,gd:-41,pts:20,rel:true},
];

export const LAST5 = [
  {date:"25 May",home:"TOT",away:"EVE",score:"1-0",r:"W",scorer:"Palhinha 38'"},
  {date:"18 May",home:"TOT",away:"LEE",score:"1-1",r:"D",scorer:"Tel 21'"},
  {date:"12 May",home:"AVL",away:"TOT",score:"1-2",r:"W",scorer:"Palhinha 55'"},
  {date:"4 May", home:"SUN",away:"TOT",score:"1-0",r:"L",scorer:""},
  {date:"28 Apr",home:"TOT",away:"WOL",score:"1-0",r:"W",scorer:"Richarlison 67'"},
];

export const SCORERS = [
  {name:"Richarlison",  g:8,a:2,apps:24},
  {name:"M. Tel",       g:7,a:4,apps:28},
  {name:"M. Kudus",     g:6,a:5,apps:26},
  {name:"X. Simons",    g:6,a:7,apps:31},
  {name:"J. Palhinha",  g:3,a:2,apps:30},
  {name:"L. Bergvall",  g:3,a:8,apps:26},
];
