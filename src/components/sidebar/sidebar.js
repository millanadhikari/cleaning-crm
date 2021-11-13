import React from 'react'
import MenuHolder from './menuHolder'

function sidebar() {
    return (
        <div className="absolute top-0 w-[12rem] border-r border-gray-400 h-full">
            <div className="p-4">
                <h1 className="font-bold text-2xl font-logo text-blue-700">WeDo CRM</h1>
                <p className="text-md text-gray-500">Cleaning Company</p>
            </div>
            <div>
                <MenuHolder/>
            </div>
            <div></div>
        </div>
    )
}

export default sidebar
