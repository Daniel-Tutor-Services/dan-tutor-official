import React, { useState, useEffect } from 'react'
import './AdminUsers.css'
import AdminDashSide from './AdminDashSide/AdminDashSide'
import AdminDashContentHeader from './AdminDashContentHeader/AdminDashContentHeader'
import UserCard from './UserCard/UserCard'
import UserData from './UserData/UserData'
import { toast } from 'react-toastify';

function AdminUsers({ API_URL }) {
    const [users, setUsers] = useState([]);
    const [users2, setUsers2] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [currentFilter, setCurrentFilter] = useState('All');

    const data =[
        {fullName: ""},
        {email: ""},
        {phoneNumber: ""},
        {password: ""},
    ]
    const mode = 'user'
    function getUsers(){
        fetch(`${API_URL}/auth/users`)
        .then((res) => res.json())
        .then((res) => {
            setUsers(res.users);
            setUsers2(res.users);
            setCurrentFilter("All");
            setCurrentUser(res.users[0]);
        })
    }
    function deleteUser( userId ){
        fetch(`${API_URL}/auth/user`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify({ userId: userId })
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                toast.success(`${res.message}`, {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
            getUsers();
        })
    }
    function filterUsers(filter){
        let newUsers = users2;
        if (filter === "Admin") newUsers = users2.filter(user => ( user.isAdmin ));
        if (filter === "User") newUsers = users2.filter(user => ( !user.isAdmin ));
        setCurrentUser(newUsers[0]);
        setUsers(newUsers);
    }
    useEffect(() => {
        getUsers();
        // eslint-disable-next-line 
    }, []);
  return (
    <div className="adminDashContainer">
        <AdminDashSide />
        <div className="adminDashContent">
            <div className="adminDashContentContainer">
                <AdminDashContentHeader mData={data} mMode={mode} API_URL={API_URL} getUsers={getUsers} filterUsers={filterUsers} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
                <div className="adminDashContentBody">
                    <div className="adminDashCourseOutlines">
                        {
                            users.map((user) => (
                                <UserCard key={user._id} title={user.fullName} currentUser={currentUser} deleteUser={deleteUser} user={user} onClick={() => { setCurrentUser(user) }} />
                            ))
                        }
                    </div>
                    <div className="adminDashCourseOutlinesVideos">
                        {
                            users.length ? 
                                <UserData 
                                fullName = {currentUser.fullName} 
                                email  = {currentUser.email}
                                phoneNumber = {currentUser.phoneNumber}
                                isAdmin = {currentUser.isAdmin}
                                /> : 
                                ""
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
            
  )
}

export default AdminUsers