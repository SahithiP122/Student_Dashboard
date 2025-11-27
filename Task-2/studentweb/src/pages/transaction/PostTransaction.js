import { useState } from "react";

const PostTransaction = () => {
  const [formData, setFormData] = useState({
    paymentMethod: "",
    status: "",
    feeBillId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/transactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Transaction added successfully!");
        setFormData({ paymentMethod: "", status: "", feeBillId: "" });
      } else {
        alert("Failed to add transaction");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 max-w-md">
        <input type="text" name="paymentMethod" placeholder="Payment Method" value={formData.paymentMethod} onChange={handleChange} required />
        <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} required />
        <input type="number" name="feeBillId" placeholder="Fee Bill ID" value={formData.feeBillId} onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Transaction</button>
      </form>
    </div>
  );
};

export default PostTransaction;
