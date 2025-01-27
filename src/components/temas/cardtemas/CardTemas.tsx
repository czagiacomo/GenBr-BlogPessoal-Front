import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";

interface CardTemasProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemasProps) {
  return (
    <>
      <div>
        <div className="card bg-neutral-content w-96 m-5 shadow-xl ">
          <div className="card-body text-center">
            <h2 className="card-title justify-center mb-4">Tema</h2>
            <p>{tema.descricao}</p>
            <div
              className="card-actions grid grid-flow-col justify-stretch items-end pt-6
            "
            >
              <Link
                to={`/editartema/${tema.id}`}
                className="btn btn-ghost text-slate-100 bg-info hover:bg-indigo-800 "
              >
                <button>Editar</button>
              </Link>
              <Link
                to={`/deletartema/${tema.id}`}
                className=" btn btn-ghost text-slate-100 bg-error hover:bg-red-700"
              >
                <button>Deletar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTemas;
