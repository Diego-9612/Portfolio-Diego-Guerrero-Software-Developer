const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        Contáctame
      </h1>
      <form
        action="https://getform.io/f/a405f396-f15e-4495-9d9f-e22c0cf5faf5"
        method="POST"
        encType="multipart/form-data"
        className="bg-white shadow-lg rounded-lg p-6 space-y-6"
      >
        {/* Name and Phone Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="uppercase text-sm font-semibold text-gray-700 mb-2">
              Nombre
            </label>
            <input
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#001b5e] focus:outline-none"
              type="text"
              name="name"
              placeholder="Escribe tu nombre"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm font-semibold text-gray-700 mb-2">
              Whatsapp
            </label>
            <input
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#001b5e] focus:outline-none"
              type="text"
              name="phone"
              placeholder="Escribe tu numero de WhatsApp"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label className="uppercase text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#001b5e] focus:outline-none"
            type="email"
            name="email"
            placeholder="Escribe tu dirección de correo electrónico"
          />
        </div>

        {/* Subject Field */}
        <div className="flex flex-col">
          <label className="uppercase text-sm font-semibold text-gray-700 mb-2">
            Asunto
          </label>
          <input
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#001b5e] focus:outline-none"
            type="text"
            name="subject"
            placeholder="Asunto"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label className="uppercase text-sm font-semibold text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#001b5e] focus:outline-none"
            rows="6"
            name="message"
            placeholder="Escribe tu mensaje..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#001b5e] text-white font-bold py-3 rounded-lg hover:bg-[#003a8c] transition-colors duration-300"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;

