/* Modal Styling */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.modal-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    max-width: 90%;
    max-height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.5rem;
    cursor: pointer;
    color: #555;
}

.close-btn:hover {
    color: #000;
}
