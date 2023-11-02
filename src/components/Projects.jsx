const Projects = () => {
  return (
    <section className="p-4 grid gap-4 lg:max-w-3xl transition-all">
      <h5 className="text-[#8491A0] text-base uppercase font-bold">
        mis proyectos
      </h5>
      <p className="text-2xl font-bold">
        Aquí puedes ver mis proyectos, puedes darle un vistazo a lo que te
        interese
      </p>
      <div className="grid">
        <div className="bg-[#181823]  rounded-md grid p-4 md:grid-cols-2 place-content-center">
          <img
            className="max-w-[300px] md:row-span-2"
            src="/images/shoppingCart.png"
            alt=""
          />
          <h5 className="text-2xl font-semibold capitalize">shopping cart</h5>
          <p>
            Carrito de compras con funcionalidad para simular el proceso de
            compra de productos
          </p>
        </div>
      </div>
      <div className="grid">
        <div className="bg-[#181823] rounded-md grid p-4 md:grid-cols-2 place-content-center">
          <img
            className="max-w-[300px] md:row-span-2"
            src="/images/infogalax.png"
            alt=""
          />
          <h5 className="text-2xl font-semibold">Infogalax</h5>
          <p className="max-w-xs">
            Muestra frases random sobre el espacio con sus autores y diferentes
            backgrounds
          </p>
        </div>
      </div>
      <div className="grid">
        <div className="bg-[#181823] rounded-md grid p-4 md:grid-cols-2 place-content-center">
          <img
            className="max-w-[300px] md:row-span-2"
            src="/images/weatherApp.png"
            alt=""
          />
          <h5 className="text-2xl font-semibold">Weather App</h5>
          <p>
            App que captura la informacion climatologica detallada en base de la
            ubicación del usuario en tiempo real
          </p>
        </div>
      </div>
      <div className="grid">
        <div className="bg-[#181823] rounded-md grid p-4 md:grid-cols-2 place-content-center">
          <img
            className="max-w-[300px] rounded-sm md:row-span-2"
            src="/images/rickAndMorty.png"
            alt=""
          />
          <h5 className="text-2xl font-semibold capitalize">
            rick and morty app
          </h5>
          <p>
            Mediante el uso de API, esta app muestra los habitantes por
            dimension de la serie, asi como informacion detallada de cada
            personaje
          </p>
        </div>
      </div>
      <div className="grid">
        <div className="bg-[#181823] rounded-md grid p-4 md:grid-cols-2 place-content-center">
          <img
            className="max-w-[300px] rounded-sm md:row-span-2"
            src="/images/crudUsuarios.png"
            alt=""
          />
          <h5 className="text-2xl capitalize font-semibold">users CRUD</h5>
          <p>
            Listado de usuarios utilizando CRUD para hacer la captura de datos
          </p>
        </div>
      </div>
      <div className="grid">
        <div className="bg-[#181823] rounded-md grid p-4 md:grid-cols-2 place-content-center">
          <img
            className="max-w-[300px] md:row-span-2"
            src="/images/pokedex.png"
            alt=""
          />
          <h5 className="text-2xl capitalize font-semibold">pokedex</h5>
          <p>Info detallada de pokemons</p>
        </div>
      </div>
    </section>
  );
};
export default Projects;
