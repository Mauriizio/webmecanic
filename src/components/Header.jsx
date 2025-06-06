function Header() {
  return (
    <header className="grid place-items-center bg-yellow-400 text-black p-2 uppercase text-bold">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-sm font-bold"> <span className=" underline  text-blue-500 text-center">AGENDA TU HORA</span> Y OBTEN UN DIAGNÓSTICO GRATIS <br />
al realizar el servicio que requiera. <span className=" underline text-blue-500 text-center">LLAMA AHORA</span> </h1>
        {/* Aquí puedes meter logo, menú, enlaces, etc. */}
      </div>
    </header>
  );
}

export default Header;
