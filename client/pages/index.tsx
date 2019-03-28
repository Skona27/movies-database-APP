import React from 'react';
import {Layout} from "../components/Layout";

function Home() {
  return (
    <Layout>
      <h1 css={{
        fontWeight: 400,
        letterSpacing: '1px'
      }}>
        Welcome to Next.js!
      </h1>
    </Layout>
  )
}

export default Home