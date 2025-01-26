import "./Brands.css";
import icon1 from "../Images/icon1.jpg";
import icon2 from "../Images/icon2.jpg";
import icon3 from "../Images/icon3.jpg";
import icon4 from "../Images/icon4.jpg";
import icon5 from "../Images/icon5.jpg";
import icon6 from "../Images/icon6.jpg";
import icon7 from "../Images/icon7.jpg";
import icon8 from "../Images/icon8.jpg";
import icon9 from "../Images/icon9.jpg";
import icon10 from "../Images/icon10.jpg";

function Brands() {
  const items = [
    { id: 1, image: icon1 },
    { id: 2, image: icon2 },
    { id: 3, image: icon3 },
    { id: 4, image: icon4 },
    { id: 5, image: icon5 },
    { id: 6, image: icon6 },
    { id: 7, image: icon7 },
    { id: 8, image: icon8 },
    { id: 9, image: icon9 },
    { id: 10, image: icon10 },
  ];
  return (
    <>
      <h2 className="text-center">FAMOUS BRANDS</h2>
      

      <div className="flex-container d-flex justify-content-center">
        {items.map((item) => (
          <div key={item.id} className="flex-item">
            <img
              src={item.image}
              alt={`Item ${item.id}`}
              className="item-image"
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default Brands;
