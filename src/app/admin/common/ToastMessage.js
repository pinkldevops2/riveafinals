import { useEffect, useState } from "react";

export default function ToastMessage({ message, type, show, onClose }) {
    useEffect(() => {
        if (show) {
            const toastElement = document.getElementById("liveToast");
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
        }
    }, [show]);

    return (
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
            <div id="liveToast" className={`toast align-items-center text-bg-${type} border-0`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">{message}</div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={onClose} data-bs-dismiss="toast"></button>
                </div>
            </div>
        </div>
    );
}
