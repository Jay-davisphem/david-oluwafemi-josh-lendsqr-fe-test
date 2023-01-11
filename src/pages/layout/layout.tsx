import { Outlet, useMatch } from "react-router-dom";
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Dashboard from '../dashboard/dashboard'
import './layout.scss'
export default function Layout() {
  const match =useMatch('/');

  return (
    <section className='layout'>
    <NavBar />
    <section className='lower-layout'>
      <SideBar />
      {match? <Dashboard />: <Outlet />}
    </section>
    </section>
  );
}
