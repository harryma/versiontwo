import React from "react";
import "../header/header.scss";
import Modal from "react-modal";
import { graphql, useStaticQuery } from "gatsby";

const Header = () => {
  Modal.setAppElement("#___gatsby");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const data = useStaticQuery(graphql`
    query Experience {
      allMarkdownRemark(
        filter: { frontmatter: { section: { eq: "project" } } }
      ) {
        nodes {
          frontmatter {
            title
            href
          }
          id
        }
      }
      markdownRemark(frontmatter: { title: { eq: "skills" } }) {
        html
      }
    }
  `);

  const projects = data.allMarkdownRemark.nodes;
  const content = data.markdownRemark.html;

  return (
    <>
      <nav className="flex justify-end" id="main-nav">
        <button className="text-sm btn" onClick={openModal}>
          experience
        </button>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Experience"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(20px)",
          },
          content: {
            backgroundColor: "#000",
            border: "none",
          },
        }}
      >
        <header className="flex flex-row justify-between">
          <h2 className="font-bold text-xl">Experience</h2>
          <button
            className="text-xl btn btn-modal"
            aria-label="Close Dialog"
            onClick={closeModal}
          >
            &times;
          </button>
        </header>
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
          <h3 className="mb-2 font-semibold">Clients:</h3>
          <div className="flex flex-col md:flex-row">
            <ul className="md:pl-10 list-disc ml-4">
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.frontmatter.href}
                    className="hrefLink"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {project.frontmatter.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section
          dangerouslySetInnerHTML={{ __html: content }}
          className="mt-6 flex flex-col text-sm"
          id="skills"
        ></section>
      </Modal>
    </>
  );
};

export default Header;
