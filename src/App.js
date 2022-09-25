import { About, Header, Footer, Skills, Projects } from './container';
import './App.scss';
import { Navbar } from './components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
