
export const WavesBtnGeneral = ({name, handleClick}) => {
    return <button className='btn waves-effect waves-light' onClick={handleClick}>{name}</button>
}

export const WavesBtnClose = ({handleClick}) => {
    return <button  className='btn waves-effect waves-light red lighten-3' onClick={handleClick}>Close</button>
}

export const WavesBtnSubmit = ({name}) => {
    return <button className='btn waves-effect waves-light' type='submit' name='action'>{name}</button>
}