import React from 'react';
import MovieList from './components/MoviesList/MoviesList';
import styles from '../styles/Home.module.css';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.home}>
      <MovieList />
      <Footer />
    </div>
  );
}
