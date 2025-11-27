import { useState } from "react";

const PostFeeBill = () => {
  const [formData, setFormData] = useState({
    amount: "",
    dueDate: "",
    status: "",
    studentId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/fee-bills`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Fee Bill added successfully!");
        setFormData({ amount: "", dueDate: "", status: "", studentId: "" });
      } else {
        alert("Failed to add fee bill");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-bold mb-4">Add Fee Bill</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 max-w-md">
        <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
        <input type="date" name="dueDate" placeholder="Due Date" value={formData.dueDate} onChange={handleChange} required />
        <input type="text" name="status" placeholder="Status (Pending/Paid)" value={formData.status} onChange={handleChange} required />
        <input type="number" name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Fee Bill</button>
      </form>
    </div>
  );
};

export default PostFeeBill;
