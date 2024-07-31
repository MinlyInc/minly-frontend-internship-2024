import React from 'react';
import styles from "../../styles/Home.module.css";
import Script from 'next/script';
import axios from 'axios';
import Link from 'next/link';

export default function Navbar({setFilter,filter}) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <nav className="navbar navbar-expand-lg bg-white shadow">
        <div className="container">
          <a className={`navbar-brand ${styles.logo}`} href="/">MMDB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {filter!=''?filter: 'Genre'}
                </a>
                <ul className="dropdown-menu">
                  <li><a onClick={()=>setFilter('action')} className="dropdown-item" href="#">Action</a></li>
                  <li><a onClick={()=>setFilter('comedy')} className="dropdown-item" href="#">comedy</a></li>
                  <li><a onClick={()=>setFilter('drama')} className="dropdown-item" href="#">Drama</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 rounded-4" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}


