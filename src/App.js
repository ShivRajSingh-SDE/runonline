import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";

import Home from "./components/home/Home";
import Login from "./Auth/Login";
import Reg from "./Auth/Reg";
import Profile from "./components/profile/profile";
import Chatbot from "./components/Chatbot/Chatbot";
import Roadmap from "./components/Roadmap/Roadmap";
import Test from "./components/Test/Test";
import Forgot from "./Auth/Forgot";
import Errorpage from "./components/error/Errorpage";
import Mobile from "./components/Mobile/Mobile";

function MobileRedirect() {
  return <Mobile />;
}

function App() {
  const isUserLoggedIn = localStorage.getItem("userEmail");

  // Check if the user is on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return <MobileRedirect />;
  }

  function NotFound() {
    return <Errorpage />; // Replace this with your actual 404 component
  }
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/news" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Reg />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/test&notes" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
