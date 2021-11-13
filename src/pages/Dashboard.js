import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SalesPerformance from '../components/dashboardComponents/salesPerformance'
import ShowCards from '../components/dashboardComponents/showCards'
import RecentBookings from '../components/dashboardComponents/recentBookings'

const Dashboard = () => {
    return (
        <div className="h-full ml-52">
            <div className="flex p-5 justify-between">
            <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex gap-2 items-center cursor-pointer">
                <span className="bg-blue-200 rounded-full h-5 w-5 flex align-center justify-center text-blue-600">+</span>
                <p className="text-[0.8rem] text-blue-600">Add New Widgets</p>
            </div>
            </div>
            <div className="bg-gray-200 rounded-lg flex items-center gap-2 p-2 h-8 w-30 focus:outline-none focus:ring-0 ">
                <SearchOutlinedIcon />
                <input className="placeholder-gray-500 bg-gray-200 " placeholder="Search..."></input>
            </div>
          
            </div>
            <div className="flex">
            <SalesPerformance />
            <ShowCards/>
            </div>
            <div>
                <RecentBookings/>
            </div>
        </div>
    )
}

export default Dashboard
