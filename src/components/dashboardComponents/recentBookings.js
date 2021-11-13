import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SelectOption from '../dashboardComponents/selectOption'
import RecentTables from '../dashboardComponents/recentTables'
const bookingDate = [
    {
       id:"123",
       title:"Booking date",
       optionOne: "Today",
       optionTwo: "Yesterday",
       optionThree: "Week",
       
    }
]

const bookingtype = [
    {
       id:"1234",
       title:"Booking type",
       optionOne: "End of Lease",
       optionTwo: "House Clean",
       optionThree: "General Clean"
    }
]

const bookingRange = [
    {
       id:"12345",
       title:"Date range",
       optionOne: "End of Lease",
       optionTwo: "House Clean",
       optionThree: "General Clean"
    }
]
function recentBookings() {
    return (
        <div className="px-5">
            <div className="flex items-center align-center justify-between mt-10 mb-5 mr-5">
                <h1 className="text-2xl font-semibold">Recent Bookings</h1>
                <div className="flex gap-3 justify-center align-center ring-2 text-gray-500 ring-gray-300 px-3 py-2 rounded-lg ">
                    <CalendarTodayOutlinedIcon/>
                    <p className="text-blue-900 text-[1.1rem]">Month</p>
                    <p className="text-blue-500"><KeyboardArrowDownOutlinedIcon/></p>

                </div>
            </div>
            <div className="flex gap-3">
               {bookingDate.map((item => (
                    <SelectOption key={item.id} title={item.title} optionOne={item.optionOne} optionTwo={item.optionTwo} optionThree={item.optionThree}/>
               )))}
                 {bookingtype.map((item => (
                    <SelectOption key={item.id} title={item.title} optionOne={item.optionOne} optionTwo={item.optionTwo} optionThree={item.optionThree}/>
               )))}
                {bookingRange.map((item => (
                    <SelectOption key={item.id} title={item.title} optionOne={item.optionOne} optionTwo={item.optionTwo} optionThree={item.optionThree}/>
               )))}
            </div>
            <div className="mt-10">
                <RecentTables/>
            </div>
        </div>
    )
}

export default recentBookings
