
import {data} from '../../data';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { LuRectangleVertical } from "react-icons/lu";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import './index.css'

const TableInfo =()=>{
return(
    <div className='column-container'>
      <div className='column-1'>
        <div>
          <p className='bold'>{data.name}</p>
          <p className='bold' >{data.surname}</p>
          <p>{data.id}</p>
        </div>
        <div>
          <p>City:<span className='bold'> {data.city}</span></p>
          <p>DOB:<span className='bold'> {data.dob}</span></p>
          <p className='phone-background-color'><MdLocalPhone />{data.mbl}</p>
          <p><MdOutlineEmail/>{data.email}</p>
          <p>NSDL Username : -</p>
          <p>Next PTP Datetime : -</p>
        </div>
      </div>
     
      <div className='column-2'>
        <div>
            <p>Collection Reference</p>
            <p className='bold'>ICOL186498834287DG69</p>
        </div>
        <div>
            <p>User Reference</p>
            <p className='bold'>IDEP1862796465658ZBO</p>
        </div>
        <div>
            <p>Short User Reference</p>
            <p>--</p>
        </div>
        <div>
            <p>Customer Type</p>
            <p className='bold'>Merchant</p>
        </div>
        <div>
            <p>Emp Type</p>
            <p>--</p>
        </div>
        <p>Language Preferred</p>
      </div>
      
      <div className='column-3'>
        <div>
            <p>Total Oustanding</p>
            <p className='bold'><MdOutlineCurrencyRupee/>90.42</p>
        </div>
        <div>
            <p>Total EMI Amount</p>
            <p  className='bold'><MdOutlineCurrencyRupee/>45.42</p>
        </div>
        <div>
            <p>Priority Status</p>
            <p  className='bold'>NOT_ELIGIBLE</p>
        </div>
        <div>
            <p>Product</p>
            <p  className='bold'>Ring</p>
        </div>
        <div>
            <p>Product Type</p>
            <p>--</p>
        </div>
        <p  className='bold'>Calls Done<span className='green background-color'>0</span></p>
        <p  className='bold'>Visit Done<span className='green background-color'>0</span></p>
        <p className='red-text'>Social Media Grievances<FaPlus/> </p>
      </div>
      
      <div className='column-4'>
       <div>
       <div>
              <p>Penalty Fees</p>
              <p className='bold'><MdOutlineCurrencyRupee/>45.00</p>
          </div>
          <div>
              <p className='info-circle'>Other Fees   <FaInfoCircle className='info-icon'/></p>
              <p className='bold'><MdOutlineCurrencyRupee/>0.00</p>
          </div>
          <div>
            <p>Total Paid Amount</p>
            <p className='bold'><MdOutlineCurrencyRupee/>40.00</p>
        </div>
       </div>
        <div>
          <p className='bold'>Next Action</p>
          <p className='bold'>Last Deposition</p>
          <LuRectangleVertical className='red-rectangle'/>

        </div>
      </div>
     
      <div className='column-5'>
        <div>
        <p className='red-color'>Loans Overdue<span className='background-color red'>1</span></p>
        <p className='red-color'>Emi's Overdue<span className='background-color red'>1</span></p>
        <p className='bold'>Nach Bounce<span className='green background-color'>0</span></p>
        </div>
        <div className='flex-alignment'>
          <div>
            <p className='bold'>Current Calling Status:</p>
            <p className='bold'>NORMAL</p>
          </div>
          <div>
            <p className='bold'>Location Risk:</p>
            <p className='bold'>NORMAL</p>
          </div>
          <img className="logo" src="https://res.cloudinary.com/dfaxacnyf/image/upload/v1702064047/ring_column_img_u1hwb0.png" alt="logo" />
      
        </div>
      </div>
      
      <div className='column-6'>
        <div>
        <p className='bold'>Cheque Bounce<span className='green background-color'>0</span></p>
        <p className='bold'>Start of Month Bucket <span className='red background-color'></span></p>
        <p className='bold'>Current DL status<span className='green background-color'>0</span></p>
        <p className='bold'>Source<span className='green background-color'>0</span></p>
        <p className='blue'>Fetch Credit Score:</p>
        </div>
        <p className='bold'>PTP Failed<span className='green background-color'>0</span></p>
        <div>
          <p className='bold'>Is Instaloan Repeat - NO</p>
          <p className='bold'>No of Instaloan<span className='green background-color'>0</span></p>
        </div>
      </div>
    </div>
)
}

export default TableInfo