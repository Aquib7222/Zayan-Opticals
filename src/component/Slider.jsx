import "bootstrap/dist/css/bootstrap.min.css";
import Banner_5 from '../Images/Banner_5.jpg';
// import BannerImage from '../Images/Banner_image.jpg';
// // import New_Banner from '../Images/New_Banner.jpg';
// // import New_Banner1 from '../Images/New_Banner1.jpg';
// import New_Banner2 from '../Images/New_Banner2.jpg';
// import Banner-5 from '../Images/Banner-5.jpg';

import './Slider.css';
function Slider(){
    const divStyle1 = {
        backgroundImage: `url(${Banner_5})`,
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