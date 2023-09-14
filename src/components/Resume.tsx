import logoKC from "@/images/logos/KClogo.png"
import logoUNLV from "@/images/logos/unlvLogo.png"
import logoCDS from "@/images/logos/CDSlogo.png"
import { Role } from "./Role"
import { ArrowDownIcon, BriefcaseIcon } from "./Icons"
import { Button } from "./Button"

export function Resume() {
    let resume: Array<Role> = [
      {
        company: 'Kimberly Clark',
        title: 'Full Stack Engineer',
        logo: logoKC,
        start: '2023',
        end: {
          label: 'Present',
          dateTime: new Date().getFullYear().toString(),
        },
      },
      {
        company: 'Kimberly Clark',
        title: 'Cloud Automation Engineer',
        logo: logoKC,
        start: '2022',
        end: '2023',
      },
      {
        company: 'C-Los Design Solutions',
        title: 'BIM Technician',
        logo: logoCDS,
        start: '2019',
        end: '2022',
      },
      {
        company: 'UNLV',
        title: 'Software Engineer Intern',
        logo: logoUNLV,
        start: '2018',
        end: '2019',
      },
    ]
  
    return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
        <Button href="#" variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    )
  }