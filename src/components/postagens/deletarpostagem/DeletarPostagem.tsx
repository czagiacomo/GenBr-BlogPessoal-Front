import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarPostagem() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, {
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
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  useEffect(() => {
    console.log(postagem);
  }, [postagem]);

  async function deletarPostagem() {
    setIsLoading(true);

    try {
      await deletar(`/postagens/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      ToastAlerta("Postagem apagada com sucesso!", "sucesso")
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar a postagem.", "erro")
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/postagens");
  }

  return (
    <>
      <>
        <div className="bg-base-100 min-h-screen my-4">
          <div className="container flex flex-col items-center justify-center mx-auto ">
            <h1 className="text-4xl text-center my-8 ">Deletar Postagem</h1>
            <p className="text-center font-semibold mb-4">
              Você tem certeza de que deseja apagar a postagem a seguir?
            </p>
            <div className="card w-96 shadow-xl bg-neutral-content m-5">
              <div className="card-body">
                <div className="card-actions flex justify-between items-start">
                  <div className="flex-1 break-words">
                    <h2 className="card-title ">{postagem.titulo}</h2>
                  </div>
                  <div className="badge badge-secondary ml-2 self-start">
                    {postagem.tema?.descricao}
                  </div>
                </div>
                <p>{postagem.texto}</p>
                <div>
                  <hr className="divider divider-secondary"></hr>
                  <div className="card-actions flex flex-wrap gap-2 items-end justify-between">
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content w-8 rounded-full">
                        <span className="text-xs">
                          {postagem.usuario?.nome.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs">
                      {postagem?.data ? new Intl.DateTimeFormat('pt-BR', {
                        dateStyle: "medium",
                        timeStyle: "short",
                      }).format(new Date(postagem?.data)) : ''}
                    </div>
                  </div>
                </div>
                <div className="card-actions grid grid-flow-col justify-stretch items-end pt-6">
                  <button
                    className=" btn btn-ghost text-slate-100 bg-error hover:bg-red-700"
                    onClick={retornar}
                  >
                    Não
                  </button>
                  <button
                    className="btn btn-ghost text-slate-100 bg-info hover:bg-indigo-800 "
                    onClick={deletarPostagem}
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
    </>
  );
}

export default DeletarPostagem;
