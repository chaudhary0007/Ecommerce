import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../Context/auth'
const HomePage=()=> {
  const[auth,setAuth]=useAuth();
  return (
    <Layout title={"Best Offers"}>
      <h1>homePage</h1>
      <pre>{JSON.stringify(auth,null,4)}</pre>
      </Layout>
  )
}

export default HomePage
