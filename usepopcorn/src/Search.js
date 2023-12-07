import { useRef } from "react";
import { useKey } from "./useKey";

export default function Search({ query, setQuery }) {
  const inpele = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inpele.current) return;

    inpele.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inpele}
    />
  );
}
