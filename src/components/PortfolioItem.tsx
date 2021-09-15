import { PostContent } from "../lib/posts";

type Props = {
  portfolio: {
  project?: string;
  techs?: string[];
  link?: string;
  }
};

export default function PortfolioItem({ portfolio }: Props) {
  return (
    <>
              {portfolio.project? <h1>{portfolio.project}</h1> : null}
              {portfolio.techs.length > 0 ? <h3>Tech Stack</h3>: null}
              <ul>{portfolio.techs.length > 0 ? portfolio.techs.map(tech => <li key={tech}>{tech}</li>): null }</ul>
              {portfolio.link ? <a href={portfolio.link}>Github Repo</a>: null}
        <style jsx>
          {`
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
    </>
  );
}
