export default function MyButton({ title, classes }) {
    return (
        <button className={`${classes} px-5 py-3 hover:bg-red-500 rounded-md `}>{title}</button>
    )
}