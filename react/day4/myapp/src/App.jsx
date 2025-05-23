import MyButton from './components/Button';
import News from './components/News'
import NewsHeader from "./components/NewsHeader";

export default function App() {
  return (
    <main className="">
      <NewsHeader />

      <MyButton title="Read More" classes="bg-green-700" />
      <MyButton title="Login" classes="bg-orange-700" />
      <MyButton title="Sign Up" classes="bg-purple-700" />
      <MyButton title="Register" classes="bg-red-700" />
      <MyButton title="Logout" classes="bg-blue-700" />

      <div className="container max-w-7xl mx-auto">

        <div className="grid gap-5 grid-cols-2 grid-rows-2">
          <div className="first">
            <News orientation="verticle" />
          </div>
          <div className="second">
            <News />
            <div className="grid my-3 grid-cols-2 gap-3">
              <News showDetails='false' titleSize="text-base" fontWeight="font-normal" />
              <News showDetails='false' titleSize="text-base" fontWeight="font-normal" />
              <News showDetails='false' titleSize="text-base" fontWeight="font-normal" />
              <News showDetails='false' titleSize="text-base" fontWeight="font-normal" />
              <News showDetails='false' titleSize="text-base" fontWeight="font-normal" />
              <News showDetails='false' titleSize="text-base" fontWeight="font-normal" />
              <News showDetails='false' titleSize="text-base" fontWeight="font-normal" />
              <News showDetails='false' titleSize="text-base" fontWeight="font-normal" />
            </div>
          </div>

        </div>
      </div>


    </main >
  )
}
