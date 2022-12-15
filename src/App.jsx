import './App.css';
import Header__logo from './components/header/Header__logo';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Customers from './pages/customers/Customers';
import Pricing from './pages/pricing/Pricing';
import Login from './pages/login/Login';
import Signup from './pages/signin/Signup'
import Resoures from './pages/resources/Resoures';
import Footer__head from './components/footer/Footer__head';
 

function App() {
  return (
    <div className="App">
      <Header__logo/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/customers' element={<Customers/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/resources' element={<Resoures/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer__head/>
    </div>
  );
}

export default App;
