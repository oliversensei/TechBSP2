import './App.css';
import About from './components/About/about';
import Footer from './components/Footer/footer';
import Header from './components/Header/header'
import Hero from './components/Hero/hero';
import PrimaryTabs from './components/Tabs/primaryTabs';

function App() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <div className='article'>
            <About />
            <div>
              <PrimaryTabs />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
