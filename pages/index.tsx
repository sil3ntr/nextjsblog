import Head from 'next/head'
import client from '../apolloClient'
import { gql } from '@apollo/client'
import Link from 'next/link'
import {ContainerStyle} from '../styles/ContainerStyled'
import {GlobalStyle} from '../styles/Global'
import Header from '../components/Header'
import { ThemeProvider } from 'styled-components'
import {Darktheme, Lighttheme} from '../styles/Theme'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex, FlexCol } from '../styles/Flex.Styled'
import { HighlightStyled} from '../styles/Highlight.Style'
import { Grid } from '../styles/GridStyled'
import Footer from '../components/Footer'



export const MyComponent = () => {
  const themeContext = useContext(ThemeContext)

  console.log('Current theme: ', themeContext)
  // ...
}       
export default function Home({linetteBlogs}: any) {

  return (
      <ThemeProvider theme={Lighttheme}>
          <>
            <GlobalStyle/>
            <Head>
              <title>Linette Devigan</title>
              <meta charSet='utf-8'/>
              <meta name="description" content="Linettes Musings" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main>
              <Grid>
                <div>
                  <p>Main Section</p>
                </div>
                <div>
                    <p>Image Section</p>
                </div>
              </Grid>
            </main>
            <Footer/>
        </>
      </ThemeProvider>
  )
}

