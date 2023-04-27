import React from 'react'
import { ReactComponent as ShipIcon } from './ship.svg';
import { ReactComponent as BriefcaseIcon } from './briefcase.svg';
import { ReactComponent as SearchIcon } from './globalsearch.svg';
import { ReactComponent as SupportIcon } from './i24support.svg';
import {ReactComponent as PrimeTime} from './primetime.svg'
import {ReactComponent as Star} from './Star.svg'
export const services = [
    {   

        id: 1,
        logo: <ShipIcon />,
        title: 'Freight Services',
        description: 'Open new opportunities to grow your business. Enter new markets and discover new continents, we are with you, door-to-door.'
    },
    {   
        id:2,
        logo: <BriefcaseIcon />,
        title: 'Business Services',
        description: 'We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.'
    },
    {   
        id:3,
        logo: <SearchIcon />,
        title: 'Shipping & Logistics',
        description: 'Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.'
    },
    {   
        id:4,
        logo: <SupportIcon />,
        title: '24/7 Support',
        description: 'Receive support from our experts all over the world at every stage of the process, 24/7.'
    }
];

export const recommendations = [
    {
        id: 1,
        tag: "Best Value",
        logo: <PrimeTime />,
        company: "Premium Worldwide",
        star: <Star />
    },
    {
        id: 2,
        tag: "Eco",
        logo: <PrimeTime />,
        company: "Premium Worldwide",
        star: <Star />
    },
    {
        id: 3,
        tag: "Best Value",
        logo: <PrimeTime />,
        company: "Premium Worldwide",
        star: <Star />
    },
    {
        id: 4,
        tag: "Best Value",
        logo: <PrimeTime />,
        company: "Premium Worldwide",
        star: <Star />
    },
]