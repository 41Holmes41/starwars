export function getAllStarships() {
  return fetch(`https://swapi.co/api/starships`, {mode: "cors"})
    .then(res => res.json());
}