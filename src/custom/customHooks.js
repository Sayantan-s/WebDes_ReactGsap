import React from 'react';

export const useWindowReszer = () => {
    const [resize,setSize] = React.useState([0,0]);
    const Resizer = () => {
        setSize([window.innerWidth,window.innerHeight]);
    }
    React.useEffect(() => {
        window.addEventListener('resize',Resizer);
        return () => {
            window.removeEventListener('resize',Resizer);
        }
    },[resize]);

    return resize;
}