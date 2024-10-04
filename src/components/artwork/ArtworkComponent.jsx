import ArtworkImage from "./components/ArtworkImage";
import redgirl from "../../assets/artwork/RedGirl.webp";
import bluegirl from "../../assets/artwork/BlueGirl.webp";
import yellowgirl from "../../assets/artwork/YellowGirl.webp";
import React, {useState} from "react";
import "./artworkComponent.css";
import ExpandedView from "./components/expandedView";
import {
    BLUE_GIRL_LABEL,
    BLUE_GIRL_TITLE,
    RED_GIRL_LABEL,
    RED_GIRL_TITLE,
    YELLOW_GIRL_LABEL,
    YELLOW_GIRL_TITLE
} from "./constants/artwork";

export const ArtworkComponent = () => {
    const [visible, setVisibility] = useState(false);
    const [image, setImage] = useState(null);
    const [label, setLabel] = useState(null);
    const [title, setTitle] = useState(null);

    const visibilityHandler = (image, title, label) => {
        setImage(image)
        setLabel(label)
        setTitle(title)
        setVisibility(!visible)
    }

    const forceClose = () => {
        setVisibility(false);
    }


    return (
        <div className="artwork-component-container">
            <h1 className="artwork-component-title">
                Artwork
            </h1>
            <div className="artwork-component-gallery">
                <ArtworkImage
                    title={RED_GIRL_TITLE}
                    label={RED_GIRL_LABEL}
                    image={redgirl}
                    visibilityHandler={() => visibilityHandler(redgirl, RED_GIRL_TITLE, RED_GIRL_LABEL)}/>
                <ArtworkImage
                    title={BLUE_GIRL_TITLE}
                    label={BLUE_GIRL_LABEL}
                    image={bluegirl}
                    visibilityHandler={() => visibilityHandler(bluegirl, BLUE_GIRL_TITLE, BLUE_GIRL_LABEL)}
                />
                <ArtworkImage
                    title={YELLOW_GIRL_TITLE}
                    label={YELLOW_GIRL_LABEL}
                    image={yellowgirl}
                    visibilityHandler={() => visibilityHandler(yellowgirl, YELLOW_GIRL_TITLE, YELLOW_GIRL_LABEL)}
                />
            </div>
            {visible && <ExpandedView label={label} title={title} image={image} visible={visible} close={forceClose}/>}
        </div>
    )
}