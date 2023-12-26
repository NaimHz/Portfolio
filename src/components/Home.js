import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#bf3197]">Bonjour, je m'apelle</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Naïm Hamza-Zerigat
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Je suis dévelloppeur fullstack.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Je conçois et réalise des sites web du cahier des charges à la mise en
          ligne.
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            Voir projets{' '}
            <HiArrowNarrowRight className="ml-3 group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home

//Après avoir valider 1 an a l'IUT Informatique, j'ai décider de me former au métier de développeur fullstack.
