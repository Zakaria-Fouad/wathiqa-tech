import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';
import MentionsLegales from '../pages/MentionsLegales&ConditionsUtilisation';
import PolitiqueConfidentialite from '../pages/PolitiqueConfidentialite';
import Home from '../pages/Home';
import DocumentGeneration from '../pages/DocumentGeneration';
import DocumentDetails from '../pages/DocumentDetails';
import PrivateLayout from '../layouts/PrivateLayout';
import AuthLayout from '../layouts/AuthLayout';
import PublicLayout from '../layouts/PublicLayout';
import AccountPage from '../pages/AccountPage';
import AdminLayout from '../layouts/AdminLayout';
import AdminDashboard from '../pages/AdminDashboard';
import UsersManagement from '../pages/UsersManagement';
import DocumentsManagement from '../pages/DocumentsManagement';
import PrivateRoute from '../components/PrivateRoute';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        {/* Routes privées sous PrivateLayout */}
        <Route element={
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        }>
          <Route path="/home" element={<Home />} />
          <Route path="/generate/:documentType" element={<DocumentGeneration />} />
          <Route path="/document/:id" element={<DocumentDetails />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
        {/* Routes admin séparées sous AdminLayout */}
        <Route path="/admin" element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }>
          <Route index element={<AdminDashboard />} />
          <Route path="utilisateurs" element={<UsersManagement />} />
          <Route path="documents" element={<DocumentsManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
