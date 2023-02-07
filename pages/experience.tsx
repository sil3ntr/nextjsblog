import Head from 'next/head'
import client from '../apolloClient'
import { gql } from '@apollo/client'
import Link from 'next/link'
import {GlobalStyle} from '../styles/Global'
import Header from '../components/Header'
import { ThemeProvider } from 'styled-components'
import {Darktheme, Lighttheme} from '../styles/Theme'
import { Grid } from '../styles/GridStyled'
import { ExperienceStyled  } from '../styles/Experience.Styled'


export default function Experience ({linetteCvExperiences}: any) {

  return (
      <ThemeProvider theme={Lighttheme}>
          <>
            <GlobalStyle/>
            <Head>
              <title>LD - Blog</title>
              <meta charSet='utf-8'/>
              <meta name="description" content="Linettes work experience" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
                <ExperienceStyled>
                  <div className='experience-grid'>
                        <ul>
                          {linetteCvExperiences.map( (experience: any, i: any) => 
                            <div className='experience' key={i}> 
                              <h2>{experience.companyName}</h2>
                            </div>)}
                        </ul>
                  </div>
                </ExperienceStyled>
        </>
      </ThemeProvider>
  )
}

export async function getStaticProps() {
  const {data} = await client.query({
    query: gql`
        query {
          linetteCvExperiences {
            aboutCompany
            companyName
            createdAt
            endDate
            highlightsAchievements
            id
            keyProjects
            publishedAt
            roleBlurb
            roleName
            startDate
            updatedAt
          }
        }
    `
  });

  const {linetteCvExperiences} = data;

  return {
    props: {
        linetteCvExperiences
    }
  }
}
