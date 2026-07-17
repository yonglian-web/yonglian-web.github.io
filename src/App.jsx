import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { campaign } from './data/campaign.js';
import { cv } from './data/cv.js';
import { CampaignLayout } from './layouts/CampaignLayout.jsx';
import { CvLayout } from './layouts/CvLayout.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { StatementPage } from './pages/StatementPage.jsx';
import { ExperiencePage } from './pages/ExperiencePage.jsx';
import { HonorsPage } from './pages/HonorsPage.jsx';
import { ProfessionalActivitiesPage } from './pages/ProfessionalActivitiesPage.jsx';
import { ResearchPage } from './pages/ResearchPage.jsx';
import { TeachingPage } from './pages/TeachingPage.jsx';
import { PublicationsPage } from './pages/PublicationsPage.jsx';

// One site: `/` is the election home; the CV pages are hidden sub-routes reached
// only via the home's "View Website" button (not listed in the home nav).
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
          path="/statement"
          element={
            <CampaignLayout>
              <StatementPage campaign={campaign} />
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
