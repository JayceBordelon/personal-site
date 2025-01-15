import NavBar from './components/NavBar';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Intro from './sections/Intro';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Work from './sections/Work';

function App() {
    return (
        <>
            <NavBar />
            <main>
                <Intro />
                <Work />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </>
    );
}

export default App;
