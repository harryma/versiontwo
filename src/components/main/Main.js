import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Weather from "../weather/Weather";

const Main = () => {
  const data = useStaticQuery(graphql`
    query PageContent {
      markdownRemark(frontmatter: { title: { eq: "Harry Ma" } }) {
        html
        frontmatter {
          title
        }
      }
    }
  `);

  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  return (
    <>
      <section className="md:max-w-lg">
        <h1 className="font-bold text-xl mb-5">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          Based in <Weather /> Vancouver BC.
        </p>
      </section>
    </>
  );
};

export default Main;
