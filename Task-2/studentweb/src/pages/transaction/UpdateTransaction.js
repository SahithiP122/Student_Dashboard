import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    paymentMethod: "",
    status: "",
    feeBillId: ""
  });

  useEffect(() => {
    const fetchTransaction = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/transactions/bill/${id}`);
      if (res.ok) {
        const data = await res.json();
        // Assuming we get the first transaction if multiple exist
        const txn = Array.isArray(data) ? data[0] : data;
        setFormData({
          paymentMethod: txn.paymentMethod,
          status: txn.status,
          feeBillId: txn.feeBillId
        });
      }
    };
    fetchTransaction();
  }, [id]);

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
        body: JSON.stringify({ id, ...formData })
      });
      if (res.ok) {
        alert("Transaction updated successfully!");
        navigate("/transactions");
      } else {
        alert("Failed to update transaction");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-bold mb-4">Update Transaction</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 max-w-md">
        <input type="text" name="paymentMethod" placeholder="Payment Method" value={formData.paymentMethod} onChange={handleChange} required />
        <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} required />
        <input type="number" name="feeBillId" placeholder="Fee Bill ID" value={formData.feeBillId} onChange={handleChange} required />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Update Transaction</button>
      </form>
    </div>
  );
};

export default UpdateTransaction;
