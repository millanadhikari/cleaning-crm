


function recentCards({ title, startTime, endTime, bed, carpet, suburb, state, isAssigned, duration }) {
    return (
        <div className="border-b flex flex-grow items-center w-full text-left hover:scale-x-105 hover:scale-y-105 hover:bg-gray-100 cursor-pointer">
            <div className="flex flex-grow gap-4 min-w-[35rem] py-7 mr-5">
                <div>
                    <div className={`flex items-center text-xl font-semibold justify-center align-center h-14 w-14 rounded-full ${title === 'General' ? 'bg-blue-400' : 'bg-purple-300'}`} >
                        {title === 'General' ? 'G' : 'E'}
                    </div>
                </div>
                <div className="flex flex-col gap-2 mx-5">
                    <h1 className="text-2xl">{startTime}</h1>
                    <p className="text-[0.8rem] ">{suburb}</p>
                </div>
                <div className="relative flex flex-col text-center gap-1 mx-5 ">
                    <p className="mx-auto text-gray-500 ">Duration: {duration}</p>
                    <hr className="my-2 bg-blue-500 border-none h-[2px] w-60" color="blue" />
                    <div className="flex justify-between text-sm text-gray-600">
                        <p>{bed} BED</p>
                        <p>{carpet} CPT</p>
                    </div>
                    <div className="absolute top-[35px] right-[15.1rem]  h-1 w-1 ring-2 rounded-full ring-blue-700 "></div>
                    <div className="absolute top-[35px] left-[15.1rem] h-1 w-1 ring-2 rounded-full ring-blue-700 "></div>

                </div>
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-2xl">{endTime}</h1>
                    <p className="text-[0.8rem]">{state}</p>
                </div>
                <div>
                </div>
            </div>
            <h1 className="min-w-[7rem]  mr-10">Nov 10, 2021</h1>
            <h1 className={`mr-10 ring-1 p-2 rounded-lg  ${isAssigned ? 'ring-green-400 bg-green-100 text-green-800' : 'ring-red-400 bg-red-100 text-red-800'}`}>{isAssigned ? 'Assigned' : 'Unassigned'}</h1>
        </div>
    )
}

export default recentCards
