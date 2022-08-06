import { WavesBtnSubmit } from "./Buttons";

const PlayerForm = ({setState, state, errors, text, handleClick}) => {

    return (
        <div className="row">
            <h2 className='center'>{text.title}</h2>
            <form className="col s12" onSubmit={handleClick}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="firstName" onChange={(event) => {setState(currentState => ({ ...currentState, firstName: event.target.value}))}} value={state.firstName} type="text" />
                        <label className="active" htmlFor="firstName">* First Name</label><p style={{color: "red", margin: "0"}}>{errors.firstName ? errors.firstName : ""}</p>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" onChange={(event) => {setState(currentState => ({ ...currentState, lastName: event.target.value}))}} value={state.lastName} type="text" />
                        <label className="active" htmlFor="lastName">* Last Name</label><p style={{color: "red", margin: "0"}}>{errors.lastName ? errors.lastName : ""}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6" >
                        <input id="phone" onChange={(event) => {setState(currentState => ({ ...currentState, phone: event.target.value}))}} value={state.phone} type="number" />
                        <label className="active" htmlFor="phone">Phone</label><p style={{color: "red", margin: "0"}}>{errors.phone ? errors.phone : ""}</p>
                    </div>
                    <div className="input-field col s6" >
                        <input id="email" onChange={(event) => {setState(currentState => ({ ...currentState, email: event.target.value}))}} value={state.email} type="email" />
                        <label className="active" htmlFor="email">* Email</label><p style={{color: "red", margin: "0"}}>{errors.email ? errors.email : ""}</p>
                    </div>
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
                < WavesBtnSubmit name={text.submitName} />
                </div>
            </form>
        </div>  
    )
}

export default PlayerForm;