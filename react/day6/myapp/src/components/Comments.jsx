import React, { useEffect, useState } from 'react'

const Comments = ({ newsId }) => {
    console.log(newsId)
    const [comments, setComments] = useState([])
    console.log(comments)
    useEffect(() => {
        try {
            async function fetchComments() {
                let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${newsId}/comments`);
                let data = await res.json();
                // console.log(data)
                setComments(data)
            }
            fetchComments();
        } catch (error) {
            console.log(error)
        }

    }, [])


    return (
        <div className='p-5 mt-10 rounded-md bg-gray-200'>
            <h3 className='text-2xl font-bold mb-3'>Comments</h3>
            <div className="commentswrapper space-y-5">
                {comments.map((commentItem) => (
                    <div className="comment bg-white p-5 rounded-md shadow">
                        <div className="text">
                            {commentItem.body}
                        </div>
                        <div className="userinfo border-l-2 border-red-300 pl-3 mt-3">
                            <h2 className='font-bold'>{commentItem.name}</h2>
                            <p className='text-slate-500'>{commentItem.email}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Comments