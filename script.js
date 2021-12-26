//Create and Build and HTML element for body

document.body.innerHTML = `<div class="heading-container">
<h1>Chuck Norris</h1>
<img class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAA8woXUTaDHekpxmgY9WhjfvbP9DWtycbg&usqp=CAU" alt="chuck norris">
</div>
<div id="mainContainer" class="main-container"></div>
`;

// Accessing api link to get data from it using fetch

const getData = async () => {
  try {
    const data = await fetch("https://api.icndb.com/jokes/random/50")
    const jokes = await data.json();
    console.log(jokes);

    mainContainer.innerHTML = "";
    jokes.value.forEach(displayData)
  } catch (error) {
    console.log(error);
  }
};

getData();

//Create display method to show the data from api in clean way

const displayData = (obj) => {
  mainContainer.innerHTML += `
<div class="container">
<p class="para blue"> Joke:<span>${obj.joke}</span></p>
</div>`;
};

// not to use anything in index.html except
