import { useNavigate } from "react-router-dom";
import CardPostagens from "../cardpostagens/CardPostagens";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";

function ListaPostagensUsuario() {
  const navigate = useNavigate();
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [postagensFiltradas, setPostagensFiltradas] = useState<Postagem[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPostagens() {
    if (usuario.id === 0) return;
    
    try {
      const response = await buscar("/postagens", setPostagens, {
        headers: {
          Authorization: token,
        },
      });
      console.log("Postagens recebidas:", response);
    } catch (error: any) {
      console.error("Erro ao buscar postagens:", error);
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      navigate("/");
    } else {
      buscarPostagens();
    }
  }, [token, usuario.id]);

  useEffect(() => {
    const postagensDoUsuario = postagens.filter(
      (postagem) => postagem.usuario?.id === usuario.id
    );
    setPostagensFiltradas(postagensDoUsuario);
  }, [postagens]);

  return (
    <>
      {postagensFiltradas.length === 0 && postagens.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
          <p className="text-center mt-4">Carregando postagens...</p>
        </div>
      )}
      <div
        className="container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {postagensFiltradas.map((postagem) => (
          <CardPostagens key={postagem.id} postagem={postagem} />
        ))}
      </div>
    </>
  );
}

export default ListaPostagensUsuario; 