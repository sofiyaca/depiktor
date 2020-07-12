const BASE_URL = process.env.NODE_ENV === 'production' ? "https://depiktor.herokuapp.com" : "http://localhost:3002";

// fetch request
function fetchRequest(path, options) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch(
      (err) =>
        console.log(`Error fetching [${options ? options.method : `GET`}]`, err) // eslint-disable-line no-console
    );
}

// get request for all chart data
function getTechnologies() {
  return fetchRequest("/tweetdata");
}

export default {
  getTechnologies,
};
