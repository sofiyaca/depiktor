'use strict'

const BASE_URL = 'http://localhost:3002';

//get request for all chart data
function getData() {
  return fetchRequest('/data');
}

//post request to create a new account 
function createAccount(user) {

}

//post request to login => results in a get request to profile page
function login(user) {

}

//get the user profile that logged in
function getProfile() {

}

//post request to add a new data source, only when logged
function addTopic(topic) {

}

//post request to logout
function logout() {

}

//fetch request 
function fetchRequest(path, options) {
  return (
    fetch(BASE_URL + path, options)
      .then(res => res.ok ? res : Promise.reject(res))
      .then(res => res.status !== 204 ? res.json() : res)
      .catch(err => 
        console.log(`Error fetching [${options ? options.method : `GET`}]`, err)
        )
      )
}

export default {
  getData,
  createAccount,
  login,
  getProfile,
  addTopic,
  logout
}


//mock data from getData 
// const data = {
//   labels: ['2020-05-19 10:23:54', '2020-05-20 10:23:54', '2020-05-21 10:23:54', '2020-05-22 10:23:54', '2020-05-23 10:23:54', '2020-05-24 10:23:54', '2020-05-25 10:23:54'],
//   datasets: [{
//     react: [12, 4, 7, 32, 6, 15], 
//     vue: [45, 8, 3, 0, 12, 21], 
//     angular: [17, 4, 3, 7, 8, 45],
//     svelte: [7, 4, 2, 17, 13, 23]
//   }]
// }
