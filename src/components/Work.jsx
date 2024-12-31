import WorkItem from './WorkItem';

const data = [
  {
    year: 2024,
    title: 'Desarrollador full-stack',
    duration: '7 meses - Actualidad',
    company: 'CodeWeb Studio - Jornada completa',
    details_one: 'Desarrollo de aplicaciones web dinámicas y escalables utilizando tecnologías como React, JavaScript, HTML5, CSS3 y frameworks de backend como Spring Boot.', 
    details_two: 'Desarrollo de soluciones basadas en bases de datos MySQL, implementando estructuras robustas y seguras para almacenar y recuperar datos de manera eficiente.',
    details_three: 'Implementación y despliegue de aplicaciones web en plataformas como AWS, asegurando la escalabilidad, seguridad y accesibilidad de las aplicaciones a nivel global.',
  
    },
  {
    year: 2022,
    title: 'Administrador',
    duration: '11 meses',
    company: 'Transportes Risco SA - Jornada completa',
    details_one: 'Gestión logística: Coordinación de rutas, programación de viajes y asignación de vehículos para garantizar la entrega eficiente y oportuna de la carga.', 
    details_two: 'Seguimiento del estado de los camiones en tránsito, resolución de problemas operativos y comunicación constante con conductores para asegurar el cumplimiento de itinerarios.',
    details_three: 'Atención personalizada a clientes, negociación de tarifas y cumplimiento de estándares de calidad en el servicio.',
  },
  {
    year: 2021,
    title: 'Ingeniero ambiental',
    duration: '12 meses',
    company: 'Análisis Ambiental SAS - Jornada completa',
    details_one: 'Documentación detallada de resultados y elaboración de informes técnicos para clientes y supervisores.', 
    details_two: 'Realización de análisis fisicoquímicos y microbiológicos de calidad del agua, asegurando el cumplimiento de normativas ambientales.',
    details_three: 'Recolección de muestras de agua (residuales, potables, superficiales y subterráneas) siguiendo protocolos estandarizados.',
  },
];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'> Experiencia Laboral</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          company={item.company}
          details_one={item.details_one}
          details_two={item.details_two}
          details_three={item.details_three}
        />
      ))}
    </div>
  );
};

export default Work;
