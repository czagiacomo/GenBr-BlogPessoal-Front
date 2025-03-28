import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormTema() {
  const navigate = useNavigate();

  const [tema, setTema] = useState<Tema>({} as Tema);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: { Authorization: token },
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/temas");
  }

  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/temas`, tema, setTema, {
          headers: { Authorization: token },
        });
        ToastAlerta("O tema foi atualizado com sucesso!", "sucesso")
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar a postagem.", "erro")
        }
      }
    } else {
      try {
        await cadastrar(`/temas`, tema, setTema, {
          headers: { Authorization: token },
        });
        ToastAlerta("Tema cadastrado com sucesso!", "sucesso")
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar o tema.", "erro")
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <>
      <div className="bg-base-100 min-h-screen">
        <div className="container flex flex-col items-center justify-center mx-auto my-4">
          <h1 className="text-4xl text-center my-8 ">
            {id === undefined ? "Cadastrar Tema" : "Editar Tema"}
          </h1>
          <form className="w-1/2 flex flex-col gap-4 " onSubmit={gerarNovoTema}>
            <div className="flex flex-col gap-2">
              <label htmlFor="descricao">Descrição do Tema</label>

              <input
                type="text"
                name="descricao"
                placeholder="Descreva aqui seu tema"
                className="input input-bordered input-secondary"
                value={tema.descricao}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <button
              className="btn btn-secondary w-1/2 py-2 mx-auto flex justify-center"
              type="submit"
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
                <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormTema;
