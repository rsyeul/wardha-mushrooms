import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Hearder';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import { Home } from 'lucide-react';
import ProductsList from './component/Products';

function App() {
  return (
  // <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Header />} />
  //     </Routes>
  //   </BrowserRouter>

  <BrowserRouter>
    
    <div className="min-h-screen flex flex-col">
    <Header />

    <ProductsList></ProductsList>

    <main className="flex-grow">
      <Routes>

      </Routes>
    </main>
    <Footer />
  </div>
</BrowserRouter>

  );
}

export default App;
