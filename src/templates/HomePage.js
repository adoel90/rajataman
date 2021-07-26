import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />               
      </div>
    </section>
    <section id="keunggulan-kami">     
        <Grid container style={{backgroundImage: `url(/images/section-keunggulan-kami.jpg)`, padding: 24, marginBottom: 8}}>
          <Grid item md={6}></Grid>
          <Grid item md={6} style={{textAlign: 'center'}}>
            <Box ml={8}>
              <Typography variant="h2" style={{color: 'white'}}>
                Keunggulan Kami
              </Typography>
              <Typography variant="h5" style={{color: 'white'}}>
                Jasa Pembuatan Taman Jabodetabek
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </section>

      {/* <section id="five-feature-kami">   
        <Grid container>
          <Grid item md={2}>
            <figure>
              <img src={imageDesainMenarik} alt="1" />
              <figcaption>
                <Typography variant="p" >
                  Desain Menarik
                </Typography>
              </figcaption>
            </figure>
          </Grid>
        </Grid>
          
      </section> */}
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
