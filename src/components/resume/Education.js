import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Physics"
            subTitle="Bharadhidhasan University (2017 - 2020)"
            result="7.7-CGPA"
          />
          <ResumeCard
            title="HSC"
            subTitle="E.R Higher Secondary School (2017)"
            result="70.2%"
          />
          <ResumeCard
            title="SSLC"
            subTitle="E.R Higher Secondary School (2015)"
            result="89.9%"
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
};

export default Education;
