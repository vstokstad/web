import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, About, Contact, Projects, SourceCode } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <SourceCode />
    <About />
    <Contact />
  </Layout>
);