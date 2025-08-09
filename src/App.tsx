import React from 'react';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FractionalServicesPage from './pages/FractionalServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';
import DiscoveryCallPage from './pages/DiscoveryCallPage';
import JobOpportunitiesPage from './pages/JobOpportunitiesPage';
import MediaPage from './pages/MediaPage';
import SweetLionheartPage from './pages/SweetLionheartPage';
import HoopoeSharePage from './pages/HoopoeSharePage';
import MSAPage from './pages/MSAPage';
import HowToGetSupportPage from './pages/faq-detailed/HowToGetSupportPage';
import MinimumCommitmentPeriodPage from './pages/faq-detailed/MinimumCommitmentPeriodPage';
import EmergenciesOrUrgentRequestsPage from './pages/faq-detailed/EmergenciesOrUrgentRequestsPage';
import ProjectManagementOutsideScopePage from './pages/faq-detailed/ProjectManagementOutsideScopePage';
import WhiteLabeledServicesPage from './pages/faq-detailed/WhiteLabeledServicesPage';
import DiscountsForNonProfitPage from './pages/faq-detailed/DiscountsForNonProfitPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumbs />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fractional-services" element={<FractionalServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/discovery-call" element={<DiscoveryCallPage />} />
            <Route path="/jobs" element={<JobOpportunitiesPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/sweet-lionheart" element={<SweetLionheartPage />} />
            <Route path="/hoopoe-share" element={<HoopoeSharePage />} />
            <Route path="/msa" element={<MSAPage />} />
            <Route path="/faq/how-to-get-support" element={<HowToGetSupportPage />} />
            <Route path="/faq/minimum-commitment-period" element={<MinimumCommitmentPeriodPage />} />
            <Route path="/faq/emergencies-or-urgent-requests" element={<EmergenciesOrUrgentRequestsPage />} />
            <Route path="/faq/project-management-outside-scope" element={<ProjectManagementOutsideScopePage />} />
            <Route path="/faq/white-labeled-services" element={<WhiteLabeledServicesPage />} />
            <Route path="/faq/discounts-for-non-profit" element={<DiscountsForNonProfitPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

export default App;