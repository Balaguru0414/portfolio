import React from "react";
import { motion } from "framer-motion";
import SkillBar from "./SkillBar";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="React" width="75" />
          <SkillBar skill="HTML5" width="85" />
          {/* <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium pb-3">html 5</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
              >
                <span className="absolute -top-7 right-0">{`85%`}</span>
              </motion.span>
            </span>
          </div> */}
          <SkillBar skill="CSS3" width="80" />
          <SkillBar skill="JavaScript" width="75" />
          <SkillBar skill="Flutter" width="35" />
          {/* <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium pb-3">Flutter</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`w-[35%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
              >
                <span className="absolute -top-7 right-0">{`35%`}</span>
              </motion.span>
            </span>
          </div> */}
          <SkillBar skill="Back-end ( Node, Express, MongoDB )" width="30" />
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          <SkillBar skill="Figma" width="40" />
          <SkillBar skill="Adope Photo Shop" width="25" />
          <SkillBar skill="Corel Draw" width="35" />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
