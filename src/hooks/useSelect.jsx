import React, {useState} from 'react'

function useSelect(initialState, options) {

    const [state, setState] = useState(initialState)
    
    const SelectNoticias = () => (
        <select 
        className="browser-default"
        >
            <option value="">--Select</option>

        </select>
        )
    
    return [state, SelectNoticias]
}

export default useSelect
