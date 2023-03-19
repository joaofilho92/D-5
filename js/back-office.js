const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NGIwM2Y4MWI0MjAwMTM5YjI4ZjgiLCJpYXQiOjE2NzkwNTE1MjQsImV4cCI6MTY4MDI2MTEyNH0.9XymD9b-o9tkorDV2WpTKu34f3AXqldvlSV85Sp5Z38";

const url = "https://striveschool-api.herokuapp.com/api/product/";
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");

const endpoint = selectedId ? url + selectedId : url;
const method = selectedId ? "PUT" : "POST";

window.onload = () => {
  if (selectedId) {
    document.getElementById("titolo").innerText = "Modifica Prodotto";
    document.getElementById("edit").classList.remove("d-none");
    document.getElementById("delete").classList.remove("d-none");
    document.getElementById("create").classList.add("d-none");

    fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        const { name, description, brand, imageUrl, price } = data;
        document.getElementById("name").value = name;
        document.getElementById("description").value = description;
        document.getElementById("brand").value = brand;
        document.getElementById("imgUrl").value = imageUrl;
        document.getElementById("price").value = price;
      })
      .catch(error => console.log(error));
  }
};
const gestisciSubmit = event => {
  event.preventDefault();
  const newProduct = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imgUrl").value,
    price: document.getElementById("price").value
  };
  fetch(endpoint, {
    method: method,
    body: JSON.stringify(newProduct),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  }).catch(error => console.log(error));
};



  //Annullare il prodotto

const cancellaProdotto = () => {
  const hasAccepted = confirm("Vuoi eliminare un prodotto?");
  if (hasAccepted) {
    fetch(endpoint, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.ok) {
          alert("Articolo eliminato con successo");
          window.location.href = "index.html";
        } else {
          throw new Error("Errore");
        }
      })
      .catch(err => {
        console.log(err);
        alert("C'è un errore");
      });
  }
};
