'use client';

import { useFormStatus } from 'react-dom';
// change the form of the submit button, in share meal tab while submit action is pending
export default function MealsFormSubmit(){
    const {pending} = useFormStatus();

    return <button disabled={pending}>
        {pending ? 'Submitting...' : 'Share Meal'}
    </button>
}