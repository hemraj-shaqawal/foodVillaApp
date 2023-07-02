import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import useResturant from '../utill/useResturant';

const RestroMenu = () => {
    const { id } = useParams();
    const restroDetails = useResturant(id);
    console.log('restroDetails', restroDetails);   

    return (
        <>
            <h1>Restro Menu: { id } </h1>
        </>
    )
}

export default RestroMenu;