// 2026 FIFA World Cup — Spurs Players Tracker
// CONFIRMED SPURS PLAYERS AT WC (12): Romero (ARG), Senesi (ARG), Van de Ven (NED),
//   Van Hecke (NED), Danso (AUT), Porro (ESP), Spence (ENG), Bentancur (URU),
//   Sarr (SEN), Bergvall (SWE), Vuskovic (CRO), Robertson (SCO)
// Last verified: 17 Jul 2026. Stat fields (xi/sub/bench/rtg) left as "—" where not
// independently confirmed match-by-match — status/progress/results are the verified data.
// FINAL: Argentina vs Spain — Sun 19 Jul, MetLife Stadium NJ, 3pm ET. Romero vs Porro.
// 3rd place: France vs England — Sat 18 Jul, Hard Rock Stadium, Miami.

export const WC = [
  {
    name:"C. Romero", e:"🇦🇷", pos:"CB", country:"Argentina", group:"J",
    results:["W 3-0 Algeria","W 2-0 Austria","W 3-1 Jordan","W 3-2 Cape Verde","W 3-2 Egypt (R16)","W 3-1 Switzerland (aet, QF)","W 2-1 England (SF)"],
    gp:7, goals:1, ast:0, rtg:"—",
    progress:"FINAL — Sun 19 Jul vs Spain (MetLife Stadium)", out:false,
    note:"Scored the equalising header (79') as Argentina fought back from 2-0 down to beat Egypt in the R16 — his first senior international goal at a World Cup. Argentina are in the Final chasing back-to-back titles, facing Spurs teammate Pedro Porro's Spain."
  },
  {
    name:"M. Senesi", e:"🇦🇷", pos:"CB", country:"Argentina", group:"J",
    results:["W 3-0 Algeria","W 2-0 Austria","W 3-1 Jordan","W 3-2 Cape Verde","W 3-2 Egypt (R16)","W 3-1 Switzerland (aet, QF)","W 2-1 England (SF)"],
    gp:7, goals:0, ast:0, rtg:"—",
    progress:"FINAL — Sun 19 Jul vs Spain (MetLife Stadium)", out:false,
    note:"Part of Argentina's squad throughout their run to the Final."
  },
  {
    name:"P. Porro", e:"🇪🇸", pos:"RB", country:"Spain", group:"H",
    results:["D 0-0 Cape Verde","W 4-0 Saudi Arabia","W 1-0 Uruguay","W 3-0 Austria","W 1-0 Portugal (R16)","W 2-1 Belgium (QF)","W 2-0 France (SF)"],
    gp:7, goals:0, ast:0, rtg:"—",
    progress:"FINAL — Sun 19 Jul vs Argentina (MetLife Stadium)", out:false,
    note:"Spain beat Ronaldo's Portugal (Merino, 90+'), then Belgium and then France 2-0 in the semi to reach the Final without conceding to a top side since the group stage. Faces Spurs teammate Cristian Romero for the trophy."
  },
  {
    name:"D. Spence", e:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", pos:"RB", country:"England", group:"L",
    results:["W 4-2 Croatia","D 0-0 Ghana","W 2-0 Panama","W 2-1 DR Congo","W 3-2 Mexico (R16)","W 2-1 Norway (aet, QF)","L 1-2 Argentina (SF)"],
    gp:7, goals:0, ast:0, rtg:"—",
    progress:"ELIMINATED — SF vs Argentina (lost 1-2)", out:true,
    note:"England's run ended in the semi-final against Argentina (15 Jul), who they now meet again in Romero's case at club level next season. England play France in the third-place match, Sat 18 Jul (Miami). Spence was England's only Spurs representative at the tournament."
  },
  {
    name:"M. van de Ven", e:"🇳🇱", pos:"CB", country:"Netherlands", group:"F",
    results:["D 2-2 Japan","W 5-1 Sweden","W 3-1 Tunisia","D 1-1 Morocco (L 3-2 pens)"],
    gp:4, goals:0, ast:0, rtg:"—",
    progress:"ELIMINATED — R32 vs Morocco (lost on penalties)", out:true,
    note:"Netherlands eliminated in R32 on penalties after a 1-1 draw with Morocco."
  },
  {
    name:"JP van Hecke", e:"🇳🇱", pos:"CB", country:"Netherlands", group:"F",
    results:["D 2-2 Japan","W 5-1 Sweden","W 3-1 Tunisia","D 1-1 Morocco (L 3-2 pens)"],
    gp:4, goals:1, ast:0, rtg:"—",
    progress:"ELIMINATED — R32 vs Morocco (lost on penalties)", out:true,
    note:"Scored his first senior international goal vs Tunisia in the group stage. Eliminated alongside Van de Ven in R32. Joined Spurs from Brighton, 18 Jun 2026."
  },
  {
    name:"K. Danso", e:"🇦🇹", pos:"CB", country:"Austria", group:"J",
    results:["W 3-1 Jordan","L 0-2 Argentina","D 3-3 Algeria","L 0-3 Spain"],
    gp:4, goals:0, ast:0, rtg:"—",
    progress:"ELIMINATED — R32 vs Spain (lost 0-3)", out:true,
    note:"Austria's run ended in R32 against Spain — the eventual finalists."
  },
  {
    name:"L. Vuskovic", e:"🇭🇷", pos:"CB", country:"Croatia", group:"—",
    results:["R32: L 1-2 Portugal"],
    gp:4, goals:0, ast:0, rtg:"—",
    progress:"ELIMINATED — R32 vs Portugal (lost 1-2)", out:true,
    note:"Croatia's tournament ended in the Round of 32 against Portugal."
  },
  {
    name:"L. Bergvall", e:"🇸🇪", pos:"CM", country:"Sweden", group:"—",
    results:["R32: L 0-3 France"],
    gp:4, goals:0, ast:0, rtg:"—",
    progress:"ELIMINATED — R32 vs France (lost 0-3)", out:true,
    note:"Sweden's tournament ended in the Round of 32 against France, who went on to lose the semi-final to Spain."
  },
  {
    name:"PM. Sarr", e:"🇸🇳", pos:"CM", country:"Senegal", group:"I",
    results:["L 1-3 France","L 2-3 Norway","W 5-0 Iraq","L 2-3 Belgium (aet)"],
    gp:4, goals:0, ast:0, rtg:"—",
    progress:"ELIMINATED — R32 vs Belgium (lost 2-3 aet)", out:true,
    note:"Senegal advanced from the group but fell to Belgium after extra time in R32; Belgium reached the quarter-finals before losing 2-1 to Spain."
  },
  {
    name:"R. Bentancur", e:"🇺🇾", pos:"CM", country:"Uruguay", group:"H",
    results:["D 1-1 S.Arabia","D 2-2 Cape Verde","L 0-1 Spain"],
    gp:3, goals:0, ast:0, rtg:"—",
    progress:"ELIMINATED — Group H (3rd)", out:true,
    note:"Uruguay failed to progress from the group stage — Spain, who beat them 1-0 in the group, went on to reach the Final."
  },
  {
    name:"A. Robertson", e:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", pos:"LB", country:"Scotland", group:"—",
    results:["Group stage: did not advance"],
    gp:3, goals:0, ast:0, rtg:"—",
    progress:"ELIMINATED — Group stage (3rd)", out:true,
    note:"Scotland were eliminated in the group stage."
  },
];