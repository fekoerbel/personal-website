import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import Header from '../components/templates/header';
import Sidebar from '../components/templates/sidebar';
import Main from '../components/templates/main';
import Footer from '../components/templates/footer';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
      </div>
    </BrowserRouter>
    

  );
}

export default App;
