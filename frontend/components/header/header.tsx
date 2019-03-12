import Link from 'next/link';
import Nav from '../nav/nav';
import '../theme/variables.css';

const Header = () => {
  return (
    <>
      <div className="bar">
        <h1 className="logo">
          <Link href="/">
            <a>Components Shop</a>
          </Link>
        </h1>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
      <style jsx>{`
        .bar {
          border-bottom: 10px solid var(--black);
          display: grid;
          grid-template-columns: 1fr;
          justify-content: center;
          align-items: stretch;
          @media (--large-desktop) {
            grid-template-columns: auto 1fr;
            justify-content: space-between;
          }
        }
        .sub-bar {
          display: grid;
          grid-template-columns: 1fr auto;
          border-bottom: 1px solid var(--light-gray);
        }
        .logo {
          font-size: 2em;
          margin: 0;
          text-align: center;
          position: relative;
          z-index: 2;
          transform: skew(-7deg);
          & a {
            padding: 0.5em 1em;
            display: inline-flex;
            text-transform: uppercase;
            text-decoration: none;
          }
          @media (--large-desktop) {
            margin-left: 2em;
            text-align: initial;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
