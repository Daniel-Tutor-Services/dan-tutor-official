import CustomButton from '../../../../components/customButton/CustomButton'
import './AdminDashSide.css'
import { toast } from 'react-toastify'
import dtlogo from '../../../../assets/dtlogo.png';
import { Link, useNavigate } from 'react-router-dom'

function AdminDashSide() {

    const navigate = useNavigate()

    function logoutUser(params) {
        localStorage.clear()
        toast.success(`Logged Out  Sucessful`, {
            position: toast.POSITION.TOP_RIGHT
        })
        navigate("/")
    }

  return (
    <div className="adminDashSide">
        <div className="dashSideBtn">
            <div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link to='/' className='links'><img src={dtlogo} alt="dtlogo" style={{width:'60px', height:'60px', padding:'5px 5px'}}/></Link>
                <h4 style={{ color: "white" }}>Admin Dashboard</h4>
            </div>
        <Link to='/admin-dash' className='links'>
            <CustomButton  
                title="All Courses" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </Link>
        {/* <Link to='/admin-outline' className='links'>
            <CustomButton  
                title="All Outline" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </Link> */}
        <Link to='/admin-users' className='links'>
            <CustomButton  
                title="All Users" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </Link>
        <Link to='/admin-contacts' className='links'>
            <CustomButton  
                title="All Contacts" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </Link>
        <Link to='/profile-page' className='links'>
            <CustomButton  
                title="Admin Profile" 
                style={{ 
                    marginBottom: "10px",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </Link>
        </div>
        <div>
        <CustomButton  
                title="Logout" 
                onClick={logoutUser}
                style={{ 
                    marginTop: "auto",
                    padding: "10px 5px",
                    display:"block",
                    width:'100%'
                }}
            />
        </div>
        </div>
    </div>
  )
}

export default AdminDashSide