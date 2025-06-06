import { Cover } from "@/components/Cover";
import {Projects} from "@/components/Projects"



// import '@/assets/fonts/'
import '@/assets/global.css'

export default function Home() {
  return (
    <main className="container mx-auto">
      <Cover />
      <Projects />
    </main>
  );
}
