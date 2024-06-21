import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import AboutUs from 'pages/AboutUs';
import Projects from 'pages/Projects';
import Upcoming from 'pages/Upcoming';
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path={'/'} />
        <Route element={<AboutUs />} path={'aboutus'} />
        <Route element={<Projects />} path='projects' />
        <Route element={<Upcoming />} path='upcoming' />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
