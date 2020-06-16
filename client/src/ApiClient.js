'use strict'

const BASE_URL = 'http://localhost:3002';

//get request for all chart data
function getTechnologies() {
  return fetchRequest('/');
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
  getTechnologies,
  createAccount,
  login,
  getProfile,
  addTopic,
  logout
}
