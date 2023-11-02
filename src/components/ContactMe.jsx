const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="p-4 lg:max-w-3xl transition-all md:grid grid-cols-2">
      <h4 className="text-3xl font-bold md:col-span-2">Contacto</h4>
      <p className="text-[#8491A0] text-lg pr-6 pt-4 font-normal grid place-content-start">
        Ahora que me conoces, hazme saber si estas interesado en trabajar
        conmigo
      </p>
      <form
        className="[&>label]:grid [&>label]:pb-5 [&>label]:pt-2 grid gap-2"
        action=""
      >
        <label>
          <span>Nombre</span>
          <input
            className="bg-[#181823] h-12 text-sm p-2 capitalize"
            type="text"
          />
        </label>
        <label>
          <span>Email</span>
          <input className="bg-[#181823] h-12 text-sm p-2" type="email" />
        </label>
        <label>
          <span>Mensaje</span>
          <textarea
            name="user_message"
            id="message"
            cols="30"
            rows="6"
            className="bg-[#181823] p-2 text-base"
          ></textarea>
        </label>
        <button
          className="bg-[#5221E6] h-[75px] w-full uppercase text-lg font-semibold hover:bg-[#2D1084] transition-colors"
          type="submit"
          onClick={handleSubmit}
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
};
export default ContactMe;
