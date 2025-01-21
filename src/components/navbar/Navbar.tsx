import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Plant, SignOut } from "@phosphor-icons/react";

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
      <div className="navbar bg-base-100">
        <div className="flex-1 py-2 px-1">
          <Plant size={48} color="#3b8c3c" weight="duotone" alt="Home" />
          <a href="/home" className="btn btn-ghost text-xl font-semibold">
            Blog Pessoal
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
            <li>
              <Link to="/" className="hover:underline">
                Postagem
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Perfil
              </Link>
            </li>
            <li>
              <Link to="/temas" className="hover:underline">
                Temas
              </Link>
            </li>
            <li>
              <Link to="/cadastrartema" className="hover:underline">
                Cadastrar tema
              </Link>
            </li>
            <li>
              <Link to="" onClick={logout} className="hover:underline">
                <SignOut size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
