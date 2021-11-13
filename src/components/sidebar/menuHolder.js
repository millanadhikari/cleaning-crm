import React from 'react'
import Menu from './Menu'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MyToggle from './myToggle'

const menuData = [
    {
        id:"001",
        title: "Dashboard",
        icon: <DashboardCustomizeOutlinedIcon fontSize="small"/>,
        link:"/dashboard"

    },
    {
        id:"002",
        title: "Bookings",
        icon: <FeaturedPlayListOutlinedIcon fontSize="small"/>,
        link:"/bookings"


    },
    {
        id:"003",
        title: "Staffs",
        icon:<SupervisorAccountOutlinedIcon fontSize="small"/>,
        link:"/staffs"


    },
    {
        id:"004",
        title: "Message",
        icon: <EmailOutlinedIcon fontSize="small"/>,
        link:"/message"


    },
    {
        id:"005",
        title: "Settings",
        icon:<SettingsOutlinedIcon fontSize="small"/>,
        link:"/settings"


    },
    {
        id:"005",
        title: "Reports",
        icon:<AssessmentOutlinedIcon fontSize="small"/>,
        link:"/reports"


    },
]



function menuHolder() {
    return (
        <div className="m-4 flex flex-col">
            <div className="flex flex-col gap-6 border-b border-gray-300 pb-10">
            {menuData.map((d => (
                <Menu key={d.id} title={d.title} icon={d.icon} link={d.link}/>
            )))}
            </div>
            <div className="flex gap-3 text-gray-600 items-center align-center mt-[-40px]">
                <DarkModeOutlinedIcon/>
                <h2 className=" text-[0.8rem]">Dark Mode</h2>
                <MyToggle/>
            </div>
            
        </div>
    )
}

export default menuHolder
