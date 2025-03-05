import { useState, useEffect } from "react";

function Advice({ fetchNewAdvice, advice, loading, error }) {
    
    return (
        <div className="flex flex-col items-center gap-5 p-5 pt-1 text-gray-600">
            {loading ? <p className="text-xl">Loading...</p> : <p className="text-2xl opacity-90">{error || advice}</p>}
        </div>
    );

}

export default Advice;
