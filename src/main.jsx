import './main.css'
import himalaya from './himalaya.jpg';
import { createRoot } from 'react-dom/client'
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


createRoot(document.getElementById('root')).render(
  <>
  <Card 
image={himalaya}
heading={"Himalaya"}
subheading={"The Himalayas, a majestic mountain range in Asia, stretch across five countries: Bhutan, India, Nepal, China, and Pakistan. Home to the world's highest peaks, including Mount Everest, the Himalayas are renowned for their breathtaking landscapes, diverse ecosystems, and rich cultural heritage. This region is a hub for adventure tourism, attracting trekkers and mountaineers from around the globe. The Himalayas also hold significant spiritual importance, with numerous sacred sites and pilgrimage routes for various religions."}
/>

  </>
)
