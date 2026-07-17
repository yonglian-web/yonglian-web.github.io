// English copy for the election site, mirroring siteZh.js key-for-key.
//
// Sources, in order of preference:
//   1. The candidate's own english.html — hero, stats, the four achievements
//      ("Built platforms" …) and the four commitments are his wording.
//   2. campaign.js / cv.js (both English originals) — bio, honors, service.
//   3. Translated from his Chinese where no English existed (the quote, the five
//      reasons, promise detail, vote steps, FAQ, timeline).
//
// Stats follow cv.js (350+ papers / 20+ awards / $28M), not the 340+/18/$25M in
// his draft — his README_FOR_WEBMASTER lists those as unconfirmed.
export const site = {
  nav: {
    home: 'Home',
    whyRunning: 'Why I’m Running',
    whyMe: 'Why Me',
    plan: 'My Plan',
    howToVote: 'How to Vote',
    statement: 'Statement',
    about: 'About',
    vote: 'Vote now',
  },
  brand: {
    name: 'Yong (Peter) Lian',
    role: 'Candidate, 2027 IEEE TA VP-Elect',
  },
  home: {
    eyebrow: '2026 IEEE Annual Election',
    title: 'Delivering more value<br>for every IEEE member',
    // No slogan in English — it would just repeat the headline. The Chinese page
    // uses it to carry the English strapline under the Chinese title.
    slogan: '',
    name: 'Yong “Peter” Lian',
    role: 'Candidate, 2027 IEEE Technical Activities Vice President-Elect',
    lead: 'For 35 years I have put this idea into practice — building technical communities, supporting volunteers, and raising the value IEEE delivers to its members.',
    ctaWhy: 'Why I’m running',
    ctaAbout: 'About me',
    voteBandTitle: 'IEEE Annual Election · Voting period',
    voteBandDates: '17 August — 1 October 2026',
    voteBandNote: 'Closes 12:00 noon US Eastern Time',
    voteBandCta: 'Vote now at ieee.org/elections →',
    voteBandSmall: 'Every vote matters. Thank you for your support!',
    voteBandLink: 'How to vote →',
    doors: [
      {
        icon: 'icon_badge_target_blue',
        title: 'Why am I running?',
        text: 'Because IEEE Technical Activities should deliver more value to every member.',
        link: 'My vision →',
        to: '/why-running',
      },
      {
        icon: 'icon_badge_community_blue',
        title: 'Why me?',
        text: 'Because for 35 years I have been turning that idea into practice.',
        link: 'My record →',
        to: '/why-me',
      },
      {
        icon: 'icon_badge_chart_orange',
        title: 'What will I do?',
        text: 'Stronger collaboration, volunteers with more impact, technical activities worth more.',
        link: 'My action plan →',
        to: '/plan',
        accent: true,
      },
    ],
  },
  ptf: [
    { icon: 'icon_badge_mountain_blue', label: 'Past', text: 'I have always put this idea into practice.' },
    { icon: 'icon_badge_team_green', label: 'Today', text: 'I want to bring that commitment to IEEE Technical Activities.' },
    { icon: 'icon_badge_star_gold', label: 'Future', text: 'I will keep delivering more value for every IEEE member.' },
  ],
  whyRunning: {
    eyebrow: "Why I'm Running",
    title: 'Why I’m running',
    intro: 'Bringing the commitment to IEEE Technical Activities',
    quote: 'For 35 years I have believed one thing: the ultimate value of IEEE’s technical activities is whether members truly benefit.',
    reasonsTitle: 'Why is this leadership needed now?',
    reasons: [
      { icon: 'icon_badge_collaboration_red', label: 'Technology is increasingly cross-disciplinary', text: 'No single Society can respond alone' },
      { icon: 'icon_badge_community_blue', label: 'Member expectations keep rising', text: 'They expect higher-quality service and experience' },
      { icon: 'icon_badge_team_green', label: 'Volunteer work is more complex', text: 'Better tools and support are needed' },
      { icon: 'icon_badge_globe_blue', label: 'Global competition is intensifying', text: 'Professional bodies must keep pace' },
      { icon: 'icon_badge_star_gold', label: 'IEEE must create greater value', text: 'Members should feel the benefit directly' },
    ],
    visionTitle: 'My vision',
    visionIntro: 'Make IEEE Technical Activities the core engine of member value.',
    pillars: [
      { icon: 'icon_badge_collaboration_red', title: 'Stronger collaboration', text: 'Across IEEE’s technical communities, so IEEE moves with speed and coordination.' },
      { icon: 'icon_badge_heartbeat_green', title: 'Volunteer growth', text: 'Better tools, faster feedback, meaningful pathways.' },
      { icon: 'icon_badge_chart_orange', title: 'Better technical activities', text: 'Conferences, publications, education, standards, industry engagement.' },
      { icon: 'icon_badge_target_blue', title: 'Faster innovation', text: 'An agile organization responsive to emerging technologies and member needs.' },
    ],
  },
  whyMe: {
    eyebrow: 'Why Me',
    title: 'Why me',
    intro: '35 years of IEEE volunteer service and contribution',
    stats: [
      { value: '35+', label: 'years of IEEE service' },
      { value: '40+', label: 'IEEE leadership roles' },
      { value: '350+', label: 'publications' },
      { value: '20+', label: 'research awards' },
      { value: '$28M', label: 'research funding' },
    ],
    achTitle: 'A record of delivering',
    achievements: [
      { icon: 'icon_badge_community_blue', title: 'Built platforms', text: 'Founder of the IEEE BioCAS flagship conference and PrimeAsia, creating international venues that connect research and industry.' },
      { icon: 'icon_badge_team_green', title: 'Led organizations', text: 'CASS President; IEEE Board of Directors, Division I Director.' },
      { icon: 'icon_badge_xplore_blue', title: 'Opened global partnerships', text: 'Built the framework that brought new journals from China onto IEEE Xplore, opening a new model for global publishing partnerships.' },
      { icon: 'icon_badge_star_gold', title: 'Drove reform', text: 'Cut journal review time to 43.2 days; five cross-Society collaboration cookbooks in four months; launched the Open Silicon initiative.' },
    ],
    timelineTitle: 'Key IEEE roles and service',
    timeline: [
      { year: '1997–2007', text: 'Local volunteer beginnings\nSingapore Chapter Chair · founded the Education Chapter' },
      { year: '2007–2016', text: 'CASS Vice President (Region 10 / Publications)\nEditor-in-Chief, TCAS-II' },
      { year: '2016–2021', text: 'CASS President-Elect, President, Past President' },
      { year: '2019–2024', text: 'Chair, TAB Periodicals Partnership Opportunities Committee\nBrought Chinese journals onto Xplore' },
      { year: '2024–present', text: 'IEEE Board of Directors · Division I Director\nVice Chair, IEEE Fellow Committee' },
    ],
  },
  plan: {
    eyebrow: 'My Plan',
    title: 'What I will do',
    intro: 'Four commitments to make IEEE Technical Activities worth more',
    whyLabel: 'Why it matters',
    gainLabel: 'What members gain',
    promises: [
      {
        icon: 'icon_badge_collaboration_red',
        title: 'Strengthen technical communities',
        why: 'Technology is increasingly cross-disciplinary and needs more collaboration and sharing.',
        gains: ['More joint cross-Society conferences and activities', 'More opportunities to collaborate', 'A stronger global technical network'],
      },
      {
        icon: 'icon_badge_heartbeat_green',
        title: 'Support volunteer growth',
        why: 'Volunteers are IEEE’s core strength; contributing should be easier and more rewarding.',
        gains: ['Better tools and resources', 'Clearer working processes', 'A more rewarding volunteer experience'],
      },
      {
        icon: 'icon_badge_chart_orange',
        title: 'Raise the value of technical activities',
        why: 'Members expect higher-quality conferences, publications, education and standards.',
        gains: ['Better conference and publication content', 'Stronger academic and industry impact', 'Richer educational resources'],
      },
      {
        icon: 'icon_badge_target_blue',
        title: 'Accelerate innovation and response',
        why: 'Emerging technologies move fast; IEEE must respond to member needs faster.',
        gains: ['Faster access to emerging-technology information', 'More ways to engage in emerging fields', 'A more agile, member-driven organization'],
      },
    ],
    goal: 'My goal: through collaboration, innovation and excellent execution, make IEEE Technical Activities deliver more value to every member.',
  },
  howToVote: {
    eyebrow: 'How to Vote',
    title: 'How to vote',
    intro: 'Every vote matters!',
    steps: [
      { icon: 'icon_step_calendar', label: '17 August', text: 'Voting opens' },
      { icon: 'icon_step_login', label: 'Log in to IEEE', text: 'Go to ieee.org/elections and click “Access Ballot”' },
      { icon: 'icon_step_ballot', label: 'Open your ballot', text: 'Find “Technical Activities Vice President-Elect” and select Yong Lian' },
      { icon: 'icon_step_check', label: 'Submit', text: 'Done — about two minutes' },
    ],
    cta: 'Open your ballot at ieee.org/elections →',
    ctaNote: 'Voting: 17 August — 1 October 2026, closing 12:00 noon US Eastern Time.',
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'Who can vote?', a: 'IEEE members in good standing as of 31 March 2026 who are eligible to vote (Graduate Student Member grade and above). Eligibility is governed by the official IEEE election page.' },
      { q: 'Will I be notified?', a: 'Yes. IEEE sends a voting notice (by email or post) to eligible members. Even if you do not receive one, you can go straight to ieee.org/elections and click “Access Ballot”.' },
      { q: 'I forgot my IEEE account or password.', a: 'Click “Forgot Password” on the login page and reset it via your registered email address.' },
      { q: 'Does voting cost anything?', a: 'No. Voting is a right of IEEE membership and is completely free.' },
      { q: 'Where is the TA VP position on the ballot?', a: 'Look for the “Technical Activities Vice President-Elect” section of the ballot; Yong Lian is one of the candidates listed there.' },
    ],
  },
  statement: {
    eyebrow: 'Candidate Statement',
    title: 'Candidate statement',
    intro: 'Official statement for IEEE Technical Activities Vice President',
    note: 'The formal candidate statement, as submitted in the official IEEE candidate materials.',
  },
  about: {
    eyebrow: 'About',
    title: 'About Yong Lian',
    bio: 'Dr. Yong (Peter) Lian is a Professor in the Department of Electrical Engineering and Computer Science at York University, Canada — an IEEE Fellow, Fellow of the Canadian Academy of Engineering and Fellow of the Academy of Engineering Singapore. A globally recognized pioneer in biomedical circuits and systems (BioCAS), his ultra-low-power, event-driven architectures have shaped wearable and implantable healthcare technologies worldwide. He brings 9 years in industry and 30 years in academia, and co-founded a start-up in wearables and brain-computer interfaces.',
    researchTitle: 'Research interests',
    research: [
      'Biomedical circuits and systems · ultra-low-power IC design',
      'Event-driven architectures · energy-efficient signal processing',
      'Wearable and implantable medical electronics',
    ],
    honorsTitle: 'Selected honors',
    honors: [
      '2023 IEEE CASS Mac Van Valkenburg Award',
      '2024 IEEE CASS Meritorious Service Award',
      '2023 IEEE Transactions on BioCAS Best Paper Award',
      'Over 350 publications · 20+ research awards · more than $28M in research funding',
    ],
    serviceTitle: 'Selected IEEE service',
    service: [
      'Vice Chair, IEEE Fellow Committee',
      'Member, IEEE Innovation Committee',
      'IEEE Board of Directors, Division I Director (2024–2025)',
      'President, IEEE Circuits and Systems Society (2018–2019)',
      'Chair, TAB Periodicals Partnership Opportunities Committee (2019–2024)',
      'Founder, IEEE BioCAS Conference and PrimeAsia Conference',
    ],
    ctaCv: 'Download full CV (PDF) ↓',
    ctaContact: 'Get in touch ✉',
    ctaPersonal: 'View full academic record →',
  },
  countdown: {
    before: 'Voting opens in',
    during: 'Voting open · closes in',
    after: 'Voting has closed',
    days: ' days',
    thanks: 'Thanks!',
    openDate: '17 Aug 2026',
    closeDate: 'Closes 1 Oct',
  },
  footer: {
    line: 'Yong (Peter) Lian · Candidate, 2027 IEEE Technical Activities Vice President-Elect · ',
    disclaimer:
      'This is the personal campaign website of Yong (Peter) Lian, a candidate in the 2026 IEEE Annual Election. It is not sponsored, endorsed, or approved by IEEE or any IEEE organizational unit. IEEE names are used for identification only. Eligibility and procedures are governed by the official IEEE election page.',
    copyright: '© 2026 Yong Lian · ',
  },
};
