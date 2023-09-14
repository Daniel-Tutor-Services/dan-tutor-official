import React from 'react'
import './CustomModal.css'
import {useState,useEffect} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import CustomInput from '../customInput/CustomInput'
import CustomButton from '../customButton/CustomButton'
import axios from 'axios';




// eslint-disable-next-line react/prop-types
function CustomModal({ data, mode, API_URL, currentCourse, getCourses, getUsers, getOutline, getVideos, currentCourseOutline }) {
    const [file, setFile] = useState(null)
    const [courseData, setCourseData] = useState({})
    const [courseDataKeys,setCourseDataKeys] = useState([])
    const [uploadPercentage, setUploadPercentage] = useState(0)

    
    const finalObj = {};
    // eslint-disable-next-line react/prop-types
    for(let i = 0; i < data.length; i++ ) {
        Object.assign(finalObj, data[i]);
    }

    useEffect(()=>{
        const newData = {...finalObj}
        // setCourseData(newData)
        setCourseDataKeys([...Object.keys(newData)])
        // eslint-disable-next-line
    },[])

    function updateCoursedata(e){
        const { value, name } = e.target
        setCourseData(initialUserData => ({
            ...initialUserData,
            [name]: value
        }))
        // console.log(courseData);
    }
    
    function handleFileChange(e){
        const { files } = e.target;
        setFile(files[0]);
        // console.log(files[0]);
    }
    
    function createCourse(e){
        e.preventDefault();
        const formData = new FormData();
        
        // console.log(Object.fromEntries(course));
        
        
        if(mode === "course"){
            if(courseData.instructor.trim().split(" ").length < 2){
                return toast.success(`Instructor must have at least two names`, {
                    position: toast.POSITION.TOP_RIGHT
                })
            }

            formData.append("courseData", JSON.stringify(courseData));
            formData.append("file", file);
            
            fetch(`${API_URL}/api/course`, {
                // headers: {
                //   'Content-Type': 'application/json'
                // },
                method: "POST",
                // body: JSON.stringify(Object.fromEntries(course))
                body: formData
                // file: JSON.stringify({name: ""})
            })

            .then(res => res.json())
            .then(res => {
                if(res.success) {
                    toast.success(`${res.message}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
                else{
                    toast.error(`${res.message}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
                closeModal();
                getCourses();
            })

            .catch(()=> toast.error(`Server Error`, {
                position: toast.POSITION.TOP_RIGHT
            }) )
        }

    
        if(mode === "outline"){
            axios.post(`${API_URL}/api/outlines`, {
                // eslint-disable-next-line react/prop-types
                courseId: currentCourse._id,
                ...courseData
            })
            .then(res => {
                if(res.data.success) {
                    toast.success(`${res.data.message}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    getOutline();
                }

            },(error)=>{
                toast.error(`${error}`, {
                    position: toast.POSITION.TOP_RIGHT
                })
            })
            closeModal();
            getCourses();
        }

        if(mode === "video"){
            formData.append("videoData", JSON.stringify({
                // eslint-disable-next-line react/prop-types
                courseId: currentCourse._id,
                // eslint-disable-next-line react/prop-types
                outlineId: currentCourseOutline._id,
                ...courseData
            }));
            formData.append("file", file);

            const options = {
                onUploadProgress: (progressEvent) => {
                    const {loaded, total} = progressEvent;
                    
                    let percent = Math.floor((loaded / total) * 100)
                    console.log(`${loaded}kb of ${total}kb | ${percent}%`);
                    
                    setUploadPercentage(percent)
                
                }
            }

            // return console.log(API_URL);
            //  console.log(currentCourseOutline)
            // console.log(JSON.stringify({courseId: currentCourse._id, ...courseData}))
            axios.post(`${API_URL}/api/videos`, formData, options)
            .then(res => {
                if(res.data.success) {
                    toast.success(`${res.data.message}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    getVideos(currentCourseOutline);
                }
                
                else{
                    toast.error(`${res.data.message}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
                
                closeModal();
                setUploadPercentage(0)
            })

            .catch((error) => toast.error(`Server Error ${error} `, {
                position: toast.POSITION.TOP_RIGHT
            }))

        }
        
        if(mode === "user"){
            // console.log(courseData);
            fetch(`${API_URL}/auth/user/register`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ ...courseData, isAdmin: true })
            })

            .then(res => res.json())
            .then((res) =>  {
                closeModal();
                getUsers();
                if(res.success) toast.success(`User Created`, { toastId: 'success1',
                    position: toast.POSITION.TOP_RIGHT
                });
            }) 
        
        }
    
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }




    return (

        <div>
            {/* <CustomButton onClick={openModal}  title = 'Create +' style = {{width: '20%', margin: '8px 0% auto'}} /> */}
            <CustomButton 
                onClick={openModal}  
                title = {mode === 'video' ?'ADD':'Create +' }
                style = {{
                marginRight: '20px',
                background: '#151D3B',
                color: 'white',
                padding: '10px 20px',
                width: '100px'
                }} 
            />


            <Modal className={'modal'}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                ariaHideApp={false} >
           
                <div className="modal-form">
                    <form onSubmit={createCourse}>
                        <div className='percent'><p style={{color: "white"}}>{(uploadPercentage !== 0) && `${uploadPercentage} %`} </p></div>

                        {(uploadPercentage !== 0) && <progress style={{backgrounColor: "yellow", width: "320px", height: "40px",}} min={0} max={100} value={uploadPercentage}/> } 
                            
                        {
                            courseDataKeys.map((button,index)=>(
                                <>
                                    {button.toLowerCase() === "file" ? <p style={{color: "white"}}>file</p> : ""}
                                    {button.toLowerCase() === "video" ? <p style={{color: "white"}}>video</p> : ""}

                                    <CustomInput
                                        key={index}
                                        placeholder={`${button.toUpperCase()} ${button.toLowerCase() === "requirements" ? "(HTML, CSS, NodeJS)" : ""}`}
                                        name={button}
                                        value={courseData[button]}
                                        type = {button.toLowerCase() === ("thumbnail") || button.toLowerCase() === ("video") ? 'file' : 'text' }
                                        style = {{width: '100%'}} 
                                        onChange={button.toLowerCase() === ("thumbnail") || button.toLowerCase() === ("video") ? handleFileChange : updateCoursedata}
                                    />
                                </>
                            ))
                        }

                        <CustomButton title = 'SUBMIT' style = {{width: '100%', margin: '8px 0% auto'}} />
                        
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default CustomModal