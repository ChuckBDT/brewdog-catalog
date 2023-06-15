import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 flex-1 flex px-8">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
