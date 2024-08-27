const catFurColors = ["#000000", "#FFFFFF", "#808080", "#FFA500", "#964B00", "#FFFDD0", "#D2B48C", "#6C7B8B", "#C8A2C8", "#CD853F"];
console.log(catFurColors);

const farben = {
    schwarz: [
        "#1A1A1A", "#1F1F1F", "#1E1E1E", "#222222", "#262626",
        "#2B2B2B", "#2D2D2D", "#2E2E2E", "#303030", "#313131",
        "#333333", "#3A3A3A", "#3C3C3C", "#3E3E3E", "#383838",
        "#353535", "#414141", "#444444", "#464646", "#505050",
        "#545454", "#585858", "#606060", "#676767", "#707070"
    ],
    
    rotOrange: [
        "#FF4500", "#d48b52", "#D2691E", "#ed7117", "#c77338",
        "#FFA500", "#bd652c", "#FF8C00", "#b15824", "#a14f20",
        "#7d3c17", "#91441b", "#66270e", "#a0561a", "#e65100",
        "#ef6c00", "#ffab40", "#ff9100", "#ff6d00", "#be5504",
        "#b2560d", "#8d4004", "#d16002", "#893101", "#d67229"
    ],
    grauBlau: [
        "#C0C0C0", "#BEBEBE", "#F7F7F7", "#DCDCDC", "#EAEAEA",
        "#A9A9A9", "#A8A8A8", "#9D9D9D", "#9FA3A7", "#778899",
        "#787878", "#7D7F7D", "#848482", "#8B8680", "#8D8478",
        "#6D6D6D", "#676767", "#505050", "#464646", "#4F4E4E",
        "#483C32", "#736F6E", "#C9C0BB", "#B5AFAF", "#9FA3A7"
    ],
    weiß: [
        "#FFFFFF", "#FEFEFE", "#FCFCFC", "#F8F8F8", "#F7F7F7",
        "#F5F5F5", "#EFEFEF", "#E0E0E0", "#DFDFDF", "#DCDCDC",
        "#EBEBEB", "#F0F0F0", "#F1F1F1", "#E4E4E4", "#F8FAF8"
    ],
    creme : [
        "#F5F5DC", "#FAEBD7", "#F5E4A5", "#F7F7F7", "#FFFFF0",
        "#FFF8DC", "#FFEFD5", "#F3E5AB", "#FFFACD", "#FFFBF0",
        "#FAF0E6", "#F5E3B2", "#FFE4C4", "#FFE4B5", "#D8CDB4",
        "#C19A6B", "#F5DEB3", "#DCB68A", "#D2B48C", "#CDB79E",
        "#F4E3B2", "#F5E3B2", "#F5F5F5", "#F0E68C", "#E4B8A0"
    ],
    braun : [
        "#8B4513", "#C04000", "#6F4E37", "#5C3317", "#AA6C39",
        "#800000", "#E6BF83", "#704214", "#B87333", "#715344",
        "#6B4226", "#987654", "#8C7853", "#8B7355", "#5D3C27",
        "#D2691E", "#CD853F", "#A0522D", "#D2B48C", "#B5651D",
        "#8B4000", "#7F4C1C", "#9C5B3F", "#A67B5B", "#7A3B24"
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
    gruen: [
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
        "#AE968D", "#A48B82", "#A49582", "#B9AB98", "#8A9A5B",
        "#CCC0AF", "#CCCCAF", "#C0BFA1", "#9D9C89", "#8C8C74",
        "#D1DBC1", "#B8C5A3", "#8F9A7C", "#97A979", "#9EB770",
        "#74B770", "#90C78D", "#B6DBB4", "#BED3BD", "#B0C4AE",
        "#AEC4BB", "#C7D9D2", "#9EBEB2", "#9BB1A9", "#B2BDB8",
        "#CFE5E7", "#BCD0D2", "#A6C5C7", "#9BB5B7", "#BEBEBE"
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


