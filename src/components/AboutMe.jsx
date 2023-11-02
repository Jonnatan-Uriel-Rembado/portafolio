const AboutMe = () => {
  return (
    <section className="p-2 pt-[90px] lg:max-w-3xl transition-all flex text-clip">
      <div className="hidden lg:block">
        <img className="rounded-l-md" src="/images/profilePic.png" alt="" />
      </div>
      <div className="bg-[#181823] rounded-md p-2 grid gap-20 place-content-center lg:max-w-xl lg:rounded-r-md lg:rounded-l-none">
        <p className="font-bold text-3xl ">
          Soy Jonnatan Rembado, frontend developer de
          <span className="text-white/50"> México</span>
        </p>
        <p className="text-xs font-normal">
          Siempre busco nuevos desafíos y proyectos creativos que me permitan
          aplicar mis habilidades técnicas y mi visión artística.
        </p>
      </div>
    </section>
  );
};
export default AboutMe;
