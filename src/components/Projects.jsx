import ProjectItem from './ProjectItem';
import propertyImg from '../assets/property.jpg';
import driveImg from '../assets/drive.jpg';
import beachesImg from '../assets/beaches.jpg';
import bestEatsImg from '../assets/bestEats.jpg';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Proyectos
      </h1>
      <p className='text-center py-8'>
        Esta página contiene algunos de mis proyectos de código abierto. Si tienes un proyecto en mente o quieres más detalles sobre alguno de los proyectos que aparecen a continuación, envíame un mensaje. 
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={driveImg} title='Drive App' description='gshhsahahs' />
        <ProjectItem img={propertyImg} title='Property App' description='gshhsahahs'/>
        <ProjectItem img={beachesImg} title='Beaches App' description='gshhsahahs' />
        <ProjectItem img={bestEatsImg} title='BestEats App' description='gshhs' />
      </div>
    </div>
  );
};

export default Projects;
