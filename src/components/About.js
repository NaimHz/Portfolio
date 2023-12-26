import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              À propos
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Développeur pasionné par l'informatique depuis l'enfance, chaque
              projet est pour moi une nouvelle aventure.{' '}
            </p>
          </div>
          <div>
            <p>
              Après avoir validé 1 an a l'IUT Informatique, j'ai décidé de me
              spécialiser dans le web et de me former au métier de développeur
              fullstack. Je suis passionné par la création de logiciels de
              qualités qui améliorent la vie de ceux qui m'entourent.
            </p>
            <p className="mt-3">
              Vous cherchez un développeur passionné et polyvalent pour votre
              prochain projet ? N'hésitez pas à me contacter{' '}
              <Link
                className="font-bold hover:cursor-pointer"
                to="contact"
                smooth="true"
                duration={500}
              >
                ici
              </Link>{' '}
              pour discuter de vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
