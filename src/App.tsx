interface Data {
    h1: string
    h2: string
    h3: string
}

const data: Data = {
    h1: 'Heading tag 1',
    h2: 'Heading tag 2',
    h3: 'Heading tag 3',
}

const App = () => {
    return (
        <div>
            <h1>{data.h1}</h1>
            <h2>{data.h2}</h2>
            <h3>{data.h3}</h3>
            <input type="text" placeholder="name"/> 
        </div>
    )
}

export default App




//--- Arsen's code from first lesson ---

// import { Data } from ".";

// interface ArmenianBook {
// 	type: 'Grapar' | 'Ashxarabar';
// 	pageCount: number;
// 	title: string;
// 	size: 'small' | 'medium' | 'big' | 'extraBig';
// 	isAncient: boolean;
// }

// const getAllArmenianBooks = async (): Promise<ArmenianBook[]> => {
// 	return [
// 		// {
// 		// 	isAncient: false,
// 		// 	pageCount: 100,
// 		// 	size: 'medium',
// 		// 	title: 'Ninja JS',
// 		// 	type: 'Grapar',
// 		// },
// 	];
// };


// // const sum = (num1: number, num2: number): number => {
// // 	console.log(num1 / num2);

// // 	return num1 / num2;
// // };
// // sum(1, 2);

// const App: React.FC<Data> = (props) => {
// 	const { h1, h2, h3, h4, h5, h6 } = props;

// 	return (
// 		<div>
// 			<h1>{h1}</h1>
// 			<h2>{h2}</h2>
// 			<h3>{h3}</h3>
// 			<h4>{h4}</h4>
// 			<h5>{h5}</h5>
// 			<h6>{h6}</h6>
// 			<input type='text' placeholder='name' />
// 		</div>
// 	);
// };

// export default App;



// //homework 

// // obj --> {header:,content:, footer:}
// // App ->  Header, Content , Footer