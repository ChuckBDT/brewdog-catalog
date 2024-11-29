import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="w-full py-2 px-4 text-center bg-yellow-300">As Punk API is down, the app is now using a set of 20 mocked beers i kept apart from the original data. Images and content may (will) not be accurate.</div>
      <main className="bg-gray-50 flex-1 flex px-8">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
