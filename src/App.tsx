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