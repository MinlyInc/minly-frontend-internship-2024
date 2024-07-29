import MoviesList from '../component/movieList';
import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';
import SearchAppBar from '@/component/navBar';
import styles from '@/styles/movie.module.css';
import Footer from '@/component/footer';

export default function Home() {
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('None');
 

  const LIMIT = 8;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };



  useEffect(() => {
    fetch(`http://localhost:3000/movies/paginated?page=${page}&limit=${LIMIT}`)
      .then((response) => response.json())
      .then((response) => setRecords(response.data))
      .catch((err) => console.log(err));
  }, [page]);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/paginated?sortBy=${sort}`)
      .then((response) => response.json())
      .then((response) => setRecords(response.data))
      .catch((err) => console.log(err));
  }, [sort]);

  

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.header}>
              <h1>
                <SearchAppBar/>
              </h1>
            </div>
            <div className={styles.subHeader}>
              <h2>All Movies</h2>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label"></InputLabel>
                <Select onChange={handleSortChange} className={styles.select} value={sort}>
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                  <MenuItem value="releaseDate">Release Date</MenuItem>
                </Select>
              </FormControl>
            </div>
            <MoviesList records={records} />
            <div className={styles.pagination}>
              <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
