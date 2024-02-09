import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({ stars, reviews }) => {
  const templeStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })

  return (
    <Wrapper>
      <div className="stars">{templeStars}</div>
      <p className="reviews">({reviews} customer reviews )</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars

// !  BU ŞEKİLDE YAPILABİLİRDİ

// const star = []

// for (let i = 1; i <= 5; i++) {
//   if (stars >= i) {
//     star.push(<BsStarFill />)
//   } else if (stars >= i - 0.5) {
//     star.push(<BsStarHalf />)
//   } else {
//     star.push(<BsStar />)
//   }
// }
