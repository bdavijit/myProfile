// import { emailjs } from '@emailjs/browser';
import React from 'react';
import emailjs from '@emailjs/browser';

const publicKey = "BOH3Hw5BPod1IYgxv";

const sendemail = (event) =>{
        event.preventDefault();
         console.log(event.target.name.value); 
         console.log(event.target.Email.value); 
         console.log(event.target.Message.value); 

         var templateParams = {
               from_name: event.target.name.value,
               email_id: event.target.Email.value,
               message: event.target.Message.value,
         };
         console.log(templateParams);

         
               emailjs
                     .send(
                           'service_9fbvy3o',
                           'template_bjeyk6t',
                           templateParams,
                           publicKey
                     )
                     .then(
                           function (response) {
                                 console.log(
                                       'SUCCESS!',
                                       response.status,
                                       response.text
                                 );
                           },
                           function (error) {
                                 console.log('FAILED...', error);
                           }
                     );
}


const Contact = () => {

     


    return (
          <>
                <form onSubmit={sendemail}>
                      <label>
                            Name:
                            <input type='text' name='name' required />
                      </label>
                      <br></br>
                      <label>
                            Email:
                            <input type='Email' name='Email' required />
                      </label>
                      <br></br>
                      <label>
                            Message:
                            <textarea type='text' name='Message' required />
                      </label>
                      <br></br>

                      <button type='submit'>Send</button>
                </form>
          </>
    );
};

export default Contact;