import {Howl, Howler} from 'howler';
import { useRef } from 'react'
import clickSfxClose from '/src/assets/clickClose.mp3'
import soundHover from '/src/assets/soundHover.mp3'

export default function ButtonCloseSound({ children, onClick, ...props}) {
    const hoverSound = new Howl({ src : [soundHover], volume: 0.4});
    const clickSound = new Howl({ src : [clickSfxClose], volume: 0.5});

    const handleClick = (e) => {
        clickSound.play();
        if (onClick) onClick(e);
    };
    const handleHover = () =>{
        hoverSound.play();
    }

    return (
        <button onClick={handleClick} onMouseEnter={ handleHover } {...props}>
            {children}
        </button>
    );
}