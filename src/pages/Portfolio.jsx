import React from 'react'
import PortfolioCards from '../components/Cards/PortfolioCards'
import {filterBtns} from '../components/Constants/BlogPortfolioConstants'
const Portfolio = () => {
  return (
    <>
      <article className="portfolio active" data-page="portfolio">

        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>
        <section className="projects">
          <ul className="filter-list">
            {filterBtns.map((btn, index) => {
              return (
                <li className="filter-item" key={index}>
                  <button data-filter-btn>{btn}</button>
                </li>
              )
            })}
          </ul>
          <PortfolioCards />
        </section>
      </article>
    </>
  )
}

export default Portfolio
