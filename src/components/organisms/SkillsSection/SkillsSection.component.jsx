import React from 'react';
import './SkillsSection.style.scss';

import phpIcon from '../../../assets/php.svg';
import nextIcon from '../../../assets/next-dot-js.svg';
import dotNetIcon from '../../../assets/dot-net.svg';
import jsIcon from '../../../assets/javascript.svg';
import reactIcon from '../../../assets/react.svg';
import nodeIcon from '../../../assets/nodejs.svg';
import mongoDbIcon from '../../../assets/mongodb.svg';

import Grid from '../../atoms/Grid/Grid.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Typography from '../../atoms/Typography/Typography.component';
import SkillsHeader from '../../molecules/SkillsHeader/SkillsHeader.component';

const SkillsSection = () => {
  const skillsFrontend = [
    {
      title: 'Next.js',
      iconSrc: nextIcon,
    },
    {
      title: 'React.js',
      iconSrc: reactIcon,
    },
    {
      title: 'JavaScript',
      iconSrc: jsIcon,
    },
  ];

  const skillsBackend = [
    {
      title: 'C# and .NET',
      iconSrc: dotNetIcon,
    },
    {
      title: 'PHP',
      iconSrc: phpIcon,
    },
    {
      title: 'Node Js',
      iconSrc: nodeIcon,
    },
    {
      title: 'MongoDB',
      iconSrc: mongoDbIcon,
    },
  ];
  return (
    <React.Fragment>
      <Spacer
        top='xxl'
        btm='xxl'
      >
        <section
          className='skills-section'
          id='skills'
        >
          <Typography varient='title'>Skills</Typography>
          <Typography varient='subtitle'>My technical level</Typography>
          <Spacer top='lg' />
          <Grid cols='2'>
            <SkillsHeader
              heading='Frontend Technologies'
              skills={skillsFrontend}
            />
            <SkillsHeader
              heading='Backend Technologies'
              skills={skillsBackend}
            />
          </Grid>
        </section>
      </Spacer>
    </React.Fragment>
  );
};

export default SkillsSection;
