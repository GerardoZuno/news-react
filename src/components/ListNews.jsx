import React from 'react'
import New from './New'

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

export default ListNews
