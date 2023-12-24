"use client"
import Image from 'next/image'
import { useLanyard } from 'react-use-lanyard'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button"

export default function Home() {
  const { loading, status } = useLanyard({
    userId: "728318691716104222",
    socket: true,
  });

  function emailMe() {
    window.location.href = "mailto:me@maxhenson.co.uk"
  }

  let isChristmas = false
  if (new Date().getMonth() === 11) isChristmas = true

  return (
    <>
      <br/>
      <h1 className="text-5xl font-semibold">{isChristmas ? 🎄 Merry Christmas! : Hi👋</h1>
      <br/>
      <hr/>
      <br/>
      <p className="text-2xl font-semibold mb-1">About Me</p>
      <Card>
        <CardContent className={cn("p-6")}>
          <div>
            I'm a backend developer from Essex, UK.
            I have experience in: NodeJS, Discord.JS, CSS, HTML and more! 
            I mainly work on Backend Development and MongoDB but I can do some frontend as well, but that is not my strong point. 
            I am always open for commission offers, so give me a message on Discord or Email me.
          </div>
        </CardContent>
      </Card>
      <br/>
      <p className="text-2xl font-semibold mb-1">My Experience</p>
      <div className="grid md:grid-rows-2 grid-rows-4 grid-flow-col gap-4">
        <a href="https://relatio.cc"><Card>
          <CardContent className={cn("p-6")}>
            <div>
              <p className="font-semibold text-xl pb-1">Relatio</p>
              <hr/>
              <p className="pt-1 pb-1">Founder</p>
              <p className='text-xs text-gray-400'>July 2022 - Present</p>
            </div>
          </CardContent>
        </Card></a>
        <a href="https://maxhenson.co.uk"><Card>
          <CardContent className={cn("p-6")}>
            <div>
              <p className="font-semibold text-xl pb-1">Harmony Radio</p>
              <hr/>
              <p className="pt-1 pb-1">Developer</p>
              <p className='text-xs text-gray-400'>May 2021 - October 2023</p>
            </div>
          </CardContent>
        </Card></a>
        <a href="https://maxhenson.co.uk"><Card>
          <CardContent className={cn("p-6")}>
            <div>
              <p className="font-semibold text-xl pb-1">Airbridge Group</p>
              <hr/>
              <p className="pt-1 pb-1">Developer</p>
              <p className='text-xs text-gray-400'>April 2023 - Present</p>
            </div>
          </CardContent>
        </Card></a>
        <a href="https://radiowiki.net"><Card>
          <CardContent className={cn("p-6")}>
            <div>
              <p className="font-semibold text-xl pb-1">RadioWiki</p>
              <hr/>
              <p className="pt-1 pb-1">Developer</p>
              <p className='text-xs text-gray-400'>January 2023 - Present</p>
            </div>
          </CardContent>
        </Card></a>
      </div>
      <br/>
      <p className="text-2xl font-semibold mb-1">Contact Me</p>
      <Card>
        <CardContent className={cn("p-6")}>
          <p>Give me an email to <span className="font-semibold">me@maxhenson.co.uk</span> or click the button below.
          I will respond as quickly as possible.
          You can also message me on Discord which is located at the bottom of this page.
          I look forward to hearing from you soon!</p>
          <br/>
          <hr/>
          <br/>
          <Button className='w-full' onClick={emailMe}>Email</Button>
        </CardContent>
      </Card>
      <br/>
      <p className="text-2xl font-semibold mb-1">Find me on Discord</p>
      <Card>
        <CardContent className={cn("p-6")}>
          <div className="flex flex-row gap-4 items-center">
            <div>
              <Avatar>
                <AvatarImage src={`https://cdn.discordapp.com/avatars/728318691716104222/${status?.discord_user.avatar}.webp`} alt="@shadcn" />
                <AvatarFallback>MH</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <div className="flex flex-row gap-3 items-center">
                {!loading ? <div className={cn("w-2 h-2 rounded-full", status?.discord_status === "online" && "bg-green-500", status?.discord_status === "dnd" && "bg-red-500", status?.discord_status === "idle" && "bg-yellow-500", status?.discord_status === "offline" && "bg-gray-500")}></div> : <div className="w-2 h-2 rounded-full bg-gray-500"></div>}
                <h2 className="font-semibold">maxhenson</h2>
              </div>
              {!loading && status?.discord_status !== "offline" ? <div>{status?.spotify ? (<p>Currently Listening to <span className="font-semibold">{status.spotify.song}</span> by <span className="font-semibold">{status.spotify.artist}</span></p>) : (<p>{status?.activities[0].id === "custom" ? status.activities[0].state : status?.activities[0].name + ": " + status?.activities[0].state}</p>)}</div> : <p></p>}
            </div>
          </div>
        </CardContent>
      </Card>
      <br/>
    </>
  )
}
