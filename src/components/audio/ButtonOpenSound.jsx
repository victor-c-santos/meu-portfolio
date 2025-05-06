import {Howl, Howler} from 'howler';
import { useRef } from 'react'
import clickSfxOpen from '/src/assets/clickOpen.mp3'
import soundHover from '/src/assets/soundHover.mp3'




export default function ButtonOpenSound({ children, onClick, ...props}) {
    const hoverSound = new Howl({ src : [soundHover], volume: 0.15});
    const clickSound = new Howl({ src : [clickSfxOpen], volume: 0.3});
    const isHovering = useRef(false);

    const handleClick = (e) => {
        clickSound.play();
        if (onClick) onClick(e);
    };
    const handleHover = () => {
        hoverSound.play();
    };

    return (
        <button onClick={handleClick} onMouseEnter={ handleHover } {...props}>
            {children}
        </button>
    );
}