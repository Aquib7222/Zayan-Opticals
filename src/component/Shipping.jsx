import "./Shipping.css";

import { GiAnticlockwiseRotation } from "react-icons/gi";
import { SiAdguard } from "react-icons/si";
import { FaHandshake } from "react-icons/fa6";
import { HiCurrencyRupee } from "react-icons/hi2";
function Shipping() {
  return (
    <>
      <div className="flex_container d-flex justify-content-between shipping" style={{ marginLeft: "40px" }}>
        <div className="row" style={{ marginTop: "20px" }}>
          <div
            className="col-md-2"
            style={{
              backgroundColor: "#f7f9fc",
              borderRadius: "15px",
              padding: "0px",
              marginRight: "20px",
            }}
          >
            {" "}
            <div className="row shipping_height">
              <div className="col-md-6 ">
                <FaHandshake size={80} />
              </div>
              <div className="col-md-6">
                <h5>FREE Delivery</h5>
                <p style={{ lineHeight: "1" }}>24/7 amazing services</p>
              </div>
            </div>
          </div>


           {/* easy return  */}
          <div
            className="col-md-2 "
            style={{
              backgroundColor: "#f7f9fc",
              borderRadius: "15px",
              padding: "0px",
              marginLeft:"20px"
            }}
          >
            <div className="row">
              <div className="col-md-6 ">
                <GiAnticlockwiseRotation size={80} />
              </div>
              <div className="col-md-6">
                <h5>Easy Returns</h5>
                <p style={{ lineHeight: "1" }}>Within 30 Days</p>
              </div>
            </div>
          </div>

            {/* Best Prices and Servicess */}
          <div className="col-md-3"style={{
              backgroundColor: "#f7f9fc",
              borderRadius: "15px",
              padding: "0px",
              marginLeft:"20px"
            }}>
            <div className="row">
              <div className="col-md-6">
                <HiCurrencyRupee size={80} />
              </div>
              <div className="col-md-6">
                <h5>Best Prices & Services</h5>
                <p style={{ lineHeight: "1" }}>Orders ₹1000 or more</p>
              </div>
            </div>
           
          </div>
          <div className="col-md-3"
          style={{
            backgroundColor: "#f7f9fc",
            borderRadius: "15px",
            padding: "0px",
            marginLeft:"20px"
          }}>
            <div className="row">
              <div className="col-md-6">
                <SiAdguard size={80} />
              </div>
              <div className="col-md-6">
                <h5>COMMITEMENT TO QUALITY</h5>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Shipping;
