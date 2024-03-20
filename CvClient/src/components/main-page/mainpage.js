import React from 'react';
import useApiCall from '../../Hooks/useApiCall'
import { Headerpage } from '../headers/Headerpage';
import Card from '../cards/card'

const MainPage = () => {
  
const { data: cards } = useApiCall("/articles");
  return (
    <div className='MainPage'>

<section>

<Headerpage></Headerpage>

</section>
<section>

<div className="card-list">
{cards && cards.map(card => (
    <Card key={card.id }card={card} />
))}
</div>

</section>
    </div>
  );                                                              
};

export default MainPage;