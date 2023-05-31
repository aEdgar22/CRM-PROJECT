import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ContactPage from "../pages/contactPage/ContactPage";
import Navbar from "../components/NavBar";
import ContactForm from "../pages/contactPage/components/ContactForm";
import LayoutContainer from "../components/LayoutContainer";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <LayoutContainer>
        <Routes>
          {/* rutas iniciales */}
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Contact/user-form/:userId?" element={<ContactForm />} />

          <Route path="*" element={<Navigate replace to="/Contact" />} />
        </Routes>
      </LayoutContainer>
    </Router>
  );
};
