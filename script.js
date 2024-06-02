console.log('Hello!');
let cssVariables;
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  const element = document.querySelector('main');
  const styles = window.getComputedStyle(element);

  cssVariables = [
    styles.getPropertyValue('--mint'),
    styles.getPropertyValue('--blue'),
    styles.getPropertyValue('--lila'),
    styles.getPropertyValue('--pink'),
    styles.getPropertyValue('--apricot'),
  ];
});
let clan;

function allGen() {
  document.querySelector('#nameResult').innerHTML = '';
  document.querySelector('#clanResult').innerHTML = '';
  document.querySelector('#seasonResult').innerHTML = '';

  setTimeout(function () {
    loopCount = 0;
    max = 10;
    i = 0;
    btn = document.querySelector('#allBtn');

    interval = setInterval(() => {
      generateSeason();
      clan = generateClan();
      if (clan == 'Loner' || clan == 'Kittypet') {
        generateName();
      } else {
        generateClanName();
      }

      btn.style.background = cssVariables[i];
      loopCount++;
      i++;
      if (i === cssVariables.length - 1) {
        i = 0;
      }
      if (loopCount === max) {
        clearInterval(interval);
        btn.style.background = cssVariables[2]; //lila
        console.log(clan);
      }
    }, 100);
  }, 500);
}

function generateName() {
  const catNames = [
    'Hazel',
    'Emily',
    'Ruby',
    'Bella',
    'Abby',
    'Muffin',
    'Celina',
    'Chili',
    'Daisy',
    'Feli',
    'Hailey',
    'Josy',
    'Keira',
    'Leonie',
    'Maple',
    'Stella',
    'Sunny',
    'Tüpfel',
    'Wanda',
    'Trixi',
    'Ava',
    'Eve',
    'Jelena',
    'Bianca',
    'Nala',
    'Mia',
    'Sophie',
    'Luna',
    'Skye',
    'Juna',
    'Sam',
    'Gino',
    'Simba',
    'Billy',
    'Tommy',
    'Balu',
    'Bailey',
    'Benny',
    'Charlie',
    'Cooper',
    'Flips',
    'Rambo',
    'Shadow',
    'Socks',
    'Max',
    'Milo',
    'Cosmo',
    'Hunter',
    'Cookie',
    'Lucky',
    'Molly',
    'Tabby',
    'Brownie',
    'Ginger',
    'Raven',
    'Professor',
    'Noodles',
    'Cloud',
    'Toffee',
    'Whiskers',
    'Cosmo',
    'Coco',
    'Oscar',
    'Paws',
    'Peanut',
    'Peaches',
    'Pepper',
    'Patches',
    'Fluffy',
    'Poppy',
    'Smudge',
    'Felix',
    'Rusty',
    'Sasha',
    'Snickers',
    'Snowball',
    'Sparky',
    'Nugget',
    'Teddy',
    '',
    'Tiger',
    'Truffle',
    'Waffles',
    'Zeus',
    'Zoe',
    'Zoey',
    'Ruby',
    'Misty',
    'Smokey',
    'Lucy',
    'Leo',
    'Celeste',
    'Loki',
    'Bucky',
  ];
  let cLength = catNames.length;
  let rand = Math.floor(Math.random() * cLength);
  document.querySelector('#nameResult').innerHTML = catNames[rand];
}

function randomCat() {
  document.querySelector('#lengthResult').innerHTML = '';
  document.querySelector('#colorResult1').innerHTML = '';
  document.querySelector('#colorResult2').innerHTML = '';
  document.querySelector('#colorResult3').innerHTML = '';
  document.querySelector('#eyesResult1').innerHTML = '';
  document.querySelector('#eyesResult2').innerHTML = '';
  document.querySelector('#color1').style.background = 'transparent';
  document.querySelector('#color2').style.background = 'transparent';
  document.querySelector('#color3').style.background = 'transparent';
  document.querySelector('#eyecolor1').style.background = 'transparent';
  document.querySelector('#eyecolor2').style.background = 'transparent';
  console.log('--- Generate ----');
  setTimeout(function () {
    loopCount = 0;
    max = 10;
    i = 0;
    btn = document.querySelector('#allBtn');

    interval = setInterval(() => {
      document.querySelector('#lengthResult').innerHTML = '';
      document.querySelector('#colorResult1').innerHTML = '';
      document.querySelector('#colorResult2').innerHTML = '';
      document.querySelector('#colorResult3').innerHTML = '';
      document.querySelector('#eyesResult1').innerHTML = '';
      document.querySelector('#eyesResult2').innerHTML = '';
      document.querySelector('#color1').style.background = 'transparent';
      document.querySelector('#color2').style.background = 'transparent';
      document.querySelector('#color3').style.background = 'transparent';
      document.querySelector('#eyecolor2').style.background = 'transparent';
      let hair = hairLength();
      document.querySelector('#lengthResult').innerHTML = hair;

      let colors = furColors();
      document.querySelector('#colorResult1').innerHTML = colors[1];
      document.querySelector('#color1').style.background = colors[1];
      if (colors.length > 2) {
        // document.querySelector('#color2').style.display="block";
        document.querySelector('#colorResult2').innerHTML = colors[3];
        document.querySelector('#color2').style.background = colors[3];
      }
      if (colors.length > 4) {
        // document.querySelector('#color3').style.display="none";
        document.querySelector('#colorResult3').innerHTML = colors[5];
        document.querySelector('#color3').style.background = colors[5];
      }
      let eyes = eyeColors();
      document.querySelector('#eyesResult1').innerHTML = eyes[0];
      document.querySelector('#eyecolor1').style.background = eyes[0];
      if (eyes.length > 1) {
        // document.querySelector('#eyecolor2').style.display="block";
        document.querySelector('#eyesResult2').innerHTML = colors[1];
        document.querySelector('#eyecolor2').style.background = eyes[1];
      }
      console.log('--');
      console.log(hair, colors, eyes);

      btn.style.background = cssVariables[i];
      loopCount++;
      console.log(loopCount);
      i++;
      if (i === cssVariables.length - 1) {
        i = 0;
      }
      if (loopCount === max) {
        clearInterval(interval);
        btn.style.background = cssVariables[2]; //lila
        console.log(clan);
      }
    }, 100);
  }, 500);
}
