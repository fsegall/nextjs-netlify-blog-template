type Props = {
  portfolio: {
  project?: string;
  techs?: string[];
  repoUrl?: string;
  projectSite?: string;
  }
};

export default function PortfolioItem({ portfolio }: Props) {
  console.log(portfolio.projectSite)
  return (
    <>
              {portfolio.project? <h1>{portfolio.project}</h1> : null}
              {portfolio.techs.length > 0 ? <h3>Tech Stack</h3>: null}
              <ul>{portfolio.techs.length > 0 ? portfolio.techs.map(tech => <li key={tech}>{tech}</li>): null }</ul>
              <div className="links"> 
              {portfolio.repoUrl ? <a href={portfolio.repoUrl} target="blank">Github Repo</a>: null}
              {portfolio.projectSite ? <a href={portfolio.projectSite} target="blank">Project</a>: null}
              </div>
        <style jsx>
          {`
            .links {
              display: flex;
              justify-content: space-between;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
    </>
  );
}
