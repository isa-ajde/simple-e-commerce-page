import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    filters: {
      category,
      company,
      text,
      color,
      max_price,
      min_price,
      price,
      shipping,
    },
    updateFilters,

    clearFilters,
    all_products,
  } = useFilterContext()

  const companies = getUniqueValues(all_products, 'company')
  const categories = getUniqueValues(all_products, 'category')
  const colors = getUniqueValues(all_products, 'colors')

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              className="search-input"
              placeholder="Search"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/*  end search input */}
          {/* category */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    onClick={updateFilters}
                    className={category === c.toLowerCase() ? 'active' : null}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end  category */}
          {/* company */}
          <div className="form-control">
            <h5>company</h5>
            <div>
              <select
                name="company"
                onChange={updateFilters}
                className="company"
                value={company}
              >
                {companies.map((c, index) => {
                  return (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>

          {/* end company */}
          {/* colors */}
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      className={
                        color === 'all' ? 'all-btn active ' : 'all-btn'
                      }
                      data-color="all"
                    >
                      all
                    </button>
                  )
                }
                return (
                  <button
                    key={index}
                    style={{ background: c }}
                    name="color"
                    onClick={updateFilters}
                    className={color === c ? 'color-btn active ' : 'color-btn'}
                    data-color={c}
                  >
                    {color === c && <FaCheck />}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end colors */}
          {/* price */}
          <div className="form-control">
            <h5>Price</h5>
            <p className="price"> {formatPrice(price)}</p>
            <input
              type="range"
              max={max_price}
              min={min_price}
              value={price}
              step={20}
              name="price"
              onChange={updateFilters}
            />
          </div>
          {/* end price */}
          {/* shipping */}
          <div className="form-control shipping">
            <label className="shipping">Free Shipping</label>
            <input
              type="checkbox"
              id="shipping"
              name="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* end  shipping */}
          {/* clearFilters */}
          <div className="form-control">
            <button className="clear-btn" type="button" onClick={clearFilters}>
              clear filters
            </button>
          </div>
          {/* end  clearFilters */}
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 5rem;
    }
  }
`

export default Filters
