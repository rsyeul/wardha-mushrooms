import React from 'react';
import './App.css';
import Header from './component/Hearder';
import { BrowserRouter,} from 'react-router-dom';
import Footer from './component/Footer';
import ProductsList from './component/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <ProductsList></ProductsList>
        <Footer />
      </div>
  </BrowserRouter>

  );
}

export default App;
