import { Obj } from ".";

const Homework1: React.FC<Obj> = (props) => {
  const { header, content, footer } = props;

  return (

    <div>

      <h1>
        <header> {header} - Shnorhavor nor tari </header>
      </h1>


      <h2>
        <main> {content} </main>
      </h2>


      <h2>
        <footer> {footer} </footer>
      </h2>

    </div>

  );
};

export default Homework1;
