import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="bg-blue-500 p-6 rounded-2xl opacity-75">
            <h1 className="mb-8">Welcome to Sunny Side</h1>
            <h2 className="text-xl mb-8">Search for your city and find the most up-to-date weather information</h2>
            <Link to={"/weather"}>
                <div className=" text-white hover:bg-violet-600 inline-block rounded-lg h-7 w-36 text-xl">Start Searching</div>
            </Link>

        </div>
    )
}

export default Home