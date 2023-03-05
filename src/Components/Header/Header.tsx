import { FC } from 'react'
import './Header.css'

interface HeaderProps {
    textsTitle: string
}

const Header : FC <HeaderProps> = ({ textsTitle }) => {
    return(
        <header className='Header'>
            <span>
                {textsTitle}
            </span>
        </header>
    )
}

export default Header