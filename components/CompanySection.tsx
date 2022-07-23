import { Prisma, Company, Project, Title } from ".prisma/client";
import * as Icons from "@primer/octicons-react";

interface CompanySectionProps {
  company: Company;
  projects: Project[];
  titles: Title[];
  focusProject: (projectName: number) => void;
}

export default function CompanySection({
  company,
  projects,
  titles,
  focusProject,
}: CompanySectionProps) {
  const renderTitles = () => {
    const filteredTitles = titles.filter(
      (title) => title.companyName === company.name
    );
    const titleComponents = filteredTitles.map((title: Title, i: number) => {
      if (
        title.roles &&
        typeof title.roles === "object" &&
        !Array.isArray(title.roles)
      ) {
        const rolesObject = title.roles as Prisma.JsonObject;
        const responsibilities = rolesObject["responsibilities"];
        const filteredProjects = projects.filter(
          (project) => project.titleName === title.name
        );
        if (
          responsibilities &&
          typeof responsibilities === "object" &&
          Array.isArray(responsibilities)
        ) {
          return (
            <div key={i} id={title.name}>
              <div className="flex items-center gap-x-4 my-4">
                <div className="p-2 w-8 flex justify-center items-center rounded-full bg-gray-100 dark:bg-gray-1100">
                  <Icons.MilestoneIcon />
                </div>
                <h3>{title.name}</h3>
              </div>
              <div className="mb-4 ml-4 pl-4 border-l border-gray-200 dark:border-gray-1000">
                <ul className="opacity-60">
                  {renderListItems(responsibilities)}
                </ul>
                <div className="flex flex-col">
                  {renderProjects(filteredProjects, title.name)}
                </div>
              </div>
            </div>
          );
        }
      }
    });

    return titleComponents;
  };

  const renderListItems = (responsibilities: Prisma.JsonArray) => {
    if (
      responsibilities &&
      typeof responsibilities === "object" &&
      Array.isArray(responsibilities)
    ) {
      const listItems = responsibilities.map(
        (responsibility: Prisma.JsonValue, i: number) => {
          return (
            <li key={i} className="my-2">
              {responsibility?.toString()}
            </li>
          );
        }
      );
      return listItems;
    }
  };

  const renderProjects = (filteredProjects: Project[], role: string) => {
    const projectComponents = filteredProjects.map(
      (project: Project, i: number) => {
        return (
          <div key={i} className="flex items-center gap-x-2">
            <Icons.PackageIcon />
            <a
              className="text-blue"
              href="#projects"
              onClick={() => focusProject(project.id)}
            >
              {project.name}
            </a>
          </div>
        );
      }
    );
    return projectComponents;
  };

  return (
    <div className="px-8 lg:px-16 lg:w-2/3">
      <div className="flex items-center gap-x-4 mt-8">
        <h2>{company.name}</h2>
        <p className="text-sm opacity-60">{`${company.startDate} - ${company.endDate}`}</p>
      </div>
      {renderTitles()}
    </div>
  );
}
