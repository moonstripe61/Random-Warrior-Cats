function clanGen(){
  console.log(cssVariables);
  loopCount = 0;
  max =10;
  i=0;
  btn = document.querySelector("#clanBtn");

  interval = setInterval(() => {
    generateClan();
    btn.style.background = cssVariables[i];
    loopCount++;
    i++;
    console.log(i);
    if(i === (cssVariables.length -1)){
      i=0;
    }
    if (loopCount === max) {
      clearInterval(interval);
      btn.style.background = cssVariables[2]; //lila
    }

    
  }, 100);
}

function generateClan(){
  let clan = [
    "ThunderClan",
    "WindClan",
    "RiverClan",
    "ShadowClan",
    //"SkyClan",
    "Loner",
    "Kittypet"
  ]

  let cLength = clan.length;
  let rand = Math.floor(Math.random() * (cLength));
  document.querySelector("#clanResult").innerHTML =clan[rand];

  return clan[rand];
}


