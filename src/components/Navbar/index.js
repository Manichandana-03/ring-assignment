import { RxHamburgerMenu } from "react-icons/rx";
import { FaChartArea } from "react-icons/fa";
import { IoPaw } from "react-icons/io5";
import { BsFillCalculatorFill } from "react-icons/bs";
import { FaTachometerAlt } from "react-icons/fa";
import { SiAwsorganizations } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdCampaign } from "react-icons/md";
import { FaUpload } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { BiLayer } from "react-icons/bi";

import './index.css'

const Navbar=()=>{
    return(
       <nav className="navbar-container">
        <div className="logo-container">
                 <img src="https://res.cloudinary.com/dfaxacnyf/image/upload/v1702060387/Ring_homepage_tp1noc.svg" className="logo-img" alt="logo"/>
                 <RxHamburgerMenu className="menu" />
        </div>
        <ul className="ul-container">
            <li>
                <button  type='button'> <FaChartArea className="icon-size"/><span> My Performance</span></button>
            </li>
            <li>
                <button type='button'><IoPaw  className="icon-size"/><span> Agent Status</span></button>
            </li>
            <li>
                <button type='button'><BsFillCalculatorFill className="icon-size"/><span> Mis Report</span></button>
            </li>
            <li>
                <button type='button'><FaTachometerAlt className="icon-size" /><span>Collection</span> </button>
            </li>
            <li>
                <button type='button'><SiAwsorganizations className="icon-size"/><span>Allocation Panel</span> </button>
            </li>
            <li>
                <button type='button'><BiLayer className="icon-size"/> <span>Reports Download</span></button>
            </li>
            <li>
                <button type='button'><IoIosPeople className="icon-size"/><span>Subuser Management</span> </button>
            </li>
            <li>
                <button type='button'><BsListTask className="icon-size"/><span> Voitekk info</span></button>
            </li>
            <li>
                <button type='button'><IoIosPeople className="icon-size"/><span>My Agents</span> </button>
            </li>
            <li>
                <button type='button'><SiAwsorganizations className="icon-size"/> <span>Gsm Allocation Deallocation</span></button>
            </li>
            <li>
                <button type='button'><BsFillTelephoneFill className="icon-size"/> <span>Auotdialer</span></button>
            </li>
            <li>
                <button type='button'><MdCampaign className="icon-size"/><span>Campaigns</span> </button>
            </li>
            <li>
                <button type='button'><FaUpload className="icon-size"/> <span>Upload History</span></button>
            </li>
        </ul>
       </nav>
    )
}

export default Navbar