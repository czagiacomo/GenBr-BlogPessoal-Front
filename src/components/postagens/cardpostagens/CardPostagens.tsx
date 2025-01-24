import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagensProps {
  postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagensProps) {
  return (
    <>
      <>
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
                  {new Intl.DateTimeFormat(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  }).format(new Date(postagem.data))}
                </div>
              </div>
            </div>
            <div className="card-actions grid grid-flow-col justify-stretch items-end pt-6">
              <Link
                to={`/editarpostagem/${postagem.id}`}
                className="btn btn-ghost text-slate-100 bg-info hover:bg-indigo-800"
              >
                <button>Editar</button>
              </Link>
              <Link
                to={`/deletarpostagem/${postagem.id}`}
                className=" btn btn-ghost text-slate-100 bg-error hover:bg-red-700"
              >
                <button>Deletar</button>
              </Link>
            </div>
          </div>
        </div>
      </>
      {/*<>
        **************************************************************************************
      </>
      <>
        <div>
          <div className="card bg-neutral text-neutral-content w-96 m-5">
            <div className="card-body text-center">
              <h2 className="card-title justify-center mb-4">
                {postagem.titulo}
              </h2>
              <p>{postagem.texto}</p>
              <div
                className="card-actions grid grid-flow-col justify-stretch items-end pt-6
            "
              >
                <Link
                  to={`/editarpostagem/${postagem.id}`}
                  className="btn btn-ghost text-slate-100 bg-info hover:bg-indigo-800"
                >
                  <button>Editar</button>
                </Link>
                <Link
                  to={`/deletarpostagem/${postagem.id}`}
                  className=" btn btn-ghost text-slate-100 bg-error hover:bg-red-700"
                >
                  <button>Deletar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        {/**************************************************************************************
      </>
      <>
        <div
          className="border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between"
        >
          <div>
            <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
              <img
                src={postagem.usuario?.foto}
                className="h-12 rounded-full"
                alt={postagem.usuario?.nome}
              />
              <h3 className="text-lg font-bold text-center uppercase">
                {postagem.usuario?.nome}
              </h3>
            </div>
            <div className="p-4 ">
              <h4 className="text-lg font-semibold uppercase">
                {postagem.titulo}
              </h4>
              <p>{postagem.texto}</p>
              <p>Tema: {postagem.tema?.descricao}</p>
              <p>
                Data:{" "}
                {new Intl.DateTimeFormat(undefined, {
                  dateStyle: "full",
                  timeStyle: "medium",
                }).format(new Date(postagem.data))}
              </p>
            </div>
          </div>
          <div className="card-actions grid grid-flow-col justify-stretch items-end pt-6">
            <Link
              to={`/editarpostagem/${postagem.id}`}
              className="btn btn-ghost text-slate-100 bg-info hover:bg-indigo-800 "
            >
              <button>Editar</button>
            </Link>
            <Link
              to={`/deletarpostagem/${postagem.id}`}
              className=" btn btn-ghost text-slate-100 bg-error hover:bg-red-700"
            >
              <button>Deletar</button>
            </Link>
          </div>
        </div>
      </>*/}
    </>
  );
}

export default CardPostagem;
