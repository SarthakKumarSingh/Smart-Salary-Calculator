/**
 * Smart Salary Calculator v2.0 — 50 US States Tax Data (2026 estimates)
 *
 * Progressive brackets are used where the state has graduated rates.
 * Flat-rate states are expressed as a single-entry bracket array.
 * No-income-tax states have an empty brackets array.
 *
 * Fields:
 *   slug        — URL-safe identifier
 *   name        — Display name
 *   abbr        — 2-letter state abbreviation
 *   rate         — Average effective rate (kept for backward compat / quick estimates)
 *   brackets     — [[topOfBracket, marginalRate], ...] for single filers
 *   stdDeduction — State standard deduction for single filers (0 if none / N/A)
 *   hasLocalTax  — Whether notable local/city taxes exist
 *   note         — Short SEO-friendly note
 *   detail       — Longer description for state page content
 */

export const states = [
  { slug: 'alabama', name: 'Alabama', abbr: 'AL', rate: 0.041,
    brackets: [[500,0.02],[3000,0.04],[Infinity,0.05]],
    stdDeduction: 2500, hasLocalTax: false,
    note: 'uses progressive state income tax brackets',
    detail: 'Alabama has a graduated income tax with rates from 2% to 5%. The state also has relatively low property taxes but higher sales taxes.' },

  { slug: 'alaska', name: 'Alaska', abbr: 'AK', rate: 0,
    brackets: [],
    stdDeduction: 0, hasLocalTax: false,
    note: 'has no state income tax',
    detail: 'Alaska is one of nine states with no state income tax. Residents also receive an annual Permanent Fund Dividend from oil revenues.' },

  { slug: 'arizona', name: 'Arizona', abbr: 'AZ', rate: 0.025,
    brackets: [[Infinity,0.025]],
    stdDeduction: 14600, hasLocalTax: false,
    note: 'uses a flat 2.5% state income tax',
    detail: 'Arizona implemented a flat 2.5% income tax rate. The state has a moderate cost of living and no local income taxes.' },

  { slug: 'arkansas', name: 'Arkansas', abbr: 'AR', rate: 0.039,
    brackets: [[4400,0.02],[8800,0.04],[Infinity,0.044]],
    stdDeduction: 2340, hasLocalTax: false,
    note: 'uses progressive state income tax brackets',
    detail: 'Arkansas has graduated income tax rates from 2% to 4.4%. The state has been progressively lowering its top rate.' },

  { slug: 'california', name: 'California', abbr: 'CA', rate: 0.061,
    brackets: [[10412,0.01],[24684,0.02],[38959,0.04],[54081,0.06],[68350,0.08],[349137,0.093],[418961,0.103],[698271,0.113],[Infinity,0.123]],
    stdDeduction: 5540, hasLocalTax: false,
    note: 'has the highest marginal state income tax rate at 12.3%',
    detail: 'California has the highest top marginal income tax rate in the nation at 12.3%, plus an additional 1% mental health services tax on income over $1M. SDI (State Disability Insurance) is also withheld at ~1.1%.' },

  { slug: 'colorado', name: 'Colorado', abbr: 'CO', rate: 0.044,
    brackets: [[Infinity,0.044]],
    stdDeduction: 14600, hasLocalTax: true,
    note: 'uses a flat 4.4% state income tax',
    detail: 'Colorado has a flat income tax rate of 4.4%. Denver and some other cities levy additional local occupational privilege taxes.' },

  { slug: 'connecticut', name: 'Connecticut', abbr: 'CT', rate: 0.052,
    brackets: [[10000,0.03],[50000,0.05],[100000,0.055],[200000,0.06],[250000,0.065],[500000,0.069],[Infinity,0.0699]],
    stdDeduction: 0, hasLocalTax: false,
    note: 'uses progressive state income tax brackets up to 6.99%',
    detail: 'Connecticut has a graduated income tax with rates ranging from 3% to 6.99%. The state does not allow a standard deduction but offers personal exemptions.' },

  { slug: 'delaware', name: 'Delaware', abbr: 'DE', rate: 0.052,
    brackets: [[2000,0],[5000,0.022],[10000,0.039],[20000,0.048],[25000,0.052],[60000,0.0555],[Infinity,0.066]],
    stdDeduction: 3250, hasLocalTax: true,
    note: 'uses progressive state income tax brackets up to 6.6%',
    detail: 'Delaware has a graduated income tax with a top rate of 6.6%. Wilmington levies an additional city wage tax of 1.25%.' },

  { slug: 'florida', name: 'Florida', abbr: 'FL', rate: 0,
    brackets: [],
    stdDeduction: 0, hasLocalTax: false,
    note: 'has no state income tax',
    detail: 'Florida is one of the most popular no-income-tax states. It relies on sales tax and tourism revenue instead. No local income taxes exist.' },

  { slug: 'georgia', name: 'Georgia', abbr: 'GA', rate: 0.0549,
    brackets: [[Infinity,0.0549]],
    stdDeduction: 12000, hasLocalTax: false,
    note: 'uses a flat 5.49% state income tax',
    detail: 'Georgia transitioned to a flat income tax rate of 5.49%. The state previously had graduated rates up to 5.75%.' },

  { slug: 'hawaii', name: 'Hawaii', abbr: 'HI', rate: 0.064,
    brackets: [[2400,0.014],[4800,0.032],[9600,0.055],[14400,0.064],[19200,0.068],[24000,0.072],[36000,0.076],[48000,0.079],[150000,0.0825],[175000,0.09],[200000,0.10],[Infinity,0.11]],
    stdDeduction: 2200, hasLocalTax: false,
    note: 'has the most tax brackets of any state (12 brackets)',
    detail: 'Hawaii has the most tax brackets in the nation with 12 brackets and a top rate of 11%. The state also has a high cost of living.' },

  { slug: 'idaho', name: 'Idaho', abbr: 'ID', rate: 0.053,
    brackets: [[Infinity,0.058]],
    stdDeduction: 14600, hasLocalTax: false,
    note: 'uses a flat 5.8% state income tax',
    detail: 'Idaho adopted a flat 5.8% income tax rate. The state has a growing tech sector and moderate cost of living.' },

  { slug: 'illinois', name: 'Illinois', abbr: 'IL', rate: 0.0495,
    brackets: [[Infinity,0.0495]],
    stdDeduction: 0, hasLocalTax: false,
    note: 'uses a flat 4.95% state income tax',
    detail: 'Illinois has a flat income tax rate of 4.95%. The state does not offer a standard deduction but provides personal exemptions.' },

  { slug: 'indiana', name: 'Indiana', abbr: 'IN', rate: 0.0305,
    brackets: [[Infinity,0.0305]],
    stdDeduction: 0, hasLocalTax: true,
    note: 'uses a flat 3.05% state income tax plus county taxes',
    detail: 'Indiana has a flat state income tax of 3.05%, but all 92 counties levy additional local income taxes ranging from 0.5% to 2.9%.' },

  { slug: 'iowa', name: 'Iowa', abbr: 'IA', rate: 0.038,
    brackets: [[Infinity,0.038]],
    stdDeduction: 14600, hasLocalTax: false,
    note: 'uses a flat 3.8% state income tax',
    detail: 'Iowa has moved to a flat income tax rate of 3.8%. The state previously had graduated rates with a top rate of 8.53%.' },

  { slug: 'kansas', name: 'Kansas', abbr: 'KS', rate: 0.049,
    brackets: [[15000,0.031],[30000,0.0525],[Infinity,0.057]],
    stdDeduction: 3500, hasLocalTax: false,
    note: 'uses progressive state income tax brackets',
    detail: 'Kansas has a three-bracket progressive income tax system with rates from 3.1% to 5.7%.' },

  { slug: 'kentucky', name: 'Kentucky', abbr: 'KY', rate: 0.04,
    brackets: [[Infinity,0.04]],
    stdDeduction: 3160, hasLocalTax: true,
    note: 'uses a flat 4% state income tax plus local taxes',
    detail: 'Kentucky has a flat state income tax of 4%. Many cities and counties levy additional local occupational taxes, typically 1-2.5%.' },

  { slug: 'louisiana', name: 'Louisiana', abbr: 'LA', rate: 0.035,
    brackets: [[Infinity,0.03]],
    stdDeduction: 0, hasLocalTax: false,
    note: 'uses a flat 3% state income tax',
    detail: 'Louisiana adopted a flat 3% income tax rate. The state has no local income taxes but has relatively high sales taxes.' },

  { slug: 'maine', name: 'Maine', abbr: 'ME', rate: 0.056,
    brackets: [[24500,0.058],[57050,0.0675],[Infinity,0.0715]],
    stdDeduction: 14600, hasLocalTax: false,
    note: 'uses progressive state income tax brackets up to 7.15%',
    detail: 'Maine has a three-bracket graduated income tax with a top rate of 7.15%. The state offers a generous standard deduction.' },

  { slug: 'maryland', name: 'Maryland', abbr: 'MD', rate: 0.052,
    brackets: [[1000,0.02],[2000,0.03],[3000,0.04],[100000,0.0475],[125000,0.05],[150000,0.0525],[250000,0.055],[Infinity,0.0575]],
    stdDeduction: 2550, hasLocalTax: true,
    note: 'has state income tax plus county taxes of 2.25-3.2%',
    detail: 'Maryland has graduated state income tax rates from 2% to 5.75%. All counties and Baltimore City levy additional local income taxes ranging from 2.25% to 3.2%.' },

  { slug: 'massachusetts', name: 'Massachusetts', abbr: 'MA', rate: 0.05,
    brackets: [[1000000,0.05],[Infinity,0.09]],
    stdDeduction: 0, hasLocalTax: false,
    note: 'uses a flat 5% tax with 9% surtax on income over $1M',
    detail: 'Massachusetts has a flat 5% income tax, plus a 4% surtax on annual income exceeding $1 million (the "millionaire tax"). No standard deduction is offered.' },

  { slug: 'michigan', name: 'Michigan', abbr: 'MI', rate: 0.0425,
    brackets: [[Infinity,0.0425]],
    stdDeduction: 0, hasLocalTax: true,
    note: 'uses a flat 4.25% state income tax plus city taxes',
    detail: 'Michigan has a flat state income tax of 4.25%. Detroit levies an additional 2.4% city income tax, and some other cities have local taxes up to 1%.' },

  { slug: 'minnesota', name: 'Minnesota', abbr: 'MN', rate: 0.063,
    brackets: [[31690,0.0535],[104090,0.0680],[183340,0.0785],[Infinity,0.0985]],
    stdDeduction: 14575, hasLocalTax: false,
    note: 'has one of the highest top marginal rates at 9.85%',
    detail: 'Minnesota has a four-bracket graduated income tax with a top marginal rate of 9.85%, one of the highest in the nation.' },

  { slug: 'mississippi', name: 'Mississippi', abbr: 'MS', rate: 0.044,
    brackets: [[10000,0],[Infinity,0.044]],
    stdDeduction: 2300, hasLocalTax: false,
    note: 'uses a flat 4.4% state income tax on income over $10,000',
    detail: 'Mississippi effectively has a flat tax of 4.4% on taxable income over $10,000. The state is phasing toward eventually eliminating the income tax.' },

  { slug: 'missouri', name: 'Missouri', abbr: 'MO', rate: 0.045,
    brackets: [[1207,0.02],[2414,0.025],[3621,0.03],[4828,0.035],[6035,0.04],[7242,0.045],[8449,0.05],[Infinity,0.0495]],
    stdDeduction: 14600, hasLocalTax: true,
    note: 'uses progressive state income tax brackets',
    detail: 'Missouri has a graduated income tax with rates from 2% to 4.95%. Kansas City and St. Louis levy additional local earnings taxes of about 1%.' },

  { slug: 'montana', name: 'Montana', abbr: 'MT', rate: 0.053,
    brackets: [[20500,0.047],[Infinity,0.059]],
    stdDeduction: 14600, hasLocalTax: false,
    note: 'uses progressive state income tax brackets',
    detail: 'Montana has two income tax brackets with rates of 4.7% and 5.9%. The state has no sales tax.' },

  { slug: 'nebraska', name: 'Nebraska', abbr: 'NE', rate: 0.055,
    brackets: [[3700,0.0246],[22170,0.0351],[35730,0.0501],[Infinity,0.0584]],
    stdDeduction: 8350, hasLocalTax: false,
    note: 'uses progressive state income tax brackets',
    detail: 'Nebraska has a four-bracket graduated income tax with a top rate of 5.84%. The state has been gradually reducing its top rate.' },

  { slug: 'nevada', name: 'Nevada', abbr: 'NV', rate: 0,
    brackets: [],
    stdDeduction: 0, hasLocalTax: false,
    note: 'has no state income tax',
    detail: 'Nevada has no state income tax, relying primarily on gaming and sales tax revenue. It is a popular state for retirees and businesses.' },

  { slug: 'new-hampshire', name: 'New Hampshire', abbr: 'NH', rate: 0,
    brackets: [],
    stdDeduction: 0, hasLocalTax: false,
    note: 'has no wage income tax (interest/dividend tax phased out)',
    detail: 'New Hampshire does not tax wages or salary. It previously taxed interest and dividends, but that tax was fully phased out in 2025.' },

  { slug: 'new-jersey', name: 'New Jersey', abbr: 'NJ', rate: 0.052,
    brackets: [[20000,0.014],[35000,0.0175],[40000,0.035],[75000,0.05525],[500000,0.0637],[1000000,0.0897],[Infinity,0.1075]],
    stdDeduction: 0, hasLocalTax: false,
    note: 'uses progressive brackets with a top rate of 10.75%',
    detail: 'New Jersey has a graduated income tax with rates from 1.4% to 10.75%. The state has high property taxes but no local income taxes.' },

  { slug: 'new-mexico', name: 'New Mexico', abbr: 'NM', rate: 0.043,
    brackets: [[5500,0.017],[11000,0.032],[16000,0.047],[210000,0.049],[Infinity,0.059]],
    stdDeduction: 14600, hasLocalTax: false,
    note: 'uses progressive state income tax brackets',
    detail: 'New Mexico has a five-bracket graduated income tax with a top rate of 5.9%. Social Security benefits are exempt from state tax.' },

  { slug: 'new-york', name: 'New York', abbr: 'NY', rate: 0.061,
    brackets: [[8500,0.04],[11700,0.045],[13900,0.0525],[80650,0.0585],[215400,0.0625],[1077550,0.0685],[5000000,0.0965],[25000000,0.103],[Infinity,0.109]],
    stdDeduction: 8000, hasLocalTax: true,
    note: 'has state tax up to 10.9% plus NYC tax up to 3.876%',
    detail: 'New York has among the highest combined tax burdens in the U.S. State income tax rates go up to 10.9%, and New York City residents pay an additional 3.078–3.876% city income tax. Yonkers residents pay a 16.75% surcharge on their state tax.' },

  { slug: 'north-carolina', name: 'North Carolina', abbr: 'NC', rate: 0.0425,
    brackets: [[Infinity,0.0425]],
    stdDeduction: 13750, hasLocalTax: false,
    note: 'uses a flat 4.25% state income tax',
    detail: 'North Carolina has a flat income tax rate of 4.25%, down from 5.25% in recent years. The state has been steadily reducing its income tax rate.' },

  { slug: 'north-dakota', name: 'North Dakota', abbr: 'ND', rate: 0.0195,
    brackets: [[44725,0.0195],[Infinity,0.028]],
    stdDeduction: 14600, hasLocalTax: false,
    note: 'has one of the lowest state income tax rates',
    detail: 'North Dakota has the lowest income tax rates among states that levy one, with a top rate of only 2.8%.' },

  { slug: 'ohio', name: 'Ohio', abbr: 'OH', rate: 0.036,
    brackets: [[26050,0],[46100,0.02765],[92150,0.03226],[Infinity,0.03688]],
    stdDeduction: 0, hasLocalTax: true,
    note: 'uses progressive brackets plus local city/RITA taxes',
    detail: 'Ohio has graduated income tax rates from 0% to 3.688%. Many Ohio cities and school districts also impose local income taxes, typically 1–2.5%.' },

  { slug: 'oklahoma', name: 'Oklahoma', abbr: 'OK', rate: 0.039,
    brackets: [[1000,0.0025],[2500,0.0075],[3750,0.0175],[4900,0.0275],[7200,0.0375],[Infinity,0.0475]],
    stdDeduction: 6350, hasLocalTax: false,
    note: 'uses progressive state income tax brackets up to 4.75%',
    detail: 'Oklahoma has a six-bracket graduated income tax with a top rate of 4.75%. The state has been gradually reducing its top rate.' },

  { slug: 'oregon', name: 'Oregon', abbr: 'OR', rate: 0.071,
    brackets: [[4050,0.0475],[10200,0.0675],[125000,0.0875],[Infinity,0.099]],
    stdDeduction: 2745, hasLocalTax: true,
    note: 'has a top rate of 9.9% and no sales tax',
    detail: 'Oregon has one of the highest state income tax rates at 9.9%. However, the state has no sales tax. Portland-area residents also pay additional local transit and arts taxes.' },

  { slug: 'pennsylvania', name: 'Pennsylvania', abbr: 'PA', rate: 0.0307,
    brackets: [[Infinity,0.0307]],
    stdDeduction: 0, hasLocalTax: true,
    note: 'uses a flat 3.07% state income tax plus local taxes',
    detail: 'Pennsylvania has a flat state income tax of 3.07%. Philadelphia levies a city wage tax (~3.75% for residents), and many other municipalities have local earned income taxes of 1–2%.' },

  { slug: 'rhode-island', name: 'Rhode Island', abbr: 'RI', rate: 0.044,
    brackets: [[77450,0.0375],[176050,0.0475],[Infinity,0.0599]],
    stdDeduction: 10550, hasLocalTax: false,
    note: 'uses progressive state income tax brackets',
    detail: 'Rhode Island has a three-bracket graduated income tax with a top rate of 5.99%.' },

  { slug: 'south-carolina', name: 'South Carolina', abbr: 'SC', rate: 0.049,
    brackets: [[3460,0],[17330,0.03],[Infinity,0.064]],
    stdDeduction: 14600, hasLocalTax: false,
    note: 'uses progressive brackets with a top rate of 6.4%',
    detail: 'South Carolina has graduated income tax rates with a top rate of 6.4%. The state is gradually reducing this rate toward 0% over many years.' },

  { slug: 'south-dakota', name: 'South Dakota', abbr: 'SD', rate: 0,
    brackets: [],
    stdDeduction: 0, hasLocalTax: false,
    note: 'has no state income tax',
    detail: 'South Dakota has no state income tax and no corporate income tax. The state relies on sales tax and tourism revenue.' },

  { slug: 'tennessee', name: 'Tennessee', abbr: 'TN', rate: 0,
    brackets: [],
    stdDeduction: 0, hasLocalTax: false,
    note: 'has no state income tax',
    detail: 'Tennessee has no state income tax on wages or salary. The Hall Income Tax on interest and dividends was fully repealed in 2021.' },

  { slug: 'texas', name: 'Texas', abbr: 'TX', rate: 0,
    brackets: [],
    stdDeduction: 0, hasLocalTax: false,
    note: 'has no state income tax',
    detail: 'Texas is one of the most popular no-income-tax states. It relies on sales tax and property tax revenue. The state constitution prohibits a personal income tax without voter approval.' },

  { slug: 'utah', name: 'Utah', abbr: 'UT', rate: 0.0465,
    brackets: [[Infinity,0.0465]],
    stdDeduction: 0, hasLocalTax: false,
    note: 'uses a flat 4.65% state income tax',
    detail: 'Utah has a flat income tax rate of 4.65%. The state offers a taxpayer tax credit rather than a standard deduction.' },

  { slug: 'vermont', name: 'Vermont', abbr: 'VT', rate: 0.055,
    brackets: [[45400,0.0355],[110450,0.066],[229550,0.076],[Infinity,0.0875]],
    stdDeduction: 7000, hasLocalTax: false,
    note: 'uses progressive state income tax brackets',
    detail: 'Vermont has a four-bracket graduated income tax with a top rate of 8.75%. The state has a high cost of living.' },

  { slug: 'virginia', name: 'Virginia', abbr: 'VA', rate: 0.052,
    brackets: [[3000,0.02],[5000,0.03],[17000,0.05],[Infinity,0.0575]],
    stdDeduction: 8000, hasLocalTax: false,
    note: 'uses progressive brackets with a top rate of 5.75%',
    detail: 'Virginia has a four-bracket graduated income tax with a top rate of 5.75%. Northern Virginia has a high cost of living due to proximity to Washington D.C.' },

  { slug: 'washington', name: 'Washington', abbr: 'WA', rate: 0,
    brackets: [],
    stdDeduction: 0, hasLocalTax: false,
    note: 'has no state income tax',
    detail: 'Washington has no state income tax. A capital gains tax of 7% applies to gains over $262,000, but wages and salary are not taxed.' },

  { slug: 'west-virginia', name: 'West Virginia', abbr: 'WV', rate: 0.043,
    brackets: [[10000,0.0236],[25000,0.0315],[40000,0.0354],[60000,0.0472],[Infinity,0.0512]],
    stdDeduction: 0, hasLocalTax: false,
    note: 'uses progressive state income tax brackets',
    detail: 'West Virginia has a five-bracket graduated income tax with a top rate of 5.12%. The state has been gradually reducing its rates.' },

  { slug: 'wisconsin', name: 'Wisconsin', abbr: 'WI', rate: 0.053,
    brackets: [[14320,0.035],[28640,0.044],[315310,0.053],[Infinity,0.0765]],
    stdDeduction: 12760, hasLocalTax: false,
    note: 'uses progressive state income tax brackets',
    detail: 'Wisconsin has a four-bracket graduated income tax with a top rate of 7.65%.' },

  { slug: 'wyoming', name: 'Wyoming', abbr: 'WY', rate: 0,
    brackets: [],
    stdDeduction: 0, hasLocalTax: false,
    note: 'has no state income tax',
    detail: 'Wyoming has no state income tax and no corporate income tax. The state relies on mineral extraction taxes and sales tax.' },
];

/** Backward-compatible export for the calculator dropdown */
export const stateOptions = states.map((s) => ({
  slug: s.slug,
  name: s.name,
  abbr: s.abbr,
  rate: s.rate,
  brackets: s.brackets,
  stdDeduction: s.stdDeduction,
  hasLocalTax: s.hasLocalTax,
  note: s.note,
  detail: s.detail,
}));
