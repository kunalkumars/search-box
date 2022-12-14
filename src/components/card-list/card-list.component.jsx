import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.searchdata.map(e => (
      <Card key={e.objectID} result={e} />
    ))}
  </div>
);
