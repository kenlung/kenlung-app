import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Icon from '../components/Icon'
import Avatar from '../components/Avatar'

const IndexPage = () => (
  <Layout>
    <Icon name="heart"/>
    <Avatar radius="20" />
    <h1>Hi people there!</h1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
