import { COMPANY_NAME } from '@/utils/utils'
import React from 'react'

const Logo = () => {
    return (
        <img src="/logo.png" className='h-10 object-fill' alt={COMPANY_NAME} />
    )
}

export default Logo