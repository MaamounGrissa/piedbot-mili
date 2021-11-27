import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import Grow from '@mui/material/Grow';
import emailjs from 'emailjs-com';

function Callback(props) {
    const { show, data } = props;
    const [formData, setFormData] = useState({ name: '', phone: ''})

    const clear = () => {
        setFormData({ name: '', phone: ''})
    }

    const sendEmail = (e) => {
        e.preventDefault();

        let feedbackDom = document.getElementById('modal-feedback');

        if (formData.name === '') {
            feedbackDom.textContent = "Please enter your name";
            feedbackDom.style.color = "#F00";
            feedbackDom.style.display = "block";
            return
        } 
        if (formData.phone === '') {
            feedbackDom.textContent = "Please enter your phone";
            feedbackDom.style.color = "#F00";
            feedbackDom.style.display = "block";
            return
        } 
        var templateParams = {
            name: formData.name,
            phone: formData.phone,
        }
        const serviceID = 'service_7rmrm67';
        const templateID = 'template_l8csal8';
        const userID = 'user_SLJ8sSNE36vqSQnSZKzPt';

        try {
            emailjs.send(serviceID, templateID, templateParams, userID);
            feedback.textContent = "Message sent successfully.";
            feedback.style.color = "#080";
            feedback.style.display = "block";
            clear();

        } catch(error) {
            console.log({error})
            feedback.textContent = "Error, Try later please!";
            feedback.style.color = "#F00";
            feedback.style.display = "block";
        }
    }

    if (!show) return null
    return (
        <Grow in={show} className="modal-container">
            <div>
                <div className="modal-content">
                    <CancelIcon className="close-modal" onClick={props.close} />
                    <form>
                        <h3>{data.title}</h3>
                        <input name="name" type="text" placeholder={data.name} 
                                value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                        <input name="phone" type="tel" placeholder={data.phone}
                                value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                        <button type="submit" onClick={e => sendEmail(e)} >{data.send}</button>
                        <span id="modal-feedback" className="feedback">{'feedback'}</span>
                    </form>
                </div>
            </div>
        </Grow>
    )
}

export default Callback
