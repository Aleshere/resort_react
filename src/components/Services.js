import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from '../components/Title';

export default class Services extends Component {

    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                icon:<FaHiking/>,
                title:'endless hiking',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                icon:<FaShuttleVan/>,
                title:'free shuttle',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                icon:<FaBeer/>,
                title:'strong as beer',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item,index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
