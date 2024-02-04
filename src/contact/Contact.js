import React, { useState } from 'react'
import "./Contact.css"

function Contact() {
    const [form,setForm] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message:""
    })
    const[alert,setAlert] = useState("")
    const[currentClasses,setCurrentClasses] = useState("alert fade" )
    

   const removeAlert = () => {
        setTimeout(() => {
          setCurrentClasses ("alert fade")
        }, 5000);
    }
    
     const onSubmit = (e) => {
        e.preventDefault();
       fetch('https://formspree.io/f/xdoqezzp', {
        method: "POST",
        headers: {'Content-type' : 'application/json'},
        body : JSON.stringify(form),
       })
       .then((res) => res.json())
       .then((data) => {
        setAlert( 'Your response has been successfully submitted.')
        setCurrentClasses (
            "alert fade show alert-success"
        )
        console.log(alert)
        setForm({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message:""
        })
        removeAlert()
       })
       .catch((err) => {
        setAlert( 'There has been an error submitting your response')
        setCurrentClasses(
            "alert fade show alert-danger"
        )
        console.log("second")
         removeAlert()
       })
            
    }

    return (
        <div>

            <div class="section" id="contact">
                <div className={currentClasses}>{alert}</div>
                <h5 class="title">Contact With Me</h5>
                <form   onSubmit={onSubmit}>
                    <div class="form-group">
                        <label for="name" class="form-label">Your Name</label>
                        <input  type="text" value={form.name} class="form-input" onChange={(e) => setForm({...form,name: e.target.value})}/>
                    </div>
                    <div class="form-group">
                        <label for="phone" class="form-label">Phone Number</label>
                        <input type="tel" value={form.phone
                         } class="form-input" onChange={(e) => setForm({...form, phone: e.target.value})} />
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input  type="email" value={form.email} class="form-input" onChange={(e) => setForm({...form, email: e.target.value})} />
                    </div>
                    <div class="form-group">
                        <label for="subject" class="form-label">Subject</label>
                        <input  type="text" value={form.subject} class="form-input" onChange={(e) => setForm({...form, subject: e.target.value})} />
                    </div>
                    <div class="form-group">
                        <label for="message" class="form-label">Your Message</label>
                        <textarea  value={form.message} class="form-input" rows="3" onChange={(e) => setForm({...form, message: e.target.value})}></textarea>
                    </div>
                    <button type="submit" class="bttn">Send Message <i class="bi bi-arrow-right"></i></button>
                </form>
            </div>
        </div>

    )
}

export default Contact