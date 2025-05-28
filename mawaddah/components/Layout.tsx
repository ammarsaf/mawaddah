// components/Layout.tsx
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default Layout;
