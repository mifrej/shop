import Link from 'next/link';

const Nav = () => (
  <ul>
    <li>
      <Link href="/items">
        <a>Items</a>
      </Link>
    </li>
    <li>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
    </li>
    <li>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
    </li>
    <li>
      <Link href="/orders">
        <a>Orders</a>
      </Link>
    </li>
    <li>
      <Link href="/me">
        <a>Account</a>
      </Link>
    </li>
    <style jsx>{`
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-self: end;
        width: 100%;
        justify-content: center;
        font-size: 1em;
        @media (--large-desktop) {
          width: initial;
          justify-content: initial;
          font-size: 1.5em;
        }
      }
      li {
        list-style: none;
        padding: 0 0.5em;
        display: flex;
        align-items: center;
        position: relative;
        text-transform: uppercase;
        font-weight: bold;
        background: none;
        font-size: 0.6em;
        @media (--tablet) {
          font-size: 1em;
          padding: 1em 2em;
        }
        & a,
        & button {
          color: var(--black);
          &::before {
            content: '';
            width: 2px;
            background: var(--medium-gray);
            height: 100%;
            left: 0;
            position: absolute;
            transform: skew(-20deg);
            top: 0;
            bottom: 0;
          }
          &::after {
            content: '';
            width: 0;
            height: 2px;
            position: absolute;
            left: 50%;
            margin-top: 2em;
            background: var(--secondary);
            transform: translateX(-50%);
            transition: width 0.4s;
            transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
          }
          &:hover,
          &:focus {
            outline: none;
            &::after {
              width: calc(100% - 5em);
            }
          }
        }
      }
    `}</style>
  </ul>
);

export default Nav;
