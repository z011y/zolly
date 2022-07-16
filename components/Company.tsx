import * as Icons from "@primer/octicons-react";

interface CompanyProps {
  name: string;
  roles: Roles;
}

interface Roles {
  [key: string]: string[];
}

export default function Company({ name, roles }: CompanyProps) {
  const renderRoles = () => {
    const roleComponents = Object.keys(roles).map((role) => {
      return (
        <div>
          <div className="flex items-center gap-x-4 my-4">
            <div className="p-2 w-8 flex justify-center items-center rounded-full bg-gray-100 dark:bg-gray-1100">
              <Icons.MilestoneIcon />
            </div>
            <h3>{role}</h3>
          </div>
          <ul className="mb-4 ml-4 pl-4 border-l border-gray-200 dark:border-gray-1000 opacity-60">
            {renderListItems(role)}
          </ul>
        </div>
      );
    });
    return roleComponents;
  };

  const renderListItems = (role: string) => {
    const listItems = roles[role].map((responsibility: string) => {
      return <li className="my-2">{responsibility}</li>;
    });
    return listItems;
  };

  return (
    <div className="pl-16">
      <h2>{name}</h2>
      {renderRoles()}
    </div>
  );
}
