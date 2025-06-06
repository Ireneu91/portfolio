'use client'

export function Projects() {

    const projectsUrl: string[] = ['/img1.jpeg', '/img2'];

    //jsx
    return (
        <section id="portfolio_irene_ucciero" className="grid grid-cols-3 xs:grid-cols-1">
            {projectsUrl.map((src, i) => (
                <div key={i}>
                    <img src={src} alt={src}  />
                    <img className="placeholder" width="6" height="4" alt="placeholder" src="@/images/svgs/placeholder6x4.svg"></img>
                    <div className="cover"></div>
                    <div className="button">
                        <a title="Scopri il sito" href="https://sitoinanteprima.it/portfolio-irene/ecomax-impianti/" className="btn btn1">Scopri il sito</a>
                        <a title="Guarda il layout" className="btn btn2" href="@/images/ecomax-home.webp" data-fancybox="sito_ecomax_impianti" data-caption="<strong>Ecomax impianti</strong> - Home">Guarda il layout</a>
                    </div>
                </div>
            ))}
        </section>
    )
}