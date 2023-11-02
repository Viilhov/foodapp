import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <input type="text" />
    </div>
  );
}
