import { IconPuzzle } from "@tabler/icons-react";

const MyTech = () => {
  return (
    <section className="p-4 grid gap-4 lg:max-w-3xl transition-all grid-cols-2">
      <h4 className="font-bold text-2xl col-span-2">Tecnologías</h4>
      <p className="text-[#8491A0] text-xs font-normal grid place-content-center">
        Mi capacidad para resolver problemas y mi pasión por estar al tanto de
        las últimas tendencias tecnológicas me permiten enfrentar desafíos de
        manera efectiva y mantenerme actualizado en un campo en constante
        evolución{" "}
      </p>
      <div className=" md:grid grid-cols-2 gap-7">
        <div>
          <h4 className="font-bold text-lg">
            <IconPuzzle className="text-[#5221E6] h-6 w-6" />
            Frameworks
          </h4>
          <ul className="text-[#8491A0] text-xs">
            <li>React</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg">
            <IconPuzzle className="text-[#5221E6] h-6 w-6" />
            Source Control
          </h4>
          <ul className="text-[#8491A0] text-xs">
            <li>Git / Github</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg">
            <IconPuzzle className="text-[#5221E6] h-6 w-6" />
            Lenguajes
          </h4>
          <ul className="text-[#8491A0] text-xs">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default MyTech;
