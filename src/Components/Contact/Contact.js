import React from 'react';

const sendemail = (event) =>{
        event.preventDefault();
         console.log(event.target.name.value); 
         console.log(event.target.Email.value); 
         console.log(event.target.Message.value); 
}


const Contact = () => {

     


    return (
          <>
                <form onSubmit={sendemail}>
                      <label>
                            Name:
                            <input type='text' name='name' />
                      </label>
                      <br></br>
                      <label>
                            Email:
                            <input type='Email' name='Email' />
                      </label>
                      <br></br>
                      <label>
                            Message:
                            <textarea type='text' name='Message' />
                      </label>
                      <br></br>

                      <button type='submit'>Send</button>
                </form>
          </>
    );
};

export default Contact;