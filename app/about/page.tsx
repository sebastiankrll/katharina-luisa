'use client'

import Image from "next/image"
import "./about.css"
import { useEffect, useState } from "react"
import ScrollDownIcon from "@/components/icons/ScrollDown"

export default function Page() {

    const [isMobile, setIsMobile] = useState(false)
    const [showVideo, setShowVideo] = useState(false)

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 1200)
        checkScreen()
        window.addEventListener("resize", checkScreen)

        return () => window.removeEventListener("resize", checkScreen)
    }, [])

    return (
        <div className='page' id="about">
            <Image
                className="page-bg"
                src="/images/bg/bg_about.jpg"
                fill
                style={
                    {
                        objectFit: "cover",
                        objectPosition: "center"
                    }
                }
                alt="Background Image"
            />
            <div className="page-desc" id="about-desc">
                <div className="page-name" id="about-name">
                    <p>I'm Katharina</p>
                </div>
                <p id="about-text">. . . a dancer with over 18 years of experience across a wide range of styles. My journey began with classical ballet in childhood, and later expanded into urban dance forms, where I explored Hip-Hop, House, Waacking and various other styles through workshops and training. I also explored Ballroom (Standard and Latin), where I earned a Gold Certificate, as well as Modern and Contemporary dance, which I have been practicing for over five years. Alongside my own training, I have taught dance classes for over three years at university, where I also choreographed and organized performances. Currently, I'm training in Ballet, House, and Waacking, further deepening my artistic voice. Outside of dance, I hold a black belt in Karate, which has shaped my sense of discipline, strength, and the way I move. My Master's studies in Psychology have broadened my perspective on expression, but dance continues to speak in ways words cannot. There are no words to describe my passion for dancing.</p>
                <div id="about-scroll">
                    <ScrollDownIcon />
                </div>
            </div>
            {(!isMobile || showVideo) &&
                <div id="about-video-wrapper">
                    <video
                        id="about-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                    >
                        <source src="/videos/about.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            }
            {isMobile && <button id="watch-button" className={showVideo ? " active" : ""} onClick={() => setShowVideo(prev => !prev)}>{showVideo ? "close" : "watch me"}</button>}
        </div>
    )
}