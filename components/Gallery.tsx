'use client'

import { useState } from "react";
import { MasonryPhotoAlbum, Photo } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Slideshow } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({ photos }: { photos: Photo[] }) {
    const [index, setIndex] = useState(-1)

    return (
        <>
            <div className='page' id="gallery">
                <MasonryPhotoAlbum photos={photos} onClick={({ index }) => setIndex(index)} />
            </div>
            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow]}
            />
        </>
    )
}