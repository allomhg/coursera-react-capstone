import './App.css';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ReservationPage } from './pages/ReservationPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation-page" element={<ReservationPage />} />
      </Routes>
      <Footer />
    </>
  );
}
// styled-components are a thing, look it up

export default App;
