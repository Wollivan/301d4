export default function Modal({ modalImg, handleModal }) {
  return (
    <div className="modal" onClick={handleModal}>
      <img src={modalImg} alt="modal" />
    </div>
  );
}
