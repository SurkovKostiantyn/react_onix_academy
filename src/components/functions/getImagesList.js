export default function getImagesList(folderName) {
  const images = require.context('../../assets/images', true);
  return images.keys().filter((x) => x.includes(folderName)).map((x) => images(x));
}
