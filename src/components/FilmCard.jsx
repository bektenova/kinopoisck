import { Star } from "lucide-react";

const FilmCard = ({ film }) => {
  return (
    <div className="max-w-60 h-[390px] rounded-xl p-2 bg-white">
      <div className="h-60">
        <img
          src={film.posterUrl}
          className="w-full h-full rounded-xl"
          alt={film.nameOriginal}
        />
        <div className="flex pt-[10px] gap-x-2">
          <div className="h-[50px] w-[50px] pt-[-60px] flex ">
            <img src={film.posterUrlPreview} className=" rounded-md " alt="" />
          </div>
          <div className="">
            <p className="text-xs">{film.nameOriginal}</p>
            <div className="flex items-center">
              <p className="pr-[7px]">{film.ratingKinopoisk}</p>
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
              <Star size={16} color="#000" fill="#000" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 px-3">
          <div className="flex flex-col items-center">
            <p className="text-xs">Rating: </p>
            <p className="text-xs">{film.ratingImdb}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs">Rating: </p>
            <p className="text-xs">{film.ratingKinopoisk}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs">Type: </p>
            <p className="text-xs">{film.type}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs">Year: </p>
            <p className="text-xs">{film.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
