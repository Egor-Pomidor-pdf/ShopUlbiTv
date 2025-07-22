import { BrowserRouter,  useNavigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import { LOGIN_ROUTE } from "./utils/consts";

const App = observer(() => {
  const {user} = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)
  // const navigate = useNavigate()

  useEffect(() => {
    check().then(data => {
      user.setUser(data)
      user.setIsAuth(true)
    })
    // .catch(() => navigate(LOGIN_ROUTE))
    .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
    <NavBar/>
    <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
