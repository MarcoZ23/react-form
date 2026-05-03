import { useState } from 'react'
export default function AppMain() {
    const [articles, setArticles] = useState(['Crisi energetica in Europa',
        'Intelligenza artificiale e lavoro',
        'Allarme clima', 'Trasporti sostenibili',
        'Innovazione tecnologica'])

    const [newArticle, setNewArticle] = useState('')
    const addArticle = event => {
        event.preventDefault()
        const addArticle = [...articles, newArticle]
        setArticles(addArticle)
        setNewArticle('')
    }
    function removeArticle(i) {
        const filteredArticle = articles.filter((article, index) => index !== i)
        setArticles(filteredArticle)
    }
    return (
        <>
            <div className="card">
                <div className="list-group list-group-flush fw-bold">
                    {articles.map((article, i) =>
                        <a href='#' key={i} className="list-group-item bg-primary-subtle border border-black d-flex justify-content-between">{article}
                            <i className='bi bi-trash-fill' onClick={() => removeArticle(i)}></i>
                        </a>
                    )}
                </div>
            </div>
            <form onSubmit={addArticle}>
                <input type='text' value={newArticle} onChange={e => { setNewArticle(e.target.value) }}></input>
                <button className='mt-2 bg-warning fw-bold mx-1'>Invia Articolo</button>
            </form>
        </>
    )
}