import {Howl, Howler} from 'howler';
import { useRef } from 'react'
import clickSfxOpen from '/src/assets/clickOpen.mp3'

const clickSound = new Howl({
    src : [clickSfxOpen],
    volume: 0.5,
});

export default function ButtonOpenSound({ children, onClick, ...props}) {
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