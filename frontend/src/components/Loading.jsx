import React from "react";
const Loading = () =>{
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black border-solid"></div>
            <p>&nbsp;&nbsp;&nbsp;Loading...</p>
        </div>
    )
}
export default Loading;