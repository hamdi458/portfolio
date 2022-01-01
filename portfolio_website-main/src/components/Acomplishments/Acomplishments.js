import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number:`Machine Learning intern August 2021 - December 2021`, text: 'Development of predictive modeling used to meet specific needs to help the insurance team to optimize its business by giving the best package to clients using Python data science libraries (Pandas, Scikit-learn, TensorFlow, Streamlit ...)'},
  { number: `full-stack developer intern Februar 2019 - May 2019`, text: `Build a web application of stock shelving in the company's warehouses.Technologies used: .NET Framework MVC 5, SQL SERVER jQuery, Ajax, Html, CSS, Bootstrap 4`, },

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
