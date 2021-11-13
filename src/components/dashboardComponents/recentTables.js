import RecentCards from '../dashboardComponents/recentCards'


const bookingData = [
    {
        id: "9234",
        title: "End of Lease Clean",
        startTime: "07:30",
        endTime: "08:30",
        duration: "2h 30m",
        bed: "2",
        carpet: "NO",
        suburb: "Lidcombe",
        state: "NSW",
        isAssigned: false,
    },
    {
        id: "9235",
        title: "General",
        startTime: "01:30",
        endTime: "03:30",
        duration: "2h 30m",
        bed: "4",
        carpet: "2",
        suburb: "Strathfield",
        state: "NSW",
        isAssigned: true,
    },
    {
        id: "9236",
        title: "End of Lease Clean",
        startTime: "03:30",
        endTime: "07:30",
        duration: "4h 30m",
        bed: "2",
        carpet: "3",
        suburb: "Hornsby",
        state: "NSW",
        isAssigned: false
    },
    {
        id: "9239",
        title: "End of Lease Clean",
        startTime: "03:30",
        endTime: "07:30",
        duration: "4h 30m",
        bed: "2",
        carpet: "3",
        suburb: "Hornsby",
        state: "NSW",
        isAssigned: false
    },
    {
        id: "9238",
        title: "End of Lease Clean",
        startTime: "03:30",
        endTime: "07:30",
        duration: "4h 30m",
        bed: "2",
        carpet: "3",
        suburb: "Hornsby",
        state: "NSW",
        isAssigned: true
    },
    {
        id: "9338",
        title: "End of Lease Clean",
        startTime: "03:30",
        endTime: "07:30",
        duration: "4h 30m",
        bed: "2",
        carpet: "3",
        suburb: "Hornsby",
        state: "NSW",
        isAssigned: false
    },
]

function recentTables() {
    return (
        <div>
            <div className="flex flex-grow w-full border-b pb-2 text-gray-500">
                <h2 className="flex-grow min-w-[35rem] mr-5 ">Job</h2>
                <h3 className="mr-28">Date</h3>
                <h4 className="mr-10">Status</h4>
            </div>
            {bookingData.map((item => (
                <RecentCards
                    key={item.id}
                    title={item.title}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    bed={item.bed}
                    carpet={item.carpet}
                    suburb={item.suburb}
                    state={item.state}
                    duration={item.duration}
                    isAssigned={item.isAssigned}
                />


            )))}

        </div>
    )
}

export default recentTables
