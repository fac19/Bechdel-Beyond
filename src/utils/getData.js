function checkResponse(res) {
  if (!res.ok) {
    throw new Error(`Data not found. Status: ${res.status}`);
  }
  return res.json();
}

export default function getData(endpoint) {
  return fetch(`https://apibechdel.herokuapp.com${endpoint}`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`Get data failed ${err}`);
    });
}
