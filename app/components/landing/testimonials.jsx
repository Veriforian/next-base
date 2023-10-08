'use client';

import React, { useState, useEffect, useRef } from 'react';

import { HeaderSection } from '../reusable';
import './testimonials.css';

const cardData = [
  {
    name: 'John Doe',
    rating: 5,
    order: 2,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget bibendum faucibus, nisi elit ultricies elit, eu aliquet massa urna in nunc. Sed euismod, nisl eget bibendum faucibus, nisi elit ultricies elit, eu aliquet massa urna in nunc.',
  },
  {
    name: 'Jane Doe',
    rating: 5,
    order: 3,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget bibendum faucibus, nisi elit ultricies elit, eu aliquet massa urna in nunc. Sed euismod, nisl eget bibendum faucibus, nisi elit ultricies elit, eu aliquet massa urna in nunc.',
  },
  {
    name: 'Billy Mitchell',
    rating: 5,
    order: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget bibendum faucibus, nisi elit ultricies elit, eu aliquet massa urna in nunc. Sed euismod, nisl eget bibendum faucibus, nisi elit ultricies elit, eu aliquet massa urna in nunc.',
  },
  {
    name: 'Phil McCraken',
    rating: 5,
    order: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget bibendum faucibus, nisi elit ultricies elit, eu aliquet massa urna in nunc. Sed euismod, nisl eget bibendum faucibus, nisi elit ultricies elit, eu aliquet massa urna in nunc.',
  },
  {
    name: 'Bruce Waynker',
    rating: 5,
    order: 1,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget bibendum faucibus, nisi elit ultricies elit, eu aliquet massa urna in nunc. Sed euismod, nisl eget bibendum faucibus, nisi elit ultricies elit, eu aliquet massa urna in nunc.',
  },

];

function setOrder(cards, current) {
  const newCards = cards;
  newCards[current].order = 1;
  for (let i = 0, ref = current; i < newCards.length; i += 1) {
    if (ref === 0) {
      ref = newCards.length - 1;
    } else {
      ref -= 1;
    }
    if (ref === current) {
      break;
    }
    newCards[ref].order = i + 2;
  }
  return newCards;
}

function Testimonials() {
  const [current, setCurrent] = useState(cardData.length - 1);
  const [cards, setCards] = useState(cardData);
  const transitionRef = useRef(null);

  useEffect(() => {
    setTimeout(
      async () => {
        if (current === cards.length - 1) {
          setCurrent(0);
          setCards(setOrder(cards, current));
        } else {
          setCurrent(current + 1);
          setCards(setOrder(cards, current));
        }

        transitionRef.current?.classList.remove('transitioning');

        setTimeout(
          () => { transitionRef.current?.classList.add('transitioning'); },
          100,
        );
      },
      5000,
    );
  }, [cards, current]);

  return (
    <section className="w-full bg-white-medium py-10 flex flex-col overflow-hidden justify-center ">
      <HeaderSection
        title="People say"
        className="w-[50%]"
      />
      <div ref={transitionRef} className="flex items-center mt-4 w-full left-[100%] translate-x-[-100%] ">
        {
          cards.map((card) => (
            <div key={`review-${card.name.replaceAll(' ', '').toLowerCase()}`} className=" flex  items-center justify-center flex-[1_0_90%] flex-col p-3 mx-1 rounded-lg bg-dark-medium text-white-medium text-center" style={{ order: card.order }}>
              <h4 className="text-lg font-bold">{card.name}</h4>
              <p className="mt-2">
                {card.review}
              </p>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Testimonials;
