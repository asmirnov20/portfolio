import { About, Header, Footer, Skills, Work } from './container';
import './App.scss';
import { Navbar } from './components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
