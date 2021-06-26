import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import Layout from 'components/layout';
import SEO from 'components/Seo';
import Banner from 'sections/Banner';
import KeyFeature from 'sections/KeyFeature';
import ServiceSection from 'sections/ServiceSection';
import Feature from 'sections/Feature';
import CoreFeature from 'sections/CoreFeature';
import WorkFlow from 'sections/WorkFlow';
import Package from 'sections/Package';
import TeamSection from 'sections/TeamSection';
import TestimonialCard from 'sections/TestimonialCard';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="NextJs Landing Page" />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
