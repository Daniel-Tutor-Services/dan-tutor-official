import React,{ useState, useEffect }  from 'react'
import './AdminDashBoard.css'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import AdminDashContentHeader from './AdminDashContentHeader/AdminDashContentHeader'
import { useNavigate } from 'react-router-dom';

function AdminDashBoard({ API_URL, currentCourse, setCurrentCourse}) {
  const navigate = useNavigate();
  const [courses, setCourses]= useState([]);
  const user = localStorage.getItem('userData');

  function getCourses(){
    fetch(`${API_URL}/api/courses`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => setCourses(data.courses))
    .catch((err) => console.log(err))
  }
  // console.log(typeof(user));
  useEffect(() => {
    if(typeof(user) !== 'string') navigate('/login', { replace: true });
    if(!(JSON.parse(user).isAdmin)) navigate('/dash-board', { replace: true });
    getCourses();
  }, [])

  const data =[
    {title: ""},
    {instructor: ""},
    {description: ""},
    {thumbnail: ""},
    {totalHours: ""},
    {requirements: ""},
    {rating: ""},
    {links: ""}
  ]
  const mode = 'course'
  return (

    <div className='adminDashContainer'>
        <AdminDashSide />
        <div id='adminDash-right'>
          <div className="adminDashContentContainer">
            <AdminDashContentHeader mData={data} mMode ={mode} API_URL={API_URL} currentCourse={currentCourse} getCourses={getCourses} />
          </div>
        </div>
    </div>
  )
}

export default AdminDashBoard
