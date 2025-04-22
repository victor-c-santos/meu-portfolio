import Header from '/src/components/Header';
import MainMenu from '/src/components/MainMenu';
import Footer from '/src/components/Footer';
import { useEffect, useState } from 'react';
import '/src/App.css';
import '/src/styles/Loading.css'; // ou onde estiver seu CSS

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="app-container">
      <div className={`loading-screen ${isLoading ? '' : 'fade-out'}`}>
        <div className="loader"></div>
      </div>

      <div className={`main-content ${isLoading ? 'hidden' : 'fade-in-content'}`}>
        <Header />
        <main>
          <MainMenu />
        </main>
        <Footer />
      </div>
    </div>
  );
}
