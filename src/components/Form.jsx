import React from "react";
import styles from "./Form.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from 'prop-types'


const Form = ({setCategoria}) => {
  const OPCIONES = [   
    {value: "general", label: "General"},
    {value: "business", label: "Negocios"},
    {value: "entertaiment", label: "Entretenimiento"},
    {value: "health", label: "Salud"},
    {value: "science", label: "Ciencia"},
    {value: "sports", label: "Deportes"},
    {value: "technology", label: "Tecnologia"},

  ];

  const handleSubmit = (e) => {
      e.preventDefault();
      setCategoria(categoria)
  }

  const [categoria, SelectNoticias] = useSelect('science', OPCIONES);
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

          <SelectNoticias />

          <input type="text" className="input-field col s12" />
          <input
            type="submit"
            className={`${styles["btn-block"]} btn-large amber darken-2`}
            value="Buscar"
            
          />
        </form>

      </div>
    </div>
  );
};

Form.propTypes = {
  setCategoria: PropTypes.func.isRequired
}

export default Form;
