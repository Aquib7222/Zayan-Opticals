// import { useState } from "react";
// import "./Modal.css";

// const Modal = () => {
//   const [showModal, setshowModal] = useState(false);

//   const closeModal = () => {
//     setshowModal(false);
//   };
//   const MyModal = () => {
//     return (
//       <>
//         <div classNameName="modal-wrapper">
//         <div classNameName="modal-container" >
//           <p>Items Added To Cart</p>;
//           <div >
//             <button>Continue Shopping</button>
//             <button>Go to Cart</button>
//             <button onClick={closeModal}>Exit</button>
//           </div>
//         </div>
//         </div>
//       </>
//     );
//   };
//   return (
//     <>
//       <button onClick={() => setshowModal(true)}>Modal Open</button>

//       {showModal && <MyModal />}
//     </>
//   );
// };

// export default Modal;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Modal=()=>{

  return <>

{/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  
  
  </>

}
export default Modal;