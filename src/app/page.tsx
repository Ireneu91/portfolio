import { Cover } from "@/components/Cover";
import {Projects} from "@/components/Projects"

import Script from 'next/script'

import '@/assets/fonts/montserrat/stylesheet.css'
import '@/assets/global.css'

export default function Home() {
  return (
    <main className="container mx-auto">

      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
			<Script src="js/jquery.fancybox.js" />
      <Cover />
      <Projects />
    </main>
  );
}
