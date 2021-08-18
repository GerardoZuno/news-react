import React from 'react'
import styles from './Form.module.css'
import useSelect from '../hooks/useSelect'

const Form = () => {

    const [categoria, SelectNoticias] = useSelect()
    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
               <form >
                   <h2 className={styles.heading}>
                       Encuentra Noticias por Categoria
                   </h2>

                   <SelectNoticias />

                   <input type="text" className="input-field col s12" />
                   <input 
                   type="submit"
                   className={`${styles['btn-block']} btn-large amber darken-2`}
                   value="Buscar"
                    />
               </form>
            </div>            
        </div>
    )
}

export default Form
