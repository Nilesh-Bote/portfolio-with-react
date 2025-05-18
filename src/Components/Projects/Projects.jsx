import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="TO-DO-LIST"
          main="The To-Do List is a simple, intuitive web application designed to help users manage daily tasks with ease. Built using HTML, CSS, and JavaScript, it allows users to add, edit, delete, and mark tasks as complete. With a clean user interface and responsive design, it offers a smooth and efficient task management experience on any device."
        />
        <ProjectCard
          title="HOME BOOKING WEBPAGE"
          main="A home booking platform built with Next.js and component libraries. Users can explore properties, book homes, and manage their reservations effortlessly. The responsive design ensures usability across all devices user book there dreams home easily in that platfrom"
        />
        <ProjectCard
          title="COLOR GENERATOR"
          main="The Color Generator is a sleek, responsive web tool that allows users to generate random colors and copy their hex codes instantly. Designed with a clean UI and built using HTML, CSS, and JavaScript, it’s perfect for designers, developers, and anyone exploring color palettes. Simple, fast, and user-friendly — this app makes color selection fun and efficient."
        />
      </div>
    </div>
  );
};

export default Projects;
