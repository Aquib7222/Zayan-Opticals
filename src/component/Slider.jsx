import "bootstrap/dist/css/bootstrap.min.css";

import BannerImage from '../Images/Banner_image.jpg';

import './Slider.css';
function Slider(){
    const divStyle1 = {
        backgroundImage: `url(${BannerImage})`,
        height: '90vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return <div>

        <div className="Slider_image" style={divStyle1}>

           
        </div>

    </div>
}
export default Slider;