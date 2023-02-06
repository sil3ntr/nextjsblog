import Head from 'next/head'
import client from '../apolloClient'
import { gql } from '@apollo/client'
import Link from 'next/link'
import {ContainerStyle} from '../styles/ContainerStyled'
import {GlobalStyle} from '../styles/Global'
import Header from '../components/Header'
import { ThemeProvider } from 'styled-components'
import {Darktheme, Lighttheme} from '../styles/Theme'


export default function Experience ({linetteExperiences}: any) {

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
                <ContainerStyle>
                  <div>
                      <ul>
                        {linetteExperiences.map( (experience: any, i: any) => <li key={i}> {experience.aboutCompany}</li>)}
                      </ul>
                  </div>
                </ContainerStyle>
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
              roleResponsibilities
              startDate
              updatedAt
            }
        }
    `
  });

  const {linetteExperiences} = data;

  return {
    props: {
        linetteExperiences
    }
  }
}
