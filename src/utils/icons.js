const iconList = {
  200: ['O', 'P', 'Z', '6'], // thunderstorm โก๐ฉ
  300: ['N', 'H', 'L', 'Q'], // drizzle ๐งโ๐ฆ
  500: ['Q', 'R', 'T', '8', '7'], // rain ๐งโ๐ฆ
  600: ['F', 'G', 'T', 'U', 'V', 'W', 'X', '"'], // snow โ๐จ
  700: ['J', 'K', 'L', 'M'], // Atmosphere (mist, smoke, haze, sand)
  800: ['A', 'H', 'I', 'N', 'S', 'Y', '5'], // Cloudy โ ๐ฅ
};

export default (id) => {
  const cat = Math.floor(id / 100) * 100; // number
  const iconCat = iconList[cat]; // array
  return id === 800 ? 'B' : iconCat[Math.floor(Math.random() * iconCat.length)];
};
