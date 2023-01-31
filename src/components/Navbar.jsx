import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
export default function Navbar() {
  return (
    <Nav>
      <div className='brand'>
        3METAD
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Sellers</a>
          </li>
          <li>
            <a href="#">Create</a>
          </li>
        </ul>
      </div>
      <Button text='Contact'/>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  .brand {
    color: white;
  }
  .toggle {
    display: none;
  }
  .links {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li {
        a {
          color: white;
          text-decoration: none;
          transition: 0.4s ease-in-out;
          &:hover {
            color: #2d69fd;
          }
        }
      }
    }
  }
`;