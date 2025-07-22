import React, { useContext } from 'react';
import { Context } from '..';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer (() => {
    const {user} = useContext(Context) 
    const navigate = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Link style={{color: "white"}} to={SHOP_ROUTE}>Купить девайс</Link>
            {user.isAuth ?
            <Nav className="ms-auto">
            <Button onClick={() => logOut()} className="me-3" variant={"outline-light"}>Выйти</Button>
            <Button onClick={() => navigate(ADMIN_ROUTE)} style={{color: "white"}} variant={"outline-light"}>Админ-панель</Button>
          </Nav>
          :
          <Nav className="ml-auto">
            <Button 
            onClick={() => navigate(LOGIN_ROUTE)}
            style={{color: "white"}} variant={"outline-light"}>Авторизация </Button>
          </Nav>
            }
          
        </Container>
      </Navbar>
  );
});

export default NavBar;