import request from '../utils/request';
// import requires from '../utils/require';

export function query() {
  return request('/api/users');
}
// export function detailsaxios() {
//   requires('https://api.douban.com/v2/movie/subject/1291561?apikey=0b2bdeda43b5688921839c8ecb20399b', function (data) {
//     console.log(data);
// })
// }
