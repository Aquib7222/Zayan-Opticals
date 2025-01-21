import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cate_1 from '../Images/cate_1.jpg';
import cate_2 from '../Images/cate_2.jpg';
import cate_3 from '../Images/cate_3.jpg';
import cate_4 from '../Images/cate_4.jpg';
import cate_5 from '../Images/cate_5.jpg';
import cate_6 from '../Images/cate_6.jpg';

import './Products.css';

function Products(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 6
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    return<>

        <div className="Slider_Products">
        <h5 className="d-flex justify-content-center py-3">OUR BEST SELLERS ICONS</h5>
                <Carousel className='Card_Main' responsive={responsive}>
                   
                        <div className="Card_Slider"><img src={cate_1} alt="" /><h6>Aviator Glasses</h6></div>
                        <div className="Card_Slider"><img src={cate_2} alt="" /><h6>Round Glasses</h6></div>
                        <div className="Card_Slider"><img src={cate_3} alt="" /><h6>Model Glasses</h6></div>
                        <div className="Card_Slider"><img src={cate_4} alt="" /><h6>Cat-Eyes Glasses</h6></div>
                        <div className="Card_Slider"><img src={cate_5} alt="" /><h6>Classic Glasses</h6></div>
                        <div className="Card_Slider"><img src={cate_6} alt="" /><h6>panda Glasses</h6></div>
                        <div className="Card_Slider"><img src={cate_1} alt="" /><h6>Round Glasses</h6></div>
                        <div className="Card_Slider"><img src={cate_1} alt="" /><h6>Round Glasses</h6></div>
                    
                    
                </Carousel>;
        </div>
       
                
    </>
}
export default Products;
