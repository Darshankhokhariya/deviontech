import { TextAreaProps } from '@/interfaces/main'
import React from 'react'

const TextArea: React.FC<TextAreaProps> = ({ name, value, onChange }) => {
    return (
        <textarea name={name} value={value} onChange={onChange} placeholder='How Can We Help You?' rows={4} className="appearance-none border outline-none w-full pt-5 px-5 text-gray-500 leading-[27px] focus:outline-none focus:bg-orange-50 focus:placeholder:text-gray-500 transition-all duration-200 font-normal focus:border-gray-500" />
    )
}

export default TextArea