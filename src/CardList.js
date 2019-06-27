import React from 'react';
import Card from './Card';

const CardList = ( {robots} ) => {
    const CardArray = robots.map((robot) => {
        return <Card id={robot.id} name={robot.name} email={robot.email}/>
    });

    return (
        <div>
            {CardArray}
        </div>
    );
}



export default CardList;