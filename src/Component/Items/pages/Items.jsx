import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DropDown from '../../DropDown/DropDown';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css'

export default function Items() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [field, setField] = useState('title');

  async function getAllMovies() {
    axios
      .get(`http://localhost:3001/movie`)
      .then((data) => {
        setMovies(data.data.data);
      })
      .catch((err) => console.log('axios error', err));
  }

  function getPagination() {
    axios
      .get(
        `http://localhost:3001/movie?page=${page}&sortField=${field}&sortOrder=desc`
      )
      .then((res) => {
        setMovies(res.data.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  function handleChange(ee) {
    setField((prev) => (prev = ee));
  }

  function handlePagination(page) {
    setPage((prev) => (prev = page));
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    getPagination();
  }, [page, field]);

  return (
    <>
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
          {movies.map((movie) => (
            <div key={movie.id} className="col-5 col-md-3 mt-4">
              <div className={`card shadow border-white`}>
                  <Link href={`/MovieDetails/${movie.uuid}`}>
                <div className="card-img">
                  <img
                    height={300}
                    className="w-100 object-fit-cover movie-image"
                    src={movie.poster}
                    alt=""
                  />
                </div>
                  </Link>
                <div className="card-body">
                  <div className="d-flex">
                    <svg
                      className="star"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 72 72"
                    >
                      <path
                        fill="#fcea2b"
                        d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                      ></path>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                        d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                      ></path>
                    </svg>
                    <h6 className="rate">{movie.averageRatings}</h6>
                  </div>
                  <h6 className="fw-bold">{movie.title}</h6>
                  <h6 className="text-muted">
                    {movie.releaseDate.split('-')[0]}
                  </h6>
                </div>
              </div>
            </div>
          ))}

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
    </>
  );
}
