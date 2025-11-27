import { Routes, Route } from 'react-router-dom';
import PostStudent from './pages/student/PostStudent';
import UpdateStudent from './pages/student/UpdateStudent';
import PostFeeBill from './pages/feeBill/PostFeeBill';
import UpdateFeeBill from './pages/feeBill/UpdateFeeBill';
import PostTransaction from './pages/transaction/PostTransaction';
import UpdateTransaction from './pages/transaction/UpdateTransaction';
import Dashboard from './pages/dashboard/Dashboard';  
import NoMatch from './pages/noMatch/NoMatch'
import Header from './pages/header/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/student" element={<PostStudent />} />
        <Route path="/students/:id" element={<UpdateStudent />} />
        <Route path="/fee-bills" element={<PostFeeBill />} />
        <Route path="/fee-bills/:id" element={<UpdateFeeBill />} />
        <Route path="/transactions" element={<PostTransaction />} />
        <Route path="/transactions/:id" element={<UpdateTransaction />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
