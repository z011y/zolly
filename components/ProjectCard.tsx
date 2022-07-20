import { Project } from ".prisma/client";
import * as Icons from "@primer/octicons-react";

interface ProjectCardProps {
  project: Project;
  isFocused: boolean;
}

export default function ProjectCard({ project, isFocused }: ProjectCardProps) {
  return (
    <div
      id={project.id.toString()}
      className={`flex flex-col gap-y-4 bg-gray-100 dark:bg-gray-1100 rounded-2xl w-full p-8 ${
        isFocused ? "border-blue border" : ""
      }`}
    >
      <div className="flex justify-between items-start mb-16">
        <Icons.PackageIcon size="medium" />
        <h3>project</h3>
      </div>

      <h2>{project.name}</h2>
      <div className="flex items-center gap-x-2">
        <Icons.MilestoneIcon />
        <a className="text-blue" href="#career">
          {project.role}
        </a>
      </div>
      <p>{project.description}</p>
    </div>
  );
}
