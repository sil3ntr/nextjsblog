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
              <Flex>
              <FlexCol>
                <HighlightStyled>
                  <h1>LINETTE DEVIGAN</h1>
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
                    <h1>MARKETING STRATEGY</h1>
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
