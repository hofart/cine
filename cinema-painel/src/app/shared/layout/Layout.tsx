import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>Header AQUI</div>
      <main>{children}</main>
      <div>Footer AQUI</div>
    </>
  );
};

export default Layout;
