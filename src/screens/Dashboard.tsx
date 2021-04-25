import React from 'react';
import {
  NavLink, Switch, Route,
  useLocation
} from 'react-router-dom';
import {
  LogoutIcon, LightningBoltIcon,
  KeyIcon, TicketIcon
} from '@heroicons/react/solid';

import {
  Claim,
  Home,
  Verify
} from '../components';

function Dashboard() {
  const location = useLocation();

  return (
    <React.Fragment>
      <nav className="z-10 fixed top-4 left-12 right-12 bg-gray-800 rounded-xl h-16 shadow-md flex items-center justify-between">
        <img className="block mx-4 rounded-full h-10 w-10 object-cover" src="https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" />
        <div className="self-stretch flex">
          <NavLink to="/" exact className="mx-2 pt-3 h-10 w-10 rounded-b-full flex items-center justify-center box-content border border-t-0 border-transparent hover:border-yellow-500" activeClassName="bg-yellow-500">
            <LightningBoltIcon className={`h-5 w-5 ${location.pathname === "/" ? "text-white" : "text-yellow-500"}`} />
          </NavLink>
          <NavLink to="/claim" className="mx-2 pt-3 h-10 w-10 rounded-b-full flex items-center justify-center box-content border border-t-0 border-transparent hover:border-yellow-500" activeClassName="bg-yellow-500">
            <TicketIcon className={`h-5 w-5 ${location.pathname === "/claim" ? "text-white" : "text-yellow-500"}`} />
          </NavLink>
          <NavLink to="/verify" className="mx-2 pt-3 h-10 w-10 rounded-b-full flex items-center justify-center box-content border border-t-0 border-transparent hover:border-yellow-500" activeClassName="bg-yellow-500">
            <KeyIcon className={`h-5 w-5 ${location.pathname === "/verify" ? "text-white" : "text-yellow-500"}`} />
          </NavLink>
        </div>
        <button className="mx-4 border border-red-500 group hover:bg-red-500 h-10 w-10 rounded-full flex items-center justify-center">
          <LogoutIcon className="h-5 w-5 text-red-500 group-hover:text-white" />
        </button>
      </nav>

      <main className="mt-24 w-11/12 m-auto">
        <Switch>
          <Route path="/claim">
            <Claim />
          </Route>

          <Route path="/verify">
            <Verify />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default Dashboard;
