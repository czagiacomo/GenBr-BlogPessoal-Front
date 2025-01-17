import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }

  return (
    <>
      <div className="w-full flex justify-center py-4 bg-green-palette-300 text-emerald-950 font-semibold">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="flex items-center">
            {/*<Plant size={30} color="#3b8c3c" weight="duotone" alt="Home" />*/}
            <span className="text-xl font-bold ml-2">Blog Pessoal</span>
          </Link>
          {/*<a href="index.html" className="flex items-center">
            <Plant size={30} color="#3b8c3c" weight="duotone" alt="Home" />
            <span className="text-xl font-bold ml-2">Blog Pessoal</span>
          </a>*/}
          <div className="flex gap-4">
            Postagens Temas Cadastrar tema Perfil
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
