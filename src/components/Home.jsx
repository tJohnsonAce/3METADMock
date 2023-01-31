import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import homeLogo from '../assets/homeLogo.png'
import Button from './Button'

export default function Home() {
  return (
    <Section>
      <Navbar />
      <div className="ellipse"></div>
      <div className="container">
        <div className="content">
          <h1>
            Purchase, create, and sell NFTs all in one place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores numquam repudiandae adipisci dolorum veniam est, odio nemo officia rerum? Ipsa magni 
          </p>
          <div className="buttons">
            <Button blue text='Explore now' />
            <Button text='Create NFT' />
          </div>
          <div className="data">
            <div className="dataTab">
              <h2>40k</h2>
              <h5>Artwork</h5>
            </div>
            <div className="dataTab">
              <h2>12k</h2>
              <h5>Auction</h5>
            </div>
            <div className="dataTab">
              <h2>20k</h2>
              <h5>Artist</h5>
            </div>
          </div>
        </div>
      <div/>
      <div className="image">
        <img src={homeLogo} alt="home" />
      </div>
    </div>
  </Section>
  )
}

const Section = styled.section`
  margin: 0.5rem;
  background-color: #181816;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;
  .ellipse {
    height: 30rem;
    width: 30rem;
    background-color: #181816;
    opacity: 0.5;
    border-radius: 100%;
    filter: blur(2000px);
    position: absolute;
    bottom: 30%;
    left: -10%;
    z-index: 1;
  }
  .container {
    padding: 2rem;
    margin: 0 2rem;
    display: flex;
    .content {
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 5rem;
      padding-right: 2rem;
      h1 {
        color: white;
        font-size: 5rem;
      }
      p {
        color: #a6a6a6;
      }
      .buttons {
        display: flex;
        gap: 2rem;
      }
      .data {
        display: flex;
        gap: 5rem;
        .dataTab {
          display: flex;
          flex-direction: column;
          gap: 1rem;  
          h2 {
            color: white;
            font-size: 2rem;
          }
          h5 {
            text-align: center;
            color: #a6a6a6;
          }
        }
      }
    }
    .image {
      height: 40rem;
      }
    }
`;