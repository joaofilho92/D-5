
fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NGIwM2Y4MWI0MjAwMTM5YjI4ZjgiLCJpYXQiOjE2NzkwNTE1MjQsImV4cCI6MTY4MDI2MTEyNH0.9XymD9b-o9tkorDV2WpTKu34f3AXqldvlSV85Sp5Z38"

        }})
            
            .then(responseObj => responseObj.json())
            
            .then(product => {

                
                console.log(product)
                
                const grid = document.getElementById("todos-container")
                grid.innerHTML = ""

                product.forEach((product) => {
                    const col = document.createElement("div")
                    col.className = "col"
                    col.innerHTML = `
                    <div class="card bg-image bg-fixed ">
                        <div class="card-body">
                            <img src="${product.imageUrl}"class="card-img-top" style="width: 100%; height: 200px;">
                            <h5 class="card-title mt-2 fs-5 h-30">${product.brand}</h5>
                            <span class="badge bg-dark mt-1">Prezzo: € ${product.price}</span >
                            <a href="dettaglio.html?id=" class=" btn btn-primary d-flex mt-2 p-2 ms-1 mx-1">Scopri di pìu</a>
                            <a href="back-office.html?id=" class="btn btn-primary d-flex mt-1 p-2 ms-1 mx-1" onclick="click" id="modifica">Modifica</a>
                        </div>
                    </div>
                        `
                    grid.appendChild(col)
                })
            })
            .catch(error => console.log("CATCH", error))

