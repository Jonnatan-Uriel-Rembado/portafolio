import { IconCode } from "@tabler/icons-react";

const Home = () => {
  return (
    <header
      className={
        "fixed w-full flex justify-between items-center text p-4 h-10 bg-[#181823d2] hover:bg-[#181823] transition-colors"
      }
    >
      <div className="grid place-content-center">
        <IconCode />
      </div>
      <div className="flex gap-5 top-0 right-7">
        <span>Home</span>
        <span>Tecnologias</span>
        <span>Mis Proyectos</span>
        <span className="bg-[#5221E6] h-full p-1 rounded-md hover:bg-[#2D1084] transition-colors">
          Contacto
        </span>
      </div>
    </header>
  );
};
export default Home;
