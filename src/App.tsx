import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import ProfilePage from './pages/ProfilePage';
import ContactsPage from './pages/ContactsPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my" element={<ProfilePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
