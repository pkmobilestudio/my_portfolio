import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

const projects:any=[
  {
    link:"https://kameleon.co.in/",
    name:"Kameleon - Cloth Selling Site",
description:" This website sells men's cloth products and helps men look their best. It is easy to find what you need, whether it's cloth shirts, pants, or accessories. The site is useful for men who want to look their best and need some help.",
tech:["Shopify"]
  },
  {
    link:"https://kameleon.co.in/",
    name:"Kameleon - Cloth Selling Site",
description:" This website sells men's cloth products and helps men look their best. It is easy to find what you need, whether it's cloth shirts, pants, or accessories. The site is useful for men who want to look their best and need some help.",
tech:["Shopify"]
  }
]



export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  
{
  projects.map((item:any,index:number)=>
    <ScrollAnimation animateIn="flipInX" key={index+JSON.stringify(item)}>
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>{item.name}</h3>
            <p>
              {
                item.description
              }
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>{item.tech.map((el:any,ind:number)=>el+(ind!==item.tech.length-1)?" ,":"")}</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>)
}

  
       

      </div>
    </Container>
  );
}