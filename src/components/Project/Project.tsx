import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

const projects:any=[
  {
    link:"https://meloqdevices.com/",
    name:"meloqdevices.com",
description:"Fulfilling the needs of healthcare and sports professionals, striving to produce high quality products that help them save time while objectifying their work.",
tech:["Shopify"]
  },
  {
    link:"https://dollymamainc.com/",
    name:"dolly mama boutique",
description:"Dolly Mama Boutique carries a selection of home dècor, women's apparel, accessories, gifts, and high-end furniture by Uttermost. The boutique stocks a mix of products from both local Pacific Northwest designers and big-name labels including Free People, Charlie B, Testimony, PJ Harlow, Hobo Intl., and Dolly Mama's signature embellished brand Dolly Mama Designs.  ",
tech:["Shopify"]
  },
  {
    link:"https://www.andbloss.com/",
    name:"&Bloss - A Coffee Bean site",
description:" &Bloss is your go-to destination for a seamless coffee journey, offering both personalized subscriptions and wholesale options.",
tech:["Shopify"]
  },
  {
    link:"https://hawkeyeelectronics.com/",
    name:"hawkeyeelectronics.com",
description:" HawkEye® Electronics has been dedicated to designing, developing, and engineering the most adaptable, versatile, and user-friendly sonar products available.",
tech:["Shopify"]
  },
  {
    link:"https://kool4skool.com/",
    name:"kool4skool.com",
description:" It Is a Stationery store, range of goods counts more than 5000 world famous brands. It means that you can easily choose the best office supplies and other related goods at our store without any problems.",
tech:["Shopify"]
  },
  {
    link:"https://sassyn.shop/",
    name:"sassyn.shop",
description:" This website sells women's cloth products and helps women look their best. It is easy to find what you need, whether it's cloth Tops, bottoms,Dressess and Jumpsuits or accessories. The site is useful for women who want to look their best and need some help.",
tech:["Shopify"]
  },
  {
    link:"https://www.sentinel-laboratories.com/",
    name:"sentinel-laboratories.com",
description:"Sentinel Laboratories provides specialist technical expertise on both chemical and health and safety issues, having directors who are a member of The Royal Society of Chemistry and The Institute of Safety and Health.",
tech:["Shopify"]
  },
  {
    link:"https://southbeachfashion9thst.com/",
    name:"The South Beach Perfume Shop",
description:" Experience the luxury with The South Beach Perfume Shop and find your signature scent.The South Beach Perfume Shop offers an exceptional collection of authentic fragrances for men and women.",
tech:["Shopify"]
  },
  {
    link:"https://wellseasonedtable.com/",
    name:"Well Seasoned Table",
description:" Well Seasoned Table creating freshly dried, organically grown seasonings from their farm. Fast forward, and ten years later, the dream has grown. They are now work with dozens of farmers and producers right here in the Appalachian Mountains, and across the country to source the freshest ingredients with as little waste and as small of a carbon footprint as possible.",
tech:["Shopify"]
  }
]



export function Project() {
  return (
    <Container id="project">
      <h2>My Projects Work</h2>
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