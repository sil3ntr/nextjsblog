import Head from 'next/head'
import { Inter } from '@next/font/google'
import client from '../apolloClient'
import { gql } from '@apollo/client'
import Link from 'next/link'
import {Container} from '../styles/Container.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home({linetteBlogs}: {linetteBlogs: any}) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Linettes Musings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <div>
            <h1>Linettes Blog</h1>
              <ul>
                {linetteBlogs.map( (blog: any, i: any) => <li key={i}><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></li>)}
              </ul>
          </div>
        </Container>
      </main>
    </>
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
