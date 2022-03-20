import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import Header from '../components/templates/header';
import Sidebar from '../components/templates/sidebar';
import Footer from '../components/templates/footer';
import MenuOffcanvas from '../components/templates/offcanvasMenu';

function App() {
  return (
    <BrowserRouter basename="/personal-website">
      <div className='app'>
      <Header />
      <MenuOffcanvas />
      <Sidebar />
      <Router />
      <Footer />
      </div>
    </BrowserRouter>
    

  );
}

export default App;
