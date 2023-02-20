import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoSyzygy from '@/images/logos/syzygy.svg'
import logoUeg from '@/images/logos/ueg.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoLuh from '@/images/logos/luh.png'
import bongoCat from '@/images/bongo-cat.svg'
import gridAnimation from '@/images/grid-animation.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllProjects } from '@/lib/getAllProjects'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Project({ project }) {
  return (
    <Card as="project">
      <Card.Title href={`/projects/${project.slug}`}>
        {project.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={project.date} decorate>
        {formatDate(project.date)}
      </Card.Eyebrow>
      <Card.Description>{project.description}</Card.Description>
      <Card.Cta>Read project</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'SYZYGY Deutschland GmbH',
      title: 'Junior Web Developer',
      logo: logoSyzygy,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Zenmade',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Union Education Group',
      title: 'Database Manager / Frontend Developer',
      logo: logoUeg,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Institut für Maschinenkonstruktion und Tribologie (Leibniz Universität Hanover)',
      title: 'System Administrator',
      logo: logoLuh,
      start: '2014',
      end: '2016',
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
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/downloads/ChiThanhPham_CV.pdf" target="_blank"  variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function BongoCat() {
  return (
    <div className="mt-16  sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <Image
          src={bongoCat}
          alt=""
          className="inset-0 h-full w-full object-contain"
        />
      </div>
    </div>
  )
}

// function BongoCat() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       viewBox="0 0 787.3 433.8"
//     >
//       <defs>
//         <symbol id="eye" data-name="eye" viewBox="0 0 19.2 18.7">
//           <circle cx="9.4" cy="9.1" r="8"></circle>
//           <path d="M16.3 5.1a1.3 1.3 0 01-1.4-.3 7.2 7.2 0 00-4.5-2.6 7.2 7.2 0 00-4.9 1.3 6.8 6.8 0 00-2.7 4.3 6.8 6.8 0 001 4.8 6.2 6.2 0 004 2.7 6.1 6.1 0 004.6-.7 6.7 6.7 0 002.9-3.7 6.4 6.4 0 00-.5-4.5c-.1-.2.8-1 1.5-1.3s2.2 0 2.3.5a9.4 9.4 0 01-.2 7.2 9.4 9.4 0 01-5.1 5.1 9 9 0 01-7 .2A9.6 9.6 0 011 13.5a9.2 9.2 0 01-.6-6.9 8.9 8.9 0 014.2-5.3A9 9 0 0111.2.2 9.3 9.3 0 0116.7 4c.2.3.3.8-.4 1.1z"></path>
//         </symbol>
//         <symbol id="paw-pads" data-name="paw-pads" viewBox="0 0 31.4 33.9">
//           <path
//             fill="#ef97b0"
//             d="M6.8 16a3.7 3.7 0 011.1 2.8 3.2 3.2 0 01-1.6 2.6l-1.3.4h-.6a2.8 2.8 0 01-1.8.3 4.2 4.2 0 01-2.4-3 7.7 7.7 0 01-.2-1.5 2.8 2.8 0 01.6-2 3.2 3.2 0 012.1-.8H4A5 5 0 016.8 16zm7.3-4.8a1.8 1.8 0 00.7-.5l.7-.4a3.5 3.5 0 001.1-1 3.2 3.2 0 00.3-1.4 1.4 1.4 0 00-.2-.6 3.4 3.4 0 00-.3-2.4 3.2 3.2 0 00-2.1-1.5h-1.2a4.7 4.7 0 00-1.6.4 2 2 0 00-.9.9l-.4.6v.4a6.1 6.1 0 00-.5 1.2 4.3 4.3 0 000 1.6 3.5 3.5 0 00.5 2l.7.6a3.3 3.3 0 001.7.7 3 3 0 001.5-.6zM22.7 7l.6.2h.3a2.3 2.3 0 001.4-.4l.4-.3.6-.3a7.5 7.5 0 001.5-.9 4.2 4.2 0 00.8-1.2 1.9 1.9 0 00.1-1.5 2.6 2.6 0 00-.9-1.6 3.5 3.5 0 00-3.9-.7 3.8 3.8 0 00-2 1.5 4.8 4.8 0 00-.7 2 3.6 3.6 0 00.9 2.6zM31 24.1a13.5 13.5 0 00-2.2-4.7 36.6 36.6 0 00-3.2-3.9 5.3 5.3 0 00-5-1.9 10.5 10.5 0 00-4.5 2.2 5.6 5.6 0 00-2.6 4.2 15.1 15.1 0 001.2 6.3c.8 2 1.7 4 2.6 5.9a1.6 1.6 0 001.5.8 1.7 1.7 0 001.9.9 17.1 17.1 0 008.7-4.8 8.2 8.2 0 001.7-2c.5-.8.2-2.1-.1-3z"
//           ></path>
//         </symbol>
//       </defs>
//       <g>
//         <g>
//           <path
//             fill="#fff"
//             d="M303.2 186.3c4-7 14.8-20.2 20-26 17-19 34.6-34.9 43-41l12-8s16.6-32 21-33c9-2 33 22 33 22s20-9 79 7c41 11.1 47 14 57 22 7.5 6 18 16 18 16s33.7-19.5 41-15-2 66-2 66 5.9 12.9 11 22c9.1 16.2 13.6 20.2 19 31 3.6 7.2 8.4 28.5 10.5 43.5l-385-62z"
//           ></path>
//           <path d="M302.9 186.9c-1.2 3-5.9 12.6-9 18.8l-12.5 25.5-.6-1.2c32.2 4.8 64.4 9.2 96.6 13.6s64.4 8.9 96.5 13.7 64.3 9.7 96.4 14.9 64.1 10.5 96.2 15.8l-5.6 5.5c-1.2-8.5-2.8-17.1-4.8-25.6-1-4.1-2.1-8.4-3.4-12.3l-.5-1.4-.5-1.4-.6-1.3-.7-1.3a59.5 59.5 0 00-3.1-5.5c-2.2-3.6-4.7-7.2-7.1-11s-4.8-7.6-7-11.5c-4.5-7.9-8.3-15.9-12.1-24a4 4 0 01-.3-2.6c1.4-9.1 2.7-18.2 3.7-27.4.5-4.5.9-9.1 1.2-13.7s.4-9.1.2-13.4a26.4 26.4 0 00-.8-6 8.1 8.1 0 00-.3-1.1c-.1-.3-.2-.4-.1-.3h.3c0 .1.1.1 0 .1h-.6a11.9 11.9 0 00-2.5.2 16.3 16.3 0 00-3 .7 56.7 56.7 0 00-6.2 2.1 212.6 212.6 0 00-24.5 11.9h-.1a3.9 3.9 0 01-4.7-.6c-4.9-4.7-10-9.4-15.1-13.8a86.6 86.6 0 00-7.9-6 46.1 46.1 0 00-8.5-4.6c-6-2.6-12.6-4.6-19.2-6.7l-19.8-5.7a324.9 324.9 0 00-40-8.9 196.8 196.8 0 00-20.2-1.8c-1.7 0-3.4-.1-5.1 0h-2.5l-2.5.2-2.5.2-2.4.4-2.4.5-1.1.3h-.5l-.4.2h-.3a2.5 2.5 0 01-2.6-.7c-4.6-4.6-9.5-9.1-14.5-13.2a82.7 82.7 0 00-7.9-5.7l-4.1-1.8a10.8 10.8 0 00-4-.9c-.1 0-.3 0-.3.1l-.7.5-1.5 1.7c-1 1.2-2 2.6-2.9 3.9s-3.6 5.5-5.3 8.3c-3.5 5.7-6.8 11.4-9.9 17.3l-.4.4-10.2 6.6a53.6 53.6 0 00-4.9 3.4l-4.6 3.8c-6.2 5.1-12.1 10.6-17.9 16.2s-11.3 11.4-16.7 17.4c-2.7 3-5.3 6.1-7.8 9.2s-5 6.3-7.4 9.5c-4.2 5.6-7 10-5.7 7.1a34.1 34.1 0 012.1-3.8l3.8-5.6c2.9-4 6.3-8.3 8.5-10.9s4.4-5.2 6.7-7.7l6.9-7.4c4.7-4.9 9.4-9.7 14.3-14.3s9.8-9.3 15-13.7l4-3.2 4.2-2.9 8.3-5.7-.4.4c3-5.9 6.1-11.8 9.4-17.7 1.6-2.9 3.3-5.8 5.1-8.6l2.9-4.3 1.8-2a7.5 7.5 0 011.3-1.1c.1-.2.6-.4 1-.5l.9-.2h1.7l1.4.2 2.7.8c1.7.7 3.3 1.5 4.8 2.3a84 84 0 018.5 5.7A175.7 175.7 0 01434 98.5l-2.9-.6.8-.3.7-.2 1.4-.4 2.7-.7 2.7-.5a23 23 0 012.6-.3l2.7-.3 2.7-.2h5.3a182.1 182.1 0 0121 1.3 332.5 332.5 0 0141.1 8.4l20 5.5c6.7 2 13.4 4 20.1 6.7a65.3 65.3 0 019.8 5.1c3.1 2.1 5.9 4.3 8.6 6.5 5.4 4.5 10.6 9.2 15.7 14l-4.8-.6c4.1-2.4 8.2-4.6 12.4-6.7s8.6-4.2 13-6c2.3-.9 4.6-1.7 7-2.4a23.4 23.4 0 013.8-.9 20 20 0 014.4-.4h1.3l1.5.4a5.1 5.1 0 011.7.7l.9.7.8.7a8.3 8.3 0 011.6 2.6 12.7 12.7 0 01.8 2.3 44.6 44.6 0 011.1 7.7c.2 5 .1 9.7-.1 14.4s-.7 9.5-1.2 14.1c-.9 9.4-2.1 18.6-3.6 27.9l-.3-2.6c3.7 7.9 7.5 15.8 11.8 23.3 2.1 3.7 4.4 7.4 6.8 11s4.9 7.2 7.3 11.1c1.3 2 2.4 4 3.5 6.1a10.9 10.9 0 00.8 1.5l.8 1.8.7 1.7.6 1.7c1.5 4.4 2.6 8.7 3.7 13.1a262 262 0 015.2 26.4 4.9 4.9 0 01-4.1 5.6h-1.5c-32.1-5-64.2-9.9-96.3-15.1s-64.1-10.6-96.1-16.1-64-11.4-96-17.4-63.9-11.9-95.9-17.4h-.1a.8.8 0 01-.6-.9v-.2l16.6-32.1c3.3-6.3 7.6-14.6 6.4-11.6z"></path>
//         </g>
//         <g>
//           <g>
//             <use
//               width="19.2"
//               height="18.7"
//               transform="translate(474.8 195.2)"
//               xlinkHref="#eye"
//             ></use>
//             <use
//               width="19.2"
//               height="18.7"
//               transform="matrix(-.51 -.85 .82 -.5 370.39 192.59)"
//               xlinkHref="#eye"
//             ></use>
//           </g>
//           <g>
//             <path
//               fill="#fff"
//               d="M399.2 186.3c.9 3.6 2.6 7.8 6 9 6.4 2.3 19-6 19-6s4.1 12.4 10 15 10.7-1.7 16-6"
//             ></path>
//             <path d="M450.2 198.3c.6 1.2.2 1.9-.2 2.2a36.7 36.7 0 01-7.6 4.9 14.9 14.9 0 01-4.8 1.4h-1.4l-1.3-.2-1.4-.4-1.3-.6a21.6 21.6 0 01-6.4-7.2 52.8 52.8 0 01-4-8.3l3.8 1.3a62.3 62.3 0 01-7.1 4.1 32.1 32.1 0 01-7.9 2.8 13.2 13.2 0 01-4.9.2l-1.4-.3a7.5 7.5 0 01-1.3-.6 7.9 7.9 0 01-2.3-1.6 16.8 16.8 0 01-2.9-4 24.1 24.1 0 01-1.6-4.2c-.1-.5 1.6-1.3 3-1.4s3.5.2 3.6.6a10.3 10.3 0 002.6 4.9l.7.5h2.4l1.5-.2a28.4 28.4 0 006.5-2c2.1-1 4.3-2.1 6.3-3.3h.1a2.5 2.5 0 013.4.9l.3.5a43.1 43.1 0 003.2 7.7 19.8 19.8 0 002.2 3.4 8.1 8.1 0 002.6 2.6 5 5 0 003 .7 10.8 10.8 0 003.7-1 33.4 33.4 0 007.2-4.3c.3 0 1-.2 1.7.9z"></path>
//           </g>
//         </g>
//       </g>
//       <g>
//         <path
//           fill="#18181b"
//           d="M65.7 181.8l714 124c0 74-2 54-2 128l-673-161z"
//         ></path>
//         <path d="M786.7 304.2c-2.7 1.2-10.8 0-16.1-.9L31.1 176.4c-5.2-.9-8.9-3.8-6.2-5s14.3-1.4 19.5-.5l732.7 129.7c5.2 1 12.3 2.5 9.6 3.6z"></path>
//       </g>
//       <g>
//         <g>
//           <path
//             fill="#f2f2f2"
//             d="M641.9 304.1L454.7 348.2 103.8 271.3 254.6 230.3 641.9 304.1z"
//           ></path>
//           <path
//             fill="#231f20"
//             d="M641.9 304.1c1.5-.1-2.3 1.5-10.3 3.6-28.9 7.5-58.1 15.2-87.7 22.6s-59.1 14.5-88.4 21.3l-.8.2-.8-.2-349.5-78-1.1-.2-8.7-1.9 8.6-2.3 150.6-41.5.6-.2h.7c62.5 11.7 125.5 23.6 188.4 35.9s125.6 25.1 188 37.6c8 1.6 11.9 3 10.4 3a185.6 185.6 0 01-18.4-2.6c-61.9-11.2-123.6-22.2-185-33.5s-122.7-23.1-184.4-35h1.2l-150.9 40.5h-.1v-4.3l351.2 75.7H454c28.3-6.7 56.3-13.3 84.3-19.5s56.5-12 85.2-18.1c7.8-1.6 16.9-3.1 18.4-3.1z"
//           ></path>
//         </g>
//         <g>
//           <path
//             fill="#3e3e54"
//             d="M371.1 274.8L256.8 253.5 257 252.7 266.2 251.1 382.4 271.5 382.3 272.3 371.1 274.8z"
//           ></path>
//           <path
//             fill="#3e3e54"
//             d="M237.4 265.6L221.3 262.4 221.4 261.7 230.2 260.2 246.8 262.6 246.6 263.4 237.4 265.6z"
//           ></path>
//           <path
//             fill="#3e3e54"
//             d="M474.6 312.9L249.9 268.1 250.1 267.3 259.2 265.8 487.7 309.6 487.5 310.5 474.6 312.9z"
//           ></path>
//           <path
//             fill="#3e3e54"
//             d="M411.8 309.4L204.2 266.7 204.4 266 212.9 264.5 423.9 306.3 423.7 307.2 411.8 309.4z"
//           ></path>
//           <path
//             fill="#3e3e54"
//             d="M450 317.3L428.5 312.9 428.8 312 440.7 310.6 462.7 314.1 462.5 315 450 317.3z"
//           ></path>
//           <path
//             fill="#3e3e54"
//             d="M201.6 273.9L187.5 270.9 187.7 270.2 196 268.7 210.4 271 210.3 271.7 201.6 273.9z"
//           ></path>
//           <path
//             fill="#3e3e54"
//             d="M222.6 278.3L208.1 275.3 208.3 274.5 216.9 273.1 231.8 275.4 231.6 276.2 222.6 278.3z"
//           ></path>
//           <path
//             fill="#3e3e54"
//             d="M362.9 308.1L231.5 280.2 231.7 279.5 240.7 278.1 374.2 305.1 374 305.9 362.9 308.1z"
//           ></path>
//           <path
//             fill="#3e3e54"
//             d="M444.3 288.4L385.2 277.4 385.4 276.5 396.6 274.9 456.9 285.1 456.7 285.9 444.3 288.4z"
//           ></path>
//           <path
//             fill="#3e3e54"
//             d="M526.1 303.6L460.1 291.3 460.3 290.4 472.8 288.9 540.1 300.2 539.9 301.1 526.1 303.6z"
//           ></path>
//           <path
//             fill="#3e3e54"
//             d="M426.2 321.6L376.1 310.9 376.3 310.1 387.4 308.7 438.5 318.5 438.3 319.4 426.2 321.6z"
//           ></path>
//           <g fill="#3e3e54">
//             <path d="M410.6 286.5L399.1 288 398.9 288.8 499.9 308.3 513.3 305.9 513.5 305 410.6 286.5z"></path>
//             <path d="M395.7 283.7L395.9 282.8 248.2 255.7 239.2 257.3 239 258 384.3 286 395.7 283.7z"></path>
//           </g>
//           <path
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//             d="M371.3 273.9L256.9 252.7 266.4 250.3 382.4 271.5 371.3 273.9z"
//           ></path>
//           <path
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//             d="M237.6 264.9L221.4 261.7 230.4 259.4 246.8 262.6 237.6 264.9z"
//           ></path>
//           <path
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//             d="M474.8 312L250 267.3 259.4 265.1 487.7 309.6 474.8 312z"
//           ></path>
//           <path
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//             d="M412 308.5L204.4 266 213.1 263.8 423.9 306.3 412 308.5z"
//           ></path>
//           <path
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//             d="M450.2 316.4L428.8 312 440.9 309.7 462.8 314.1 450.2 316.4z"
//           ></path>
//           <path
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//             d="M201.7 273.1L187.7 270.2 196.2 268 210.4 271 201.7 273.1z"
//           ></path>
//           <path
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//             d="M222.8 277.6L208.3 274.5 217.1 272.4 231.8 275.4 222.8 277.6z"
//           ></path>
//           <path
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//             d="M363.1 307.3L231.7 279.5 240.9 277.3 374.2 305.1 363.1 307.3z"
//           ></path>
//           <path
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//             d="M444.6 287.5L385.4 276.5 396.8 274.1 456.9 285 444.6 287.5z"
//           ></path>
//           <path
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//             d="M526.3 302.7L460.3 290.4 473 288 540.1 300.2 526.3 302.7z"
//           ></path>
//           <path
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//             d="M426.4 320.7L376.3 310.1 387.6 307.9 438.5 318.5 426.4 320.7z"
//           ></path>
//           <g
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.2"
//           >
//             <path d="M410.7 285.6L399.1 288 500.1 307.4 513.5 305 410.7 285.6z"></path>
//             <path d="M395.9 282.8L248.4 255 239.2 257.3 384.5 285.2 395.9 282.8z"></path>
//           </g>
//         </g>
//         <g>
//           <g>
//             <path
//               fill="#fff"
//               d="M293.2 191.3l10-7s-18.4 11.1-24 20-13 20.4-9 31c4.7 12.4 20.5 15.7 22 16 20 3.8 47.8-24.3 47.8-24.3s1.9-3.3 2.2-3.7"
//             ></path>
//             <path d="M342.1 223.4c.9 1.2.2 2.8-.3 3.7l-.4.7-.3.3a118.1 118.1 0 01-14.2 12.3 83.2 83.2 0 01-16.2 9.8 43.9 43.9 0 01-9.3 3 26.3 26.3 0 01-10.1.2 44.5 44.5 0 01-9.3-3.2 34.2 34.2 0 01-8.3-5.5 23 23 0 01-5.8-8.5 21.3 21.3 0 01-1.3-10.3 34.9 34.9 0 012.7-9.7 76.1 76.1 0 014.5-8.5l2.4-4 .6-1 .8-1.1a15.6 15.6 0 011.6-2 49.9 49.9 0 017-6.8 136.1 136.1 0 0115.3-11.2 3.1 3.1 0 014.4 1 3 3 0 01-.8 4.2h-.1l-8.6 6.2c-.9.6-2.7-.5-3.1-1.9s.5-4.4 1.5-5l6.6-4.5 3.5 5.3a131.9 131.9 0 00-14.9 10.5 52.7 52.7 0 00-6.4 6 6.5 6.5 0 00-1.3 1.6l-.6.8-.7 1-2.4 3.8c-1.6 2.6-3.1 5.2-4.4 7.8a27.7 27.7 0 00-2.4 8.1 15.6 15.6 0 00.8 8 17.4 17.4 0 004.4 6.7 27.2 27.2 0 007.1 4.9 39.5 39.5 0 008.1 3 21.6 21.6 0 008.4 0 37.8 37.8 0 008.5-2.6 84.9 84.9 0 0015.7-9 142.4 142.4 0 0014.1-11.6l-.3.3 1.1-1.8c.6-1 1.6-2.2 2.4-1z"></path>
//           </g>
//           <g>
//             <path
//               fill="#fff"
//               d="M282.2 215.2c-1.6-1.6-12.8-17.9-14-34.3-.1-2.5 1.7-16 12.9-22.4s22.3-1.9 26.2.4c12.2 7.3 21.2 19.1 22.8 22.4"
//             ></path>
//             <path d="M330 181.2a2.4 2.4 0 01-2.6-1.3 71.4 71.4 0 00-9.8-10.8 64 64 0 00-11.7-8.6 26.3 26.3 0 00-6.5-2.3 26.9 26.9 0 00-6.9-.6 24.9 24.9 0 00-6.7 1.3 20.8 20.8 0 00-5.8 3.3 23.1 23.1 0 00-7.6 11 32.5 32.5 0 00-1.4 6.6 6.6 6.6 0 00.1 1.4l.2 1.8c.1 1.2.4 2.3.6 3.5a65 65 0 004.8 13.4c1 2.2 2.2 4.3 3.4 6.4a43.1 43.1 0 003.9 5.9.6.6 0 010 .6c0 .2-.2.4-.4.7a5.7 5.7 0 01-1.5 1.6c-1.3.6-4.1.1-4.6-.6a89.5 89.5 0 01-7.2-13.7 63.7 63.7 0 01-4.3-14.9 25.7 25.7 0 01-.5-4c0-.3-.1-.6-.1-1v-1.2a12.5 12.5 0 01.2-2.1 35.2 35.2 0 012.4-7.8 28.6 28.6 0 014.1-6.9 24.6 24.6 0 016.1-5.5 26.2 26.2 0 0115.5-4.2 28.9 28.9 0 017.8 1.2l3.8 1.3 1.8.9 1.8 1a78.2 78.2 0 0111.9 9.6 80.2 80.2 0 019.7 11.8c.6.7.9 2-.5 2.2z"></path>
//             <use
//               width="31.4"
//               height="33.93"
//               transform="rotate(-5.6 1834.68 -2709.94)"
//               xlinkHref="#paw-pads"
//             ></use>
//           </g>
//         </g>
//         <g>
//           <path d="M316.9 238.7l-163.4-33.5a5.1 5.1 0 01-4-3.5L109.8 75.4c-1-3.3 1.9-6.6 5.6-6.3l162.5 15.4a5.2 5.2 0 014.6 3.7l40.7 144.4c1 3.6-2.4 6.9-6.3 6.1z"></path>
//           <path d="M317.3 238.7a7.9 7.9 0 002.2-.7 5 5 0 002.2-1.9 3.7 3.7 0 00.6-2.9l-.3-.8-.2-.9a15.4 15.4 0 01-.5-1.7L300 154.6l-10.7-37.5-5.3-18.8-2.6-9.4a7.9 7.9 0 00-.4-.9 4.3 4.3 0 00-.4-.7 3.3 3.3 0 00-1.5-1.1l-.9-.3h-1.1l-2.4-.2-155.5-14.5-2.4-.3h-2.2a3.3 3.3 0 00-2.8 1.6 2.4 2.4 0 00-.5 1.4v.8c.1.1.1.2.1.4l.2.6 1.5 4.6 5.9 18.5 11.8 37.3 11.7 37.2 5.9 18.6 2.9 9.3a3.4 3.4 0 002.2 2h1l1.2.3 2.4.4 153 31.1c4.3.9 7.4 2.9 5.2 3.3s-11.7-.1-16-1l-75.8-15.7-37.9-7.6-19-3.9-9.5-2-4.7-1h-.7l-.8-.3a6.1 6.1 0 01-1.4-.7 7.6 7.6 0 01-2.3-2.4l-.4-.8a1.9 1.9 0 01-.2-.7l-.4-1.2-.7-2.3-1.4-4.6-2.9-9.2-5.8-18.5-11.5-36.9-11.5-37-2.9-9.2-1.5-4.8-.7-2.3v-.6c0-.3-.1-.6-.1-.8a4.8 4.8 0 010-1.7 6.8 6.8 0 013.8-5 10.1 10.1 0 013-.7h2.6l9.6 1 76.9 7.6 38.5 3.7 19.3 1.9 9.6.9 4.8.5h2.6a6.6 6.6 0 012.7 1.2 7.2 7.2 0 011.9 2.4 12.1 12.1 0 01.5 1.4l.3 1.1 1.3 4.7 2.6 9.3 5.2 18.6 10.4 37.3 10.4 37.3 5.3 18.6 2.6 9.4 1.3 4.6.6 2.4a7 7 0 01.4 2.7 5.7 5.7 0 01-1.8 3.7 5.9 5.9 0 01-3.4 1.6 3.5 3.5 0 01-2.1-.4c-.4.1-.3 0 .2-.2z"></path>
//         </g>
//         <g>
//           <g
//             stroke="#3DE0E8"
//             strokeWidth="6"
//             transform="matrix(-1 0 0 1 278 103)"
//           >
//             <g transform="translate(0 76)">
//               <path
//                 strokeDasharray="60,10"
//                 d="M8 25h0"
//                 className="typing-animation"
//               ></path>
//               <path
//                 strokeDasharray="50,10"
//                 d="M8 13h0"
//                 className="typing-animation"
//               ></path>
//               <path
//                 strokeDasharray="25,10"
//                 d="M0 1h0"
//                 className="typing-animation"
//               ></path>
//             </g>
//             <g transform="translate(0 38)">
//               <path
//                 strokeDasharray="40,10"
//                 d="M8 25h0"
//                 className="typing-animation"
//               ></path>
//               <path
//                 strokeDasharray="60,10"
//                 d="M8 13h0"
//                 className="typing-animation"
//               ></path>
//               <path
//                 strokeDasharray="30,10"
//                 d="M0 1h0"
//                 className="typing-animation"
//               ></path>
//             </g>
//             <g>
//               <path
//                 strokeDasharray="60,10"
//                 d="M8 25h0"
//                 className="typing-animation"
//               ></path>
//               <path
//                 strokeDasharray="60,10"
//                 d="M8 13h0"
//                 className="typing-animation"
//               ></path>
//               <path
//                 strokeDasharray="60,10"
//                 d="M0 1h0"
//                 className="typing-animation"
//               ></path>
//             </g>
//           </g>
//         </g>
//         <g style={{ mixBlendMode: "hard-light" }}>
//           <path
//             fill="#f2f2f2"
//             d="M440.7 347.2L90.3 275.6 4.7 3.8 353 36.7 440.7 347.2z"
//           ></path>
//           <path d="M440.4 346.4c-2.5-5.3-6.5-18.8-9-27.4l-40.7-141c-13.6-46.8-26.9-93.7-40.3-140.6l2.3 2L4.4 7.1l3.5-4.3L94 274.5l-2.9-2.6q83.7 16.8 166.8 34.2t166.8 35.4c8.8 1.9 17.5 5.1 14.7 5.5s-6.3-.2-12-.9-12.3-1.5-16.8-2.3q-80.1-15.7-160.6-31.7c-53.5-10.8-107.1-21.7-160.4-32.7l-2.3-.5-.6-2.1L1.5 4.8 0 0l5 .5L353.3 34l1.8.2.5 1.8q20.7 73.8 41.2 147.8l40.6 147.5c2.4 8.8 5.5 20.4 3 15.1z"></path>
//         </g>
//       </g>
//       <g>
//         <g>
//           <path
//             fill="#fff"
//             d="M545.4 261.9c-7.1-13-12.9-31.1-13.3-37.6-.6-9 0-15.6 5.2-22.2s15-9.8 22.7-8.8a26.7 26.7 0 0117.3 9.4c5.3 5.8 9.4 12.9 11.6 16.6"
//           ></path>
//           <path d="M588.9 219.2c-1.4.4-2.3-.7-2.8-1.4a93.9 93.9 0 00-8.9-12.5c-3.3-3.9-7.1-7-11.7-8.6a24.2 24.2 0 00-7.1-1.4 24.5 24.5 0 00-7.1.7 27 27 0 00-6.6 2.7 21 21 0 00-5.2 4.6 20.6 20.6 0 00-3.5 6.1 22.2 22.2 0 00-1.3 6.9 47.3 47.3 0 00.1 7.5 52.2 52.2 0 001.4 7.1c1.4 4.8 3.1 9.7 5 14.4a147.7 147.7 0 006.5 13.9c.4.7-1 2.3-2.4 2.6s-4-.6-4.4-1.4c-2.3-4.8-4.3-9.7-6.1-14.6a128.8 128.8 0 01-4.6-15.3c-.3-1.3-.5-2.6-.7-4a16.4 16.4 0 01-.2-2.2v-2a57 57 0 01.4-8.2 27.2 27.2 0 012.3-8.2c.7-1.3 1.4-2.5 2.2-3.7l1.3-1.7 1.4-1.6a28.8 28.8 0 017-5 27.6 27.6 0 018-2.5 25.6 25.6 0 018.3-.2 27.4 27.4 0 0115.1 6.7 50.6 50.6 0 015.5 5.9 111.3 111.3 0 018.7 13.2c.3.7.8 1.9-.6 2.2z"></path>
//           <use
//             width="31.4"
//             height="33.93"
//             transform="matrix(.99 -.03 .04 1 539.85 203.52)"
//             xlinkHref="#paw-pads"
//           ></use>
//         </g>
//         <g>
//           <path
//             fill="#fff"
//             d="M538.2 239.3c-3.2 1.6-33 10.8-37 28-.4 1.8-2.1 18.9 7 26 5.5 4.3 12.7 2.8 25 0 10.3-2.3 19-5.8 40-16 9.1-4.4 16.6-8.2 22-11"
//           ></path>
//           <path d="M595.1 266.4c.1 1.4-1.4 2.4-2.4 2.9l-18.3 9.4c-6.2 3.1-12.3 6.1-18.6 9a120.8 120.8 0 01-19.6 7.2l-5.1 1.2-5.1 1.1a43.4 43.4 0 01-5.2.9 33.8 33.8 0 01-5.6.3 17.8 17.8 0 01-5.8-1.5 6.1 6.1 0 01-1.4-.7l-1.3-.9-2.2-2a23.6 23.6 0 01-5.2-10.2 44.5 44.5 0 01-1.3-10.9c0-.9.1-1.8.1-2.7a6.6 6.6 0 00.1-1.4v-.7c.1-.3.1-.7.2-.9a21.6 21.6 0 012.1-5.5 33.4 33.4 0 017.1-8.7 67.1 67.1 0 018.7-6.4 121.7 121.7 0 0119-9 1.5 1.5 0 011.7.6 3.4 3.4 0 01.9 1.9c.1 1.5-1.6 4.2-2.6 4.6a91.1 91.1 0 00-17.8 8.5 40.1 40.1 0 00-7.6 5.8 22.8 22.8 0 00-5.2 7.3l-.4 1-.3 1a1.7 1.7 0 00-.2.5v.4c-.1.4-.1.8-.2 1.2s-.1 3.1-.1 4.7a35.4 35.4 0 001.4 9.3 15.6 15.6 0 004.5 7.3c2 1.9 4.7 2.6 7.8 2.5a55.9 55.9 0 009.7-1.2l4.9-1.1 4.9-1.1a121 121 0 0018.8-6.8c12.4-5.3 24.6-11.5 36.8-17.4 1.1-.5 2.7-1 2.8.5z"></path>
//         </g>
//       </g>
//     </svg>
//   );
// }


export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>
          Chi Thanh Pham - Web Developer who likes to create creative things.
        </title>
        <meta
          name="description"
          content="I'm Chibi, a web developer and multi-talent based in Frankfurt City. I’m the co-founder and CEO of Zenmade, where we develop portfolio websites that empower regular people to present their brand and work."
        />
      </Head>
      {/* <video src="/videos/Zoom65.mp4" type="video/mp4" autoplay="true" muted="true" playsInline="true" className="min-w-screen h-screen absolute top-0 mx-auto"></video> */}
      <Container className="mt-9">
        <BongoCat />
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Chi Thanh Pham - <nobr> Web Developer who likes to </nobr> create creative things.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Chibi, a web developer and multi-talent based in Frankfurt City. I’m the co-founder and CEO of Zenmade, where we develop portfolio websites that empower regular people to present their brand and work.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/friedchibz"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/chibichibz/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/ChibiChibz/"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/ctpham-94/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {projects.map((project) => (
              <Project key={project.slug} project={project} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      projects: (await getAllProjects())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
