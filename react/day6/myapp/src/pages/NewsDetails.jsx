import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loader from './../components/Loader'
import Comments from './../components/Comments'
const NewsDetails = () => {
    const [newsDetails, setNewsDetails] = useState({})
    const [loading, setLoading] = useState(false)
    console.log(loading)

    let { id } = useParams();
    console.log(id)

    useEffect(() => {

        const fetchNewsDetails = async () => {
            try {
                setLoading(true)
                let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                let data = await res.json();
                setNewsDetails(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }

        }
        fetchNewsDetails();

    }, [])



    // let person = {
    //     name: "Hari"
    // }

    // const { name } = person;
    // console.log(name)

    // let params = useParams();
    // let id = params.id;

    if (loading) { return <Loader /> }
    return (
        <section>
            <div className="container max-w-7xl mx-auto">
                <article>
                    <h1 className='text-3xl font-bold'>
                        {newsDetails.title}
                    </h1>
                    <p>
                        {newsDetails.body}
                    </p>
                </article>

                <div className="">
                    <Comments newsId={id} />
                </div>
            </div>
        </section>
    )
}

export default NewsDetails