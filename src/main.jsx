import './main.css'
import himalaya from './himalaya.jpg';
import sahyadri from './sahyadri.jpg';
import arvallis from './aravalli-range.jpg';
import { createRoot } from 'react-dom/client'


const navbarStyle = {
  backgroundColor: "#2c3e50",
  padding: "10px",
  marginBottom: "20px",
  textAlign: "center",
  padding:"20px"
};
function Navbar(){
  return(
    <div className="navbar" style={navbarStyle}>
      <h1 style={{color:"white", textAlign:"center"}}>Mountain Ranges of India</h1>
    </div>
  )
}


function Card(props){
const {image, heading , subheading} = props;
return(
   <div className="card">
    <img src={image} alt="image" className="card-image"/>
    <div className="container">
      <h4 style={{textAlign:"center", color:"black"}}><b>{heading}</b></h4>
      <p>{subheading}</p>
    </div>
  </div>
  
)
}
const footerStyle = {
  backgroundColor:"#2c3e50", 
  color:"white", 
  textAlign:"center", 
  padding:"10px", 
  marginTop:"20px"
};

function Footer(){
  return (
    <div className="footer" style={footerStyle}>
      <p>© 2024 Mountain Ranges of India. All rights reserved.</p>
    </div>
  )
}


createRoot(document.getElementById('root')).render(
  <>
  <Navbar/>
  <div className="card-container">
    <Card 
image={himalaya}
heading={"Himalaya"}
subheading={"The Himalayas, a majestic mountain range in Asia, stretch across five countries: Bhutan, India, Nepal, China, and Pakistan. Home to the world's highest peaks, including Mount Everest, the Himalayas are renowned for their breathtaking landscapes, diverse ecosystems, and rich cultural heritage. This region is a hub for adventure tourism, attracting trekkers and mountaineers from around the globe. The Himalayas also hold significant spiritual importance, with numerous sacred sites and pilgrimage routes for various religions."}
/>
  <Card 
image={sahyadri}
heading={"Sahyadri"}
subheading={"The Sahyadri mountain range, also known as the Western Ghats, is a UNESCO World Heritage Site located in western India. Stretching along the western coast, it spans several states including Maharashtra, Karnataka, Kerala, and Tamil Nadu. The Sahyadri range is renowned for its rich biodiversity, hosting a variety of flora and fauna, many of which are endemic to the region. It is also known for its scenic beauty, with lush green landscapes, waterfalls, and hill stations like Munnar and Coorg. "}
/>
<Card 
image={arvallis}
heading={"Aravalli Range"}
subheading={"The Aravalli Range is one of the oldest mountain ranges in India, stretching across the states of Rajasthan, Haryana, and Gujarat. It extends approximately 692 kilometers from Delhi in the north to Gujarat in the southwest. The range is characterized by its rugged terrain, rocky outcrops, and sparse vegetation. The Aravalli Range plays a crucial role in influencing the climate of the region, acting as a barrier to the monsoon winds. It is also rich in mineral resources, including deposits of copper, lead, zinc, and marble. "}
/>
  </div>

  <Footer/>
  </>
)
