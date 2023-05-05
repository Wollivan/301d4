export default function SelectedBeast({ modalData, handleModal }) {
  return (
    <div className="modal" onClick={() => handleModal({})}>
      <h2>{modalData.title}</h2>
      <img src={modalData.image_url} alt="beast image" />
      <p>{modalData.description}</p>
    </div>
  );
}
