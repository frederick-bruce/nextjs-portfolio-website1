import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Head from "next/head";
import About from "@/components/About";
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Frederick | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
