import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { chatAppImg } from "../../assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={
            "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg"
          }
          git=""
          live=""
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={
            "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg"
          }
          git=""
          live=""
        />
        <ProjectsCard title="" des="" src={""} git="" live="" />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={
            "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
          }
          git=""
          live=""
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={
            "https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg"
          }
          git=""
          live=""
        />
        <ProjectsCard
          title="Chatting App"
          des=" This is a real-time chat application using React and ChatEngine. 
          This beginner-friendly app will allow users to send and receive text messages in real-time."
          src={chatAppImg}
          git="https://github.com/Balaguru0414/YourChat"
          live="https://yourchat-bg.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
