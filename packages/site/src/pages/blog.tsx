import React from 'react'
//import { GetStaticProps } from 'next'

import Layout from 'components2/Layout'
import BlogList from 'components2/BlogList'
import CtaAction from 'components2/CtaAction'

/* import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api' */

const Blog = () => (
  <>
    <Layout>
      <CtaAction />
      <BlogList />
    </Layout>
  </>
)
/* 
export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
} */

export default Blog
