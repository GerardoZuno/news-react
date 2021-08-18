import React, {useState} from 'react'

function useSelect(initialState, OPCIONES) {

    const [state, setState] = useState(initialState)

    const SelectNoticias = () => (
        <select 
        className="browser-default"
        value={state}
        onChange={(e) => setState(e.target.value)}
        >
            
        {OPCIONES.map(opcion =>(
            <option key={opcion.value} value={opcion.value}>
                {opcion.label}
            </option>
        ))}

        </select>
        )
    
    return [state, SelectNoticias]
}

export default useSelect
