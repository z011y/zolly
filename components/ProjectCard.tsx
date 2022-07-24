import { Prisma, Project } from ".prisma/client";
import * as Icons from "@primer/octicons-react";

import Badge from "./Badge";

interface ProjectCardProps {
  project: Project;
  isFocused: boolean;
}

export default function ProjectCard({ project, isFocused }: ProjectCardProps) {
  const renderLanguages = () => {
    if (project.techStack && typeof project.techStack === "object") {
      const techStackObject = project.techStack as Prisma.JsonObject;
      const languages = techStackObject["languages"];
      if (
        languages &&
        typeof languages === "object" &&
        Array.isArray(languages)
      ) {
        const languageComponents = languages.map(
          (language: Prisma.JsonValue, i: number) => {
            return <Badge key={i} text={language?.toString()} />;
          }
        );
        return languageComponents;
      }
    }
  };

  const renderFrameworks = () => {
    if (project.techStack && typeof project.techStack === "object") {
      const techStackObject = project.techStack as Prisma.JsonObject;
      const frameworks = techStackObject["frameworks"];
      if (
        frameworks &&
        typeof frameworks === "object" &&
        Array.isArray(frameworks)
      ) {
        const frameworkComponents = frameworks.map(
          (framework: Prisma.JsonValue, i: number) => {
            return <Badge key={i} text={framework?.toString()} />;
          }
        );
        return frameworkComponents;
      } else {
        return <h4>None</h4>;
      }
    }
  };

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
      {project.titleName ? (
        <div className="flex items-center gap-x-2">
          <Icons.MilestoneIcon />
          <a className="text-blue" href={`#${project.titleName}`}>
            {project.titleName}
          </a>
        </div>
      ) : null}
      <p className="opacity-60">{project.description}</p>
      <h3>languages</h3>
      <div className="flex gap-x-4 overflow-scroll">{renderLanguages()}</div>
      <h3>frameworks</h3>
      <div className="flex gap-x-4 overflow-scroll">{renderFrameworks()}</div>
    </div>
  );
}
