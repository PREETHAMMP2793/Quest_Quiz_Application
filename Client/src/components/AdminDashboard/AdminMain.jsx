import { useState } from "react";
import AdminNavbar from "./subcomponents/AdminNavbar"; // Import the Navbar component
import AdminDashboard from "./subcomponents/AdminDashboard"; // Import AdminDashboard component
import AdminResult from "./subcomponents/AdminResult"; // Import AdminResult component
import AdminQuestions from "./subcomponents/AdminQuestions"; // Import AdminQuestions component

function AdminMain() {
  const [activePage, setActivePage] = useState("dashboard"); // Default page is the dashboard

  const adminPhoto = "https://via.placeholder.com/40"; // Replace with actual photo URL
  const adminEmail = "admin@example.com"; // Replace with actual email

  return (
    <div>
      {/* Admin Navbar on the left */}
      <AdminNavbar
        adminPhoto={adminPhoto}
        adminEmail={adminEmail}
        setActivePage={setActivePage}
      />

      {/* Content Section */}
      <div className="mt-4 ms-auto" style={{ marginLeft: "250px", marginTop: "100px" }}>
        {activePage === "dashboard" && <AdminDashboard />}
        {activePage === "result" && <AdminResult />}
        {activePage === "questions" && <AdminQuestions />}
      </div>
    </div>
  );
}

export default AdminMain;
