import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
  const socialLinks = [
    { href: 'https://github.com/Diego-9612', icon: <FaGithub size={20} />, label: 'GitHub' },
    { href: 'https://www.facebook.com', icon: <AiOutlineMail size={20} />, label: 'Gmail' },
    { href: 'https://www.instagram.com', icon: <FaInstagram size={20} />, label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/diego-guerrero-software/', icon: <FaLinkedinIn size={20} />, label: 'LinkedIn' },
  ];

  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover'
        src='/src/assets/header22.avif'
        alt='Imagen de fondo abstracta'
        loading='lazy'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='text-5xl sm:text-6xl font-bold text-gray-900'>¡Hola! Bienvenido,</h1>
          <h2 className='flex text-3xl sm:text-3xl pt-4 text-gray-800 text-center'>
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
          <div className='flex justify-evenly items-center pt-6 gap-6 max-w-[300px] w-full'>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.label}
                className='text-3xl hover:text-white transition duration-400'
              >
                {React.cloneElement(link.icon, { size: 35 })}
              </a>
            ))}
          </div>
          <a
            href='/src/assets/tu_archivo.pdf'
            download
            className='mt-8 px-6 py-3 bg-gray-900 text-white border-2 border-gray-900 rounded-lg hover:bg-white hover:text-gray-900 hover:border-white transition duration-300'
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
