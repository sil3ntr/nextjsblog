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
              <HighlightStyled>
                  <img src='./images/linettedevigan_lrg.png' alt='Linette Devigan Logo'/> 
                </HighlightStyled>
                <HighlightStyled>
                  <p>Some words in here.</p>
                </HighlightStyled>
                <HighlightStyled>
                      <ul>
                        {linetteBlogs.map( (blog: any, i: any) => <li key={i}><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></li>)}
                      </ul>
                </HighlightStyled>
              </Grid>
              <Flex>
              <FlexCol>
                <HighlightStyled>
                  <img src='./images/linettedevigan_lrg.png' alt='Linette Devigan Logo'/> 
                </HighlightStyled>
              </FlexCol>
              <FlexCol>
                <ContainerStyle>
                  <div>
                      <ul>
                        {linetteBlogs.map( (blog: any, i: any) => <li key={i}><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></li>)}
                      </ul>
                  </div>
                </ContainerStyle>
              </FlexCol>
              <FlexCol>
              </FlexCol>
              </Flex>
              <Flex>
                <FlexCol></FlexCol>
                <FlexCol></FlexCol>
                <FlexCol>  
                  <HighlightStyled>
                  <img src='./images/strategicmarketing.png' alt='Strategic Marketing'/> 
                  </HighlightStyled>
                </FlexCol>
              </Flex>
            </main>
        </>
      </ThemeProvider>
  )
}

export async function getStaticProps() {
  const {data} = await client.query({
    query: gql`
        query {
          linetteBlogs {
            title 
            author
            slug
            publishDate
            blogText{
              raw
            }
            heroImage {
              url
            }
          }
        }
    `
  });

  const {linetteBlogs} = data;

  return {
    props: {
      linetteBlogs
    }
  }
}
