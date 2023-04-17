import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "pages/homePage";
import ProfilePage from "pages/profilePage";
import LoginPage from "pages/loginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginPage /> } />
          <Route path="/home" element={ <HomePage /> } />
          <Route path="/profile/:userid" element={ <ProfilePage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
