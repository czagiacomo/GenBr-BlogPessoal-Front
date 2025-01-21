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
    </>
  );
}

export default Home;
