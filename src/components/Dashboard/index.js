import ProfileData from '../ProfileData';
import Navbar from '../Navbar'
import { MdToggleOff } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";

import './index.css'

const Dashboard=()=>{
return(
     <div className="main-container">
        <div className="nav-bar"><Navbar /></div>
        <div className="collection-container">
            <div className='top-container'>
                <div className='select-container'>
                    <select >
                        <option>Select status</option>
                    </select>
                    <select>
                        <option>Select Disposition</option>
                    </select>
                    <select>
                        <option>Search By</option>
                    </select>
                    <input type='search' placeholder='Search' />
                    <div className='number'>10</div>
                    <div className='icon'><FaSearch/></div>
                    <div className='icon blue'><HiRefresh/></div>
                </div>
                <div className='profile-container'>
                    <p>Hi<span className='bold-text'>RIDAM JAIN</span></p><span className='profile-firstletter'>R</span>
                    
                </div>
                <div className='untouched-cases'><p>Untouched Cases</p><MdToggleOff className='toggle'/> </div>
            </div>
            <div className='data-container'>
                <ProfileData />
            </div>
            
        </div>
     </div>
)
}

export default Dashboard