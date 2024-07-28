import React from 'react';
import styles from '../../styles/Home.module.css';

export default function Footer() {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className="d-flex justify-content-center align-items-center h-100 flex-column ">
          <a className={`${styles.logo} text-decoration-none`} href="/movie">
            MMDB
          </a>
<div className='d-flex text-white mt-3'>
  <h6 className='px-3'>About</h6>
  <h6 className='px-3'>Terms Of Use</h6>
  <h6 className='px-3'>Privacy Policy</h6>
  <h6 className='px-3'>Help</h6>
</div>
<div className={`${styles.copyRights} mt-3`}>
© 2023 MMDB. All rights reserved.
</div>
        </div>
      </div>
    </>
  );
}
