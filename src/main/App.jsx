import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import Header from '../components/templates/header';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
      <Header />
      <Router />
      </div>
    </BrowserRouter>
    

  );
}

export default App;
