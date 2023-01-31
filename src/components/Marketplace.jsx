import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import nft1 from '../assets/nft1.png'
import nft2 from '../assets/nft2.png'
import nft3 from '../assets/nft3.png'
import nft4 from '../assets/nft4.png'
import nft5 from '../assets/nft5.png'
import nft6 from '../assets/nft6.png'
import nft7 from '../assets/nft7.png'
import nft9 from '../assets/nft9.png'
import Button from './Button'
import styled from 'styled-components'


export default function MarketPlace() {
  const marketPlaceData = [
    {
      image: nft1,
      name: 'Dream Space',
    },
    {
      image: nft2,
      name: 'Troll Baby',
    },
    {
      image: nft3,
      name: 'Panda Island',
    },
    {
      image: nft4,
      name: 'Light Bulb Sunset',
    },
    {
      image: nft5,
      name: 'Mountain',
    },
    {
      image: nft6,
      name: 'Rainbow Sunset',
    },
    {
      image: nft7,
      name: 'Walking Cavern',
    },
    {
      image: nft9,
      name: 'Misty Brain',
    },
  ]

  const marketPlaceType = [
    "All",
    "Art",
    "Generic",
    "Common",
    "Trading",
    "Rare",
  ];

  return (
    <Section>
      <div className="title">
        <h2>
          NFT Marketplace
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="marketPlaceTypes">
        {marketPlaceType.map((text, index) => {
            return <Button text={text} key={index} blue={index === 0}/>
          })}
      </div>
      <div className="marketPlaces">
        {marketPlaceData.map(({image, name}) => {
          return (
            <div className="marketplace">
              <div className="image">
                <img src={image} alt="marketplace" />
              </div>
              <div className="name">
                <h4>
                  {name}
                </h4>
                <BsThreeDots />
              </div>
              <h5 className="username">
                @whizzkee
              </h5>
              <div className="price-container">
                <h5 className="price">
                  5.5ETH
                </h5>
                <FaEthereum />
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0 6rem;
  margin-bottom: 5rem;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-direction: column;
    h2 {
      font-size: 3rem;
    }
    p {
      color: #7b7e86;
    }
  }
  .marketPlaceTypes {
    display: flex;
    justify-content: center;
    gap: 2rem;
    button:not(.blue) {
      color: black;
      border-color: #7b7e86;
    }
  }
  .marketPlaces {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    .marketplace {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 0.5rem;
      border-radius: 1rem;
      width: max-content;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }
      .image {
        margin-bottom: 1rem;
        img {
          border-radius: 1rem;
        }
      }
      .name {
        display: flex;
        color: #222222;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        h4 {
        }
      }
      .username {
        color: #555555;
        font-size: 0.8rem;
        padding: 0 1rem;
        margin-bottom: 0.5rem;
      }
      .price-container {
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        color: #02204e;
      }
    }
  }
`;