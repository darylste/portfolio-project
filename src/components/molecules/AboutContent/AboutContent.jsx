import React from 'react';
import './AboutContent.scss';

import codeImg from '../../../assets/code.svg';
import downloadIcon from '../../../assets/download.svg';
import CV from '../../../assets/darylCV.pdf';

import Typography from '../../atoms/Typography/Typography.component';
import Stat from '../Stat/Stat.component';
import Button from '../../atoms/Button/Button.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Grid from '../../atoms/Grid/Grid.component';

const AboutContent = () => {
  return (
    <Grid cols='2'>
      <div className='about-img-container'>
        <img
          className='about-img'
          src={codeImg}
          alt='phone'
        />
      </div>
      <div className='about-text'>
        <Typography varient='body'>
          Software developer with experience creating data-driven web
          applications using a range of modern technologies, including
          React.js/Next.js, .NET, Microsoft SQL Server, and MongoDB.
        </Typography>
        <Spacer btm='sm' />
        <Typography varient='body'>
          Currently expanding my C# knowlege with{' '}
          <a href='https://github.com/markjprice/cs12dotnet8'>
            "C# 12 and .NET 8 - Modern Cross-Platform Development Fundamentals"
            by Mark J. Price.
          </a>
        </Typography>
        <Spacer
          top='md'
          btm='md'
        >
          <div className='stats-container'>
            <Stat
              time='3+'
              activity='Years experience'
            />
            <Stat
              time='28+'
              activity='GitHub Projects'
            />
          </div>
        </Spacer>
        <Button
          varient='primary'
          icon={downloadIcon}
          href={CV}
          isCentered
        >
          Download CV
        </Button>
      </div>
    </Grid>
  );
};

export default AboutContent;
