const container = document.getElementById("characters");
btnGetData.addEventListener("click", getData);

async function getData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/akabab/starwars-api/master/api/all.json"
  );
  const data = await res.json();
  renderData(data);
}

function renderData(characters) {
  characters.forEach((char) => {
    const cardBody = document.createElement("div");
    cardBody.classList.add("card")
    cardBody.innerHTML = `
    <p class="name"> Name: ${char.name} </p>
    <img src="${char.image}" alt="${char.name}" />
    <p class="sub"> Specie: ${char.species}</p>
    <p> Homeworld: ${char.homeworld} </p>
    
    `;
    container.appendChild(cardBody);
  });
}
