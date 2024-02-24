
import './Adminnav.css'
import { Link } from 'react-router-dom'
function Adminnav() {
  return (
    <div className='adminnav'>
    <header className="headernavadmin">
   <h1 className="logoadmin"><a className='namenavadmin'>AgrofundX</a></h1>
   <ul className="main-navadmin">
       <li><a className='navaadmin'><Link to={"/Appliedstatus"}>Applied loans</Link></a></li>
       {/* <li><a  className='navaadmin' ><Link to={"/Loandetails"}> Loan details</Link></a></li> */}
       {/* <li><a  className='nava' ><Link to={"/Status"}> Status</Link></a></li> */}

       {/* <li><a className='nava' href="#"><Link to={"/Contact"}>Contact</Link></a></li> */}
       <li><a  className='navaadmin' ><Link to={"/"}> Log Out</Link></a></li>
   </ul>
</header> 
</div>
  )
}

export default Adminnav