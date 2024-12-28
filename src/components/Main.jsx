import { TypeAnimation } from 'react-type-animation';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover '
        src='https://images.unsplash.com/photo-1543357480-c60d40007a3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        alt=''
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl front-bold text-gray-900'>
          ¡Hola! Bienvenido, 
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            Soy
            <TypeAnimation
              sequence={[
                'Diego Fernando Guerrero', // Types 'One'
                1500, // Waits 1s
                'Estudiante de Ingeniería de Software', // Deletes 'One' and types 'Two'
                1500, // Waits 2s
                'Desarrollador Full Stack Jr', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href="https://github.com/Diego-9612" target='_blank' rel='noopener noreferrer'>
              <FaGithub className='cursor-pointer' size={20} />
            </a>
            <FaFacebookF className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20} />
            <a href="https://www.linkedin.com/in/diego-guerrero-software/" target='_blank' rel='noopener noreferrer'>
              <FaLinkedinIn className='cursor-pointer' size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
