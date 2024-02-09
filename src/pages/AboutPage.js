import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="section page section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h1>our story</h1>
            <div className="underine"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            veniam voluptatum! Aspernatur, eum voluptatem? Hic voluptatibus
            ipsam, aspernatur quae repellat id illo autem at numquam earum unde
            aliquam, eligendi nesciunt.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underine {
    border-bottom: 4.5px solid var(--clr-primary-10);
    display: inline-block;
    width: 30%;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
