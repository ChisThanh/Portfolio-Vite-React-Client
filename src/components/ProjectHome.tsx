import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../stores/data";

const projectHome = projects.filter((project) => project.top === true);

const ProjectHome: React.FC = () => (
  <div className="pt-7">
    <div className="flex justify-center items-center  drop-shadow-lg">
      <div className="block max-w-sm p-3 bg-indigo-50 border  rounded-lg shadow hover:bg-gray-100 text-center">
        <h5 className="text-2xl md:text-xl sm:text-lg font-bold tracking-tight text-gray-900">
          The best projects 🥇
        </h5>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-7">
      {projectHome.map((project, index) => (
        <div
          className="w-full border  rounded-lg  p-2 shadow-md shadow-gray-500/50 relative bg-indigo-50"
          key={index}
        >
          {project.deploy && (
            <div className="absolute right-6 top-[-1px] z-50 rounded-b-lg  px-3 py-2 text-sm uppercase text-white shadow-md bg-[#FF7F00]">
              {project.deploy}
            </div>
          )}
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center justify-center overflow-hidden rounded-lg"
          >
            <img
              className="rounded-lg max-h-[200px] min-h-[165px] transform transition-transform duration-300 ease-in-out hover:scale-105"
              src={project.image}
              alt={project.name}
            />
          </Link>

          <div className="p-5">
            <Link to={`/projects/${project.slug}`}>
              <h5 className="mb-2 text-2xl md:text-xl sm:text-lg font-bold tracking-tight text-gray-900 ">
                {project.name}
              </h5>
            </Link>
            {project.url && (
              <p className="mb-3 font-normal text-gray-700 truncate">
                <a
                  href={project.url}
                  target="_blank"
                  className="hover:underline"
                >
                  <span className="font-bold">Source: </span>{" "}
                  {project.url.slice(19, 300)}
                </a>
              </p>
            )}
            {/* {project.link && (
              <p className="mb-3 font-normal text-gray-700 truncate">
                <a
                  href={project.link}
                  target="_blank"
                  className="hover:underline"
                >
                  <span className="font-bold">Link: </span>
                  {project.link}
                </a>
              </p>
            )} */}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectHome;
