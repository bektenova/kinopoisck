import foto from "../../assets/vscode.png";
import { Menu, Settings, CircleUserRound } from "lucide-react";

const Header = ({ search, onChange, handleSubmit }) => {
  return (
    <div className="pb-[30px]">
      <div className="flex items-center w-full h-[80px] bg-[#2737cc] justify-between px-9 ">
        <div className="flex  items-center gap-x-5 ">
          <img src={foto} className="w-7 h-7" alt="" />
          <p className="text-[#fff] text-2xl">ADA FILMS HD</p>
          <div className="flex pl-[50px] pr-[45px]">
            <Menu color="#ffffff" size={28} strokeWidth={3} />
          </div>
          <div className="flex  gap-x-3  bg-white px-6 py-2 rounded-lg w-[375px]">
            {/* <Search color="#696969" size={28} strokeWidth={1.5} name="Search" /> */}
            <input
              type="search"
              color="#696969"
              placeholder="Введите фильм"
              value={search}
              onChange={onChange}
              className=" rounded-lg border-gray-600 border-2"
            />

            <button onClick={handleSubmit}>Search</button>
            {/* <p className="text-[#696969]">Search</p> */}
          </div>
        </div>

        <div className="flex gap-x-5">
          <Settings color="#ffffff" size={28} strokeWidth={1.5} />
          <CircleUserRound color="#ffffff" size={28} strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex py-[60px] pl-[50px]">
        <h1 className="f font-semibold text-4xl text-white ">
          MOVIES THIS WEEK
        </h1>
      </div>
    </div>
  );
};

export default Header;
