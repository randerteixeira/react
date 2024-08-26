"use client";

import { useState, useEffect } from 'react';

const Page = () => {
  const [fullTime, setFullTime] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'medium',
        hour12: false,
      }).format(new Date());
      setFullTime(currentTime);

      const hora = new Date().getHours();
      if (hora >= 0 && hora < 12) {
        setMsg('Bom dia');
      } else if (hora >= 12 && hora < 18) {
        setMsg('Boa Tarde');
      } else {
        setMsg('Boa Noite');
      }
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500 ">
    <div className='border-2 rounded-xl border-white p-10 translate-y-10 hover:bg-white/70 hover:text-black/50'>
      <div className="text-9xl">{fullTime}</div>
      <div className="text-4xl mt-4">{msg}</div>
      </div>

    </div>
  );
};

export default Page;
