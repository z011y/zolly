import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import * as Icons from "@primer/octicons-react";

import Header from "../components/Header";
import Badge from "../components/Badge";
import Company from "../components/Company";

export async function getStaticProps() {
  const prisma = new PrismaClient();

  let companies = await prisma.company.findMany();
  let projects = await prisma.project.findMany();
  companies = JSON.parse(JSON.stringify(companies));
  projects = JSON.parse(JSON.stringify(projects));

  return {
    props: { companies, projects },
  };
}

export default function Home({
  companies,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const renderCompanies = () => {
    const companyComponents = companies.map((company) => {
      return <Company name={company.name} roles={company.roles} />;
    });
    return companyComponents;
  };

  return (
    <div>
      <Head>
        <title>Zolly (Cameron Zollinger)</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header></Header>
      <main className="w-full flex flex-col justify-center">
        {/* About */}
        <section id="about" className="w-full pt-28">
          <div className="flex flex-col justify-center items-center gap-y-4 text-center h-96 m-16">
            <p className="opacity-60">Hi, my name is</p>
            <h1>Cameron Zollinger</h1>
            <span className="flex gap-x-1">
              <p className="opacity-60">I'm a Tech Lead at </p>
              <a href="https://award.co" target="_blank" className="text-blue">
                Awardco
              </a>
            </span>
          </div>
          <div className="flex justify-between gap-x-8 bg-gray-100 dark:bg-gray-1100 rounded-2xl mt-16 mx-16 p-8">
            <div className="flex items-center gap-x-4">
              <Icons.CodeIcon size="medium" />
              <h2>Software Engineer</h2>
            </div>
            <div className="flex items-center gap-x-4 opacity-60">
              <Icons.DependabotIcon size="medium" />
              <h2>Automation Expert</h2>
            </div>
            <div className="flex items-center gap-x-4 opacity-30">
              <Icons.PencilIcon size="medium" />
              <h2>Design Enthusiast</h2>
            </div>
          </div>
        </section>
        {/* Career */}
        <section id="career" className="pt-28">
          {renderCompanies()}
        </section>
        {/* Projects */}
        <section id="projects" className="pt-28">
          <h2 className="pl-16">Projects</h2>
        </section>
        {/* Skills */}
        <section id="skills" className="pt-28 pb-16">
          <h3 className="ml-16">Some things I'm good at</h3>
          <div className="flex gap-x-4 my-4 pr-16 pl-16 overflow-x-scroll scrollbar-hidden">
            <Badge text="Test Automation" icon={<Icons.DependabotIcon />} />
            <Badge text="Debugging" icon={<Icons.BugIcon />} />
            <Badge
              text="Test Cases & Product Requirements"
              icon={<Icons.LogIcon />}
            />
            <Badge text="Frontend Development" icon={<Icons.CodeIcon />} />
            <Badge text="Git Organization" icon={<Icons.GitBranchIcon />} />
            <Badge text="Product Design" icon={<Icons.PaintbrushIcon />} />
            <Badge
              text="Product Team Communication"
              icon={<Icons.CommentDiscussionIcon />}
            />
          </div>
          <h3 className="ml-16">Some things I'm learning</h3>
          <div className="flex gap-x-4 my-4 pr-16 pl-16 overflow-x-scroll scrollbar-hidden">
            <Badge text="User Research" icon={<Icons.PersonIcon />} />
            <Badge text="Sprint Planning" icon={<Icons.TelescopeIcon />} />
            <Badge
              text="Leadership & Mentoring"
              icon={<Icons.CodeOfConductIcon />}
            />
            <Badge text="Backend Development" icon={<Icons.CodeIcon />} />
            <Badge
              text="Software Architecture Design"
              icon={<Icons.CpuIcon />}
            />
          </div>
          <h3 className="ml-16">Some technologies I like to use</h3>
          <div className="flex gap-x-4 my-4 pr-16 pl-16 overflow-x-scroll scrollbar-hidden">
            <Badge text="TypeScript" icon={<Icons.DependabotIcon />} />
            <Badge text="React" icon={<Icons.BugIcon />} />
            <Badge text="Next" icon={<Icons.CommentDiscussionIcon />} />
            <Badge text="Cypress" icon={<Icons.LogIcon />} />
            <Badge text="Postgres" icon={<Icons.CodeIcon />} />
            <Badge text="Prisma" icon={<Icons.PaintbrushIcon />} />
          </div>
        </section>
      </main>
    </div>
  );
}
