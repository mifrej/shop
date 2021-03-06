import Header from '../header/header';
import Meta from '../meta/meta';
import '../theme/variables.css';

const Page: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main>
      <Meta />
      <Header />
      <div className="inner">{children}</div>
      <style jsx>{`
        .inner {
          margin: 0 auto;
          padding: 2em;
          max-width: var(--max-width);
        }
      `}</style>
      <style jsx global>{`
        html {
          font-size: 16px;
          font-family: Verdana, Arial, sans-serif;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          font-size: 1em;
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
          color: var(--primary);
        }
        p {
          font-size: 1em;
          line-height: 1.6;
        }
      `}</style>
    </main>
  );
};

export default Page;
