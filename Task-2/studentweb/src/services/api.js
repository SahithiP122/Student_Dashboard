const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

export const fetchStudents = async () => {
  const res = await fetch(`${BASE_URL}/students`);
  const data = await res.json();
  return data.map(s => ({
    id: s.id,
    name: s.name,
    email: s.email,
    phone: s.phone,
    department: s.department,
    schoolName: s.schoolName
  }));
};

export const fetchFeeBills = async () => {
  const res = await fetch(`${BASE_URL}/fee-bills`);
  const data = await res.json();
  return data.map(b => ({
    id: b.id,
    amount: b.amount,
    dueDate: b.dueDate,
    status: b.status,
    studentId: b.student?.id || null
  }));
};

export const fetchTransactions = async () => {
  const res = await fetch(`${BASE_URL}/transactions`);
  const data = await res.json();
  return data.map(t => ({
    id: t.id,
    paymentMethod: t.paymentMethod,
    status: t.status?.toUpperCase(), 
    feeBillId: t.feeBill?.id || null
  }));
};
