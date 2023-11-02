import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "25a4db9ac8dd426f8839c0b8bd5fcafb";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  //Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
