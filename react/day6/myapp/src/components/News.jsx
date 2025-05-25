import { NavLink } from "react-router"

export default function News({ orientation, showDetails, titleSize, fontWeight, newsData }) {
    // console.log(newsData)
    return (
        <article className={` flex gap-3 ${orientation === "verticle" ? "flex-col" : "flex-row"} `} >
            <figure className="w-32">
                <img className="w-full" src="https://picsum.photos/id/12/400/300" alt="" />
            </figure>
            <div className="news-details w-full">
                <NavLink to={`/news-details/${newsData.id}`}>
                    <h2 className={`text-2xl font-bold ${fontWeight}  ${titleSize}`}>
                        {newsData?.title}
                    </h2>
                </NavLink>
                {showDetails &&
                    <p className="text-slate-600 text-sm">
                        {newsData?.body}
                    </p>
                }
            </div>
        </article>
    )
}