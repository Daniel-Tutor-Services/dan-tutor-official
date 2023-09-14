import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomButton from '../customButton/CustomButton';




// eslint-disable-next-line react/prop-types
function CustomToast({title, content, status, style, payload}) {

    const showToastMessage = () => {

        (status==="success")?
        toast.success(`${content}`, {
            position: toast.POSITION.TOP_RIGHT
        }):

        toast.error(`${content}`, {
            position: toast.POSITION.TOP_RIGHT
        })
      
    };

    function handleToast(){
        if(payload){
            payload()
            showToastMessage()
        }
        
        else{
            showToastMessage()
        }
    }




    return (
        <div>
            <CustomButton onClick={handleToast} 
            style={style} 
            title={title}/>
            {/* How to implement */}
            {/* <CustomToast title="ok" content="deleted successfully"/>
            import CustomToast from './components/customToast/CustomToast'; */}
        </div>
    )

}

export default CustomToast
