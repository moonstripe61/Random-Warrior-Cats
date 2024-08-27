const catFurColors = ["#000000", "#FFFFFF", "#808080", "#FFA500", "#964B00", "#FFFDD0", "#D2B48C", "#6C7B8B", "#C8A2C8", "#CD853F"];
console.log(catFurColors);

const farben = {
    schwarz: [
        "#333333", "#1A1A1A", "#444444", "#262626", "#3C3C3C",
        "#292929", "#222222", "#363636", "#2D2D2D", "#414141",
        "#2A2A2A", "#3E3E3E", "#3B3B3B", "#313131", "#303030",
        "#383838", "#1E1E1E", "#272727", "#353535", "#3A3A3A",
        "#202020", "#242424", "#282828", "#323232", "#262626",
        "#1C1C1C", "#2E2E2E", "#2B2B2B", "#2F2F2F", "#1F1F1F"
    ],
    weiß: [
        "#FFFFFF", "#FAF3E0", "#FAFAFA", "#FCFCFC", "#F8F8FF",
        "#F0FFFF", "#F8F8FF", "#F7F7F7", "#F7F7F7", "#FFF8DC",
        "#F9F9F9", "#FAF0E6", "#F0F8FF", "#FFFAF0", "#F0FFF0",
        "#FAEBD7", "#F5F5F5", "#FAF0FF", "#E0FFFF", "#EBEBEB",
        "#F8FAFF", "#FFF5EE", "#FFFFF0", "#FFFFE0", "#F5F5F5",
        "#FEFEFE", "#E6E6FA", "#F0F8FF", "#F5FFFA", "#F0FFFF"
    ],
    rotOrange: [
        "#FF4500", "#FFA07A", "#D2691E", "#FF7F50", "#DC143C",
        "#FFD700", "#FFA500", "#FF1493", "#FF6347", "#FFA500",
        "#FF8C00", "#FF4500", "#B22222", "#FF4500", "#FF4500",
        "#B87333", "#D2691E", "#FFA500", "#DAA520", "#CD5C5C",
        "#FF4500", "#FF0000", "#E34234", "#8B0000", "#A52A2A",
        "#FF8C00", "#DA9100", "#FF4500", "#DC143C", "#FF4500"
    ],
    grauBlau: [
        "#C0C0C0", "#B2BEB5", "#708090", "#646D7E", "#A9A9A9",
        "#A8A8A8", "#4F4E4E", "#BEBEBE", "#778899", "#9D9D9D",
        "#F7F7F7", "#DCDCDC", "#464646", "#9FA3A7", "#D9E4E9",
        "#483C32", "#C9C0BB", "#736F6E", "#B5AFAF", "#8D8478",
        "#847E87", "#778899", "#8B8680", "#505050", "#7D7F7D",
        "#848482", "#787878", "#6D6D6D", "#EAEAEA", "#676767"
    ],
    braun: [
        "#8B4513", "#CD5C5C", "#C04000", "#6F4E37", "#5C3317",
        "#8B4513", "#D2691E", "#A52A2A", "#AA6C39", "#D2691E",
        "#A0522D", "#800000", "#E6BF83", "#704214", "#B87333",
        "#715344", "#893F45", "#6B4226", "#D2691E", "#6F4E37",
        "#8B4513", "#987654", "#BC8F8F", "#8C7853", "#8B7355",
        "#5D3C27", "#8B4513", "#CD5C5C", "#987654", "#8B4513"
    ],
    creme: [
        "#F5F5DC", "#FAEBD7", "#FFFDD0", "#F5E4A5", "#F7F7F7",
        "#FFFFF0", "#FFF8DC", "#FFEFD5", "#F3E5AB", "#FFFACD",
        "#FFFBF0", "#FFFACD", "#FFDAB9", "#FAEBD7", "#FAF0E6",
        "#F5E3B2", "#FFE4C4", "#F5F5DC", "#FFE4B5", "#F5F5DC",
        "#FFF8DC", "#D8CDB4", "#C19A6B", "#F5F5F5", "#FFF8DC",
        "#FFFACD", "#FFDAB9", "#F5DEB3", "#FFF8DC", "#F8F4FF"
    ],
    creme2: [
        "#F5F5DC", "#C19A6B", "#F5F5DC", "#FFE4C4", "#DCB68A",
        "#F5F5F5", "#D2B48C", "#FFF8DC", "#8B7355", "#FAEBD7",
        "#F5F5DC", "#704214", "#F0E68C", "#986960", "#FFF8DC",
        "#AA6C39", "#D8CDB4", "#893F45", "#F4E3B2", "#CDB79E",
        "#A0522D", "#6B4226", "#FFDAB9", "#D4AF37", "#F5DEB3",
        "#8B7355", "#987654", "#DAA520", "#F5F5DC"
    ],
    zimt: [
        "#D2691E", "#A0522D", "#A52A2A", "#CD853F", "#8B4513",
        "#D2691E", "#A0522D", "#8B4513", "#A52A2A", "#CD853F",
        "#D2691E", "#A0522D", "#8B4513", "#CD853F", "#A52A2A",
        "#D2691E", "#A0522D", "#8B4513", "#CD853F", "#D2691E",
        "#A0522D", "#8B4513", "#CD853F", "#D2691E", "#A0522D",
        "#8B4513", "#CD853F", "#D2691E", "#A0522D", "#8B4513"
    ]
};

const augenfarben = {
    blau: [
        "#89ABE3", "#7BA1D2", "#6C97C1", "#5E8EAF", "#50749D",
        "#42698C", "#345F7A", "#265568", "#174C56", "#073344",
        "#00383C", "#00313B", "#002A3B", "#00223B", "#001B3B",
        "#005D73", "#004C73", "#003C73", "#002C73", "#001C73",
        "#006D7C", "#005C7C", "#004B7C", "#003A7C", "#00297C"
    ],
    grün: [
        "#56A960", "#4F9357", "#478C51", "#3F854B", "#377E45",
        "#2F7740", "#276F3B", "#1F6836", "#176131", "#0F5A2C",
        "#175932", "#0F512C", "#064926", "#004120", "#003A1A",
        "#3B9C64", "#34955E", "#2D8E58", "#268752", "#1F804C",
        "#1F7946", "#1F7240", "#1F6B3A", "#1F6434", "#1F5D2E"
    ],
    bernstein: [
        "#DAA520", "#C8941E", "#B67D1C", "#A4671A", "#924F18",
        "#803917", "#6E3315", "#5C1C13", "#4A0611", "#38000F",
        "#D29D1F", "#C0871D", "#AE701B", "#9C5A19", "#8A4317",
        "#DEA32A", "#CC8B28", "#BA7525", "#A85F23", "#965922"
    ],
    grau: [
        "#6B7C93", "#8C9A92", "#6A5ACD", "#BCE8A0", "#4682B4", 
        "#8A9A5B", "#778899", "#556B2F", "#778899", "#6B8E23", 
        "#2F4F4F", "#696969", "#778899", "#2F4F4F", "#556B2F", 
        "#6B8E23", "#778899", "#556B2F", "#2F4F4F", "#778899"
    ]
};

// Funktion, um die Helligkeit einer Farbe zu berechnen
function getContrastYIQ(hexcolor) {
  hexcolor = hexcolor.replace("#", "");
  let r = parseInt(hexcolor.substr(0, 2), 16);
  let g = parseInt(hexcolor.substr(2, 2), 16);
  let b = parseInt(hexcolor.substr(4, 2), 16);
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white'; // Helle Farben bekommen schwarze Schrift, dunkle Farben weiße
}

window.onload = function () {
  setTimeout(function () {
      const farbenContainer = document.getElementById('farbenContainer');

      // Fellfarben anzeigen
      for (const [kategorie, farbenArray] of Object.entries(farben)) {
          const section = document.createElement('div');
          section.className = 'section';
          const title = document.createElement('h3');
          title.innerText = `Fellfarben: ${kategorie}`;
          section.appendChild(title);

          const circlesContainer = document.createElement('div');
          circlesContainer.className = 'circles-container';

          farbenArray.forEach((hex) => {
              const kreis = document.createElement('div');
              kreis.className = 'circle';
              kreis.style.backgroundColor = hex;
              kreis.style.color = getContrastYIQ(hex); // Setze die Textfarbe basierend auf der Helligkeit
              kreis.innerText = hex;
              circlesContainer.appendChild(kreis);
          });

          section.appendChild(circlesContainer);
          farbenContainer.appendChild(section);
      }

      // Augenfarben anzeigen
      for (const [kategorie, augenArray] of Object.entries(augenfarben)) {
          const section = document.createElement('div');
          section.className = 'section';
          const title = document.createElement('h3');
          title.innerText = `Augenfarben: ${kategorie}`;
          section.appendChild(title);

          const circlesContainer = document.createElement('div');
          circlesContainer.className = 'circles-container';

          augenArray.forEach((hex) => {
              const kreis = document.createElement('div');
              kreis.className = 'circle';
              kreis.style.backgroundColor = hex;
              kreis.style.color = getContrastYIQ(hex); // Setze die Textfarbe basierend auf der Helligkeit
              kreis.innerText = hex;
              circlesContainer.appendChild(kreis);
          });

          section.appendChild(circlesContainer);
          farbenContainer.appendChild(section);
      }
  }, 500); // Wartezeit von 500ms
};


