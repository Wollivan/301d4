import { useState } from "react";
import "./App.css";
import Modal from "./Modal";
const img1 =
  "https://images.unsplash.com/photo-1559930198-26e8d7f0a4f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
const img3 =
  "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80";
const img4 =
  "https://images.unsplash.com/photo-1584895738303-1bc3562a77b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80";
const img5 =
  "https://images.unsplash.com/photo-1578956919791-af7615c94b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80";
const img6 =
  "https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80";
const img7 = "https://avatars.githubusercontent.com/u/91621088?v=4";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  function handleModal(imgParam) {
    // change whether or not the modal is showing
    setShowModal(!showModal);

    // change WHAT the modal is showing
    setModalImg(imgParam);
  }

  return (
    <div className="App">
      <h1>Modal Demo</h1>
      <div className="img-wrap">
        <img src={img1} alt="yes alt" onClick={() => handleModal(img1)} />
        <img src={img3} alt="yes alt" onClick={() => handleModal(img3)} />
        <img src={img4} alt="yes alt" onClick={() => handleModal(img4)} />
        <img src={img5} alt="yes alt" onClick={() => handleModal(img5)} />
        <img src={img6} alt="yes alt" onClick={() => handleModal(img6)} />
        <img src={img7} alt="yes alt" onClick={() => handleModal(img7)} />
      </div>

      {/* the actual important part of the code! */}
      {showModal && <Modal modalImg={modalImg} handleModal={handleModal} />}
    </div>
  );
}

export default App;
