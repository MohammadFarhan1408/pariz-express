import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import ServicesPage from '../features/services/ServicesPage';
import ServiceDetailPage from '../features/services/ServiceDetailPage';
import AboutPage from '../features/about/AboutPage';
import ContactPage from '../features/contact/ContactPage';
import TrackingPage from '../features/tracking/TrackingPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}
