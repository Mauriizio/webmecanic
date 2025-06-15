import React from 'react';
import fondoLogo from "../assets/logo.jpg";

export function Footer() {

    return(
        <div className="relative bg-black text-white w-full h-[50vh] flex flex-col items-center justify-center ">
             <img
               src={fondoLogo}
               alt="Logo de Mecánica El Intercontinental"
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-auto object-contain z-0"
             />
             <div className="absolute inset-0 bg-black/35 z-0" />

            <h2 className='relative z-10 text-xl font-bold text-center pt-2'>Contacto</h2>
            
            <p className='relative z-10 text-center text-white bg-blue-500/50 '>elintercontinental@gmail.com</p>
            <p className='relative z-10 text-center text-white'>+56932555764</p>

            <h2 className='relative z-10 text-xs font-bold text-center mt-auto mb-4'>© 2024. || Web diseñada con ♥️ por Maurizio Caballero</h2>
                
            
        </div>


    )
}