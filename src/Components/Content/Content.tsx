import { FC } from 'react';
import './Content.css';

interface ContentProps {
    content:string
}

const Content : FC <ContentProps> = ( {content} ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('success');
    };

    // const enterMouse = () => {
    //     console.log(' Hi ) '); 
    // };

    // const leaveMouse = () => {
    //     console.log(' Byee ( '); 
    // };

    return(
        <main className='Content' 
        // onMouseEnter={enterMouse} 
        // onMouseLeave={leaveMouse}
        >
            <p> {content} </p>

            <form>

                <label>
                    Username :
                    <input type = "text"  name = 'username'/>
                </label>

                <label>
                    Password :
                    <input type = "password" name = 'password' />
                </label>

                <button onClick = { handleClick } > Login </button>

            </form>
        </main>
    )
}
export default Content