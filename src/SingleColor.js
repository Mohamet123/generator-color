import React, { useEffect, useState } from 'react';
import { rgbToHex } from './utils';



function SingleColor({rgb,weight, index, hexColor}) {
    const [alert , setAlert] = useState(false)
    const bcg = rgb.join(",")
    const hex  = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`

    useEffect(() => {
        const timeout = setTimeout(() => {

        }, 3000);
        return() => clearTimeout(timeout)
    }, [alert])
    return (
        <div className='card mt-3' >
            <article className={`color ${index > 10 && 'color-light'}`}
            style={{backgroundColor: `rgb(${bcg})`}}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(hexValue)
            }}>
                <p className='percent-value'>{weight}%</p>
                <p className='color-value'>{hexValue}</p>
                {alert && <p className='alert'>copied to clipboard</p>}
            </article>
        </div>
    );
}

export default SingleColor;