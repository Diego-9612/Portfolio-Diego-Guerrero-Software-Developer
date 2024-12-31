import React from 'react'; // Añadir esta línea
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Main = () => {
  const socialLinks = [
    { href: 'https://github.com/Diego-9612', icon: <FaGithub size={20} />, label: 'GitHub' },
    { href: 'https://www.facebook.com', icon: <FaFacebookF size={20} />, label: 'Facebook' },
    { href: 'https://www.instagram.com', icon: <FaInstagram size={20} />, label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/diego-guerrero-software/', icon: <FaLinkedinIn size={20} />, label: 'LinkedIn' },
  ];

  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover'
        src='https://images.unsplash.com/photo-1543357480-c60d40007a3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        alt='Imagen de fondo abstracta'
        loading='lazy'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='text-5xl sm:text-6xl font-bold text-gray-900'>¡Hola! Bienvenido,</h1>
          <h2 className='flex text-3xl sm:text-3xl pt-4 text-gray-800'>
            Soy
            <TypeAnimation
              sequence={[
                'Diego Fernando Guerrero',
                1500,
                'Estudiante de Ingeniería de Software',
                1500,
                'Desarrollador Full Stack Jr',
                2000,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-evenly pt-6 gap-6 max-w-[300px] w-full'>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.label}
                className='text-3xl hover:text-gray-600 transition duration-300'
              >
                {React.cloneElement(link.icon, { size: 35 })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
