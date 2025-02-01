import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Plant, SignOut } from "@phosphor-icons/react";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <>
        <div className="navbar w-full shadow-md">
          <div className="flex-1 py-2 px-1">
            <Plant size={48} color="#3b8c3c" weight="duotone" alt="Home" />
            <Link to="/home" className="btn btn-ghost text-xl font-semibold">
              Blog Pessoal
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-base font-medium">
              <li>
                <Link to="/postagens" className="hover:underline">
                  Postagem
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
                <Link to="/perfil" className="hover:underline">
                  Perfil
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

  return <>{component}</>;
}
export default Navbar;
