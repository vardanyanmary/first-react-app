import { Link } from "react-router-dom";
import "./AppLink.scss";

interface AppLinkProps {
  to: string;
  children: React.ReactNode;
}

export interface AppLinksProps {
links: AppLinkProps[];
}

export const AppLink = ({ links }: AppLinksProps) => {
  return (
    <span className="AppLink">
      {links.map(({ to, children }) => (
        <Link key={to} to={to}> {children} </Link>
        ))}
    </span>
  );
};




// import { Link } from "react-router-dom";
// import "./AppLink.scss";
        
// interface AppLinkProps {
//   to: string;
//   children: React.ReactNode;
// }
        
// export const AppLink = ({ children, to }: AppLinkProps) => {
//   return (
//     <ul className="AppLink">
//       <li className="AppLinkLi">
//         <Link to={to}>{children}</Link>
//       </li>
//     </ul>
//   );
// };
        