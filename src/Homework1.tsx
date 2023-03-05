import { Fragment } from 'react'
import Content from "./Components/Content/Content"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"

export interface Data {
  header: string;
  content: string;
  footer: string;
}

const data : Data = {
  header: 'Text from HEADER component ',
  content: 'Text from CONTENT component',
  footer: 'Text from FOOTER component',
}

const Homework1 = () => {
    return (
      <Fragment>
        <Header textsTitle = {data.header}/>
        <Content content = {data.content}/>
        <Footer  footer= {data.footer}/>
      </Fragment>

// Same as 
//   <>
//   <Header textsTitle = {data.header}/>
//   <Content content = {data.content}/>
//   <Footer  footer= {data.footer}/>
// </>

  )
}

export default Homework1




// const Homework1: React.FC<Obj> = (props) => {
//   const { header, content, footer } = props;
//   return (
//     <div>
//         <header> {header} - Shnorhavor nor tari </header>
//         <main> {content} </main>
//         <footer> {footer} </footer>
//     </div>
//   );
// };
// export default Homework1;