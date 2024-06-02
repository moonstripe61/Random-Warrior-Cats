const catFurColors = ["#000000", "#FFFFFF", "#808080", "#FFA500", "#964B00", "#FFFDD0", "#D2B48C", "#6C7B8B", "#C8A2C8", "#CD853F"];


console.log(catFurColors);


window.onload = function () {

  setTimeout(function () {
    const farbenContainer = document.getElementById('farbenContainer');
    console.log(farbenContainer);

    catFurColors.forEach((hex, index) => {
      const kreis = document.createElement('div');
      kreis.className = 'circle';
      kreis.style.backgroundColor = hex;
      kreis.innerText = index + 1; // Add 1 to index to start numbering from 1
      farbenContainer.appendChild(kreis);
    });

  }, 500); // Wait time of 500ms
};
