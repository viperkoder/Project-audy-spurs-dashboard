// 2026/27 Premier League — season starts 22 Aug 2026.
// Keep competitive statistics at zero until a league match is complete.
// Pre-season form belongs in LAST5 and does not count toward league totals.
export const STANDINGS = [
  {pos:1, team:"AFC Bournemouth",       w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:2, team:"Arsenal",               w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:3, team:"Aston Villa",           w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:4, team:"Brentford",             w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:5, team:"Brighton & Hove Albion",w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:6, team:"Chelsea",               w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:7, team:"Coventry City",         w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:8, team:"Crystal Palace",        w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:9, team:"Everton",               w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:10,team:"Fulham",                w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:11,team:"Hull City",             w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:12,team:"Ipswich Town",          w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:13,team:"Leeds United",          w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:14,team:"Liverpool",             w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:15,team:"Manchester City",       w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:16,team:"Manchester United",     w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:17,team:"Newcastle United",      w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:18,team:"Nottingham Forest",     w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:19,team:"Sunderland",            w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
  {pos:20,team:"Tottenham Hotspur",     w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0,isSpurs:true},
];

// Latest first. These are explicitly pre-season results until MD1 is played.
export const LAST5 = [
  {date:"15 Aug",home:"TOT",away:"HOF",score:"3-0",r:"W",scorer:"Richarlison; Moore ×2"},
  {date:"8 Aug", home:"TOT",away:"GET",score:"1-1",r:"D",scorer:"Gallagher"},
  {date:"1 Aug", home:"TOT",away:"CHE",score:"2-1",r:"W",scorer:"Tonali; Richarlison"},
  {date:"29 Jul",home:"TOT",away:"SYD",score:"1-1",r:"W",scorer:"Tel · won 4-2 pens"},
  {date:"26 Jul",home:"AUC",away:"TOT",score:"0-2",r:"W",scorer:"Scarlett; Richarlison"},
];

// Competitive 2026/27 totals. Populate after the Brentford opener.
export const SCORERS = [];
