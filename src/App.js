import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import DemosScreen from './screens/DemosScrren/DemosScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/demos" element={<DemosScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
