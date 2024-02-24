
import './Comnav.css'
import { Link } from 'react-router-dom'
function Comnav() {
  return (
    <div className='comnavv'>
    <header className="headernav">
   <h1 className="logo"><a className='namenav'>AgrofundX</a></h1>
   <ul className="main-nav">
       <li><a className='nava'><Link to={"/Home"}>Home</Link></a></li>
       <li><a  className='nava' ><Link to={"/Loanreg"}> Loan</Link></a></li>
       <li><a  className='nava' ><Link to={"/Status"}> Status</Link></a></li>
       <li><a  className='nava' ><Link to={"/Profile"}>Update</Link></a></li>
       <li><a  className='nava' ><Link to={"/Remove"}>Remove</Link></a></li>


       {/* <li><a className='nava' href="#"><Link to={"/Contact"}>Contact</Link></a></li> */}
       <li><a  className='nava' ><Link to={"/"}> Log Out</Link></a></li>
   </ul>
</header> 
</div>
  )
}

export default Comnav