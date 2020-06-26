import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

// Get all unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets} = context;

    // get unique types
    let types = getUnique(rooms, 'type');
    // add all
    types = ['all',...types];
    // map to jsx
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms,'capacity');
    people = people.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });

    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>
                {/* SELECT TYPE */}
                <div className='form-group'>
                    <label htmlFor='type'>room type </label>
                    <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* END OF SELECT TYPE */}
                {/* GUESTS */}
                <div className='form-group'>
                    <label htmlFor='capacity'>guests </label>
                    <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* END OF GUESTS */}
                {/* ROOM PRICE */}
                <div className='form-group'>
                    <label htmlFor='price'>room price ${price} </label>
                    <input type='range' min={minPrice} max={maxPrice} name='price' id='price' value={price} className='form-control' onChange={handleChange} />
                </div>
                {/* END OF ROOM PRICE */}
                {/* SIZE */}
                <div className='form-group'>
                    <label htmlFor='size'>room size</label>
                    <div className='size-inputs'>
                        <input type='number' name='minSize' id='size' value={minSize} className='size-input' onChange={handleChange}/>
                        <input type='number' name='maxSize' id='size' value={maxSize} className='size-input' onChange={handleChange}/>
                    </div>
                </div>
                {/* END OF SIZE */}
                {/* EXTRAS */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange} />
                        <label htmlFor='pets'>pets</label>
                    </div>
                </div>
                {/* END OF EXTRAS */}
            </form>
        </section>
    )
}
