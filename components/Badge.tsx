import * as Icons from "@primer/octicons-react";
import { Icon } from "@primer/octicons-react";
import { ReactElement } from "react";

interface Props {
  text: string;
  icon: ReactElement;
}

export default function Badge({ text, icon }: Props) {
  return (
    <div className="flex items-center gap-x-2 bg-gray-100 dark:bg-gray-1100 border border-gray-200 dark:border-gray-1000 w-fit px-4 py-2 rounded-lg whitespace-nowrap">
      {icon}
      <h4>{text}</h4>
    </div>
  );
}
