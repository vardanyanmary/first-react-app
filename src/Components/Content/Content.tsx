import { FC } from 'react';
import './Content.css';

interface Content {
    content:string
}

const Content : FC <Content> = ( {content} ) => {
    return(
        <main className='Content'>
            <span>
                {content}
            </span>
        </main>
    )
}
export default Content