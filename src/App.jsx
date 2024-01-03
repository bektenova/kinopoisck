import { useEffect, useState } from "react";
import API from "./api";
import FilmCard from "./components/FilmCard";
import Header from "./components/Header/Header";

function App() {
  const [films, setFilms] = useState([]);
  const [search, setSearsh] = useState("");

  const handleSearchChange = (event) => {
    setSearsh(event.target.value);
  };

  const hansub = async () => {
    const res = await API.get(`api/v2.2/films?keyword=${search}`);

    console.log("res: ", res);
    setFilms(res.data.items);
  };

  useEffect(() => {
    hansub();
  }, []);

  return (
    <div className="bg-[#141111]">
      <Header
        search={search}
        onChange={handleSearchChange}
        handleSubmit={hansub}
      />
      <div className="px-9">
        <div className="flex flex-wrap gap-4">
          {films.map((film) => (
            <FilmCard key={film.kinopoiskId} film={film} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
