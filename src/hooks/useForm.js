import { useState } from "react"

export const useForm = (initialValue) => {
    const [formState, setFormState] = useState(initialValue)
    const handleOnChange=({target})=>{
        const { name, value } = target
        setFormState(prevState=>({
            ...prevState,
            [name]:value
        }))
    }
    const onResetForm = () => {
        setFormState(initialValue)
    }

    return {
        formState,
        handleOnChange,
        onResetForm
    }
 }
