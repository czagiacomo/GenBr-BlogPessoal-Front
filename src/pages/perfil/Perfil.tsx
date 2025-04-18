import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import ListaPostagensUsuario from "../../components/postagens/listapostagens/ListaPostagensUsuario";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto m-4 rounded-2xl overflow-hidden">
      <img
        className="w-full h-72 object-cover border-b-2 border-white"
        src="https://images6.alphacoders.com/135/1350058.png"
        alt="Capa do Perfil"
      />

      <img
        className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
      />

      <div
        className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-secondary text-white text-2xl items-center justify-center "
      >
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
      </div>
      <div>
        <ListaPostagensUsuario />
      </div>
    </div>
  );
}

export default Perfil;
