import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function showCards() {
    return (
        <div className="flex flex-col gap-4 mx-2">
            <div className="bg-blue-500 p-7 rounded-2xl text-gray-50 flex gap-3 w-[20rem] justify-between">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[1rem]">Waiting Jobs</h2>
                    <div className="flex gap-3 text-sm items-center ">
                        <h1 className="font-semibold text-2xl">840</h1>
                        <span className="bg-green-500 rounded-full h-5 w-5 flex items-center align-center justify-center"><KeyboardArrowUpIcon /></span>
                        <p>+1.5</p>
                    </div>
                </div>
                <div className="relative transform rotate-12 bg-white h-[4.1rem] w-[5rem] rounded-md">
                    <div className="h-3 bg-blue-200 rounded-t-md p-1 px-2">
                        <div className="flex gap-1 items-center align-center">
                            <div className="bg-blue-600 h-[0.3rem] w-[0.3rem] rounded-full"></div>
                            <div className="bg-blue-600 h-[0.3rem] w-[0.3rem] rounded-full"></div>
                            <div className="bg-blue-600 h-[0.3rem] w-[0.3rem] rounded-full"></div>

                        </div>
                    </div>
                    <div className="m-2 flex flex-col gap-2 ">
                        <div className="h-2 w-[4rem] bg-gray-300 rounded-lg"></div>
                        <div className="h-2 w-[4rem] bg-gray-300 rounded-lg"></div>
                        <div className="h-2 w-[3rem] bg-gray-300 rounded-lg"></div>

                    </div>
                    <div style={{
                            width:"85px", 
                            height: "15px", 
                            backgroundColor:"#1E3A8A", 
                            borderRadius:"100px/20px",
                            transform: "rotate(170deg)",
                            opacity:"0.4",
                            marginTop: "17px"}}></div>
                    <div className="absolute bottom-10 left-14 shadow-sm bg-purple-400 rounded-full h-8 w-8 flex items-center justify-center">
                    <PersonIcon/>
                </div>
                </div>
                
            </div>

            <div className="bg-purple-400 p-7 rounded-2xl text-gray-50 flex gap-3 w-[20rem] justify-between">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[1rem]">Completed jobs</h2>
                    <div className="flex gap-3 text-sm items-center ">
                        <h1 className="font-semibold text-2xl">235</h1>
                        <span className="bg-green-500 rounded-full h-5 w-5 flex items-center align-center justify-center"><KeyboardArrowUpIcon /></span>
                        <p>+0.2</p>
                    </div>
                </div>
                <div className="relative transform rotate-12 bg-white h-[4.1rem] w-[5rem] rounded-md">
                    <div className="h-3 bg-blue-200 rounded-t-md p-1 px-2">
                        <div className="flex gap-1 items-center align-center">
                            <div className="bg-blue-600 h-[0.3rem] w-[0.3rem] rounded-full"></div>
                            <div className="bg-blue-600 h-[0.3rem] w-[0.3rem] rounded-full"></div>
                            <div className="bg-blue-600 h-[0.3rem] w-[0.3rem] rounded-full"></div>

                        </div>
                    </div>
                    <div className="m-2 flex flex-col gap-2 ">
                        <div className="h-2 w-[4rem] bg-gray-300 rounded-lg"></div>
                        <div className="h-2 w-[4rem] bg-gray-300 rounded-lg"></div>
                        <div className="h-2 w-[3rem] bg-gray-300 rounded-lg"></div>

                    </div>
                    <div style={{
                            width:"85px", 
                            height: "15px", 
                            backgroundColor:"#1E3A8A", 
                            borderRadius:"100px/20px",
                            transform: "rotate(170deg)",
                            opacity:"0.4",
                            marginTop: "17px"}}></div>
                    <div className="absolute bottom-10 left-14 shadow-sm bg-purple-400 rounded-full h-8 w-8 flex items-center justify-center">
                    <PersonIcon/>
                </div>
                </div>
                
            </div>

            <div className="bg-gray-900 p-7 rounded-2xl text-gray-50 flex gap-3 w-[20rem] justify-between">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[1rem]">Total revenue</h2>
                    <div className="flex gap-3 text-sm items-center ">
                        <h1 className="font-semibold text-2xl">$4500</h1>
                        <span className="bg-green-500 rounded-full h-5 w-5 flex items-center align-center justify-center"><KeyboardArrowUpIcon /></span>
                        <p>+0.2</p>
                    </div>
                </div>
                <div className="relative transform -rotate-12 bg-white h-[4.1rem] w-[5rem] rounded-md">
                    <div className="h-3 bg-blue-200 rounded-t-md p-1 px-2">
                        <div className="flex gap-1 items-center align-center">
                            <div className="bg-blue-600 h-[0.3rem] w-[0.3rem] rounded-full"></div>
                            <div className="bg-blue-600 h-[0.3rem] w-[0.3rem] rounded-full"></div>
                            <div className="bg-blue-600 h-[0.3rem] w-[0.3rem] rounded-full"></div>

                        </div>
                    </div>
                    <div className="absolute m-2 flex flex-col gap-2 -rotate-90">
                        <div className="h-2 w-[2rem] bg-blue-300 rounded-lg"></div>
                        <div className="h-2 w-[2.5rem] bg-gray-300 rounded-lg"></div>
                        <div className="h-2 w-[2.8rem] bg-gray-300 rounded-lg"></div>

                    </div>
                    <div style={{
                            width:"85px", 
                            height: "15px", 
                            backgroundColor:"#9CA3AF", 
                            borderRadius:"100px/20px",
                            transform: "rotate(190deg)",
                            opacity:"0.4",
                            marginTop: "64px"}}></div>
                    <div className="absolute bottom-0 left-14 shadow-sm bg-purple-400 rounded-full h-8 w-8 flex items-center justify-center">
                    <AttachMoneyIcon/>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default showCards
