import React from "react";
import PropTypes from 'prop-types'


function New({ noticia }) {
  const { urlToImage, url, title, description, source } = noticia;

  const imagen = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
          {
              imagen
          }
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Ver Noticia Completa
          </a>
        </div>
      </div>
    </div>
  );
}

New.propTypes = {
    titulo: PropTypes.object.isRequired
}
export default New;
