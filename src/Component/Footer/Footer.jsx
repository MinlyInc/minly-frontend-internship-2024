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
  <a role='button' className='px-3 text-decoration-none'>About</a>
  <a role='button' className='px-3 text-decoration-none'>Terms Of Use</a>
  <a role='button' className='px-3 text-decoration-none'>Privacy Policy</a>
  <a role='button' className='px-3 text-decoration-none'>Help</a>
</div>
<div className={`${styles.copyRights} mt-3`}>
© 2023 MMDB. All rights reserved.
</div>
        </div>
      </div>
    </>
  );
}
