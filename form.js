import React from "react";
import "./form.css";

function Signup() {
    //formdata is an object which contains value of input field of given name
    const [formdata,setdata]=React.useState(
        {
            email:"",
            newpass:"",
            cpass:"",
            ischecked:true
        }
    )
    function handlechange(event)
    {
        // alert(event.target.name)
        //will return name of input field we are onchanging


        let {name,type,value,checked}=event.target
       
            setdata(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: type=="checkbox"?checked:value
                }
            })
    }
                
    
    function handlesubmit(event)
    {
        event.preventDefault()
        if (formdata.newpass == formdata.cpass)
        {
            alert("successfully signed in")
        }
        else{
            alert("password mismatched")
            return
        }
        if (formdata.ischecked) {
            alert("Thanks for signing up for our newsletter!")
        }
    }

    return(

            <div className="form-container">
                <form onSubmit={handlesubmit} className="form">


                    <input
                    type="text"
                    placeholder="email"
                    className="form--input"
                    name="email"
                    value={formdata.email}
                    onChange={handlechange}
                    />


                    <input
                        type="password"
                        className="form--input"
                        placeholder="newpassword"
                        name="newpass"
                        value={formdata.newpass}
                        onChange={handlechange}
                    />


                    <input
                        type="password"
                        className="form--input"
                        placeholder="confirm password"
                        name="cpass"
                        value={formdata.cpass}
                        onChange={handlechange}
                    />


                    <div className="form--marketing">
                    <input
                    type="checkbox"
                    id="check"
                    name="ischecked"
                    checked={formdata.ischecked}
                    onChange={handlechange}
                    />
                   
                     <label htmlFor="check">want to join newsletter</label> 
                    </div>


                    <button
                        className="form--submit"
                    > Sign up
                    </button>

                </form>
            </div>
           
       
    )
}
export default Signup;
