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
        ['/images/scuoleria2.png', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'], 
        ['/images/scuoleria2.png', '/images/logo.png', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
        ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
        ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
        ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
        ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
        ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
        ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
        ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],

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
                    <div className='w-full group bg-cover bg-center h-[350px] flex box_portfolio' style={{backgroundImage: `url(${imagesList[0]})`}}>
                        <Image width="100" height="164" alt="logo" src={imagesList[1]} className="group-hover:block hidden absolute inset-y-[45%] inset-x-[50%]"></Image>
       
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