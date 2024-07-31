import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DropDown from '../../DropDown/DropDown';
import Navbar from '@/Component/Navbar/Navbar';
import Footer from '@/Component/Footer/Footer';
import MovieList from '@/Component/MovieList/MovieList';
import { getPagination } from '@/utils/ApiFile';



export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [field, setField] = useState('title');
  const [filter, setFilter] = useState('');
 
  function handleChange(field) {
    setField((prev) => (prev = field));
  }

  function handlePagination(page) {
    setPage((prev) => (prev = page));
  }

  useEffect(() => {
    getPagination(page,field,filter,setMovies);
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
