import { Outlet, useMatch } from "react-router-dom";
import Dashboard from '../dashboard/dashboard'
export default function Layout() {
  const match =useMatch('/');

  return (
    <>
    <h1>Layout</h1>
      {match? <Dashboard />: ''}
      <div id="detail">
        {<Outlet />}
      </div>
    </>
  );
}
