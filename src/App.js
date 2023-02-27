import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Source from './components/Source';
import LifeCycleComponent from './components/LifeCycleComponent';
import ProductList from './components/ProductList';
import FetchMedicines from './components/FetchMedicines';
import Login from './components/Login';
import MailBox from './components/MailBox';
import LoginPage from './components/LoginPage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import AddMedicine from './components/AddMedicine';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Card from './components/Card';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginForm/>} />
      <Route path='/medicine/all' element={<FetchMedicines/>}/>
      <Route path='/medicine/add' element={<AddMedicine/>}/>
    </Routes>
    </BrowserRouter> 
    {/* <Card/> */}
    </div>
   
  )
}

export default App;
