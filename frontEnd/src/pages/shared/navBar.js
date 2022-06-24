import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isRole, logout, } from '../../utils';

const NavBar = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ boxShadow: '0px 0px 25px rgb(0 0 0 / 10%)', }}>
      <a className="navbar-brand" style={{ marginLeft: '20px', }} href="/">Restaurant OMPT</a>
      {
        isRole('admin') && (
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${location.pathname == '/listProduit' && 'active'}`}>
              <a className="nav-link" href="/listProduit">Produits</a>
            </li>
            <li className={`nav-item ${location.pathname == '/listAgent' && 'active'}`}>
              <a className="nav-link" href="/listAgent">Agents</a>
            </li>
          </ul>
        )
      }

      
      <div style={{ marginLeft: 'auto', marginRight: '20px', cursor: 'pointer', }} onClick={() => { logout(); navigate("/"); }}>
        Se déconnecter
      </div>
    </nav>
  );
};

export default NavBar;
