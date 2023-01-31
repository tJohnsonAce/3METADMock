import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'
import { MdEmail, MdPhoneInTalk, MdLocationOn } from 'react-icons/md'
import logo from '../assets/homeLogo.png'

import styled from 'styled-components'

export default function Footer() {
  const servicesLinks = [
    'Art',
    'Common',
    'Trading',
    'Rare',
    'Generic'
  ]

  const companyLinks = [
    'Home',
    'About',
    'Marketplace',
    'Sellers',
    'Create'
  ]

  const contacts = [
    {
      icon: <MdEmail />,
      value: '3METAD@gmail.com',
    },
    {
      icon: <MdPhoneInTalk />,
      value: '867-5309',
    },
    {
      icon: <MdLocationOn />,
      value: '42 Wallaby Way, Sydney, Australia',
    },
  ]

  const socials = [
    <AiFillFacebook />,
    <FaInstagramSquare />,
    <FaTwitterSquare />,
  ]

  return (
    <Container>
      <div className="row">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <p className="description">
        42 Wallaby Way, Sydney, Australia
        </p>
        <div className="social-icons">
          {socials.map((icon) => {
            return <div className="icon">
              {icon}
            </div>
          })}
        </div>
      </div>
      <div className="row">
        <h3>
          Services
        </h3>
        <ul className="list">
          {servicesLinks.map((link) => {
            return <li key={link}>{link}</li>
          })}
        </ul>
      </div>
      <div className="row">
        <h3>
          Company
        </h3>
        <ul className="list">
          {companyLinks.map((link) => {
            return <li key={link}>{link}</li>
          })}
        </ul>
      </div>
      <div className="row">
        <h3>
          Get in touch with us
        </h3>
        <ul>
          {contacts.map(({icon, value}) => {
            return (
              <li>
                <div className="icon">
                  {icon}
                </div>
                  <span>
                    {value}
                  </span>
              </li>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}

const Container = styled.footer`
  background:  #181816;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 8rem;
  gap: 7rem;
  .row {
    color: #9ea7ad;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .list {
      cursor: pointer;
      &hover {
        transition: ease-in-out 0.8s;
      }
    }
    .brand {
    }
    h3 {
      color: white;
    }
    .description {
      color: white;
    }
    .social-icons {
      display: flex;
      gap: 1rem;
      .icon {
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        cursor: pointer;
        svg {
          color: white;
          font-size: 1.5rem;
        }
      }
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        display: flex;
        gap: 2rem;
        display: flex;
        align-items: center;
        .icon {
          padding: 0.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.3rem;
          cursor: pointer;
          svg {
            color: white;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
`;