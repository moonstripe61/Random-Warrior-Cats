function seasonGen(){
  console.log(cssVariables);
  loopCount = 0;
  max =10;
  i=0;
  btn = document.querySelector("#seasonBtn");

  interval = setInterval(() => {
    generateSeason();
    btn.style.background = cssVariables[i];
    loopCount++;
    i++;
    if(i === (cssVariables.length -1)){
      i=0;
    }
    if (loopCount === max) {
      clearInterval(interval);
      btn.style.background = cssVariables[2]; //lila
    }

    
  }, 100);
}

function generateSeason(){
  let seasons = [
    "spring",
    "summer",
    "fall",
    "winter"
  ]

  let sLength = seasons.length;
  let rand = Math.floor(Math.random() * (sLength));
  console.log("season Result: ",rand);
  document.querySelector("#seasonResult").innerHTML =seasons[rand];
}


