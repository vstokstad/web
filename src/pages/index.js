import React from 'react';
import { Layout, SEO as Seo } from '../components/common';
import { About, Contact, Intro, Projects, SourceCode } from '../components/landing';

const Index= () => (
  <Layout>
    <Seo/>
    <Intro />
    <About />
    <Projects />
    <SourceCode />
    <Contact />
  </Layout>
);
export default Index;