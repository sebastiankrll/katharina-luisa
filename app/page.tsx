import Image from "next/image"
import "./home.css"

export default function Home() {
    return (
        <div className='page' id="home">
            <Image
                className="page-bg"
                src="/bg/bg_home.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="Background Image"
            />
            <div id="home-desc">
                <div id="home-name">
                    <p>Katharina</p>
                    <p>Luisa</p>
                </div>
                <p id='home-bio'>There are no words to describe my passion for dancing.</p>
            </div>
        </div>
    )
}