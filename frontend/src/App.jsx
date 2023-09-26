import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';




function App() {

    
    // useEffect(() => {
    //     typeof window !== 'undefined' && 
    //     window.document.addEventListener("contextmenu", (e) => {
    //         e.preventDefault();
    //     });
    // }, []); 
    
    // document.onkeydown = function(e) {
    //     console.log(e.key)
    //     if(e.key === 'F12') {
    //         return false;
    //     }
    //     if(e.ctrlKey && e.shiftKey && e.key === 'I') {
    //         return false;
    //     }
    //     if(e.ctrlKey && e.shiftKey && e.key === 'C') {
    //         return false;
    //     }
    //     if(e.ctrlKey && e.shiftKey && e.key === 'J') {
    //         return false;
    //     }
    //     if(e.ctrlKey && e.key === 'u') {
    //         return false;
    //     }
    // } 
    


    return (
        <div className='dantutorall'>
            <Outlet/>         
            <ToastContainer />          
        </div>
    )
}

export default App;








