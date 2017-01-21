// const $ = require('jquery');
//
// const WeatherApi = {
//   getAllCities(){
//     return new Promise((success, error) => {
//       $.ajax({
//         url: 'api/cities',
//         dataType: 'json',
//         success: success,
//         error: error
//       });
//     });
//   }
// };

import 'whatwg-fetch';

const WeatherApi = {
  getAllCities(){
    return fetch('api/cities').then(response => response.json());
  },
};

export default WeatherApi;
