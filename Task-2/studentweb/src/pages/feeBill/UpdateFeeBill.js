import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateFeeBill = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: "",
    dueDate: "",
    status: "",
    studentId: ""
  });

  useEffect(() => {
    const fetchBill = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/fee-bills/${id}`);
      if (res.ok) {
        const data = await res.json();
        setFormData({
          amount: data.amount,
          dueDate: data.dueDate.split("T")[0], // format date for input
          status: data.status,
          studentId: data.studentId
        });
      }
    };
    fetchBill();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/fee-bills/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Fee Bill updated successfully!");
        navigate("/fee-bills");
      } else {
        alert("Failed to update fee bill");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-bold mb-4">Update Fee Bill</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 max-w-md">
        <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
        <input type="date" name="dueDate" placeholder="Due Date" value={formData.dueDate} onChange={handleChange} required />
        <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} required />
        <input type="number" name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} required />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Update Fee Bill</button>
      </form>
    </div>
  );
};

export default UpdateFeeBill;
