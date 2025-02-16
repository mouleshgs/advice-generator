import { useState, useEffect } from "react";
import Advice from "./advice";
import axios from "axios";
import Typewriter from "react-typewriter-effect"; 

function App() {
    const [advice, setAdvice] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAdvice = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get("https://api.adviceslip.com/advice");
            setAdvice(res.data.slip.advice);
        } catch (err) {
            setError("Failed to fetch advice. Try again!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <>
        <div className="flex flex-col items-center gap-4 p-6 mt-36">
        <Typewriter
                text="Advice Generator&nbsp;"
                textStyle={{ fontSize: "7rem", color: "#1f2937", fontWeight: "bold" }}
                startDelay={300}
                typeSpeed={100}
                cursorColor="#1f2937"
            />
            <Advice advice={advice} loading={loading} error={error} />
            <button 
                onClick={fetchAdvice} 
                disabled={loading} 
    className="px-4 py-3 bg-orange-500 border-b-4 border-orange-700 text-slate-50 rounded-md shadow-xl text-lg 
               hover:bg-orange-600 active:translate-y-0.5 active:shadow-md disabled:bg-gray-500 cursor-pointer transition-all duration-200 ease-in-out"
>
                {loading ? "Fetching..." : "Get New Advice"}
            </button>
        </div>
        </>
    );
}

export default App;
