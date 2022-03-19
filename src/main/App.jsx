import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import Header from '../components/templates/header';
import Sidebar from '../components/templates/sidebar';
import Footer from '../components/templates/footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='app'>
      <Header />
      <Sidebar />
      <Router />
      <Footer />
      </div>
    </BrowserRouter>
    

  );
}

export default App;
