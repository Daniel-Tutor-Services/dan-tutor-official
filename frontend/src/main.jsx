import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';



//About
import AboutPage from './pages/about/AboutPage.jsx';
import AllStaffPage from './pages/about/AllStaffPage.jsx';


//Admin
import AdminDashBoard from './pages/adminPage/adminDashBoard/AdminDashBoard.jsx';
import AdminUsers from './pages/adminPage/adminDashBoard/AdminUsers.jsx';
import AdminOutline from './pages/adminPage/adminDashBoard/AdminAllOutline.jsx';
import AdminContacts from './pages/adminPage/adminDashBoard/AdminContacts.jsx';


//Contact
import ContactPage from './pages/contactPage/ContactPage.jsx';



//Course Subjects
import Chemistry from './pages/courseOutline/courseSubjects/chemistry.jsx';
import EnglishLanguage from './pages/courseOutline/courseSubjects/EnglishLanguage.jsx';
import Mathematics from './pages/courseOutline/courseSubjects/Mathematics';
import Physics from './pages/courseOutline/courseSubjects/Physics';


//Dashboard
import DashBoard from './pages/dashBoard/DashBoard.jsx';


//Error Page
import ErrorPage from './pages/errorPage/ErrorPage.jsx';


//Forgot Password
import ForgotPassword from './pages/forgotPassword/ForgotPassword.jsx';


//Homepage
import HomePage from './pages/homePage/HomePage.jsx';


//Login Page
import LoginPage from './pages/loginPage/LoginPage.jsx';


//Policy
import PrivacyPolicy from './pages/policy/privacyPolicy/PrivacyPolicy.jsx';
import TermsOfUse from './pages/policy/termsOfUse/TermsOfUse.jsx';


//Profile Page
import ChangePassword from './pages/profilePage/ChangePassword.jsx';
import EditedProfile from './pages/profilePage/EditedProfile.jsx'
import ProfilePage from './pages/profilePage/ProfilePage.jsx';


//Signup
import SignupPage from './pages/signupPage/SignupPage.jsx';


//Waiting Page
import SuccessPage from './pages/waitingPage/SuccessPage.jsx'
import WaitingPage from './pages/waitingPage/WaitingPage.jsx';


//Utils
import PrivateRoutes from './util/PrivateRoutes.jsx';



const router = createBrowserRouter(


    createRoutesFromElements(
        <Route path= '/' element = {<App/>}>

            {/* Homepage */}
            <Route index= {true} path='/' exact element = {<HomePage/>} />
            


            {/* About */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/allstaffpage" element={<AllStaffPage />} />



            {/* Admin */}
            <Route path="/admin-contacts" element={<AdminContacts />} />

            <Route path='/admin-outline' element = {<PrivateRoutes />}>
                <Route path="/admin-outline" element={<AdminOutline />} />
            </Route>

            <Route path='/admin-users' element = {<PrivateRoutes />}>
                <Route path="/admin-users" element={<AdminUsers />} />
            </Route>

            <Route path='/admin-dash' element = {<PrivateRoutes/>}>
                <Route path="/admin-dash" element={<AdminDashBoard />} />
            </Route>



            {/* Contact */}
            {/* <Route path='/contactus' element = {<PrivateRoutes />}> */}
                <Route path="/contactus" element={<ContactPage />} />
            {/* </Route> */}



            {/* Course Subjects */} 
            <Route path='/course-chemistry' element = {<PrivateRoutes />}> 
                <Route path="/course-chemistry" element={<Chemistry />} />  
            </Route>

            <Route path='/course-english-language' element = {<PrivateRoutes />}> 
                <Route path="/course-english-language" element={<EnglishLanguage />} />  
            </Route>

            <Route path='/course-mathematics' element = {<PrivateRoutes />}> 
                <Route path="/course-mathematics" element={<Mathematics />} />  
            </Route>

            <Route path='/course-physics' element = {<PrivateRoutes />}> 
                <Route path="/course-physics" element={<Physics />} />  
            </Route>


            {/* Dashboard */}

            {/* <Route path="/dash-board" element={userData?.isAdmin ? <AdminDashBoard API_URL={API_URL} currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} /> :  <DashBoard API_URL={API_URL} setCurrentCourse={setCurrentCourse} />} /> */}
            <Route path="/dash-board" element={<DashBoard/>} />



            {/* Error Page */}
            <Route path="/*" element={<ErrorPage />} />



            {/* Forgot Password */}
            <Route path="/forgot-password" element={<ForgotPassword/>} />


            {/* Login Page */}
            <Route path="/login" element={<LoginPage />} />


            {/* Policy */}
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsOfUse />} />



            {/* Profile Page */}
            <Route path='/change-password' element = {<PrivateRoutes />}>
                <Route path="/change-password" element={<ChangePassword />} />
            </Route>

            <Route path='/edited-profile' element = {<PrivateRoutes />}>
                <Route path="/edited-profile" element={<EditedProfile />} />
            </Route>

            <Route path='/profile-page' element = {<PrivateRoutes />}>
                <Route path="/profile-page" element={<ProfilePage />} />
            </Route>



            {/* Signup */}
            <Route path="/signup" element={<SignupPage />} />



            {/* Waiting Page */}
            <Route path='/waiting-page' element = {<PrivateRoutes />}>
                <Route path="/waiting-page" element={<WaitingPage />} />
            </Route>

            <Route path='/success-page' element = {<PrivateRoutes />}>
                <Route path="/success-page" element={<SuccessPage />} />
            </Route>



            {/* Utils */}
            <Route path="*" element={<DashBoard/>} />

        </Route>
    )
);


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store = {store} >
        <React.StrictMode>
            <RouterProvider router ={ router }  />
        </React.StrictMode>
    </Provider>
);


export default createRoutesFromElements;
