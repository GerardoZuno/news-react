import React from 'react'
import New from './New'
import PropTypes from 'prop-types'


function ListNews({noticias}) {
    return (
        <div className="row">
            {noticias.map(noticia =>(
               <New key={noticia.url}
               noticia={noticia}/> 
            ))}
        </div>
    )
}
ListNews.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default ListNews
