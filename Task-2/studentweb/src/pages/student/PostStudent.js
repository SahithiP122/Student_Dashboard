import { useState } from "react";

const PostStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    schoolName: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Student added successfully!");
        setFormData({ name: "", email: "", phone: "", department: "", schoolName: "" });
      } else {
        alert("Failed to add student");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 max-w-md">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
        <input type="text" name="schoolName" placeholder="School Name" value={formData.schoolName} onChange={handleChange} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Student</button>
      </form>
    </div>
  );
};

export default PostStudent;
