import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  z-index: 50;
`;

const ModalContainer = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  color: #fff;
  z-index: 100;
  border-radius: 5px;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Modal = ({ showModal, setShowModal, e }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback((e) => {
    if (e.key === "Escape" && showModal) {
      setShowModal(false);
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef} className="p-0 md:p-8">
          <ModalContainer
            role="dialog"
            aria-labelledby="modalTitle"
            id="thisModal"
            className="w-screen h-screen md:h-full md:w-4/5 overflow-y-auto"
          >
            <section className="flex flex-row justify-between pt-4">
              <h1 id="modalTitle" className="font-bold text-xl pt-2">
                Experience
              </h1>
              <button
                className="text-xl btn btn-modal"
                aria-label="Close Dialog"
                onClick={() => setShowModal((prev) => !prev)}
              >
                &times;
              </button>
            </section>
            <section className="pt-5">
              <p>
                Some notable client work during my time at&nbsp;
                <a
                  href="https://www.appnovation.com"
                  target="_blank"
                  className="hrefLink"
                  rel="noreferrer"
                >
                  Appnovation Technologies
                </a>
                , between 2012 to 2020.
              </p>
            </section>
            <section className="flex flex-col md:flex-row text-sm">
              <h2 className="mb-2 font-semibold">Clients:</h2>
              <div className="flex flex-col md:flex-row">
                <ul className="md:pl-10 list-disc ml-4">
                  <li>
                    <a
                      href="https://911memorial.org"
                      target="_blank"
                      className="hrefLink"
                      rel="noreferrer"
                    >
                      National September 11 Memorial &amp; Museum
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://medicare.bluecrossnc.com"
                      target="_blank"
                      className="hrefLink"
                      rel="noreferrer"
                    >
                      Bluecross Blueshield of North Carolina
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sesamestreet.org"
                      target="_blank"
                      className="hrefLink"
                      rel="noreferrer"
                    >
                      Sesame Street
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://execed.economist.com"
                      target="_blank"
                      className="hrefLink"
                      rel="noreferrer"
                    >
                      The Economist Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://stories.yeti.com"
                      target="_blank"
                      className="hrefLink"
                      rel="noreferrer"
                    >
                      YETI Stories
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tcl.com"
                      target="_blank"
                      className="hrefLink"
                      rel="noreferrer"
                    >
                      TCL
                    </a>
                  </li>
                </ul>
                <ul className="md:pl-5 list-disc ml-4">
                  <li>New York State Education Dept.</li>
                  <li>Visit California</li>
                  <li>JD Power</li>
                  <li>SICK</li>
                  <li>WWE</li>
                </ul>
              </div>
            </section>
            <section className="mt-6 flex flex-col text-sm">
              <h2 className="mb-2 font-semibold">Technical:</h2>
              <div className="flex flex-col md:flex-row">
                <p className="m-0">
                  HTML5, CSS, SASS, Javascript, jQuery, PHP, MySQL, Gatsby,
                  Reactjs, Gulp, Webpack, JSON, TWIG, Handlebars, Drupal,
                  Wordpress, Shopify, Material UI
                </p>
              </div>
            </section>
            <section className="mt-6 flex flex-col text-sm">
              <h2 className="mb-2 font-semibold">Software &amp; Tools:</h2>
              <div className="flex flex-col md:flex-row">
                <p className="m-0">
                  Adobe CC ( Photoshop, Illustrator, XD, Lightroom, Premiere ),
                  Figma, Sketch, Invision, VS Code, Atlassian ( JIRA,
                  Confluence, BitBucket ), Git, Final Cut Pro
                </p>
              </div>
            </section>
            <section className="mt-6 flex flex-col text-sm">
              <h2 className="mb-2 font-semibold">Other Skills:</h2>
              <div className="flex flex-col md:flex-row">
                <p className="m-0">
                  Agile / Scrum / Waterfall methodologies, Web Accessibility, UX
                  Foundations, User Acceptance Testing
                </p>
              </div>
            </section>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};
