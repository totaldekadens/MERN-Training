import { WavesBtnClose } from '../Interaction/Buttons'

const Modal = ({ shouldShow, onRequestClose, children }) => {

	return shouldShow ? (
		<div style={ModalBackground}>
			<div style={ModalBody} onClick={e => e.stopPropagation()}>
				<WavesBtnClose handleClick={onRequestClose}/>
				{children}
			</div>
		</div>
	) : null;
}

const ModalBackground = {
        position: "fixed",
        zIndex: 1,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
}

const ModalBody = {
	backgroundColor: "white",
	margin: "10% auto",
	padding: "20px",
	width: "50%",
    borderRadius: "10px"
};

export default Modal