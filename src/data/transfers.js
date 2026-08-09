// Transfer Intelligence — Summer 2026
// Edit this file alone for transfer rumours, confirmed signings, departures.
// Last manual verification pass: 31 Jul 2026 (cross-checked against live reporting).
// Automation was down 4-17 Jul (stale project path + node PATH issue under
// launchd) — fixed via automation/install-launchd.sh, see automation/SETUP.md.

export const TRANSFER_BRIEFS = [
  // NOTE: Fernandes REMOVED — confirmed signing as of 1 Jul 2026
  // NOTE: Tonali REMOVED — confirmed signing as of 3 Jul 2026, see CONFIRMED below
  {
    player:"Rafael Leao", e:"🇵🇹", from:"AC Milan", fee:"60m", like:72, st:"hot", date:"16 Jul",
    brief:"Leao has agreed personal terms and, per multiple outlets (football365, GiveMeSport, TNT Sports), has told Spurs he's ready to say yes even without Champions League football — a huge boost given the rival interest. New Milan boss Ruben Amorim has sanctioned an exit, deeming him surplus to requirements. Milan want €60m (~£51m) for a permanent deal but would consider an initial loan with an obligation to buy at a similar figure. Jorge Mendes is driving the deal. Saudi Pro League clubs remain circling as a fallback for the player, but Spurs are seen as the front-runners as of mid-July."
  },
  {
    player:"Savinho", e:"🇧🇷", from:"Man City", fee:"60m", like:88, st:"hot", date:"17 Jul",
    brief:"Now the most advanced of Spurs' two winger pursuits. Romano has reiterated — pinning his own earlier reporting back to the top of his feed — that Savinho has already said yes to the move and is being described as Tottenham's 'next big name' and likely seventh major signing of the summer. Personal terms are done; Spurs are waiting on City's final sign-off with conversations 'ongoing' and City reportedly willing to sell for around £60m this time (they blocked it last summer while chasing Rodrygo as a replacement, which never materialised, and re-signed Savinho instead). With City no longer holding out for a like-for-like replacement, this looks like the closest of all of Spurs' winger targets to being done — marginally ahead of Leao on advancement, even if Leao's is the flashier name. UPDATE 31 Jul (Twitter Pulse, anon-sourced): chatter describes Spurs as 'growing impatient' — City reportedly indicated a green light once Savinho returned to the UK, then delayed further once he did. Reads as continued friction rather than a stalled deal, consistent with today's whisper that paperwork is 'nearly administrative.'"
  },
  {
    player:"Carlos Baleba", e:"🇨🇲", from:"Brighton", fee:"100m", like:38, st:"warm", date:"14 Jul",
    brief:"One of three De Zerbi ex-Brighton targets (with Verbruggen; Van Hecke already signed). De Zerbi worked closely with Baleba at Brighton — 37 games together — and rates him highly. His valuation has climbed sharply since De Zerbi signed him for £23.3m in 2024, with reports now pricing him as high as £100m, which has cooled the pace of any move. Man Utd interest previously reported has gone quiet; Spurs could revisit if that move stays dead. Club acknowledges landing all three Brighton targets in one window is unlikely."
  },
  {
    player:"Bart Verbruggen", e:"🇳🇱", from:"Brighton", fee:"30m", like:35, st:"warm", date:"14 Jul",
    brief:"Still De Zerbi's preferred long-term No.1 — Dubravka was always a short-term/backup solution. Verbruggen remains attracting interest from elsewhere in Europe, so competition is a live risk. Vicario sale proceeds earmarked to help fund this move. Considered the more advanced of the two remaining Brighton targets given goalkeeper is a clearer positional priority than a third-choice CM."
  },
  // NOTE: Vuskovic REMOVED — sale to Brighton confirmed, see DEPARTURES below
  {
    player:"Eli Junior Kroupi", e:"🇫🇷", from:"Bournemouth", fee:"85m", like:28, st:"warm", date:"12 Jul",
    brief:"Spurs have lined up a big offer (~£85m) but Bournemouth's stance has hardened further: new manager Marco Rose wants his strongest possible squad for his first season, there's no financial pressure to sell, and the club is wary of losing another breakout academy-to-first-team star having watched this happen before. He's contracted to 2030 with no release clause. Arsenal, Liverpool, Chelsea, Man Utd and Barcelona are all also credited with interest, which further reduces Spurs' odds of a deal getting done. Increasingly looks like a 2027 target rather than this summer."
  },
  {
    player:"Maghnes Akliouche", e:"🇫🇷", from:"Monaco", fee:"60m", like:18, st:"cold", date:"16 Jul",
    brief:"Spurs have made contact over a deal (~£60m) and he was on the club's radar last summer and again in January. But PSG are firmly leading the race and talks between Monaco and PSG have been progressing — the player himself reportedly wants to stay in France with the Ligue 1 champions. Monitor only; not a live priority while PSG remain favourites."
  },
  // NOTE: Cody Gakpo REMOVED 17 Jul 2026 — dead lead, no fresh reporting since
  // 25 Jun, stalled behind the Leao/Savinho race at 8% likelihood. Re-add if
  // new reporting surfaces rather than leaving a stale entry on the dashboard.
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
  {
    date:"4 Aug",
    text:"Word filtering through from today's reporting is that the Victor Osimhen approach is more than a throwaway line — football.london's 'shock' framing may actually undersell how seriously De Zerbi is pushing this internally. The 'bomba' language at press conferences has been consistent enough that people inside the building are no longer treating a world-class striker as a fantasy. Whether Spurs can engineer the finances after the most expensive summer in the club's history remains the question nobody wants to answer out loud."
  },
  {
    date:"4 Aug",
    text:"Spurs have reportedly reached out to a £43m-rated Italian defender to gauge his contract demands, per football.london — a quiet piece of business that suggests the Romero departure planning is further along than the public line implies. No name has been confirmed by a primary source, but the timing, with Romero's exit edging closer, is unlikely to be coincidental."
  },
];
