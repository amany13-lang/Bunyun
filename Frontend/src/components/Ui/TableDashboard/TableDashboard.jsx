import { Link } from "react-router-dom";
function TableDashboard() {
 return (
 <div className="container">
 <div className="d-flex justify-content-between mb-3">
 <h3>Users</h3>
 <Link to="add" className="btn btn-primary"> Add New Users
 </Link>
 </div>
 <table className="table">
 <thead>
 <tr>
 <th>ID</th>
 <th>Name</th>
 <th>Email</th>
 <th>Actions</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>1</td>
 <td>John Doe</td>
 <td>john@example.com</td>
 <td>
 <Link to="/Users/1" className="btn btn-sm btn-outline-primary">
 View
 </Link>
 <Link to="/Users/1/edit" className="btn btn-sm btn-outline-secondary">
 Edit
 </Link>
 </td>
 </tr>
 </tbody>
 </table>
 </div>
 );
}
export default TableDashboard;