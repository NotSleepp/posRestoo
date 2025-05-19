import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Headers = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/*Logo*/}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8 w-8 rounded-3xl" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Resto</h1>
      </div>
      {/*Buscador Bar*/}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 w-[500px]">
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-transparent outline-none text-[#f5f5f5] placeholder:text-[#f5f5f5] w-full"
        />
        <FaSearch className="text-[#f5f5f5]" />
      </div>
      {/*Detalles del usuario logueado*/}
      <div className="flex items-center p-3 cursor-pointer gap-3">
        <div className="bg-[#1f1f1f] rounded-full p-2 ">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start ">
            <h1 className="text-[#f5f5f5] text-md font-semibold">Daniel Franco</h1>
            <p className="text-[#ababab] text-xs font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
