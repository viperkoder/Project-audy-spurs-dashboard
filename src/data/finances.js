// Financial Intelligence — Summer 2026 spend, sales & PSR/SCR position
// Edit this file alone to change anything on the Finances tab.
//
// This is a MANUALLY maintained cross-reference of transfers.js, not a
// programmatic derivation — fee strings in transfers.js mix £/€ and aren't
// reliably parseable (e.g. "60m" sometimes means £60m, sometimes converted
// from €60m). Every time CONFIRMED/DEPARTURES/TRANSFER_BRIEFS changes in
// transfers.js, update the matching numbers here too.
//
// All figures in £m. € figures converted at an approximate €1 = £0.87 and
// flagged in `note` — treat as indicative, not exact, until a fee is
// officially confirmed in GBP.
//
// Last verified: 31 Jul 2026.

// ── Done deals — money already committed ────────────────────────────────
export const CONFIRMED_SPEND = [
  {player:"Sandro Tonali",     from:"Newcastle",  fee:100, note:"Initial £92.5m, could rise to £100m with add-ons"},
  {player:"Mateus Fernandes",  from:"West Ham",   fee:85,  note:"Club record fee"},
  {player:"JP van Hecke",      from:"Brighton",   fee:52,  note:""},
  {player:"Andy Robertson",    from:"Liverpool",  fee:0,   note:"Free transfer — wage cost only, not reflected here"},
  {player:"Marcos Senesi",     from:"Bournemouth",fee:0,   note:"Free transfer — wage cost only, not reflected here"},
  {player:"Martin Dubravka",   from:"Burnley",    fee:0,   note:"Free transfer — wage cost only, not reflected here"},
];

// NOTE 31 Jul 2026: R. Bentancur REMOVED — was incorrectly listed here as a
// free departure ("contract expired"). Verified against Transfermarkt +
// multiple outlets: Tottenham actually tied him to a NEW long-term contract
// (reported Oct 2025) — he was never a confirmed departure. Earlier data
// appears to have misread a renewal story as an expiry. He remains a
// first-team Spurs player, not reflected in Finances at all.
//
// N. Lankshear (Middlesbrough) and M. Akhamrich (Leyton Orient loan) are
// confirmed departures per BBC Sport (see transfers.js DEPARTURES) but
// neither headline reported a fee — listed here as undisclosed rather than
// omitted, so the panel doesn't silently miss a real departure.
export const CONFIRMED_INCOME = [
  {player:"Luka Vuskovic",      to:"Brighton",       fee:46,  note:"Plus a significant sell-on clause"},
  {player:"Antonio Veliz",      to:"Bahia",          fee:7.8, note:"Plus add-ons + 20% sell-on"},
  {player:"Yves Bissouma",      to:"—",              fee:0,   note:"Released — wage saving only, no fee"},
  {player:"N. Lankshear",       to:"Middlesbrough",  fee:0,   note:"Fee undisclosed in reporting — verify and update if a figure surfaces"},
  {player:"M. Akhamrich",       to:"Leyton Orient",  fee:0,   note:"Loan move, no fee — wage saving only while out"},
];

// ── In progress — nothing here is booked. `likelihood` is the same
// editorial-judgment estimate used on the Transfers tab, not betting odds. ──
export const IN_PROGRESS_SALES = [
  {player:"Richarlison",      to:"Juventus (fallback) / Turkey / Orlando City", askGBP:21, likelihood:65, note:"€20-30m asking range, using midpoint. PSR/SCR-driven sale."},
  {player:"Guglielmo Vicario",to:"Juventus (loan+option discussed)",            askGBP:13, likelihood:65, note:"€15m asking price, described as negotiable"},
  {player:"Cristian Romero",  to:"Barcelona preferred / Inter interest",        askGBP:43, likelihood:60, note:"€50m asking price, no formal bid yet"},
  {player:"Lucas Bergvall",   to:"Nottingham Forest (£38m bid rejected)",       askGBP:38, likelihood:55, note:"Forest expected to return with an improved offer"},
  // NOTE 31 Jul 2026: D. Spence REMOVED — De Zerbi's stance reversed after
  // strong World Cup form; manager now wants him to stay. See transfers.js
  // DEPARTURES note for sourcing. No longer an expected sale.
];

export const IN_PROGRESS_BUYS = [
  {player:"Savinho",           from:"Man City",   feeGBP:60,  likelihood:78},
  {player:"Rafael Leao",       from:"AC Milan",   feeGBP:51,  likelihood:72, note:"€60m"},
  {player:"Carlos Baleba",     from:"Brighton",   feeGBP:100, likelihood:38, note:"Valuation has climbed sharply since De Zerbi's Brighton days"},
  {player:"Bart Verbruggen",   from:"Brighton",   feeGBP:30,  likelihood:35},
  {player:"Eli Junior Kroupi", from:"Bournemouth",feeGBP:85,  likelihood:28, note:"Bournemouth's stance has hardened — 'highly unlikely' per Sky Sports"},
  // Akliouche (PSG favourites) and Gakpo (dormant) excluded — too low-likelihood
  // to be meaningful in a financial projection; see TRANSFER_BRIEFS for those.
];

// Context blurb for the panel header — kept as data so it's a one-line edit
// if the framing needs to change as SCR reporting becomes more common than PSR.
export const FINANCE_CONTEXT = "From 2026/27 the Premier League's old Profit & Sustainability Rules (PSR) are being phased out in favour of Squad Cost Ratio (SCR) — approved by clubs Nov 2025 — which caps squad costs (wages, player amortisation, agents' fees) at 85% of adjusted revenue, with a multi-year allowance above that before sporting sanctions apply. Most current reporting on Spurs' sales still says \"PSR\" out of habit — treat it as shorthand for the same underlying financial discipline.";
