import React from "react";

function Modal({ label, children, modal, setModal }) {
  return (
    <div className={`modal ${modal ? "modal-open" : ""}`} role="dialog">
      <div className="modal-box">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">{label}</h3>
          <button
            tabIndex={"3"}
            onClick={setModal}
            className="btn btn-sm btn-circle btn-ghost "
          >
            ✕
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
      <label className="modal-backdrop" onClick={setModal}>
        Close
      </label>
    </div>
  );
}

export default Modal;
