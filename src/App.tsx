import { useEffect, useState } from "react";
import ToDo from "./Components/ToDo/ToDo";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AllInOne } from "./pages/HeaderContentFooter/AllInOne";
import { NotFound } from "./pages/NotFound/NotFound";
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setisLoggedIn] = useState(false);

//   useEffect(() => {
//     if (!isLoggedIn) {
//       navigate("/");
//     } else {
//       navigate("/todo");
//     }
//   }, [navigate, isLoggedIn]);

  return (
    <div>
      <Routes>
        <>
          <Route path="/" element={<MainPage />}/>
          <Route path="/todo" element={<ToDo />} />
          <Route path={"/all"} element={<AllInOne />} />
          <Route path="/*" element={<NotFound />} />
          {/* {localStorage.getItem("") ? ( <Route path={"/main"} element={<MainPage />} />
			) : (<Route path={"/all"} element={<AllInOne />} />)} */}

          {/* {isLoggedIn || (<button onClick={() => setisLoggedIn(true)}>Log me in</button>)} */}
        </>
      </Routes>
    </div>
  );
};

export default App;

