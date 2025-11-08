import Image from "next/image"
import "./home.css"

export default function Page() {
    return (
        <div className='page' id="home">
            <Image
                className="page-bg"
                src="/images/bg/bg_home.jpg"
                fill
                style={
                    {
                        objectFit: "cover",
                        objectPosition: "left"
                    }
                }
                alt="Background Image"
            />
            <div className="page-desc" id="home-desc">
                <div className="page-name" id="home-name">
                    <p>Katharina</p>
                    <p>Luisa</p>
                </div>
                <p>There are no words to describe my passion for dancing.</p>
            </div>
        </div>
    )
}