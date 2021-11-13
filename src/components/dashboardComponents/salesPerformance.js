import SalesChart from '../charts/SalesChart'
import Bar from '../../img/bar.png'
import Sar from '../../img/confirmed.svg'

function salesPerformance() {

    return (
        <div className="flex flex-col w-[32rem] bg-gray-50 shadow-2xl mx-4 py-5 rounded-md">
            <SalesChart />
            <div className="mt-16 flex justify-between px-7 border border-gray-200 w-[26rem] mx-auto rounded-lg py-4">
                <div className="flex gap-4 border-r w-1/2">

                    <img src={Bar} alt=""
                        className="h-12 w-12 object-contain bg-blue-200 rounded-full p-2" />
                    <div>
                        <h2 className="text-sm text-gray-500">Views</h2>
                        <p className="font-semibold text-xl">20,751</p>
                    </div>
                </div>
                <div className="flex gap-4">

                    <img src={Sar} alt=""
                        className="h-12 w-12 object-contain bg-blue-200 rounded-full p-2" />
                    <div>
                        <h2 className="text-sm text-gray-500">Bookings</h2>
                        <p className="font-semibold text-xl">2,545</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default salesPerformance
