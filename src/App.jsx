import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MyTech from "./components/MyTech";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="min-h-screen bg-[#000] text-white font-['Sen']">
      <Home />
      <div className="lg:grid place-content-center">
        <AboutMe />
        <MyTech />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </main>
  );
}

export default App;
