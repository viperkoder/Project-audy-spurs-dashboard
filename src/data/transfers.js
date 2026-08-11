// Transfer Intelligence — Summer 2026
// Edit this file alone for transfer rumours, confirmed signings, departures.
// Last manual verification pass: 9 Aug 2026 (cross-checked against live reporting).
// Automation was down 4-17 Jul (stale project path + node PATH issue under
// launchd) — fixed via automation/install-launchd.sh, see automation/SETUP.md.

export const TRANSFER_BRIEFS = [
  // NOTE: Fernandes REMOVED — confirmed signing as of 1 Jul 2026
  // NOTE: Tonali REMOVED — confirmed signing as of 3 Jul 2026, see CONFIRMED below
  // NOTE: Rafael Leao REMOVED 9 Aug 2026 — interest cooled, never became a
  // formal pursuit. Talks pre-World Cup were "exploratory rather than
  // formal" and did not progress; De Zerbi's staff have shifted focus to
  // other attacking options that better fit budget/tactics. (Yahoo Sports,
  // 9 Aug) Re-add only if fresh reporting revives it.
  {
    player:"Savinho", e:"🇧🇷", from:"Man City", fee:"60m", like:72, st:"hot", date:"9 Aug",
    brief:"Still Spurs' top winger target and personal terms remain agreed, but this has NOT accelerated to done — if anything it's cooled slightly from the 'nearly administrative' framing a week ago. Romano (5-9 Aug): clubs are 'still pretty far apart on price,' with Tottenham targeting ~£60m and City yet to formally sign off. No formal bid has been submitted. New complication: AC Milan have proposed a rival loan-with-obligation-to-buy structure worth £43-47m, which could appeal to City if they'd rather offload for a lower guaranteed fee than hold out for £60m permanent. City also reportedly want a replacement winger lined up before sanctioning a sale. Tottenham have signalled they're willing to walk if talks keep dragging — read as leverage, not a genuine cooling of interest. Likelihood trimmed from 88% to reflect the stalled price gap and Milan's new competition, not a change in Spurs' intent."
  },
  {
    player:"Carlos Baleba", e:"🇨🇲", from:"Brighton", fee:"100m", like:32, st:"warm", date:"14 Jul (no update since)",
    brief:"One of three De Zerbi ex-Brighton targets (with Verbruggen; Van Hecke already signed). De Zerbi worked closely with Baleba at Brighton — 37 games together — and rates him highly. His valuation has climbed sharply since De Zerbi signed him for £23.3m in 2024, with reports now pricing him as high as £100m, which has cooled the pace of any move. Man Utd interest previously reported has gone quiet; Spurs could revisit if that move stays dead. Club acknowledges landing all three Brighton targets in one window is unlikely. STATUS CHECK 9 Aug: no fresh reporting found since mid-June — trimmed a few points to reflect the lead has genuinely gone quiet, not just under-covered. Not marked dead; revisit if reporting resumes."
  },
  {
    player:"Bart Verbruggen", e:"🇳🇱", from:"Brighton", fee:"30m", like:30, st:"warm", date:"14 Jul (no update since)",
    brief:"Still De Zerbi's preferred long-term No.1 — Dubravka was always a short-term/backup solution. Verbruggen remains attracting interest from elsewhere in Europe, so competition is a live risk. Vicario sale proceeds earmarked to help fund this move. Considered the more advanced of the two remaining Brighton targets given goalkeeper is a clearer positional priority than a third-choice CM. STATUS CHECK 9 Aug: no fresh reporting found since ~June — genuinely quiet, likelihood trimmed slightly to reflect the gap, not treated as dead."
  },
  // NOTE: Vuskovic REMOVED — sale to Brighton confirmed, see DEPARTURES below
  // NOTE: Eli Junior Kroupi REMOVED 9 Aug 2026 — dead. Bournemouth told him
  // directly he won't be sold this summer; club is preparing for its first
  // Europa League campaign and plans to reassess his value in ~a year.
  // "The Kroupi dream is over" per one outlet. (The i Paper via HotspurHQ,
  // Spurs Web — 9 Aug)
  // NOTE: Maghnes Akliouche REMOVED 9 Aug 2026 — confirmed gone to PSG,
  // "Here We Go" (Fabrizio Romano). Matches this brief's own prior read
  // that PSG were firmly leading the race.
  // NOTE: Cody Gakpo REMOVED 17 Jul 2026 — dead lead, no fresh reporting since
  // 25 Jun, stalled behind the Leao/Savinho race at 8% likelihood. Re-add if
  // new reporting surfaces rather than leaving a stale entry on the dashboard.
  {
    player:"Victor Osimhen", e:"🇳🇬", from:"Galatasaray", fee:"55m", like:38, st:"warm", date:"9 Aug",
    brief:"Promoted from anonymous-only chatter (see ANON_BRIEFS 3-4 Aug) to a proper brief — this has now graduated to multiple named outlets reporting a formal approach. Tottenham have proposed £50-55m; Galatasaray want £65m, a £10-15m gap that's the main obstacle. Reports (Caught Offside, citing agent-industry sources; thehardtackle) say Spurs have 'received sporting approval to begin formal negotiations' and personal terms aren't expected to be a hurdle. Would be a 7th major signing after an already record summer (£230m+ spent on 6 arrivals), which is the real question mark — not the player's willingness, but whether the finances stack up. Also being weighed alongside continued interest in Cody Gakpo."
  },
  {
    player:"Endrick", e:"🇧🇷", from:"Real Madrid", fee:"Loan", like:35, st:"warm", date:"9 Aug",
    brief:"Real Madrid forward, spent last season on loan at Lyon, now drawing interest from up to 8 Premier League clubs (Chelsea, Arsenal, Liverpool, Man City, Man Utd, Tottenham, Aston Villa, Fulham per TEAMtalk). The detail that favours Spurs: Real Madrid's own preference is a straight loan with no purchase option, and Tottenham are one of only three interested clubs (with Villa and Fulham) willing to do a loan-only deal — Chelsea, Arsenal, Liverpool, City and Man Utd have all said they'd only consider it with a buy option attached, which clashes with what Real actually want. That structural fit is a genuine edge, but with so many suitors circling Pérez's decision, treat as a real but competitive loan pursuit rather than advanced."
  },
  {
    player:"Georges Mikautadze", e:"🇬🇪", from:"Villarreal", fee:"TBC (€50-60m mooted, unconfirmed)", like:26, st:"warm", date:"9 Aug",
    brief:"Georgian forward (13 goals, 6 assists in 32 La Liga appearances last season; joint-top scorer at Euro 2024), seen as a possible fit given Solanke's injury and Kolo Muani's struggles in front of goal. Sourced to Paul O'Keefe (7 Aug) — one of the anonymous accounts already on the Twitter Pulse tracking list — who is explicit that 'no formal approach has yet been made,' just close monitoring. Per the project's own weighting rule, anon-only/no-Newsworthy-corroboration chatter caps around 45%; this is earlier-stage than that (pre-approach), so kept well under. Fee figures floating in some outlets (€50-60m) are unconfirmed by a named source — treat as market chatter, not a real asking price yet."
  },
];

export const CONFIRMED = [
  {
    player:"Sandro Tonali", e:"🇮🇹", from:"Newcastle", fee:"100m", role:"DM", date:"2026-07-03",
    note:"Confirmed by BBC, Sky Sports, football.london and Romano. Initial fee £92.5m rising to £100m with add-ons. 6-year deal. De Zerbi connection central to move. Role confirmed as DM (his primary position at Milan/Newcastle)."
  },
  // Newest first
  {
    player:"Mateus Fernandes", e:"🇵🇹", from:"West Ham", fee:"85m", role:"CM", date:"1 Jul 2026",
    note:"CLUB RECORD. Romano + Ornstein confirmed. Medical underway. Beats Man Utd to signing."
  },
  {
    player:"JP van Hecke", e:"🇳🇱", from:"Brighton", fee:"52m", role:"CB", date:"Jun 2026",
    note:"5-yr deal. De Zerbi reunion. At WC with Netherlands."
  },
  {
    player:"A. Robertson", e:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", from:"Liverpool", fee:"Free", role:"LB", date:"Jun 2026",
    note:"Experience and cover at LB."
  },
  {
    player:"M. Senesi", e:"🇦🇷", from:"Bournemouth", fee:"Free", role:"CB", date:"Jun 2026",
    note:"AFC Bournemouth's Players' Player of the Year. 4-yr deal."
  },
  {
    player:"M. Dubravka", e:"🇸🇰", from:"Burnley", fee:"Free", role:"GK", date:"24 Jun 2026",
    note:"Joins Jul 1. Backup to Kinsky. 60 Slovakia caps."
  },
];

// NOTE: D. Spence REMOVED from Departures 31 Jul 2026 — De Zerbi's stance
// reversed after Spence's strong World Cup form (vs Norway and Argentina).
// Manager now wants him to stay: "I would like you to stay if you want to
// stay. If you don't want to stay, if you want to leave, then you have to
// leave." Liverpool and Everton interest remains credited but no advanced
// talks reported with any club. Framed as the player's own choice now, not
// an expected exit. (Sources: football365, caughtoffside, fotmob,
// sportingpedia — 30 Jul 2026)
//
// NOTE: R. Bentancur REMOVED 31 Jul 2026 — was incorrectly listed as a
// free departure ("contract expired"). Verified against Transfermarkt +
// multiple outlets: Tottenham actually tied him to a NEW long-term
// contract (reported Oct 2025) — he was never a confirmed departure.
// Earlier data appears to have misread a renewal story as an expiry.
export const DEPARTURES = [
  {player:"Mikey Moore", note:"NEW 9 Aug — promoted from ANON_BRIEFS now that it's Romano-attributed. FC Köln have submitted an official bid for a season-long loan; Romano (exclusive, 2 Aug): 'negotiations at advanced stages with #THFC as deal could be completed next week with Moore open to the move.' Several other European clubs have shown interest but Köln are the clear frontrunners. Loan only, not a permanent exit."},
  {player:"C. Melia", note:"Lincoln City sign Spurs goalkeeper Melia on loan — confirmed per BBC Sport. Loan departure, no fee."},
  {player:"Manor Solomon", note:"talkSPORT (primary) reports Tottenham are open to selling Manor Solomon to a Championship club. Player has not featured for Spurs in three years per The Sun (primary). No specific club or fee confirmed yet — departure appears likely but not formally agreed."},
  {player:"N. Lankshear", note:"Middlesbrough sign Tottenham striker Lankshear — confirmed per BBC Sport. Permanent departure; no fee reported in headline."},
  {player:"M. Akhamrich", note:"Tottenham winger Akhamrich joins Leyton Orient on loan — confirmed per BBC Sport. Loan move, no fee."},
  {player:"G. Vicario", note:"Juventus CEO Giovanni Carnevali has confirmed direct interest; Spalletti has spoken to Vicario personally. Spurs have set a €15m asking price (negotiable). Complication: Vicario wants ~€4m/yr after tax, above Juve's wage discipline, and Juve's actual first choice is Aston Villa's Emi Martínez (who Villa won't sell) — Vicario is the fallback. A loan-with-option is being discussed as a compromise. Drags into August."},
  {player:"C. Romero", note:"Expected to leave this summer per multiple mid-July reports. Spurs have set a €50m (~£42-43m) asking price. Romero's own preference is a return to Spain with Barcelona, though no formal bid is in yet. Inter Milan explored a move (raised while discussing Djed Spence) but see a fee near €60m as too rich. Atlético Madrid also mentioned. No bid lodged as of 17 Jul, but Spurs look increasingly resigned to selling before the window shuts. UPDATE 31 Jul (Twitter Pulse): De Zerbi confirmed on record to Alasdair Gold (Newsworthy source) that Romero wants to leave — the first direct managerial confirmation of the exit. Anonymous chatter separately adds Atlético Madrid actively negotiating alongside Inter, though no Spanish package is expected to beat Inter's current terms."},
  {player:"P. Sarr", note:"NEW 31 Jul (Twitter Pulse, anonymous-sourced only — no Newsworthy corroboration yet, treat as early-stage): Aston Villa preparing a bid, described as holding 'serious interest.' Personal terms reportedly not expected to be an issue. A German club is also credited with interest."},
  {player:"L. Bergvall", note:"Handed in a transfer request citing lack of first-team football (112 mins under De Zerbi all season). Nottingham Forest had an opening £38m bid rejected and are expected to return with an improved offer — the chance to work under Oliver Glasner is reportedly a big pull for the player. Spurs are willing to sell but only on their valuation; will keep him if it isn't met."},
  {player:"Richarlison", note:"Spurs are ready to sell with a year left on his deal, partly to manage Profit & Sustainability Rules headroom after the Fernandes/Tonali spend. Asking price reported between €20-30m. Juventus have joined the race as a fallback if their move for PSG's Kolo Muani fails; an unnamed Turkish club and Orlando City (MLS) have also been mentioned, Everton links have gone cold."},
  {player:"J. Palhinha", note:"Loan spell ended and Tottenham's move to sign him permanently is now 100% dead (reliable reporting, 10 Jul) — the player has posted a farewell message to Spurs fans, contract expired 30 Jun. No permanent destination confirmed yet: Sporting CP are the most consistent link (Palhinha open to a return to Portugal) with Bayern wanting a sale rather than a loan; Benfica, Juventus and Aston Villa also mentioned."},
  {player:"Luka Vuskovic", note:"Sale to Brighton agreed — £46m (BBC), with a significant sell-on clause. 19-year-old Croatian CB had never made a senior Spurs appearance."},
  {player:"Y. Bissouma",     note:"Released — contract expired Jun 30 (Official)"},
  {player:"A. Veliz",        note:"SOLD — Bahia £7.8m + add-ons + 20% sell-on. Effective 1 Jul 2026 (Official)"},
  {player:"Kolo Muani",      note:"Loan ended — returned to PSG"},
];

// Anonymous transfer intelligence — sourced from SpursWeb/insider aggregators
export const ANON_BRIEFS = [
  {
    date:"11 Aug",
    text:"Word from inside Hotspur Way is that the Romero situation has moved faster than the club's public posture suggests — Atlético's talks aren't exploratory anymore, and sources close to the player indicate his camp are no longer waiting for a bid to materialise before making their preference clear. The Arsenal name keeps surfacing in the background, and for the first time this summer, it's not being laughed off."
  },
  {
    date:"11 Aug",
    text:"There's a quiet buzz around the Ashley Phillips situation — a 'concerning' medical issue has reportedly delayed what looked like a straightforward £20m deal, and nobody at the club is willing to say on the record how serious it is. The working assumption is that it gets resolved, but the fact it's surfaced at all has introduced a nervousness that wasn't there a week ago."
  },
  {
    date:"9 Aug",
    text:"Word drifting in from the Atletico talks is that Romero's camp are not just entertaining the conversation — they're driving it. BBC Sport's confirmation that Atletico held direct talks is being read inside N17 as a sign the player's preference for Spain is hardening into something more formal. Arsenal's name keeps surfacing in the background, which nobody at the club wants to say out loud, but it's no longer being dismissed the way it was a fortnight ago."
  },
  {
    date:"9 Aug",
    text:"The Van de Ven contract noise has shifted in tone — sources close to the situation suggest this is no longer a negotiation but a formality waiting on paperwork. BBC Sport's 'close to agreeing' language is being treated inside the building as closer to done than the careful wording implies, with De Zerbi's direct involvement credited as the moment talks accelerated."
  },
  {
    date:"8 Aug",
    text:"Word out of pre-season is that the Van de Ven contract situation moved quickly once De Zerbi got involved directly — sources close to the player suggest the manager's personal pitch was the turning point after weeks of stalled talks. The deal isn't signed yet, but the feeling inside the camp is that it's a formality now rather than a negotiation."
  },
  {
    date:"8 Aug",
    text:"Ferran Torres has apparently been telling people he's open to a new challenge, and the name in the background is Spurs. Nothing formal has been lodged, and Torres himself has been careful with his words publicly — but the admission about his future hasn't gone unnoticed at Hotspur Way. Whether De Zerbi sees him as the profile he actually wants up front is the question being quietly asked."
  },
];
