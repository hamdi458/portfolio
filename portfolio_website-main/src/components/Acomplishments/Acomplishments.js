import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number:`Machine Learning intern at Ami insurance August 2021 - December 2021`, text: 'contrebuting and building a recommendation system model (k means unsupervised classification) that recemend the ideal insurance package for existed  and new client which is a good for client and company using Python data science libraries (Pandas, Scikit-learn, TensorFlow, Streamlit ...)'},
  { number: `full-stack developer intern at Sunevit Company Februar 2019 - May 2019`, text: `Build a web application of stock shelving in the company's warehouses.Technologies used: .NET Framework MVC 5, SQL SERVER jQuery, Ajax, Html, CSS, Bootstrap 4, javascript tools for visualization data (chartjs, canvasjs...)`, },

];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Experience</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
