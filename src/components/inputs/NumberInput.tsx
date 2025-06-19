import { NumberInputProps } from '@/interfaces/main'
import React from 'react'
import PhoneInput from 'react-phone-input-2'

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange }) => {
    return (
        <PhoneInput
            inputStyle={{ width: '100%', height: "48px", outline: 'none' }}
            inputClass="border outline-none rounded w-full h-12 px-5 text-gray-600 leading-tight focus:outline-none focus:bg-blue-50  transition-all duration-200"
            country={'in'}
            value={value}
            enableAreaCodes={true}
            enableSearch={true}
            onChange={onChange}
        />
    )
}

export default NumberInput