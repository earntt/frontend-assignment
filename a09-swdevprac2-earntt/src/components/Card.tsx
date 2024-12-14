'use client'
import { Box, Rating } from '@mui/material';
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import React from 'react';

export default function Card ( { hospitalName, imgSrc, onRating } : { hospitalName: string, imgSrc: string, onRating?:Function }) {

    const [value, setValue] = React.useState<number | null>(5);

    return (
        <InteractiveCard contentName={ hospitalName }>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} 
                    alt='Hospital Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[15%] p-[10px]'>{hospitalName}</div>
            {
                onRating? <Box className='w-full h-[10%] px-[10px] py-[5px]' sx={{'& > legend': { mt: 2 },}}>
                <Rating
                    id={hospitalName + " Rating"}
                    name={hospitalName + " Rating"}
                    data-testid={hospitalName + " Rating"}
                    value={value}
                    onClick={(e)=>{ e.stopPropagation(); }}
                    onChange={(e, newValue) => {
                        setValue(newValue);
                        onRating(hospitalName, newValue);
                    }}
                />
                </Box> : ''
            }
        </InteractiveCard>
    );
}