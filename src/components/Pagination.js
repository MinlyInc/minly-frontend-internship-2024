import React from 'react';
import styles from './Pagination.module.css';
import { Box } from '@mui/material';

const Pagination = ({ page, lastPage, setPage }) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < lastPage) setPage(page + 1);
  };

  return (
    <Box className={styles.pagination}>
      <button onClick={handlePrev} disabled={page <= 1}>
        Prev
      </button>
      {[...Array(lastPage).keys()].map((num) => (
        <button
          key={num}
          className={num + 1 === page ? styles.active : ''}
          onClick={() => setPage(num + 1)}
        >
          {num + 1}
        </button>
      ))}
      <button onClick={handleNext} disabled={page >= lastPage}>
        Next
      </button>
    </Box>
  );
};

export default Pagination;
