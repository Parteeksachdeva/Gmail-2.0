import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import "./SendMail.css";
import { useForm } from "react-hook-form";

function SendMail({isOpen}) {
    const {register, handleSubmit ,watch,errors }= useForm();
    const onSubmit =(formData)=>{
        console.log(formData);
    };
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon  className="sendMail__close" onClick={()=>{isOpen(false)}} />
            </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                    name="to" 
                    placeholder="To" 
                    type="email" 
                    ref={register({required:true})} 
                    
                    />
                    {errors.to && <p className="sendMail__error">To is Required</p>}
                    
                    <input 
                    name="subject" 
                    placeholder="Subject" 
                    type="text" 
                    ref={register({required:true})}
                    />

                    {errors.subject && <p className="sendMail__error">From is Required</p>}
                    <input  
                    name="message" 
                    placeholder="Message..." 
                    type="text" 
                    className="sendMail__message" 
                    ref={register({required:true})} 
                    
                    />
                    {errors.message && <p className="sendMail__error">Subject is Required</p>}
                    <div className="sendMail__options">
                        <Button 
                        className="sendMail__send"
                        varient="contained"
                        color="primary"
                        type="submit"
                        >Send</Button>
                    </div>
                </form>
            
        </div>
    )
}

export default SendMail
