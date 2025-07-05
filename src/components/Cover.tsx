'use client'

import { Image } from "./Image";

export function Cover() {
    return (
        <section id="fascia_azzurra" className="grid grid-cols-3 xs:grid-cols-1">
            <div className="foto_irene"></div>
            <div className="colonna_destra col-span-2">
                <h1>Irene Ucciero</h1>
                <h2>Portfolio</h2>
                <p className="bg-black titoletto">Ho lavorato con:</p>
                <div className="loghetti flex-wrap">
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Adobe Illustrator" title="Adobe Illustrator" src={"/images/loghetto-illustrator.png"} />
                        <p>Adobe Illustrator</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Adobe Photoshop" title="Adobe Photoshop" src={"/images/loghetto-photoshop.png"} />
                        <p>Adobe Photoshop</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Html" title="Html" src={"/images/loghetto-html.svg"} />
                        <p>Html</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Css" title="Css" src={"/images/loghetto-css.svg"} />
                        <p>Css</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Javascript" title="Javascript" src={"/images/loghetto-js.svg"} />
                        <p>Javascript</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Php" title="Php" src={"/images/loghetto-php.svg"} />
                        <p>Php</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Atom" title="Atom" src={"/images/loghetto-atom.svg"} />
                        <p>Atom</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Vs Code" title="Vs Code" src={"/images/loghetto-vscode.svg"} />
                        <p>Vs Code</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Wordpress" title="Wordpress" src={"/images/loghetto-wordpress.svg"} />
                        <p>Wordpress</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Affinity Design" title="Affinity Design" src={"/images/loghetto-affinity.svg"} />
                        <p>Affinity Design</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Filmora" title="Filmora" src={"/images/loghetto-filmora.png"} />
                        <p>Filmora</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Chat Gpt" title="Chat Gpt" src={"/images/loghetto-chatgpt.svg"} />
                        <p>Chat Gpt</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="React" title="React" src={"/images/loghetto-react.svg"} />
                        <p>React</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Next.Js" title="Next.Js" src={"/images/loghetto-nextjs.svg"} />
                        <p>Next.Js</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Git" title="Git" src={"/images/loghetto-git.svg"} />
                        <p>Git</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="GitHub" title="GitHub" src={"/images/loghetto-github.svg"} />
                        <p>GitHub</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Tailwindcss" title="Tailwindcss" src={"/images/loghetto-tailwind.svg"} />
                        <p>TailwindCss</p>
                    </div>
                    <div className="loghetti inline-block">
                        <Image width="200" height="200" alt="Bootstrap" title="Bootstrap" src={"/images/loghetto-bootstrap.svg"} />
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
        </section>
    )
}