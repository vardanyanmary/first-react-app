import { FC } from 'react'
import './Header.css'

interface Header {
    textsTitle: string
}

const Header:FC <Header> = ({ textsTitle }) => {
    return(
        <header className='Header'>
            <span>
                {textsTitle}
            </span>
        </header>
    )
}

export default Header