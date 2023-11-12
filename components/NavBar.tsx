import React from 'react'
import Image from "next/image";
import Link from "next/link";
import calPal from "@/images/CalPal_FINAL-removebg-preview.png"
import home from "@/images/home-2.svg"
import calendar from "@/images/calendar.svg"
import inbox from "@/images/inbox.svg"
import settings from "@/images/settings.svg"

function NavBar() {


    return (
        <div className="h-20 w-full bg-foreground absolute bottom-0">
            <div className="relative h-20 w-20 bg-primary rounded-full -top-10 m-auto">
                <Link href="/chat">
                    <Image src={calPal} alt="calpal" width={80} height={80} className="h-20 w-20" />
                </Link>
            </div>
            <div className="flex absolute bottom-0 w-full justify-around h-10 mb-5">
                <div>
                    <Image src={home} alt="home" width={20} height={20} className="h-10 w-10 text-white fill-white stroke-white" />
                </div>
                <div>
                    <Image src={calendar} alt="home" width={20} height={20} className="h-10 w-10 text-white fill-white stroke-white" />
                </div>
                <div className="w-20"></div>
                <div>
                    <Image src={inbox} alt="home" width={20} height={20} className="h-10 w-10 text-white fill-white stroke-white" />
                </div>
                <div>
                    <Image src={settings} alt="home" width={20} height={20} className="h-10 w-10 text-white fill-white stroke-white" />
                </div>
            </div>
        </div>
    )
}

export default NavBar

