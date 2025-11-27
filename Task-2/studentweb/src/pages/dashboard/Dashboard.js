import { useState, useEffect } from "react";
import { fetchStudents, fetchFeeBills, fetchTransactions } from "../../services/api";
import './Dashboard.css';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [feeBills, setFeeBills] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
  fetchStudents()
    .then(data => {
      console.log("Students:", data);
      setStudents(Array.isArray(data) ? data : []);
    })
    .catch(err => {
      console.error("Failed to fetch students:", err);
      setStudents([]);
    });

  fetchFeeBills()
    .then(data => {
      console.log("Fee Bills:", data);
      setFeeBills(Array.isArray(data) ? data : []);
    })
    .catch(err => {
      console.error("Failed to fetch fee bills:", err);
      setFeeBills([]);
    });

  fetchTransactions()
    .then(data => {
      console.log("Transactions:", data);
      setTransactions(Array.isArray(data) ? data : []);
    })
    .catch(err => {
      console.error("Failed to fetch transactions:", err);
      setTransactions([]);
    });
}, []);


  const totalFees = feeBills.reduce((acc, bill) => acc + bill.amount, 0);
  const collectedFees = transactions.reduce(
    (acc, txn) =>
      txn.status === "SUCCESS"
        ? acc + feeBills.find(bill => bill.id === txn.feeBillId)?.amount || 0
        : acc,
    0
  );
  const pendingFees = totalFees - collectedFees;

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
    <h1 className="text-3xl font-extrabold text-gray-800">Admin Dashboard</h1>

    <div className="grid grid-cols-3 gap-6 w-full">
  <div className="dashboard-card bg-blue-600 text-white flex flex-col justify-center items-center p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold">Total Fees</h3>
    <p className="text-2xl font-bold mt-2">&#8377; {totalFees}</p>
  </div>

  <div className="dashboard-card bg-green-600 text-white flex flex-col justify-center items-center p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold">Collected</h3>
    <p className="text-2xl font-bold mt-2">&#8377; {collectedFees}</p>
  </div>

  <div className="dashboard-card bg-red-600 text-white flex flex-col justify-center items-center p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold">Pending</h3>
    <p className="text-2xl font-bold mt-2">&#8377; {pendingFees}</p>
  </div>
</div>


      <TableSection title="Students" data={students} columns={[
        "name", "email", "phone", "department", "schoolName"
      ]} />

      <TableSection title="Fee Bills" data={feeBills} columns={[
        "id", "amount", "dueDate", "status", "studentId"
      ]} />

      <TableSection title="Transactions" data={transactions} columns={[
        "id", "paymentMethod", "status", "feeBillId"
      ]} />

    </div>
  );
};

const TableSection = ({ title, data, columns }) => (
  <div className="bg-white rounded-lg shadow-lg p-5">
    <h2 className="text-xl font-semibold mb-3 text-gray-700">{title}</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            {columns.map(col => (
              <th key={col} className="border p-2 capitalize">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(Array.isArray(data) ? data : []).map(row => (
            <tr key={row.id} className="hover:bg-gray-50">
              {columns.map(col => (
                <td key={col} className="border p-2">{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Dashboard;
