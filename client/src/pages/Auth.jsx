import React, { useContext, useState } from 'react';
import { Form, Card, Container, Button, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from "../http/userAPI"
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
 
  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
  
      user.setUser(data);
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch(e) {
      alert(e.response.data.message)
    }
  }
 
  return (
    <Container
      style={{ height: window.innerHeight - 54 }}
      className="d-flex justify-content-center align-items-center">
      <Card
        style={{ width: "600px" }}
        className="p-5">
        <h2 className={"m-auto"}>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column ">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ?
              <div>
                Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь</Link>
              </div> :
              <div>
                Есть аккаунт? <Link to={LOGIN_ROUTE}>Ввойдите</Link>
              </div>
            }

            <Button
              className="mt-3 align-self-end "
              variant={"outline-success"}
              onClick={click}
            >
              {isLogin ? "Ввойти" : "Регистрация"}
            </Button>
          </Row>

        </Form>

      </Card>
    </Container>
  );
});

export default Auth;