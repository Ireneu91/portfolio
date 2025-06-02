'use client'

export function Projects() {

    const projectsUrl: string[] = ['/img1.jpeg', '/img2'];

    //jsx
    return (
        <div>
            {projectsUrl.map((src, i) => (
                <div key={i}>
                    <img src={src} alt={src}  />
                    <button>Cliccami</button>
                </div>
            ))}
        </div>
    )
}