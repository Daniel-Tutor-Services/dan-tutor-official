import React from 'react'
import './AdminDashContentHeader.css'
import CustomModal from '../../../../components/customModal/CustomModal'

function adminDashContentHeader({mData, mMode, API_URL, currentCourse, outlineCourses, getCourses, getOutline, getUsers, filterUsers, currentFilter, setCurrentFilter, currentCourseOutline }) {
  return (
    <div className="adminDashContentHeader">
        {
          mMode !== "outline" ? "" : 
          <select value={ currentCourse._id } 
            onChange={(event) => {
              localStorage.setItem('currentCourse', JSON.stringify(outlineCourses.find(course => course._id === event.target.value)));
              getOutline(outlineCourses.find(course => course._id === event.target.value));   
            }}
          >
          {
            outlineCourses.map((course) => (
              <option key={course._id} value={ course._id }>{course.title}</option>
            ))
          }
        </select>
        }
        {
          mMode !== "user" ? "" : 
          <select value={currentFilter}
            onChange={(event) => {
              setCurrentFilter(event.target.value);
              filterUsers(event.target.value);   
            }}
          >
          {
            ["All", "Admin", "User"].map((option, index) => (
              <option key={index} value={ option }>{option}</option>
            ))
          }
        </select>
        }
        <CustomModal data = {mData} mode ={mMode} API_URL={API_URL} currentCourse={currentCourse} getCourses={getCourses} getOutline={getOutline} getUsers={getUsers} currentCourseOutline={currentCourseOutline} />
    </div>
  )
}

export default adminDashContentHeader