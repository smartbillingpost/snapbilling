import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Billing from "./pages/productscreens/Billing";
import ClientProductManagement from "./pages/productscreens/ClientProductManagement";
import BusinessReports from "./pages/productscreens/BusinessReports";
import Gstr from "./pages/productscreens/Gstr";
import Gstr2brecon from "./pages/productscreens/Gstr2brecon";
import Backup from "./pages/productscreens/Backup";
import Migration from "./pages/productscreens/Migration";
import Bi from "./pages/productscreens/Bi";
import Exports from "./pages/productscreens/Exports";
import Help from "./pages/productscreens/Help";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import GetStarted from "./pages/GetStarted";



export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          
  <Route path="/" element={<Home />} />
  <Route path="/product" element={<Product />} />
  <Route path="/pricing" element={<Pricing />} />
<Route path="/product/gst" element={<Gstr />} />
  <Route path="/product/billing" element={<Billing />} />
  <Route path="/product/masters" element={<ClientProductManagement />} />
<Route path="/reports/business" element={<BusinessReports />} />
<Route path="/product/reconciliation" element={<Gstr2brecon />} />
<Route path="/product/backup" element={<Backup />} />
<Route path="/product/import" element={<Migration />} />
<Route path="/product/bi" element={<Bi />} />
<Route path="/product/reports" element={<Exports />} />
<Route path="/product/support" element={<Help />} />
<Route path="/contact" element={<Contact />} />
<Route path="/privacy" element={<Privacy />} />
 <Route path="/get-started" element={<GetStarted />} />


</Routes>


      </main>

      <Footer />
    </div>
  );
}
