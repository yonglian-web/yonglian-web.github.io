import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { cv } from './data/cv.js';
import { CampaignLayout } from './layouts/CampaignLayout.jsx';
import { CvLayout } from './layouts/CvLayout.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { WhyRunningPage } from './pages/WhyRunningPage.jsx';
import { WhyMePage } from './pages/WhyMePage.jsx';
import { PlanPage } from './pages/PlanPage.jsx';
import { HowToVotePage } from './pages/HowToVotePage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ExperiencePage } from './pages/ExperiencePage.jsx';
import { HonorsPage } from './pages/HonorsPage.jsx';
import { ProfessionalActivitiesPage } from './pages/ProfessionalActivitiesPage.jsx';
import { ResearchPage } from './pages/ResearchPage.jsx';
import { TeachingPage } from './pages/TeachingPage.jsx';
import { PublicationsPage } from './pages/PublicationsPage.jsx';

// Two sites in one app: the election campaign (CampaignLayout — home + 5 campaign
// pages, migrated 1:1 from the candidate's Claude Design) and the academic CV
// (CvLayout — 6 pages), reached from the About page's "full academic record" link.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <CampaignLayout>
              <HomePage />
            </CampaignLayout>
          }
        />
        <Route
          path="/why-running"
          element={
            <CampaignLayout>
              <WhyRunningPage />
            </CampaignLayout>
          }
        />
        <Route
          path="/why-me"
          element={
            <CampaignLayout>
              <WhyMePage />
            </CampaignLayout>
          }
        />
        <Route
          path="/plan"
          element={
            <CampaignLayout>
              <PlanPage />
            </CampaignLayout>
          }
        />
        <Route
          path="/how-to-vote"
          element={
            <CampaignLayout>
              <HowToVotePage />
            </CampaignLayout>
          }
        />
        <Route
          path="/about"
          element={
            <CampaignLayout>
              <AboutPage />
            </CampaignLayout>
          }
        />
        <Route
          path="/experience"
          element={
            <CvLayout>
              <ExperiencePage cv={cv} />
            </CvLayout>
          }
        />
        <Route
          path="/honors"
          element={
            <CvLayout>
              <HonorsPage cv={cv} />
            </CvLayout>
          }
        />
        <Route
          path="/professional-activities"
          element={
            <CvLayout>
              <ProfessionalActivitiesPage cv={cv} />
            </CvLayout>
          }
        />
        <Route
          path="/research"
          element={
            <CvLayout>
              <ResearchPage cv={cv} />
            </CvLayout>
          }
        />
        <Route
          path="/teaching"
          element={
            <CvLayout>
              <TeachingPage cv={cv} />
            </CvLayout>
          }
        />
        <Route
          path="/publications"
          element={
            <CvLayout>
              <PublicationsPage cv={cv} />
            </CvLayout>
          }
        />
        <Route
          path="*"
          element={
            <CampaignLayout>
              <HomePage />
            </CampaignLayout>
          }
        />
      </Routes>
    </>
  );
}
