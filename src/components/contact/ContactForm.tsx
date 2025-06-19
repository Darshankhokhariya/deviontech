import React, { useState } from 'react'
import Input from '../inputs/Input'
import NumberInput from '../inputs/NumberInput'
import 'react-phone-input-2/lib/style.css'
import TextArea from '../inputs/TextArea'
import Button from '../buttons/Button'
import { useForm, ValidationError } from "@formspree/react";
import { Errors, FormState } from '@/interfaces/main'
import { toast } from "react-hot-toast";

const ContactForm = () => {
    const [phone, setPhone] = useState<string>("")
    const [state, setState] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    const [errors, setErrors] = useState<Errors>({});
    const [formState, handleSubmit] = useForm("xrbpbqbn");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
        validateField(name, value);
    };

    const validateField = (name: string, value: string) => {
        let error = "";

        switch (name) {
            case "name":
                if (!value.trim()) {
                    error = "Name is required.";
                }
                break;
            case "email":
                if (!value.trim()) {
                    error = "Email is required.";
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = "Email is invalid.";
                }
                break;
            case "phone":
                if (!value.trim()) {
                    error = "Phone number is required.";
                } else if (!/^\d{10}$/.test(value)) {
                    error = "Phone number must be 10 digits.";
                }
                break;
            case "message":
                if (!value.trim()) {
                    error = "Message is required.";
                }
                break;
            default:
                break;
        }

        // Update the error state for that specific field
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };

    const handlePhoneChange = (value: string) => {
        setPhone(value)
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const submissionData = {
            ...state,
            phone: phone
        };

        try {
            await handleSubmit(submissionData);
            toast.success("Form submitted successfully!");
            setPhone("")
            setState({
                name: "",
                email: "",
                phone: "",
                message: "",
            })
        } catch (error) {
            console.error("Submission Error:", error);
            toast.error("Something went wrong! Please try again.");
        }
    }


    return (
        <div className="md:w-[450px] lg:w-[550px] xl:w-[550px]">
            <form onSubmit={onSubmit} className="shadow-md rounded-2xl border-2 border-gray-100 px-8 pt-6 pb-8 mb-4">
                <p className='text-normalDark para pb-4 text-xl leading-[28px] font-bold'>Innovate your business today!</p>

                <div className="mb-6">
                    <Input label="Name" name="name" value={state.name} onChange={handleChange} />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="mb-6">
                    <Input label="Email" name="email" value={state.email} onChange={handleChange} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="mb-6">
                    <NumberInput value={state.phone} onChange={handlePhoneChange} />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div className="mb-6">
                    <TextArea name="message" value={state.message} onChange={handleChange} />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <div className="mb-6">
                    <Button
                        disabled={formState.submitting}
                        className='bg-primary disabled:bg-primary/50 disabled:cursor-not-allowed uppercase text-sm tracking-normal px-10 py-4 rounded font-bold text-white hover:bg-primary-hover transition-all duration-300'
                        text={formState.submitting ? "Submitting..." : "Submit"}
                        type="submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default ContactForm