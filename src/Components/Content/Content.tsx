import { FC } from 'react';
import './Content.css';

interface ContentProps {
    content:string
}

const Content : FC <ContentProps> = ( {content} ) => {
    return(
        <main className='Content'>
            <span>
                {content}
            </span>
        </main>
    )
}
export default Content