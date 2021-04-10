const iconList = {
  200: ['O', 'P', 'Z', '6'], // thunderstorm ⚡🌩
  300: ['N', 'H', 'L', 'Q'], // drizzle 🌧⛈🌦
  500: ['Q', 'R', 'T', '8', '7'], // rain 🌧⛈🌦
  600: ['F', 'G', 'T', 'U', 'V', 'W', 'X', '"'], // snow ❄🌨
  700: ['J', 'K', 'L', 'M'], // Atmosphere (mist, smoke, haze, sand)
  800: ['A', 'H', 'I', 'N', 'S', 'Y', '5'], // Cloudy ☁ 🌥
};

export default (id) => {
  const cat = Math.floor(id / 100) * 100; // number
  const iconCat = iconList[cat]; // array
  return id === 800 ? 'B' : iconCat[Math.floor(Math.random() * iconCat.length)];
};
