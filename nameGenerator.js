
function nameGen(){
  console.log(cssVariables);
  loopCount = 0;
  max =10;
  i=0;
  btn = document.querySelector("#nameBtn");

  interval = setInterval(() => {
    generateClanName();
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

function generateClanName(){
  let rangErg = rang();
  console.log(rangErg)
  let prefErg = prefix();
  let sufErg;

  if(rangErg == "Krieger/Kriegerin"){
    sufErg = sufix();
  }
  else if(rangErg == "Schüler*in"){
    sufErg = "paw";
  }
  else if(rangErg == "Anführer*in"){
    sufErg = "star";
  }
  else{
    sufErg = "kit";
  }

  let name = prefErg + sufErg;
  document.querySelector("#nameResult").innerHTML =name;
}

function rang(){
  let min = 1;
  let max = 100;
  let rand = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive

  // 1= Junges 
  // 2-24= Schüler
  // 25-99= Krieger
  // 100= Anführer
  if(rand ==max){
    return "Anführer*in";
  }
  else if(rand <= (max-1)&& rand >= (max/4)){
    return "Krieger/Kriegerin";
  }
  else if(rand <= (max/4-1) && rand >= (min+1)){
    return "Schüler*in";
  }
  else{
    return "Junges";
  }
}

function prefix(){
  let p= ['Acorn', 'Adder', 'Alder', 'Amber', 'Apple',
  'Arch', 'Ash', 'Aspen', 'Badger', 'Bark',
  'Bay', 'Bee', 'Beech', 'Berry',
  'Big',  'Birch', 'Bird', 'Black', 'Blaze','Bloom', 'Blossom', 'Blue',
  'Boulder', 'Bracken', 'Bramble', 
  'Breeze', 'Briar', 'Bright', 'Brindle', 'Bristle',
  'Broken', 'Brook', 'Brown', 'Brush',
  'Bug', 'Bumble',  'Cedar','Cherry',
  'Chestnut', 'Cinder', 'Cinnamon', 'Cloud', 'Clover', 'Cone', 'Copper', 'Creek',
  'Cricket',  'Crow', 'Curl',
  'Daisy', 'Dandelion', 
  'Dapple', 'Dark', 'Dawn', 'Deer', 'Dew',
  'Doe', 'Dove', 'Down', 'Drift', 'Drizzle', 'Duck',
  'Dusk', 'Dust', 'Eagle', 'Ebony', 'Echo', 
  'Elder', 'Ember', 'Fallen', 'Fawn',
  'Feather', 'Fennel', 'Fern',
  'Fin', 'Finch', 'Fir', 'Fire','Flame',
  'Flash','Flower', 'Flutter', 'Fly', 'Fog', 'Fox',
  'Freckle', 'Fringe', 'Frost',
  'Furze', 'Fuzzy', 'Gale', 'Golden',
  'Gorse', 'Grass', 'Gray', 'Green', 
  'Hawk', 'Hay', 'Hazel', 'Heather', 'Heavy','Holly',
  'Honey', 'Hoot', 'Ice',
  'Ivy', 'Jagged', 'Jay', 'Juniper', 'Larch', 'Lark', 'Lavender',
  'Leaf', 'Leopard', 'Lichen', 'Light', 'Lightning',
  'Lily', 'Lion', 'Little', 'Long',
  'Lynx', 'Maggot', 'Mallow',
  'Maple', 'Marigold', 'Marsh', 'Meadow',
  'Milk', 'Milkweed', 'Mint', 'Mist', 'Mistle',
  'Misty',  'Moon', 'Morning', 'Moss',
  'Mossy', 'Moth', 'Mottle', 'Mouse', 'Mud', 'Mumble',
  'Myrtle', 'Night',
  'Nut', 'Oak', 'Oat', 'Olive', 
  'Owl', 'Pale', 'Patch', 'Pear', 'Pebble',
  'Perch', 'Petal', 'Pine', 'Pink',
  'Plum', 'Pod', 'Pool', 'Poppy',
  'Primrose', 'Puddle', 'Quiet',
  'Rabbit', 'Rain','Raven', 'Red',
  'Reed', 'River', 'Robin',
  'Rock', 'Rook', 'Root', 'Rose',  'Sage', 'Sand','Shade', 'Shadow',
  'Sharp', 'Shattered', 'Shimmer',
  'Shining', 'Short', 'Shred', 'Shrew',
  'Shy', 'Silver', 'Sky', 'Slate', 'Sleek', 'Slight','Small', 'Smoke', 'Snake', 'Snap', 'Snow', 'Soft',
  'Soot', 'Sorrel', 'Spark', 'Sparrow', 'Speckle',
  'Spider', 'Spike', 'Spire', 'Spot', 'Spotted',
  'Squirrel', 'Stag','Stem', 'Stoat',
  'Stone', 'Stork', 'Storm', 'Stream', 'Stripe',
  'Stumpy', 'Sun', 'Sunny',
  'Sweet', 'Swift', 'Tall','Tansy',
  'Tawny', 'Thistle', 'Thorn', 'Thrift', 
  'Tiger', 'Timber', 'Tiny', 'Torn', 'Trout',
  'Tulip', 'Twig', 'Vine', 'Violet',
  'Vixen', 'Weasel', 'Web',
  'Weed',  'Whisker', 'Whisper','White','Willow', 'Wish', 'Wolf',
  'Wood', 'Yellow'];

  let pLength = p.length;
  let rand = Math.floor(Math.random() * (pLength));
  return p[rand];
}

function sufix(){
  let s= ['breeze', 'briar', 'bright', 'brook', 'burr', 'burrow', 'bush', 'claw', 'cloud', 'dapple', 'dawn', 'dusk', 'dust', 'ear', 'eater', 'eye', 'eyes', 'fall', 'fang', 'feather', 'fern', 'fire', 'fish', 'flake', 'flame', 'flight', 'flower', 'foot', 'frost', 'fur', 'gorse', 'hawk', 'haze', 'heart', 'ice', 'jaw', 'kit', 'leaf', 'leap', 'leg', 'light', 'mask',  'mist', 'moon', 'mouse', 'muzzle', 'nose', 'pad', 'peak', 'pelt', 'petal', 'pool', 'puddle', 'rose', 'scar', 'scratch', 'seed', 'shade', 'shadow', 'shell', 'shine', 'sight', 'sky','smoke', 'snout', 'snow', 'song', 'speckle', 'spirit', 'splash', 'spot', 'spots', 'stem', 'step', 'stone', 'storm', 'stream', 'strike', 'stripe', 'swoop', 'tail',  'thorn', 'toe', 'tooth', 'tuft', 'water', 'whisker', 'whisper', 'wind', 'wing', 'wish'];
  let sLenght = s.length;
  let rand = Math.floor(Math.random() * (sLenght));
  return s[rand];
}