import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ConfirmDeleteModal({ id, msg, onDelete }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        await onDelete(id);
        handleClose();
    };

    return (
        <>
            {/* Delete button that triggers the modal */}
            <button onClick={handleShow} className="btn text-danger">
                <i className='fa fas fa-trash'></i>
            </button>

            {/* Bootstrap Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>{msg}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
