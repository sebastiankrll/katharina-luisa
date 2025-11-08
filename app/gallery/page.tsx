import path from "path"
import fs from "fs"
import { Photo } from "react-photo-album"
import sharp from "sharp";
import Gallery from "@/components/Gallery";
import "./lightbox.css"

async function getPhotos(): Promise<Photo[]> {
    const dir = path.join(process.cwd(), 'public/images/gallery')
    const files = fs.readdirSync(dir)

    return await Promise.all(
        files
            .filter((file) => /\.(jpe?g|png|webp|gif)$/i.test(file))
            .map(async (file) => {
                const filePath = path.join(dir, file)
                const metadata = await sharp(filePath).metadata()

                const rotated =
                    metadata.orientation === 6 || metadata.orientation === 8
                        ? { width: metadata.height, height: metadata.width }
                        : { width: metadata.width, height: metadata.height }

                return {
                    src: `images/gallery/${file}`,
                    width: rotated.width || 800,
                    height: rotated.height || 600,
                }
            })
    )
}

export default async function Page() {
    const photos = await getPhotos()

    return (
        <div className='page' id="gallery">
            <Gallery photos={photos} />
        </div>
    )
}