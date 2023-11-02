import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconCode,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="h-[500px] bg-[#181823] grid  p-10 ">
      <div className="grid gap-3">
        <IconCode />
        <span>Jonnatan Rembado</span>
        <h5 className="capitalize">social media</h5>
        <div className="flex gap-7">
          <a href="">
            <IconBrandGithub />
          </a>
          <a href="">
            <IconBrandLinkedin />
          </a>
          <a href="">
            <IconBrandInstagram />
          </a>
        </div>
      </div>
      <div className=" grid grid-cols-2 place-content-center gap-10">
        <span>Home</span>
        <span>Tecnologias</span>
        <span>Proyectos</span>
        <span>Contacto</span>
      </div>{" "}
    </footer>
  );
};
export default Footer;
