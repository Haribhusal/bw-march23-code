export default function News({ orientation, showDetails, titleSize, fontWeight }) {
    return (
        <article className={` flex gap-3 ${orientation === "verticle" ? "flex-col" : "flex-row"} `} >
            <figure>
                <img className="w-full" src="https://picsum.photos/id/12/400/300" alt="" />
            </figure>
            <div className="news-details">
                <h2 className={`text-2xl font-bold ${fontWeight}  ${titleSize}`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores fugit beatae possimus?
                </h2>
                {!showDetails &&
                    <p className="text-slate-600 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt architecto magni quo quisquam sapiente molestiae, accusamus incidunt omnis earum perferendis, modi similique, eos quidem magnam doloribus ducimus sed cum!
                    </p>
                }
            </div>
        </article>
    )
}