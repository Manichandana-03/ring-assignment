import TableInfo from '../TableInfo'

import { FaPhoneAlt } from "react-icons/fa";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineStepBackward } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { IoCaretBackSharp } from "react-icons/io5";
import { RiOrganizationChart } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


import './index.css'

const ProfileData=()=>{
    return(
        <div className='outline'>
        <div className="contact-container">
                <p>Showing result from 1 to 1 out of 1</p>
                <div className='contact-number'>
                <input type='search' placeholder="Enter customer contact number" />
                <span className='phone'><FaPhoneAlt/></span>
                </div>
        </div>
        <div className="pages">
                    <AiOutlineStepBackward style={{padding:'0px 5px'}}/>
                    <IoCaretBackSharp style={{padding:'0px 5px'}}/>
                    <span>1</span>
                    <IoMdPlay style={{padding:'0px 5px'}}/>
                    <IoMdSkipForward style={{padding:'0px 5px'}}/>
        </div>
        <div className="profile-data">
            <TableInfo />
        </div>
        <div className="more-info">
            <div className='offer'>
                <IoMegaphoneOutline />
                <span>Offer</span>
            </div>
            <div className='contact-details'>
                <FcGoogle  />
                <img className='bhim-icon' src="https://res.cloudinary.com/dfaxacnyf/image/upload/v1702011434/icons8-bhim_h21rmv.svg" alt="bhim"/>
                <RiOrganizationChart className='more-info-icon' />
                <IoMegaphoneOutline className='more-info-icon' />
                <FaTelegramPlane className='more-info-icon' />
                <FaHome className='more-info-icon' />
                <span>View Loan Details</span>
                <span>BNPL Loan Details</span>
                <span>Call and Visit History</span>
                <span>Add Call Disposition</span>
                <span>Add Additional Contact info</span>
                <span>Merchent Details</span>
            </div>
        </div>
        <div className="pages">
                    <AiOutlineStepBackward style={{padding:'0px 5px'}}/>
                    <IoCaretBackSharp style={{padding:'0px 5px'}}/>
                    <span>1</span>
                    <IoMdPlay style={{padding:'0px 5px'}}/>
                    <IoMdSkipForward style={{padding:'0px 5px'}}/>
        </div>
        <div className='showing-result'>
            <p>Showing result from 1 to 1 out of 1</p>
        </div>

        </div>
    )

}

export default ProfileData