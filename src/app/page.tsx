import { Cover } from "@/components/Cover";
import {Projects} from "@/components/Projects"

// import '@/assets/fonts/'
import '@/assets/global.css'

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="bg-red-900 text-xl">Il mio sito</h1>
      <div>
        <span>aaa</span>
        <p>asd</p>
      </div>
      <Cover />
      <Projects />
    </main>
  );
}
