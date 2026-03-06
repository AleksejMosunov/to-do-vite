import { Outlet } from "react-router-dom";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


export default function MainLayout() {
  return (
    <div className="page">
      <Header />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
