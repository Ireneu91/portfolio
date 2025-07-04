'use client';

// import plugins if you need

import { projects } from './projectsData'
import { generateImageLink, Image } from './Image';
import '../assets/css/jquery.fancybox.css'

export function Projects() {
    

    return (
        <section id="portfolio_irene_ucciero">
            <div className="box_fluid_max">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <div key={idx}>
                            <div className="box_portfolio" style={{ backgroundImage: `url(${generateImageLink(project.coverimage)})` }}>
                                <div className="cover"></div>
                                <Image className="logo_cliente" alt="logo" src={project.clientLogo} />
                                <div className="didascalia">
                                    <div className="button">
                                        <a title="Scopri il sito" href={project.clientLink} className="btn btn1">
                                            Scopri il sito
                                        </a>
                                        <a
                                            title="Guarda il layout"
                                            className="btn btn2"
                                            href={generateImageLink(project.clientPreview)}
                                            data-fancybox={project.dataFancybox}
                                            data-caption={project.dataCaption}
                                        >
                                            Guarda il layout
                                        </a>
                                        {project.images &&
                                            project.images.map((image, i) => (
                                                <a
                                                    key={i}
                                                    href={generateImageLink(image.href)}
                                                    data-fancybox={image.dataFancybox}
                                                    data-caption={image.dataCaption}
                                                    style={{ display: 'none' }}
                                                ></a>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
