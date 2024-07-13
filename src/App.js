// App.js
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Hero from "./components/Hero";

export default function App() {
	return (
		<>
			<Header />
			<Navbar />
			<Main />
			{/* <Hero />
			<About />
			<Skills />
			<Projects />
			<Contact /> */}
			<Footer />
		</>
	);
}
