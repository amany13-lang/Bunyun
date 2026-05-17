import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeDashboard from "./HomeDashboard";
import Users from "./Users";
import Projects from "./Projects";
import FormDashboard from "../../components/Ui/FormDashboard/FormDashboard";
import TableDashboard from "../../components/Ui/TableDashboard/TableDashboard";
import DevelopersManagement from "./Developers management";

function Dashboard() {
  return (
    <>
      <Navbar adminName="Amany" />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            
            <Route path="/Users" element={<Users />}>
              <Route index element={<TableDashboard />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>

            <Route path="/Projects" element={<Projects />} />
            <Route path="/developers" element={<DevelopersManagement />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;