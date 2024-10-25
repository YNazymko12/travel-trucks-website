import Navigation from '../Navigation/Navigation';

import css from './Header.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
    </>
  );
};

export default Layout;
