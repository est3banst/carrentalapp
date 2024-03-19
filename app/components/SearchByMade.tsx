"use client";

import React from 'react'
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';

const SearchByMade = ({ manufacturer, setManufacturer} : SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
    <Combobox>
        <div className='relative w-full'>
            <Combobox.Button className='absolute top-[14px]'>
                <Image 
                className=''
                src='/car-logo.svg'
                alt='Auto Logo'
                width={20}
                height={20} />
            </Combobox.Button>
            <Combobox.Input
            className='search-manufacturer__input'
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer} />
        </div>
    </Combobox>
    </div>
  )
}

export default SearchByMade