const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NGIwM2Y4MWI0MjAwMTM5YjI4ZjgiLCJpYXQiOjE2NzkwNTE1MjQsImV4cCI6MTY4MDI2MTEyNH0.9XymD9b-o9tkorDV2WpTKu34f3AXqldvlSV85Sp5Z38";

const url = "https://striveschool-api.herokuapp.com/api/product/";
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");
const endpoint = url + selectedId;

fetch(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(data => {
    const row = document.querySelector("#dettagli .row");
    row.innerHTML = "";
    const prodotto = data;

    createCard(prodotto.name, prodotto.brand, prodotto.imageUrl, prodotto.price, prodotto.description);
    document.querySelector("#modifica").href = `backoffice.html?id=${prodotto._id}`;
  })
  .catch(error => console.log(error));

const createCard = (name, brand, imgUrl, price, description) => {
  const row = document.querySelector("#dettagli .row");
  const col = document.createElement("div");
  col.setAttribute("class", "col");
  row.appendChild(col);

  col.innerHTML = `<div class="card">
  <img class="p-5" src="${imgUrl}" alt="${name}" />
  <div class="card-body text-center">
    <h4 class="card-text"><small>Brand:</small> ${brand}</h4>
    <p class="card-text"><small>Prezzo:</small> ${price}€</p>
    <p class="card-text"><small>Descrizione del prodotto:</small> ${description}</p>
  </div>
</div>`;
};
