import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Gear() {
  return (
    <>
      <Head>
        <title>Gear - Chibi</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. Ive never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations. For video editing
              with Final Cut the new Silicon Chips are just ridicilously fast.
            </Tool>
            <Tool title="Dell 27 inch USB-C-Monitor - S2722DC">
              It features a large 27-inch display with a resolution of 2560 x
              1440 pixels, which provides a clear and detailed picture with
              excellent color accuracy. This makes it ideal for a wide range of
              tasks, including productivity work, gaming (60 fps only), and
              media consumption. For a 27 inch monitor I would not recommend a
              4k display if you use it with MacOS.
            </Tool>
            <Tool title="Zoom 65 Olivia Edition">
              I just recommend any custom mechanical keyboard because it is a
              prestige typing experience. As typing is my career, I don’t mind
              investing more money. Akko has budget pre-built options. If you
              just want functionality go with Logitech MX Keys.
            </Tool>
            <Tool title="Logitech MX Master 3">
              The quality, the extra buttons, the horizontal scroll. For coding
              and video editing it’s the best mouse on the market.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code with every plugin that you need.">
              Overall, if you are a programmer or developer looking for a
              versatile and powerful code editor, I would definitely recommend
              giving Visual Studio Code a try.
            </Tool>
            <Tool title="iTerm2/Hyper">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use.
            </Tool>
            <Tool title="LocalWP for WordPress">
              The easiest way to word locally with WordPress.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          {/* <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Reflect">
              Using a daily notes system instead of trying to keep things
              organized by topics has been super powerful for me. And with
              Reflect, it’s still easy for me to keep all of that stuff
              discoverable by topic even though all of my writing happens in the
              daily note.
            </Tool>
            <Tool title="SavvyCal">
              Great tool for scheduling meetings while protecting my calendar
              and making sure I still have lots of time for deep work during the
              week.
            </Tool>
            <Tool title="Focus">
              Simple tool for blocking distracting websites when I need to just
              do the work and get some momentum going.
            </Tool>
          </ToolsSection> */}
        </div>
      </SimpleLayout>
    </>
  )
}
