import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ReservationPage } from './pages/ReservationPage';
import { Header } from './components/Header/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/reservation-page">Reservation</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation-page" element={<ReservationPage />} />
      </Routes>
      {/* <Header />
      <Main />
      <Footer /> */}
    </>
  );
}
// styled-components are a thing

export default App;
