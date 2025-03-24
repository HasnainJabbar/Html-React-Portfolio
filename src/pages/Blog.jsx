import React from 'react'
import BlogCards from '../components/Cards/BlogCards'
const Blog = () => {
  return (
    <>
      <article class="blog active" data-page="blog">

        <header>
          <h2 class="h2 article-title">Blog</h2>
        </header>
        <BlogCards />
      </article>

      
    </>
  )
}

export default Blog
