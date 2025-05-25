import React, { useState, useEffect } from 'react'
import MyButton from './../components/Button'
import { toast } from 'sonner';

const NewsForm = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Form is submitting")
        try {
            setLoading(true)
            await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    body,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    toast.success("News has been created successfully")
                });

        } catch (error) {
            console.log(error)
        } finally {
            setTitle('');
            setBody('');
            setLoading(false)
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='space-y-3'>
            <div>
                <input onChange={(e) => setTitle(e.target.value)} value={title} className='w-full px-3 py-2 rounded-md border' type="text" placeholder='Enter news title' />
            </div>
            <div>
                <textarea onChange={(e) => setBody(e.target.value)} value={body} className='w-full px-3 py-2 rounded-md border' type="text" rows={3} placeholder='Enter news details' />
            </div>
            <div>
                <MyButton classes={'bg-red-700 text-white'} title={loading ? "Submitting" : "Submit News"} />
            </div>
        </form>
    )
}

export default NewsForm