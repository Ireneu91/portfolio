'use client'
import LightGallery from 'lightgallery/react';


// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useState } from 'react';
import Image from 'next/image';


export function Projects() {

    const projectsUrl: string[][] = [
        ['/images/copertina-ecomax.webp', '/images/logo-ecomax.png', '/images/ecomax-home.webp', '/images/ecomax-lavora-con-noi.webp', '/images/ecomax-risparmio-energetico.webp', '/images/ecomax-aziende.webp', '/images/ecomax-contatti.webp'], 
        ['/images/copertina-gisonni.webp', '/images/logo-macelleria-gisonni.svg', '/images/gisonni-home.webp', '/images/gisonni-home2.webp', '/images/gisonni-chi-siamo.webp', '/images/gisonni-contatti.webp', '/images/22-gisonni.webp', '/images/22-gisonni2.webp', '/images/22-gisonni3.webp'],
        ['/images/copertina-serramenti-dga.png', '/images/logo-serramenta-dga.svg', '/images/serramenti-dga-home.png', '/images/serramenti-dga-home2.png', '/images/serramenti-dga-pvc.png', '/images/serramenti-dga-pvc2.png', '/images/serramenti-dga-contatti.png', '/images/21-serramenti-dga.png', '/images/21-serramenti-dga2.png', '/images/21-serramenti-dga3.png'],
        ['/images/copertina-ruiu.png', '/images/logo-ruiu.webp', '/images/antonello-ruiu-home.png', '/images/antonello-ruiu-home2.png', '/images/antonello-ruiu-chi-sono.png', '/images/antonello-ruiu-servizi.png', '/images/antonello-ruiu-contatti.png'],
        ['/images/copertina-noblesse.webp', '/images/logo-noblesse.webp', '/images/11-noblesse.png', '/images/11-noblesse2.png', '/images/11-noblesse3.png', '/images/11-noblesse4.png', '/images/11-noblesse5.png', '/images/11-noblesse6.png', '/images/11-noblesse7.png'],
        ['/images/copertina-landing-isacco.webp', '/images/logo-isacco.svg', '/images/20-isacco-horeca.png', '/images/20-isacco-horeca2.png', '/images/20-isacco-horeca3.png', '/images/20-isacco-horeca4.png', '/images/20-isacco-horeca5.png'],
        ['/images/copertina-rame-puro.webp', '/images/logo-ramepuro.webp', '/images/rame-puro.png', '/images/rame-puro2.png', '/images/rame-puro3.png', '/images/rame-puro4.png'],
        ['/images/copertina-identita-differente.webp', '/images/logo-identita-differente.webp', '/images/15-identita-differente.png'],
        ['/images/copertina-mondo-cancello.webp', '/images/logo-mondo-cancello.png', '/images/mondo-cancello.png', '/images/mondo-cancello2.png', '/images/mondo-cancello3.png'],
        ['/images/copertina-peloperfetto.webp', '/images/logo-pelo-perfetto.png', '/images/12-peloperfetto.png', '/images/12-peloperfetto2.png', '/images/12-peloperfetto3.png', '/images/12-peloperfetto4.png'],
        ['/images/copertina-spider.webp', '/images/logo-spider-design.svg', '/images/17-spiderdesign.png', '/images/17-spiderdesign2.png', '/images/17-spiderdesign3.png', '/images/17-spiderdesign4.png', '/images/17-spiderdesign5.png', '/images/17-spiderdesign6.png'],
        ['/images/copertina-ielf.webp', '/images/logo-ielf.webp', '/images/19-ielf.png', '/images/19-ielf2.png', '/images/19-ielf3.png', '/images/19-ielf4.png'],
        ['/images/copertina-irrigo.webp', '/images/logo-irrigo-vignola.webp', '/images/irrigo.png', '/images/irrigo2.png'],
        ['/images/copertina-ecupower.webp', '/images/logo-ecupower.webp', '/images/16-ecupower.png', '/images/16-ecupower2.png', '/images/16-ecupower3.png', '/images/16-ecupower4.png', '/images/16-ecupower5.png'],
        ['/images/copertina-rmcarwash.webp', '/images/logo-rossetti.webp', '/images/14-rmcarwash.png', '/images/14-trattamento-bellissima.png', '/images/14-dove-siamo.png'],
        ['/images/copertina-motorspace.webp', '/images/logo-motor-space.webp', '/images/18-motorspace.png', '/images/18-motorspace2.png', '/images/18-motorspace3.png', '/images/18-motorspace4.png'],
        ['/images/copertina-trucioli.webp', '/images/logo-trucioli-di-storia.webp', '/images/trucioli.png', '/images/trucioli2.png', '/images/trucioli3.png'],
        ['/images/copertina-stop-peli.webp', '/images/logo-stop-peli.svg', '/images/stop-peli.png'],
        ['/images/copertina-ddomia.webp', '/images/logo-ddomia-bianco.svg', '/images/13-ddomiapiovedisacco.png', '/images/13-ddomiapiovedisacco2.png', '/images/13-ddomiapiovedisacco3.png', '/images/13-ddomiapiovedisacco4.png'],
        ['/images/copertina-prestito-veloce.webp', '/images/logo-prestitoveloce.webp', '/images/prestito-veloce.png', '/images/prestito-veloce2.png', '/images/prestito-veloce3.png'],
        ['/images/copertina-edilcol.webp', '/images/logo-edilcol.webp', '/images/edilcol.png', '/images/edilcol2.png', '/images/edilcol3.png', '/images/edilcol4.png'],
        ['/images/copertina-pipolo.webp', '/images/logo-pipolo-spose.webp', '/images/8-pipolo.png', '/images/8-pipolo2.png', '/images/8-pipolo3.png', '/images/8-pipolo4.png', '/images/8-pipolo5.png'],
        ['/images/copertina-avvocate.webp', '/images/logo-avvocate.png', '/images/avvocate.png', '/images/avvocate2.png'],
        ['/images/copertina-senapa.webp', '/images/logo-senapa.webp', '/images/senapa.png', '/images/senapa2.png'],
        ['/images/copertina-hairtender.webp', '/images/logo-hairtender.webp', '/images/9-haitender.png'],
        ['/images/copertina-scuoleria.webp', '/images/logo-scuoleria.webp', '/images/scuoleria.png', '/images/scuoleria2.png', '/images/scuoleria3.png'],
        ['/images/copertina-reti-per-gatto.webp', '/images/logo-reti-per-gatto.png', '/images/reti-per-gatto.png', '/images/reti-per-gatto2.png', '/images/reti-per-gatto3.png'],
        ['/images/copertina-remax.webp', '/images/logo-remax.webp', '/images/remax.png', '/images/remax2.png', '/images/remax3.png'],
        ['/images/copertina-personalissimo.webp', '/images/logo-personalissimo.png', '/images/personalissimo.png', '/images/personalissimo2.png', '/images/personalissimo3.png'],
        ['/images/copertina-mobili.webp', '/images/logo-mobili.webp', '/images/6-mobili-per-passione.png', '/images/6-mobili-per-passione2.png', '/images/6-mobili-per-passione3.png', '/images/6-mobili-per-passione4.png'],
        ['/images/copertina-tolkien.webp', '/images/logo-eterea.webp', '/images/4-eterea-tolkien.png', '/images/4-eterea-tolkien2.png', '/images/4-eterea-tolkien3.png', '/images/4-eterea-tolkien4.png', '/images/5-eterea-libroverde.png', '/images/5-eterea-libroverde2.png', '/images/5-eterea-libroverde3.png', '/images/5-eterea-libroverde4.png', '/images/3-eterea-bacche.png', '/images/3-eterea-bacche2.png', '/images/3-eterea-bacche3.png', '/images/3-eterea-bacche4.png', '/images/2-eterea-calendario.png', '/images/2-eterea-calendario2.png', '/images/2-eterea-calendario3.png', '/images/2-eterea-calendario4.png', '/images/1-eterea-libro-blu.png', '/images/1-eterea-libro-blu2.png', '/images/1-eterea-libro-blu3.png', '/images/1-eterea-libro-blu4.png'],
        ['/images/copertina-altolato.webp', '/images/logo-altolato.png', '/images/altolato.png', '/images/altolato2.png', '/images/altolato3.png'],
        ['/images/copertina-creattiva.webp', '/images/logo-creattivabymarta.png', '/images/creattiva.png', '/images/creattiva2.png', '/images/creattiva3.png', '/images/creattiva4.png'],
        ['/images/copertina-genitori.webp', '/images/logo-genitori.webp', '/images/7-genitori-boccioli.png', '/images/7-genitori-boccioli2.png', '/images/7-genitori-boccioli3.png', '/images/7-genitori-boccioli4.png'],
        ['/images/copertina-filicori.webp', '/images/logo-filicori.webp', '/images/filicori.png', '/images/filicori2.png', '/images/filicori3.png'],
        ['/images/copertina-jv.webp', '/images/logo-jv.webp', '/images/jv.png', '/images/jv2.png', '/images/jv3.png'],

    ];
    const [isOpen, setIsOpen] = useState<boolean[]>([false, false]);

    const onInit = () => {
        console.log('init gallery')
    }

    const afterOpen = (index: number) => {
        const copyIsOpen = [...isOpen];
        copyIsOpen[index] = !copyIsOpen[index];
        setIsOpen(copyIsOpen)
    }

    return (
        <section id="portfolio_irene_ucciero" className="grid grid-cols-3 gap-10 xs:grid-cols-1">
            {projectsUrl.map((imagesList, i) => (
                <LightGallery
                    key={i}
                    onInit={onInit}
                    onAfterOpen={() => afterOpen(i)}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    <div className='w-full group flex box_portfolio' style={{backgroundImage: `url(${imagesList[0]})`}}>
                        <div className="cover"></div>
                        <Image width="100" height="164" alt="logo" src={imagesList[1]} className="logo_cliente"></Image>
       
                        <div className="didascalia mt-auto">
                            <div className='button'>
                                <a title="Scopri il sito" href="https://sitoinanteprima.it/portfolio-irene/ecomax-impianti/" className="btn btn1">Scopri il sito</a>
                                <a title="Guarda il layout" className="btn btn2" href={imagesList[2]} data-caption="<strong>Ecomax impianti</strong> - Home">Guarda il layout</a> 
                            </div>
                        </div>
                    </div>

                    {isOpen[i] && imagesList.slice(3).map( (image,j) => (
                        <a key={j} href={image} ata-caption="<strong>Ecomax impianti</strong> - Lavora con noi" >
                             <Image width="200" height="200" alt="Anteprima" src={image} />
                        </a>
                    ))}
                </LightGallery>
            ))}
        </section>
        
    )
}