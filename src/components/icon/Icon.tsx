import { IconProps } from '@/interfaces/main'
import React from 'react'

const Icon: React.FC<IconProps> = ({ src, className }) => {
    return (
        <img src={src} className={className} />
    )
}

export default Icon