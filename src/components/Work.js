import React from 'react'
import project from '../data/projects.json'
import { FaMedal } from 'react-icons/fa'

const Work = () => {
  return (
    <div name="works" className="w-full  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-10 md:pt-0">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-2 text-gray-300 border-pink-600">
            Projets
          </p>
          <p className="py-6 "> Jetez un oeil sur mes récents travaux</p>
        </div>
        <div className="flex flex-col">
          {project.map((item, index) => (
            <div className="group mb-8 border-b-4" key={index}>
              <h2 className="text-center mb-4 font-bold text-2xl">
                <FaMedal className="hidden md:flex" color="yellow" />
                {item.title}
              </h2>
              <img
                className="mb-5 mx-auto  h-[220px] sm:h-[500px] rounded-md"
                src={item.image}
                alt={index}
              />
              <p className="my-3 text-2xl text-[#bf3197] text-center">
                {'//'} {item.description}
              </p>
              <p className="my-7 text-[#ccd6f6]">{item.prob}</p>
              <div className="flex my-5">
                {item.comp.map((comp) => (
                  <img className="w-10 mx-4" src={comp} alt={index} />
                ))}
              </div>
              <div className="mb-10">
                <a href={item.url} target="_blank" rel="noreferrer">
                  <button className="mx-auto text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-black ">
                    Lien Github
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
