import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import useResturant from '../utill/useResturant';
import RestroCard from './RestroCard';

const RestroMenu = () => {
    const { id } = useParams();
    const restroDetails = useResturant(id);
    if(restroDetails?.cards[0].card.card.info === undefined) return null;
    console.log(restroDetails)

    return (
        <>
            {<RestroCard
              {...restroDetails?.cards[0].card.card.info}             
            />}
        </>
    )
}

export default RestroMenu;