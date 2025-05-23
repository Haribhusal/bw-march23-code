import { useEffect, useState } from 'react';
import MyButton from './components/Button';
import Counter from './components/Counter';
import News from './components/News'
import NewsHeader from "./components/NewsHeader";
import Ticker from './components/Ticker';

export default function App() {
  const [news, setNews] = useState([])
  console.log(news)
  useEffect(() => {
    async function fetchNews() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      // console.log(response)
      const data = await response.json();
      setNews(data)
      // console.log(data)
    }
    fetchNews();
  }, []);


  return (
    <div className="">
      {/* <Counter />
      <Ticker />
      <NewsHeader /> */}
      {/* <MyButton title="Read More" classes="bg-green-700" />
      <MyButton title="Login" classes="bg-orange-700" />
      <MyButton title="Sign Up" classes="bg-purple-700" />
      <MyButton title="Register" classes="bg-red-700" />
      <MyButton title="Logout" classes="bg-blue-700" /> */}
      <div className="container max-w-7xl mx-auto">

        <div className="grid gap-5 grid-cols-2 grid-rows-2">
          {news.map((newsItem) => (
            <News key={newsItem.id} showDetails='false' newsData={newsItem} />
          ))}
        </div>
      </div>


    </div>
  )
}
