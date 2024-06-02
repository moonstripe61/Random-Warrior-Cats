
function randomCatTest(){
  console.log(hairLength());
  let colors = furColors();
  console.log(colors);
  console.log(eyeColors());
}


function randomNumber(max){
  let rand = Math.floor(Math.random() * (max));
  return rand;
}

function hairLength(){
  let h = ["short", "medium", "long"];
  let rand = randomNumber(h.length);
  return h[rand];
}

function pattern(colors){
  console.log("- pattern -");
  let furPatterns = ["Solid","Tabby", "Tortoiseshell", "Calico", "Bicolor", "Pointed", "Spotted"];

  console.log(checkSameColors(colors));
  console.log(check3color(colors));
  if(colors.length == 2){
    return "Solid";
  }
  if(colors.length > 4){}
  
}

function furColors(){
  console.log("- color -");
  let rand = randomNumber(1);
  let rand2 = randomNumber(2);
  let colors = [];
  
  let bereich1 = getBereich();
  let color1 = getColor(bereich1);
  colors.push(bereich1);
  colors.push(color1);
  if(rand == 0){
    let bereich2 = getBereich();
    let color2 = getColor(bereich2);
    colors.push(bereich2);
    colors.push(color2);
  }
  if(rand2 == 0){
    let bereich3 = getBereich();
    let color3 = getColor(bereich3);
    colors.push(bereich3);
    colors.push(color3);
  }
  console.log(colors);
  return colors;
}

function eyeColors(){
  console.log("- eye color -");
  let rand = randomNumber(10);
  let colors = [];

  let color1 = getEyeColor();
  colors.push(color1);
  if(rand == 0){
    let color2 = getEyeColor();
    colors.push(color2);
  }
  return colors;
}

function getBereich(){
  let randBereich = randomNumber(Object.keys(farben).length);
  return farbBereiche[randBereich];
}
function getColor(randBereich){
  let randColor = randomNumber(farben[randBereich].length);
  color = farben[randBereich][randColor];
  return color;
}

function getEyeColor(){
  let randBereich = randomNumber(Object.keys(augenfarben).length);
  let randColor = randomNumber(augenfarben[augenBereiche[randBereich]].length);
  color = augenfarben[augenBereiche[randBereich]][randColor];
  return color;
}

function checkSameColors(colors){
    for (let i = 0; i < colors.length; i+=2) {
      for (let j = i + 2; j < colors.length; j+=2) {
        console.log(i,j);
        if (colors[i] === colors[j]) {
          return true; // Wenn zwei gleiche Werte gefunden werden, gib true zurück
        }
      }
    }
    return false; // Wenn keine zwei gleichen Werte gefunden werden, gib false zurück
}

function check3color(colors){
  if(colors.includes("schwarz") && colors.includes("weiß") && colors.includes("rotOrange")){
    return true;
  }

  return false;
}

let farben = {
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

let farbBereiche = ["schwarz", "weiß", "rotOrange", "grauBlau", "braun","creme","creme2","zimt"];

const augenfarben = {
  blau: [
    "#89ABE3", "#7BA1D2", "#6C97C1", "#5E8EAF", "#50749D",
    "#42698C", "#345F7A", "#265568", "#184B57", "#0A4056",
    "#476B94", "#3A5F83", "#2C5461", "#1E4950", "#103E3E",
    "#4C79A3", "#3E6E91", "#30537F", "#22496E", "#143E5C"
  ],
  grün: [
    "#84AE90", "#76A480", "#689A6F", "#5A8F5F", "#4C855E",
    "#3D7B4E", "#2F714D", "#21673D", "#135D2C", "#05521C",
    "#609F81", "#529470", "#447A60", "#36604F", "#28573F",
    "#6DAE91", "#5FA481", "#519A70", "#438F5F", "#35855F"
  ],
  kupfer: [
    "#B87333", "#A8672D", "#985A28", "#885E22", "#78621D",
    "#686617", "#586A11", "#487E0C", "#388207", "#288602",
    "#B26F30", "#A2632A", "#925726", "#825A20", "#725E1B",
    "#BE7E39", "#AE722E", "#9E6628", "#8E5A23", "#7E4E1D"
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


const augenBereiche = [
  "blau",
  "grün",
  "kupfer",
  "bernstein",
  "grau",
];
