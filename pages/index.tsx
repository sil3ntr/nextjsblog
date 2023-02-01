import Head from 'next/head'
import { Inter } from '@next/font/google'
import client from '../apolloClient'
import { gql } from '@apollo/client'
import Link from 'next/link'
import {ContainerStyle} from '../styles/ContainerStyled'
import GlobalStyle from '../styles/Global'
import Header from '../components/Header'
import { ThemeProvider } from 'styled-components'
import {Darktheme, Lighttheme} from '../styles/Theme'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const inter = Inter({ subsets: ['latin'],
                    display: "fallback" })

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
            <ContainerStyle>
              <div>
                <h1>LINETTE DEVIGAN</h1>
                  <ul>
                    {linetteBlogs.map( (blog: any, i: any) => <li key={i}><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></li>)}
                  </ul>
              </div>
            </ContainerStyle>
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
