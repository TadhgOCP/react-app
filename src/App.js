import './App.css';
import { Navbar } from './components/Navbar'
import Container from 'react-bootstrap/Container';
import { Routes, Route } from "react-router-dom";
import { Videos } from './pages/Videos'
import { useState } from 'react'
import { Youtube } from './pages/Youtube'
import { Home } from './pages/Home'
import { Twitter } from './pages/Twitter'
import { Twitch } from './pages/Twitch'
import { Spotify } from './pages/Spotify'
import { Login } from './pages/Login'
import { GooglePhotos } from './pages/GooglePhotos'
import { Footer } from './components/Footer'
import { OWLeague } from './pages/OWLeague'

function App() {

  const initialLoginStatusFromStorage =  window.localStorage.getItem('isLoggedIn')
  const initialLoginStatus = initialLoginStatusFromStorage === 'TRUE' ? true : false

  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginStatus)

  const setLoginToTrue = () => {
    setIsLoggedIn(true)
    window.localStorage.setItem('isLoggedIn', 'TRUE');
  }

  const setLoginToFalse = () => {
    setIsLoggedIn(false)
    window.localStorage.setItem('isLoggedIn', 'FALSE');
  }

  if (isLoggedIn === false) {
    return (
      <Container>
        <Login onSuccessfullLogin={setLoginToTrue} />
      </Container>
    )
  }

  return (
    <div className="App">
      <Navbar onLogout={setLoginToFalse} />
      <Container>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Videos" element={<Videos />} />
        <Route path="Youtube" element={<Youtube/>} />
        <Route path="Twitter" element={<Twitter/>} />
        <Route path="Spotify" element={<Spotify/>} />
        <Route path="Twitch" element={<Twitch/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="GooglePhotos" element={<GooglePhotos/>} />
        <Route path="OWLeague" element={<OWLeague/>} />
      </Routes>
    </Container>
    <Footer />
    </div>
  );
}

export default App;
