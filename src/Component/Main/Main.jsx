// import React from 'react';
// import Items from '../Items/Items';

// export default function Main() {
//   let data = [
//     {
//       id: 1,
//       name: 'welad rezk',
//       image_url:
//         'https://novouae.gumlet.io/Files//Movie/997x498/welad-1440-new.jpg?w=1140&dpr=1.3',
//       year: 2019,
//       rate: 4.5,
//     },
//     {
//       id: 2,
//       name: 'the meg',
//       image_url: 'https://i.ebayimg.com/images/g/34AAAOSwLcVi2ev4/s-l1600.jpg',
//       year: 2023,
//       rate: 4.5,
//     },
//     {
//       id: 3,
//       name: 'the batman',
//       image_url:
//         'https://m.media-amazon.com/images/I/815IBWT+WeL._AC_SL1500_.jpg',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 4,
//       name: 'spiderman',
//       image_url:
//         'https://rukminim2.flixcart.com/image/416/416/kzzw5u80/poster/g/0/o/medium-spiderman-2-official-movie-on-good-quality-hd-quality-original-imagbvny3gsbwdfg.jpeg?q=70&crop=false',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 5,
//       name: 'welad rezk',
//       image_url:
//         'https://novouae.gumlet.io/Files//Movie/997x498/welad-1440-new.jpg?w=1140&dpr=1.3',
//       year: 2019,
//       rate: 4.5,
//     },
//     {
//       id: 6,
//       name: 'the meg',
//       image_url: 'https://i.ebayimg.com/images/g/34AAAOSwLcVi2ev4/s-l1600.jpg',
//       year: 2023,
//       rate: 4.5,
//     },
//     {
//       id: 7,
//       name: 'the batman',
//       image_url:
//         'https://m.media-amazon.com/images/I/815IBWT+WeL._AC_SL1500_.jpg',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 8,
//       name: 'spiderman',
//       image_url:
//         'https://rukminim2.flixcart.com/image/416/416/kzzw5u80/poster/g/0/o/medium-spiderman-2-official-movie-on-good-quality-hd-quality-original-imagbvny3gsbwdfg.jpeg?q=70&crop=false',
//       year: 2022,
//     },
//     {
//       id: 9,
//       name: 'welad rezk',
//       image_url:
//         'https://novouae.gumlet.io/Files//Movie/997x498/welad-1440-new.jpg?w=1140&dpr=1.3',
//       year: 2019,
//       rate: 4.5,
//     },
//     {
//       id: 10,
//       name: 'the meg',
//       image_url: 'https://i.ebayimg.com/images/g/34AAAOSwLcVi2ev4/s-l1600.jpg',
//       year: 2023,
//       rate: 4.5,
//     },
//     {
//       id: 11,
//       name: 'the batman',
//       image_url:
//         'https://m.media-amazon.com/images/I/815IBWT+WeL._AC_SL1500_.jpg',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 12,
//       name: 'spiderman',
//       image_url:
//         'https://rukminim2.flixcart.com/image/416/416/kzzw5u80/poster/g/0/o/medium-spiderman-2-official-movie-on-good-quality-hd-quality-original-imagbvny3gsbwdfg.jpeg?q=70&crop=false',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 13,
//       name: 'welad rezk',
//       image_url:
//         'https://novouae.gumlet.io/Files//Movie/997x498/welad-1440-new.jpg?w=1140&dpr=1.3',
//       year: 2019,
//       rate: 4.5,
//     },
//     {
//       id: 14,
//       name: 'the meg',
//       image_url: 'https://i.ebayimg.com/images/g/34AAAOSwLcVi2ev4/s-l1600.jpg',
//       year: 2023,
//       rate: 4.5,
//     },
//     {
//       id: 15,
//       name: 'the batman',
//       image_url:
//         'https://m.media-amazon.com/images/I/815IBWT+WeL._AC_SL1500_.jpg',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 16,
//       name: 'spiderman',
//       image_url:
//         'https://rukminim2.flixcart.com/image/416/416/kzzw5u80/poster/g/0/o/medium-spiderman-2-official-movie-on-good-quality-hd-quality-original-imagbvny3gsbwdfg.jpeg?q=70&crop=false',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 17,
//       name: 'welad rezk',
//       image_url:
//         'https://novouae.gumlet.io/Files//Movie/997x498/welad-1440-new.jpg?w=1140&dpr=1.3',
//       year: 2019,
//       rate: 4.5,
//     },
//     {
//       id: 18,
//       name: 'the meg',
//       image_url: 'https://i.ebayimg.com/images/g/34AAAOSwLcVi2ev4/s-l1600.jpg',
//       year: 2023,
//       rate: 4.5,
//     },
//     {
//       id: 19,
//       name: 'the batman',
//       image_url:
//         'https://m.media-amazon.com/images/I/815IBWT+WeL._AC_SL1500_.jpg',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 20,
//       name: 'spiderman',
//       image_url:
//         'https://rukminim2.flixcart.com/image/416/416/kzzw5u80/poster/g/0/o/medium-spiderman-2-official-movie-on-good-quality-hd-quality-original-imagbvny3gsbwdfg.jpeg?q=70&crop=false',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 21,
//       name: 'welad rezk',
//       image_url:
//         'https://novouae.gumlet.io/Files//Movie/997x498/welad-1440-new.jpg?w=1140&dpr=1.3',
//       year: 2019,
//       rate: 4.5,
//     },
//     {
//       id: 22,
//       name: 'the meg',
//       image_url: 'https://i.ebayimg.com/images/g/34AAAOSwLcVi2ev4/s-l1600.jpg',
//       year: 2023,
//       rate: 4.5,
//     },
//     {
//       id: 23,
//       name: 'the batman',
//       image_url:
//         'https://m.media-amazon.com/images/I/815IBWT+WeL._AC_SL1500_.jpg',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 24,
//       name: 'spiderman',
//       image_url:
//         'https://rukminim2.flixcart.com/image/416/416/kzzw5u80/poster/g/0/o/medium-spiderman-2-official-movie-on-good-quality-hd-quality-original-imagbvny3gsbwdfg.jpeg?q=70&crop=false',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 25,
//       name: 'welad rezk',
//       image_url:
//         'https://novouae.gumlet.io/Files//Movie/997x498/welad-1440-new.jpg?w=1140&dpr=1.3',
//       year: 2019,
//       rate: 4.5,
//     },
//     {
//       id: 26,
//       name: 'the meg',
//       image_url: 'https://i.ebayimg.com/images/g/34AAAOSwLcVi2ev4/s-l1600.jpg',
//       year: 2023,
//       rate: 4.5,
//     },
//     {
//       id: 27,
//       name: 'the batman',
//       image_url:
//         'https://m.media-amazon.com/images/I/815IBWT+WeL._AC_SL1500_.jpg',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 28,
//       name: 'spiderman',
//       image_url:
//         'https://rukminim2.flixcart.com/image/416/416/kzzw5u80/poster/g/0/o/medium-spiderman-2-official-movie-on-good-quality-hd-quality-original-imagbvny3gsbwdfg.jpeg?q=70&crop=false',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 29,
//       name: 'welad rezk',
//       image_url:
//         'https://novouae.gumlet.io/Files//Movie/997x498/welad-1440-new.jpg?w=1140&dpr=1.3',
//       year: 2019,
//       rate: 4.5,
//     },
//     {
//       id: 30,
//       name: 'the meg',
//       image_url: 'https://i.ebayimg.com/images/g/34AAAOSwLcVi2ev4/s-l1600.jpg',
//       year: 2023,
//       rate: 4.5,
//     },
//     {
//       id: 31,
//       name: 'the batman',
//       image_url:
//         'https://m.media-amazon.com/images/I/815IBWT+WeL._AC_SL1500_.jpg',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 32,
//       name: 'spiderman',
//       image_url:
//         'https://rukminim2.flixcart.com/image/416/416/kzzw5u80/poster/g/0/o/medium-spiderman-2-official-movie-on-good-quality-hd-quality-original-imagbvny3gsbwdfg.jpeg?q=70&crop=false',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 33,
//       name: 'welad rezk',
//       image_url:
//         'https://novouae.gumlet.io/Files//Movie/997x498/welad-1440-new.jpg?w=1140&dpr=1.3',
//       year: 2019,
//       rate: 4.5,
//     },
//     {
//       id: 34,
//       name: 'the meg',
//       image_url: 'https://i.ebayimg.com/images/g/34AAAOSwLcVi2ev4/s-l1600.jpg',
//       year: 2023,
//       rate: 4.5,
//     },
//     {
//       id: 35,
//       name: 'the batman',
//       image_url:
//         'https://m.media-amazon.com/images/I/815IBWT+WeL._AC_SL1500_.jpg',
//       year: 2022,
//       rate: 4.5,
//     },
//     {
//       id: 36,
//       name: 'spiderman',
//       image_url:
//         'https://rukminim2.flixcart.com/image/416/416/kzzw5u80/poster/g/0/o/medium-spiderman-2-official-movie-on-good-quality-hd-quality-original-imagbvny3gsbwdfg.jpeg?q=70&crop=false',
//       year: 2022,
//       rate: 4.5,
//     },
//   ];

//   return (
//     <>
//       <div className="container">
//         <div className="row gy-4">
//           <Items data={data} />
//         </div>
//       </div>
//     </>
//   );
// }
