"use client"

import React from 'react'
import { CustomButton } from '.'

const Hero = () => {

    const handleScroll = () => {

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">Encuentra, reserva o renta un vehículo - rápido y facil</h1>

            <p className="hero__subtitle">
                Optimice su experiencia de alquiler de vehículo con nuestro sencillo proceso de reserva
            </p>
            <CustomButton
            title='Ver vehículos'
            containerStyles='bg-primary-blue text-white rounded-full mt-10'
            handleClick={handleScroll}
            />
        </div>
    </div>
  )
}

export default Hero