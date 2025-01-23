import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarTema() {
  const navigate = useNavigate();

  const [tema, setTema] = useState<Tema>({} as Tema);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarTema() {
    setIsLoading(true);

    try {
      await deletar(`/temas/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Tema apagado com sucesso");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao deletar o tema.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/temas");
  }

  return (
    <>
      <div className="bg-base-200 min-h-screen">
        <div className="container flex flex-col items-center justify-center mx-auto ">
          <h1 className="text-4xl text-center my-8 ">Deletar tema</h1>
          <p className="text-center font-semibold mb-4">
            Você tem certeza de que deseja apagar o tema a seguir?
          </p>
          <div className="card bg-neutral text-neutral-content w-96 m-5">
            <div className="card-body text-center">
              <h2 className="card-title justify-center mb-4">Tema</h2>
              <p>{tema.descricao}</p>
              <div
                className="card-actions grid grid-flow-col justify-stretch items-end pt-6
            "
              >
                <button
                  className=" btn btn-ghost text-slate-100 bg-error hover:bg-red-700"
                  onClick={retornar}
                >
                  Não
                </button>
                <button
                  className="btn btn-ghost text-slate-100 bg-info hover:bg-indigo-800 "
                  onClick={deletarTema}
                >
                  {isLoading ? (
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                    />
                  ) : (
                    <span>Sim</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeletarTema;
