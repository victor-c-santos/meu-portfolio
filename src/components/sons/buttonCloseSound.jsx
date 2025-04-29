import {Howl, Howler} from 'howler';
import { useRef } from 'react'
import clickSfxClose from '/src/assets/clickClose.mp3'

const clickSound = new Howl({
    src : [clickSfxClose],
    volume: 0.5,
});

export default function ButtonCloseSound({ children, onClick, ...props}) {
    const handleClick = (e) => {
        clickSound.play();
        if (onClick) onClick(e);
    };

    return (
        <button onClick={handleClick} {...props}>
            {children}
        </button>
    );
}