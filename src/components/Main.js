// Main.js
import About from "./main_components/About";
import Pengalaman from "./main_components/Pengalaman";
import Pendidikan from "./main_components/Pendidikan";
import Skills from "./main_components/Skills";
import LastProjects from "./main_components/LastProjects";
import Hero from "./main_components/Hero";

export default function Main() {
  return (
    <main class="container">
      <div class="row">
        <div class="col-md mb-5">
          <Pengalaman />
        </div>
        <div class="col-md mb-5">
          <Pendidikan />
        </div>
      </div>
      <div class="row">
        <Skills />
        <LastProjects />
      </div>
    </main>
  );
}
