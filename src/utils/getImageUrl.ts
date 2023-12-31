interface Scientist {
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

export default function getImageUrl(person: Scientist) {
  return `https://i.imgur.com/${person.imageId}s.jpg`;
}
