
export default function AppMain() {
    const articoli = ['Crisi energetica in Europa', 'Intelligenza artificiale e lavoro', 'Allarme clima', 'Trasporti sostenibili', 'Innovazione tecnologica']
    return (
        <div className="card">
            <div className="list-group list-group-flush fw-bold">
                {articoli.map((articolo, i) =>
                    <a href='#' key={i} className="list-group-item bg-primary-subtle border border-black">{articolo}</a>
                )}
            </div>
        </div>

    )
}