import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DropDown from '../../DropDown/DropDown';
import Navbar from '@/Component/Navbar/Navbar';
import Footer from '@/Component/Footer/Footer';
import MovieList from '@/Component/MovieList/MovieList';


export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [field, setField] = useState('title');
  const [filter, setFilter] = useState('');

  function getPagination() {
    axios
      .get(
        `http://localhost:3001/movie?page=${page}&sortField=${field}&Genre=${filter}`
      )
      .then((res) => {
        setMovies(res.data.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  

  function handleChange(field) {
    setField((prev) => (prev = field));
  }

  function handlePagination(page) {
    setPage((prev) => (prev = page));
  }


  useEffect(() => {
    getPagination();
  }, [page, field,filter]);


 


  return (
    <>
    <Navbar  setMovies={setMovies} setFilter={setFilter} filter={filter} />
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <div>
            <h3>All Movies</h3>
          </div>
          <div>
            <DropDown handleChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <MovieList movies={movies}/>

          <div className="d-flex justify-content-center mt-4">
            <Stack spacing={2}>
              <Pagination
                onChange={(e, page) => handlePagination(page)}
                count={10}
              />
            </Stack>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
