import React from 'react'
import NewsForm from './../components/NewsForm'

const DashboardPage = () => {
    return (
        <section>
            <div className=" flex max-w-7xl gap-5 mx-auto">
                <aside className='w-1/4 bg-gray-200 p-5 rounded'>
                    Sidebar
                </aside>
                <div className="content w-3/4 shadow p-5 rounded">
                    <h3 className='text-2xl font-bold mb-3'>Create News</h3>
                    <NewsForm />
                </div>
            </div>
        </section>
    )
}

export default DashboardPage