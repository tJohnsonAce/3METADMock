import React from 'react'
import styled from 'styled-components'
import { IoIosCreate } from 'react-icons/io'
import { HiDocumentAdd } from 'react-icons/hi'
import { MdSell } from 'react-icons/md'
import Button from './Button'

export default function Services() {
  const data = [
    {
      image: <IoIosCreate />,
      title: 'Create you own NFTs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lectus a suscipit congue, sapien diam euismod magna, a tempor lacus ligula sit amet metus. Aliquam erat volutpat.',
      buttonText: 'Create',
    },
    {
      image: <HiDocumentAdd />,
      title: 'Add your NFTs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lectus a suscipit congue, sapien diam euismod magna, a tempor lacus ligula sit amet metus. Aliquam erat volutpat.',
      buttonText: 'Add NFT',
    },
    {
      image: <MdSell />,
      title: 'Sell your NFTs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lectus a suscipit congue, sapien diam euismod magna, a tempor lacus ligula sit amet metus. Aliquam erat volutpat.',
      buttonText: 'Sell',
    },
  ]

  return <Section>
    <div className="title">
      <h2>Create and Sell your NFTs</h2>
    </div>
    <div className="container">
      <div className="content">
          {data.map(({image, title, description, buttonText}, index)=> {
            return (
              <div className="services" key={index}>
                <div className="image">
                  {image}
                </div>
                <h3>
                  {title}
                </h3>
                <p>
                  {description}
                </p>
                <Button text={buttonText} blue={index === 1} />
              </div>
            )
          })
        }
      </div>
    </div>
  </Section>
}

const Section = styled.section`
  margin: 0 6rem;
  margin-bottom: 5rem;
  .title {
    text-align: center;
    h2 {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
  }
  .container {
    background-color: #181816;
    padding: 5rem;
    border-radius: 1rem;
    .content {
      display: flex;
      gap: 3rem;
      .services {
        background-color: #ffffff34;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 1rem;
        .image {
          background-color: #2d69fd;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          width: max-content;
          border-radius: 2rem;
          }
          h3 {
            color: white;
          }
          p {
            color: #c8c4cf;
            margin-bottom: 1rem;
          }
        }
      }
    }
`;