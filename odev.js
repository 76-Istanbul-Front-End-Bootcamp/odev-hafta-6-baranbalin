window.mockApiUrl = "https://5ff1a775db1158001748b389.mockapi.io/pets/";

window.removePet = (id) => {
    fetch(`${window.mockApiUrl}${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      window.location.reload();
    });
  };
  
  window.generateDetailModal = (pet) => {
    return `<div class="modal fade" id="exampleModal${pet.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${pet.name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                  <img src=${pet.image} class="card-img-top">
                    ${pet.description}
                  </div>
                </div>
              </div>
            </div>`
}
  
  window.openPetDetail = (id) => {
    fetch(`${window.mockApiUrl}${id}`)
      .then((response) => response.json())
      .then((data) => {
        const petModalHtml = generateDetailModal(data);
        document.querySelector("body").innerHTML += petModalHtml;
        $(`#exampleModal${id}`).modal("show");
      });
  };
