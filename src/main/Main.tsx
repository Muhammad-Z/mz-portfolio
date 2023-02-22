import * as React from "react";
import Contact from "~components/contact/Contact";
import Overview from "~components/overview/Overview";
import Projects from "~components/projects/Projects";
import Skills from "~components/skills/Skills";

export default function Main() {
  return (<main>
    <Overview />
    <Skills />
    <Projects />
    <Contact />
  </main>)
}