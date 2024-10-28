const getAllData = async () => {
  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10`
    );
    const data = await res.json();
    const main = document.querySelector(".body-data");
    data.map((e) => {
      main.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src=${e.url} class="card-img-top" alt="..." >
                
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Code : ${e.id}</li>
                    <li class="list-group-item">Height : ${e.height} cm</li>
                    <li class="list-group-item">Width : ${e.width}</li>
                </ul>
                <div class="card-body grid">
                    <a href="./add.html" class="card-link">Edit</a>
                    <a href="#" class="card-link">Delete</a>
                </div>
            </div>
            `;
    });
  } catch (error) {
    throw error;
  }
};
getAllData();
