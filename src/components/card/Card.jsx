import React from 'react';
import Tenis from '../../assets/tenis.png';

const Card = () => {
  return (
    <div className="border-2 flex flex-col md:flex-row w-full max-w-[1000px] h-[600px] bg-white shadow-lg">
      <div className="w-full h-full py-5 md:py-0">
        <div className="p-5">
            <span>Desafio Front-end</span>
        </div>
        <div className="w-full h-full flex justify-center items-center">
            <div className="group">
                <h1>Lançamento 
                  <p className="group-hover:animate-move">Nike Air.</p>
                </h1>
                <p className="py-2 group-hover:animate-pulse">O Tênis do futuro.</p>
                <p>O futuro a um passo do seu alcance.</p>
                <button className="uppercase w-[200px] my-5">Quero Conhecer!</button>
            </div>
        </div>
      </div>
      <div  className="bg-[url('.././assets/bg.png')] bg-cover bg-center bg-no-repeat w-full h-full flex 
      justify-center items-center">
        <img 
        className="hover:rotate-6 lg:hover:rotate-6 lg:hover:scale-[1.2] duration-200"
        src={Tenis} 
        />
      </div>
    </div>
  )
}

export default Card;