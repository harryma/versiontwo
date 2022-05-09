import * as React from "react";
import "../scss/style.scss";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import instagram from "../images/ig.svg";
import ModelViewer from "../components/modelviewer/modelviewer";

// markup
const IndexPage = () => {
  return (
    <div className="max-w-screen-lg m-auto flex flex-col">
      <header>
        <Header />
      </header>
      <main className="flex flex-row flex-wrap">
        <Main />
        <div className="model-viewer hidden pointer-events-none md:block lg:pointer-events-auto">
          <ModelViewer
            scale="40"
            modelPath={"./assets/macbook.gltf"}
            position={[800, -200, 850]}
            // position={[75, -290, -250]}
          />
        </div>
      </main>
      <footer className="mt-4 pb-4">
        <h2 className="font-medium text-sm">Contact</h2>
        <p>harryma@gmail.com</p>
        <ul className="flex flex-row items-center">
          <li>
            <a
              href="https://www.instagram.com/harrym.svg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="" className="igIcon" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default IndexPage;
