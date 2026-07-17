import { cv } from '../data/cv.js';

// Merged resources for the single combined site: election home chrome + CV chrome.
// Home prose lives in campaign.js / campaignZh.js; CV academic entries live in
// cv.js (English in both languages). CV-page namespaces that mirror cv.js
// reference the source object so the English output can't drift.
export const en = {
  nav: {
    // election home (3-section scroll nav)
    profile: 'Profile',
    statement: 'Statement',
    activities: 'IEEE Activities',
    // CV section nav (reached only via the home "View Website" button)
    experience: 'Education & Employment',
    honors: 'Honors & Awards',
    professional: 'Professional Activities',
    research: 'Research',
    teaching: 'Teaching',
    publications: 'Publications',
  },
  header: {
    notice: 'Official candidate for <b>{{office}}</b> · Authorized by the {{committee}}',
    electionCycle: '2026 IEEE Annual Election',
    brandFor: 'for',
  },
  footer: {
    contact: 'Contact',
    adapted:
      'Nominated by IEEE Technical Activities. Campaign information adapted from candidate materials for IEEE Technical Activities Vice President.',
    disclaimer:
      'The opinions expressed herein are the opinions of the author and not necessarily the opinions of IEEE.',
  },
  buttons: {
    vote: 'Vote for Peter Lian',
    viewWebsite: 'View Personal Website',
    contact: 'Contact me',
    electionSite: 'Election Website',
    downloadCv: 'Download full CV (PDF)',
    viewScholar: 'View on Google Scholar',
  },
  facts: {
    memberSince: 'IEEE member since',
    memberGrade: 'Member grade',
    region: 'Region',
    papers: 'Published papers',
    awards: 'Awards',
  },
  sections: {
    statementTitle: 'Statement',
  },
  experience: {
    heroKicker: 'Curriculum Vitae',
    heroTitle: 'Education & Employment',
    heroIntro: 'Education and the academic & industry appointments of Dr. Yong (Peter) Lian.',
    educationKicker: 'Education',
    educationTitle: 'Education',
    employmentKicker: 'Employment',
    employmentTitle: 'Employment',
  },
  honors: {
    heroKicker: 'Recognition',
    heroTitle: 'Honors & Awards',
    heroIntro:
      'Fellowships, society awards, and best-paper recognitions earned across a career in circuits and systems.',
    honorsKicker: 'Honors',
    honorsTitle: 'Honors',
    awardsKicker: 'Awards',
    awardsTitle: 'Awards',
  },
  professional: {
    heroKicker: 'Service',
    heroTitle: 'Professional Activities',
    heroIntro:
      'Leadership and committee service across IEEE boards, editorial boards, and international conferences.',
    boardsKicker: 'IEEE Boards & Committees',
    boardsTitle: 'Leadership & Committee Roles',
    editorialKicker: 'Editorial',
    editorialTitle: 'Membership of Editorial Boards',
    editorialGroup1: 'Editorial Boards',
    editorialGroup2: 'Guest Editor',
    conferencesKicker: 'Conferences',
    conferencesTitle: 'International Conference Committees',
  },
  research: {
    heroKicker: 'Scholarship',
    heroTitle: 'Research',
    heroIntro:
      'Energy-efficient circuits and systems for healthcare, wearables, and the Artificial-Intelligence-of-Things.',
    interestsKicker: 'Interests',
    interestsTitle: 'Research Interests',
    interestsIntro: cv.research.interestsIntro,
    grantsKicker: 'Funding',
    grantsTitle: 'Research Grants',
    grantsText: cv.research.grants,
    outputKicker: 'Output',
    outputTitle: 'Publications',
    pubSummary: cv.research.publicationsSummary,
    pubLink: 'See the full list on Google Scholar:',
    mentoringKicker: 'Mentoring',
    mentoringTitle: 'Graduate Supervision',
    supervisionText: cv.research.supervision,
    talksKicker: 'Talks',
    talksTitle: 'Invited Keynotes & Technical Talks',
  },
  teaching: {
    heroKicker: 'Education',
    heroTitle: 'Teaching',
    heroIntro:
      'Award-winning teaching, innovative large-class methods, and scholarship of teaching and learning.',
    modulesKicker: 'Courses',
    modulesTitle: 'Modules Taught',
    modulesText: cv.teaching.modules,
    awardsKicker: 'Recognition',
    awardsTitle: 'Teaching Awards',
    awardsUniversity: 'University level',
    awardsFaculty: 'Faculty level',
    methodsKicker: 'Pedagogy',
    methodsTitle: 'Innovative Methods',
    pubsKicker: 'Publications',
    pubsTitle: 'Teaching Publications',
    pubsBookChapters: 'Book Chapters',
    pubsJournalPapers: 'Journal Papers',
    pubsConferencePapers: 'Conference Papers',
  },
  publications: {
    heroKicker: 'Output',
    heroTitle: 'Publications',
    heroIntro: 'A book, book chapters, and more than 350 peer-reviewed journal and conference papers.',
    overviewKicker: 'Overview',
    overviewTitle: 'Publications',
    summary: cv.research.publicationsSummary,
    note: 'A complete and continuously updated list of Dr. Lian’s publications, including citation metrics, is maintained on Google Scholar.',
  },
};
