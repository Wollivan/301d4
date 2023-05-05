import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import SelectedBeast from "./Components/SelectedBeast";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [beastData, setBeastData] = useState(data);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});

  function handleModal(beast) {
    setModalShow(!modalShow);
    setModalData(beast);
  }

  return (
    <div className="App">
      <Header />
      <Main beastData={beastData} handleModal={handleModal} />
      <Footer />
      {modalShow && <SelectedBeast modalData={modalData} handleModal={handleModal} />}
    </div>
  );
}

export default App;
