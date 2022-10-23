import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';

function App() {
  return (
    <div>
          <Header></Header>
           <Routes>
             <Route path="/" element={<Home></Home>}></Route>
             <Route path="/order" element={<Order></Order>}></Route>
           </Routes>
    </div>
  );
}

export default App;
