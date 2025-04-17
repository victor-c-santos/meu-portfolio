import Header from './components/Header';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <MainMenu />
      </main>
      <Footer />
    </div>
  );
}

export default App;