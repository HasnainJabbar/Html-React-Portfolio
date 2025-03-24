import React from 'react'
import { Link } from 'react-router'
import { blog } from '../Constants/BlogPortfolioConstants'
const BlogCards = () => {
  return (
    <>
      <section class="blog-posts">

        <ul class="blog-posts-list">
          {blog.map((item, index) => {
            return (
              <li key={index} className="blog-post-item">
                <Link href="#">

                  <figure className="blog-banner-box">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </figure>

                  <div className="blog-content">

                    <div className="blog-meta">
                      <p className="blog-category">{item.category}</p>

                      <span className="dot"></span>

                      <time datetime="2022-02-23">{item.date}</time>
                    </div>

                    <h3 className="h3 blog-item-title">{item.title}</h3>

                    <p className="blog-text">
                      {item.text}
                    </p>

                  </div>

                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default BlogCards
