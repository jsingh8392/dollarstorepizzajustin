import React from 'react';
import Slice from './slice';
import plain from './images/plain.jpg';
import Pepperoni from './images/pepperoni.jpg';
import Veggie from './images/veggie.jpeg';
import MeatLover from './images/meat.jpg';
import Hawaiian from './images/hawaiian.jpg';
import Bbq from './images/bbq.jpg';
import './css/menu.css';


function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
        <Slice
        img={plain}
        title="Plain Slice"
        decription="It's got cheese, it's got tomato sauce, and it's only a dollar. What more could you ask for?"
        price="$1.00"/>      

       <Pepperoni
        img={Pepperoni}
        title="Pepperoni Slice"
        decription="A classic slice with cheese, sauce, and guess what else... that's right, pepperoni.?"
        price="$1.00"/> 

       <Veggie
        img={Veggie}
        title="Veggie Slice"
        decription="You trying to be healthy but you still can't resist pizza? Well then the veggie slice is for you! This is guilt-free pizza at its finest.?"
        price="$1.00"/> 

       <MeatLover
        img={MeatLover}
        title="Meat Lover"
        decription="Pepperoni not enough meat for you? Well this slice has pepperoni, meatballs, and susage.?"
        price="$1.00"/> 

       <Hawaiian
        img={Hawaiian}
        title="hawaiian"
        decription="We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza."
        price="$1.00"/> 

       <Bbq
        img={Bbq}
        title="bbq"
        decription="Perhaps the most popular slice we offer. BBQ Chicken over a delicious dollar pizza. What more could one want in life?."
        price="$1.00"/>  
        
    </div>
    </div>
  );
}

export default Menu;