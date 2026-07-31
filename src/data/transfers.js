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
    player:"Savinho", e:"🇧🇷", from:"Man City", fee:"60m", like:82, st:"hot", date:"17 Jul",
    brief:"Now the most advanced of Spurs' two winger pursuits. Romano has reiterated — pinning his own earlier reporting back to the top of his feed — that Savinho has already said yes to the move and is being described as Tottenham's 'next big name' and likely seventh major signing of the summer. Personal terms are done; Spurs are waiting on City's final sign-off with conversations 'ongoing' and City reportedly willing to sell for around £60m this time (they blocked it last summer while chasing Rodrygo as a replacement, which never materialised, and re-signed Savinho instead). With City no longer holding out for a like-for-like replacement, this looks like the closest of all of Spurs' winger targets to being done — marginally ahead of Leao on advancement, even if Leao's is the flashier name."
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
export const DEPARTURES = [
  {player:"N. Lankshear", note:"Middlesbrough sign Tottenham striker Lankshear — confirmed per BBC Sport. Permanent departure; no fee reported in headline."},
  {player:"M. Akhamrich", note:"Tottenham winger Akhamrich joins Leyton Orient on loan — confirmed per BBC Sport. Loan move, no fee."},
  {player:"G. Vicario", note:"Juventus CEO Giovanni Carnevali has confirmed direct interest; Spalletti has spoken to Vicario personally. Spurs have set a €15m asking price (negotiable). Complication: Vicario wants ~€4m/yr after tax, above Juve's wage discipline, and Juve's actual first choice is Aston Villa's Emi Martínez (who Villa won't sell) — Vicario is the fallback. A loan-with-option is being discussed as a compromise. Drags into August."},
  {player:"C. Romero", note:"Expected to leave this summer per multiple mid-July reports. Spurs have set a €50m (~£42-43m) asking price. Romero's own preference is a return to Spain with Barcelona, though no formal bid is in yet. Inter Milan explored a move (raised while discussing Djed Spence) but see a fee near €60m as too rich. Atlético Madrid also mentioned. No bid lodged as of 17 Jul, but Spurs look increasingly resigned to selling before the window shuts."},
  {player:"L. Bergvall", note:"Handed in a transfer request citing lack of first-team football (112 mins under De Zerbi all season). Nottingham Forest had an opening £38m bid rejected and are expected to return with an improved offer — the chance to work under Oliver Glasner is reportedly a big pull for the player. Spurs are willing to sell but only on their valuation; will keep him if it isn't met."},
  {player:"Richarlison", note:"Spurs are ready to sell with a year left on his deal, partly to manage Profit & Sustainability Rules headroom after the Fernandes/Tonali spend. Asking price reported between €20-30m. Juventus have joined the race as a fallback if their move for PSG's Kolo Muani fails; an unnamed Turkish club and Orlando City (MLS) have also been mentioned, Everton links have gone cold."},
  {player:"J. Palhinha", note:"Loan spell ended and Tottenham's move to sign him permanently is now 100% dead (reliable reporting, 10 Jul) — the player has posted a farewell message to Spurs fans, contract expired 30 Jun. No permanent destination confirmed yet: Sporting CP are the most consistent link (Palhinha open to a return to Portugal) with Bayern wanting a sale rather than a loan; Benfica, Juventus and Aston Villa also mentioned."},
  {player:"Luka Vuskovic", note:"Sale to Brighton agreed — £46m (BBC), with a significant sell-on clause. 19-year-old Croatian CB had never made a senior Spurs appearance."},
  {player:"Y. Bissouma",     note:"Released — contract expired Jun 30 (Official)"},
  {player:"A. Veliz",        note:"SOLD — Bahia £7.8m + add-ons + 20% sell-on. Effective 1 Jul 2026 (Official)"},
  {player:"Kolo Muani",      note:"Loan ended — returned to PSG"},
  {player:"R. Bentancur",    note:"Contract expired Jun 30 — at WC with Uruguay"},
];

// Anonymous transfer intelligence — sourced from SpursWeb/insider aggregators
export const ANON_BRIEFS = [
  {
    date:"31 Jul",
    text:"Murmurs out of the Sydney camp suggest Romero's representatives have quietly opened conversations with at least two Spanish clubs — sources describe the situation as the player 'driving his own exit' rather than waiting for Spurs to push. The £42m asking price is said to be the sticking point, but the feeling inside the tour party is that a bid is closer than the official line suggests."
  },
  {
    date:"31 Jul",
    text:"De Zerbi's 'bomba' language at today's press conference wasn't accidental. Word is the manager was given a green light before speaking — whatever is imminent has already cleared the desk of Daniel Levy. Staff are not expecting it to be Savinho, whose paperwork is described as 'nearly administrative' at this point. Something else is moving."
  },
  {
    date:"17 Jul",
    text:"Two stories settled, for the record. Kane: he's chosen not to trigger his release clause and is signing a one-year extension at Bayern — the reunion talk was real interest, not fiction, but it's off for now. Archie Gray: Newcastle's swap approach and the 'sources deny a bid' story both went nowhere — De Zerbi has told the squad directly that Gray isn't for sale at any price, full stop. Neither needs further tracking as a live rumour."
  },
  {
    date:"16 Jul",
    text:"Word inside the building is that this is no longer a straight Leao-or-Savinho call — with Fernandes and Tonali paid for, the recruitment team believe there's a route to funding both if the outgoing pipeline (Romero, Spence, Richarlison, Vicario) clears in time. PSR headroom is the real constraint now, not scouting conviction. Staff are said to be quietly confident Leao gets prioritised first given the personal terms are furthest along."
  },
  {
    date:"9 Jul",
    text:"Word inside the building is that the mood has shifted decisively toward Leao over the last few days. Savinho was the long-standing priority, but sources close to the recruitment team say the player's willingness to accept a move without Champions League football — something Savinho's camp were said to be less relaxed about — tipped the internal debate. Kroupi is increasingly viewed as a 2027 target rather than this summer, given Bournemouth's refusal to engage."
  },
  {
    date:"4 Jul",
    text:"Whispers from inside Hotspur Way suggest Bergvall's situation is more complicated than the official line. The club told him firmly he won't be sold cheaply — but staff privately acknowledge the player's discontent is genuine. Whether that quiet understanding leads anywhere before the window closes is a question nobody inside N17 is answering directly."
  },
];
