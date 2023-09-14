
import { Button } from '@/components/Button'
import { SocialLink } from '@/components/SocialLink'
import { Container } from '@/components/Container'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  ArrowDownIcon,
  BriefcaseIcon,
} from '@/components/Icons'

import { Photos } from '@/components/Photos'
import { Resume } from '@/components/Resume'

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Engineer, Cloud Automation Specialist, and DevOps Robot.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {"I'm David, a software engineer based out of Las Vegas. I'm currently working for Kimberly Clark as a Full Stack Engineer on the innovation team, where we create prototypes for new initiatives using emerging technology."}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
