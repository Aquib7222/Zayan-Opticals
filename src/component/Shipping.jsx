import "./Shipping.css";
import { PiTruck, PiPhoneCall } from "react-icons/pi";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { SiAdguard } from "react-icons/si";

function Shipping() {
  return (
    <>
      <div className="flex_container" style={{ marginLeft: "25px" }}>
        <div
          className="row"
          style={{ border: "1px solid black", marginTop: "20px" }}
        >
          <div className="col-md-3">
            {" "}
            <PiTruck size={80} />
            <h5>FREE SHIPPING</h5>
          </div>
          <div className="col-md-3">
            <GiAnticlockwiseRotation size={80} />
            <h5>30 DAYS RETURN POLICY</h5>
          </div>
          <div className="col-md-3">
            {" "}
            <PiPhoneCall size={80} />
            <h5>24/7 CUSTOMER SUPPORT</h5>
          </div>
          <div className="col-md-3">
            <SiAdguard size={80} />
            <h5>COMMITEMENT TO QUALITY</h5>
          </div>
        </div>
      </div>
    </>
  );
}
export default Shipping;
