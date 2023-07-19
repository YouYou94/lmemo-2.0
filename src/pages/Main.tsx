import { Outlet } from 'react-router-dom';
import { Header, Nav, Template } from '../components';

const Main = () => {
  return (
    <Template>
      <Header />
      <Nav />
      <Outlet />
    </Template>
  );
};

export default Main;
