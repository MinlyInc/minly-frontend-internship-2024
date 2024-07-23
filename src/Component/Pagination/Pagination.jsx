// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import '../../styles/Home.module.css'
// import axios from 'axios';
// import Items from '../Items/Items';

// export default function BasicPagination() {

//     function getPage(page){

//         axios.get(`http://localhost:3001/movie?page=2`)
//         .then((res)=>
//         {console.log(res.data)
//         console.log('page n',page)}
//         )
//         .catch((err)=>{
//             console.log('page err',err)
//         })
//     }



//   return (
//    <div style={{display:'flex', justifyContent:'center'}}>
//      <Stack spacing={2}>
//       <Pagination onChange={(e,page)=>getPage(page)} count={10} />
//     </Stack> 
//     <Items getPage={getPage}/>
//    </div>
//   );
// }