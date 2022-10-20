import './App.css';
import { Navbar } from './components/Navbar'
import Container from 'react-bootstrap/Container';
import { Routes, Route } from "react-router-dom";
import { Videos } from './pages/Videos'
import { useState } from 'react'
import { Youtube } from './pages/Youtube'
import { Home } from './pages/Home'
import { Discord } from './pages/Discord'
import { Twitter } from './pages/Twitter'
import { Twitch } from './pages/Twitch'
import { Spotify } from './pages/Spotify'
import { Login } from './pages/Login'
import { GooglePhotos } from './pages/GooglePhotos'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const setLoginToTrue = () => {
    setIsLoggedIn(true)
  }

  const setLoginToFalse = () => {
    setIsLoggedIn(false)
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
        <Route path="Discord" element={<Discord/>} />
        <Route path="Twitter" element={<Twitter/>} />
        <Route path="Spotify" element={<Spotify/>} />
        <Route path="Twitch" element={<Twitch/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="GooglePhotos" element={<GooglePhotos/>} />
      </Routes>
    </Container>
    </div>
  );
}

export default App;
