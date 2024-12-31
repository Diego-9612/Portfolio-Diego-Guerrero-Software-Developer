/* eslint-disable react/prop-types */
const ProjectItem = ({ img, title, description }) => {
  return (
    <div className="w-80 h-96 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-center justify-between gap-4 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-all duration-300">
      {/* Imagen del proyecto */}
      <div className="relative w-full h-48 bg-gray-700 rounded-2xl overflow-hidden">
        <img
          src={img}
          alt={`${title} Preview`}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Información del proyecto */}
      <div className="w-full text-center">
        <p className="text-lg font-extrabold mb-2">{title}</p>
        <p className="text-sm text-neutral-400">
          {description}
        </p>
      </div>

      {/* Botón "See more" */}
      <button className="bg-sky-700 font-bold text-sm text-white p-2 px-6 rounded-xl hover:bg-sky-500 transition-all duration-300">
        Ver mas
      </button>
    </div>
  );
};

export default ProjectItem;


