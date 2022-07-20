import { Prisma, Company, Project } from ".prisma/client";
import * as Icons from "@primer/octicons-react";

interface CompanySectionProps {
  company: Company;
  projects: Project[];
  focusProject: (projectName: number) => void;
}

export default function CompanySection({
  company,
  projects,
  focusProject,
}: CompanySectionProps) {
  const renderRoles = () => {
    if (company.roles && typeof company.roles === "object") {
      const roleComponents = Object.keys(company.roles).map(
        (role: string, i: number) => {
          const filteredProjects = projects.filter(
            (project) => project.role === role
          );
          return (
            <div key={i}>
              <div className="flex items-center gap-x-4 my-4">
                <div className="p-2 w-8 flex justify-center items-center rounded-full bg-gray-100 dark:bg-gray-1100">
                  <Icons.MilestoneIcon />
                </div>
                <h3>{role}</h3>
              </div>
              <div className="mb-4 ml-4 pl-4 border-l border-gray-200 dark:border-gray-1000">
                <ul className="opacity-60">{renderListItems(role)}</ul>
                <div className="flex flex-col">
                  {renderProjects(filteredProjects, role)}
                </div>
              </div>
            </div>
          );
        }
      );
      return roleComponents;
    }
  };

  const renderListItems = (role: string) => {
    if (company.roles && typeof company.roles === "object") {
      const rolesObject = company.roles as Prisma.JsonObject;
      const listItems = rolesObject[role].map(
        (responsibility: string, i: number) => {
          return (
            <li key={i} className="my-2">
              {responsibility}
            </li>
          );
        }
      );
      return listItems;
    }
  };

  const renderProjects = (filteredProjects: Project[], role: string) => {
    const projectComponents = filteredProjects.map((project) => {
      return (
        <div key={project.id} className="flex items-center gap-x-2">
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
    });
    return projectComponents;
  };

  return (
    <div className="px-8 lg:px-16 lg:w-2/3">
      <div className="flex items-center gap-x-4 mt-8">
        <h2>{company.name}</h2>
        <p className="text-sm opacity-60">{`${company.startDate} - ${company.endDate}`}</p>
      </div>
      {renderRoles()}
    </div>
  );
}
