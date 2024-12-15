/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  // Dummy data for total attendees over the last 7 days
  const attendeesData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Attendees",
        data: [10, 20, 15, 25, 30, 20, 35], // Replace with actual data
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  // Dummy data for attendees list
  const [attendees, setAttendees] = useState([
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Sam Wilson", email: "sam@example.com" },
    { name: "Emily Davis", email: "emily@example.com" },
    { name: "Michael Brown", email: "michael@example.com" },
  ]);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered attendees based on search
  const filteredAttendees = attendees.filter((attendee) =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
  {/* Title */}
  <h1 className="text-center mb-4 fw-light">ADMIN DASHBOARD</h1>

  {/* Top row */}
  <div className="row mb-4">
    {/* Total attendees */}
    <div className="col-md-6">
      <div className="card text-center mb-3">
        <div className="card-body">
          <h5 className="card-title">Total Attendees</h5>
          <p className="card-text display-4 fw-light">150</p> {/* Replace 150 with dynamic data */}
        </div>
      </div>
      {/* New Total Registered container */}
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Total Number of Registered</h5>
          <p className="card-text display-4 fw-light">200</p> {/* Replace 200 with dynamic data */}
        </div>
      </div>
    </div>

    {/* Line chart */}
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Attendees Over the Week</h5>
          <Line data={attendeesData} />
        </div>
      </div>
    </div>
  </div>

  {/* Attendees list */}
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Attendees List</h5>
      {/* Search bar */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Attendees table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredAttendees.length > 0 ? (
            filteredAttendees.map((attendee, index) => (
              <tr key={index}>
                <td>{attendee.name}</td>
                <td>{attendee.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center">
                No attendees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
};

export default AdminDashboard;