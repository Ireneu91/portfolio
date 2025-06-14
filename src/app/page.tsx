import { Cover } from "@/components/Cover";
import {Projects} from "@/components/Projects"

// fancybox
//import '@/assets/js/fancybox-master/jquery.fancybox.js'
import '@/assets/js/fancybox-master/jquery.fancybox.css'

import '@/assets/fonts/montserrat/stylesheet.css'
import '@/assets/global.css'

export default function Home() {
  return (
    <main className="container mx-auto">
      <Cover />
      <Projects />
    </main>
  );
}
