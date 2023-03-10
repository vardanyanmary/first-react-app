import { FC, ReactHTMLElement, useState } from 'react'
import './Header.css'

interface HeaderProps {
    textsTitle: string
}

const Header : FC <HeaderProps> = ({ textsTitle }) => {
//     const [header,setHeaderValue] = useState(textsTitle)

//     const handleChangeInput = (e:ReactHTMLElement<HTMLInputElement>) => {
//         const { target } = event
//         return e.target.value(header)

//        setHeaderValue(header)
//     }
    return(
        <header className='Header'>
            <p>
                {textsTitle}
            </p>
        </header>
    )
}

export default Header