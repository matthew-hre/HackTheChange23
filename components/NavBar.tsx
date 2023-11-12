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
        <div className="h-20 bg-foreground relative bottom-20 w-full ">
            <div className="relative h-20 w-20 bg-primary rounded-full -top-10 m-auto">
                <Link href="/chat">
                    <Image src={calPal} alt="calpal" width={80} height={80} className="h-20 w-20" />
                </Link>
            </div>
            <div className="flex absolute bottom-0 w-full justify-around h-10 mb-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className='stroke-white h-8 w-8'
                        width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" /><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" /></svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className='stroke-white h-8 w-8'
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div className="w-20"></div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className='stroke-white h-8 w-8'
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5" /><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z" /></svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className='stroke-white h-8 w-8'
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default NavBar

