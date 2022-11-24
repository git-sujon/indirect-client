import React from "react";

const ConfirmationModal = ({title, message, modalCancel,actionMessage, successAction}) => {

  return (
    <div>
      

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
            {message}
          </p>
          <div className="modal-action">
            <label onClick={successAction} htmlFor="confirmation-modal" className="btn btn-error">
              {actionMessage}
            </label>
            <button onClick={modalCancel} className="btn btn-accent">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
