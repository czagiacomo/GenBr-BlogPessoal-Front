import Popup from "reactjs-popup";
import FormPostagem from "../formpostagem/FormPostagem";

import "reactjs-popup/dist/index.css";
import "./ModalPostagem.css";

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={<button className="btn btn-primary">Nova Postagem</button>}
        modal
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;
