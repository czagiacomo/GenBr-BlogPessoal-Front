import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen flex justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://media-public.canva.com/rB1is/MAFS2yrB1is/1/tl.png"
            className="max-w-sm scale-110"
          />
          <div className="m-16">
            <div className="flex flex-col gap-4 items-center justify-center py-4"></div>
          </div>
          <div className="flex flex-col items-center justify-center -py-12">
            <h1 className="text-5xl font-bold">Seu Jardim de Ideias</h1>
            <p className="py-6 text-xl">
              Faça seus pensamentos florescerem!
            </p>
            <div>
              <ModalPostagem />
            </div>
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
