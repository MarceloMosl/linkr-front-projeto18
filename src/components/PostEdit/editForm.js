import React, { useState } from "react";

function EditForm({ editedMessage, setEditedMessage, handleEditSubmit, handleEditCancel}) {
  function handleSubmit(event) {
    event.preventDefault();
    handleEditSubmit(event); 
  }

  function handleKeyUp(event) {
    if (event.key === "Escape") {
      handleEditCancel();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={editedMessage}
        onChange={(event) => setEditedMessage(event.target.value)}
        onKeyUp={handleKeyUp}
      />
    </form>
  );
}

export default EditForm;
