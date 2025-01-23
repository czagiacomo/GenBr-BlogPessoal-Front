import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen flex justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <img
            src="https://i.imgur.com/zXuCfkG.png"
            className="max-w-sm scale-110"
          />
          <div className="m-24">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>
            <div className="flex justify-around gap-4">
              <div className="font-semibold rounded text-green-palette-400 border-green-palette-400 border-solid border-2 py-2 px-4">
                <ModalPostagem />
              </div>
            </div>
          </div>

          </div>
          <div className="flex flex-col items-center justify-center -py-12">
            <h1 className="text-5xl font-bold">Seja Bem Vinde!</h1>
            <p className="py-6 text-xl">Expresse aqui seus pensamentos e opniões</p>
            <a href="">
              <button className="btn btn-primary">Nova Postagem</button>
            </a>
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
