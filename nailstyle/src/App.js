import './App.css';
import NavBar from './components/topbar/NavBar';
import Main from './components/mainbody/Main';
import Picture from './components/mainpicture/Picture';
import Services from './components/mainservices/Services';
import ServicesDireita from './components/mainservicesdireita/ServicesDireita';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import FooterBottom from './components/footerbottom/Footerbottom';



function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main className="mainpicture" >
        <section id='Home'>
        <Main/>
        <Picture/>
        </section>
      </main>
      <main className="mainservices">
        <section id='Serviços'>
        <Services/>
        <ServicesDireita/>
        </section>
      </main>
      <footer className="footer">
      <Footer/>
      </footer>
      <main className="login">
        <section className='loginlogin' id='Login'>
          <aside className='logincontainer'>
            <Login/>
          </aside>
        </section>
      </main>
      <>
      <FooterBottom/>
      </>
    </div>
    </>
  );
}

export default App;
