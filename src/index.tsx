import React from 'react';
import ReactDOM from 'react-dom/client';
import Homework1 from './Homework1';
// import App from './App';

export interface Obj {
	header: string;
	content: string;
	footer: string;
}

// const obj: Obj = {
// 	header: 'HEADER',
//   content: 'CONTENT',
// 	footer: 'FOOTER'
// };


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Homework1 
    
        header = 'HEADER'
        content = 'CONTENT'
        footer = 'FOOTER' 

    />
		{/* <App {...data} /> */}

	</React.StrictMode>,
);
