import { gql } from '@apollo/client';
import React from 'react';
import client from '../../apolloClient';
import {ContainerStyle} from '../../styles/ContainerStyled';


export default function BlogPage({linetteBlog}) {
    return (
      <ContainerStyle>
        <div>
          <h1>{linetteBlog.title}</h1>
          <h3>{linetteBlog.author}</h3>
          <h4>{linetteBlog.publishDate}</h4>
          <div dangerouslySetInnerHTML={{__html:linetteBlog.blogText.html}}></div>
        </div>
      </ContainerStyle>
    )
}

export async function getStaticPaths() {

    const {data} = await client.query ({
        query: gql`
            query {
                linetteBlogs {
                  slug
                }
              }
        `
    });
    const {linetteBlogs} = data;
    const paths = linetteBlogs.map( blog => ({
        params: {slug: [blog.slug]}
    }))
    
    // console.log(linetteBlogs)
    // console.log(paths)
    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const slug = params.slug[0];
    const {data} = await client.query({
        query: gql`
        query linetteBlog($slug: String!){
            linetteBlogs (where: {slug : $slug}) {
              title 
              author
              slug
              publishDate
              blogText{
                raw
                html
              }
              heroImage {
                url
              }
            }
          }
      `,
        variables: {slug}
      });
      const {linetteBlogs} = data;
      const linetteBlog = linetteBlogs[0];
      console.log(linetteBlog);
      //console.log(linetteBlogs);
    return {
        props:{linetteBlog:linetteBlog}
    };
}