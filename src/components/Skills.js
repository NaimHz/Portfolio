import React from 'react'
import myskillsnotsort from '../data/myskills.json'
import { MdOutlineStar } from 'react-icons/md'

const Skills = () => {
  const myskills = myskillsnotsort.sort((a, b) => b.note - a.note)
  const range = [1, 2, 3, 4, 5]
  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Compétences
          </p>
          <p className="m-8 py-3 border-b-4">
            Voici les technologies sur lesquels j'ai travaillé
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 my-5">
          {myskills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={skill.url} alt={skill.name} />
              <p className="my-4">{skill.name}</p>
              <p>
                {range.map((rangeElem) =>
                  skill.note >= rangeElem ? (
                    <MdOutlineStar className="inline top-0" />
                  ) : null,
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
