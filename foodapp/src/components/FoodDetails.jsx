import { useEffect } from "react";

export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "25a4db9ac8dd426f8839c0b8bd5fcafb";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
    }
    fetchFood();
  }, []);
  return <div>Food Details {foodId}</div>;
}
