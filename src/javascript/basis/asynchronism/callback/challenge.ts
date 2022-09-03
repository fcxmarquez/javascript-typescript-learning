const XMLHttpRequests = require("xmlhttprequest").XMLHttpRequest;

const API = "https://api.escuelajs.co/api/v1";

const fetchData = (urlApi, callback) => {
  let xhttp = new XMLHttpRequests();

  xhttp.open("GET", urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error ${xhttp.status}`);
        return callback(error, null);
      }
    }
  };
  // values meanings
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
  xhttp.send();
}; // This is the old way to do a request, now we use the es6 fetch method

fetchData(`${API}/products`, (err1, data1) => {
  if (err1) return console.error(err1);
  fetchData(`${API}/products/${data1[0].id}`, (err2, data2) => {
    if (err2) return console.error(err2);
    fetchData(`${API}/categories/${data2?.category?.id}`, (err3, data3) => {
      if (err3) return console.error(err3);
      console.log(data1[0])
      console.log(data2.title)
      console.log(data3.name)
    });
  });
});
  