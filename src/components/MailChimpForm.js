import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useState, useEffect } from 'react';


//CUSTOM FORM
const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [tag, setTag] = useState('');


    const emailChange = (event) => {
        setEmail(event.target.value);
        setTag(3922258);
    };

    const nameChange = (event) => {
        setFirstName(event.target.value);
    }


    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setFirstName('');
        setEmail('');
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            TAGS: tag,
        });
    }

    return (
        <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mc__title">
        {status === "success" 
            ? "Success!" 
            : "Join my email list for a weekly English newsletter you can read during your coffee break."
          }
            
            </h3>
        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            Sending...
          </div>
        )}
        {status === "error" && (
          <div 
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status !=="success" ? (
             <div className="mc__field-container">

            <input type="hidden" name="tags" value={tag} />       
             <input
               label="First Name"
               onChange={nameChange}
               type="text"
               value={firstName}
               placeholder="First Name"
               
             />
   
   
             <input
               label="Email"
               onChange={emailChange}
               type="email"
               value={email}
               placeholder="your@email.com"
               
             />
   
        <input
          label="subscribe"
          type="submit"
          className="subscribe-btn"
          values={[tag, email, firstName]}
        />
        </div>
        ) : null}
      </form>
    );
};



//MAILCHIMP PARENT FORM
export default function MailchimpFormContainer(props) {

    const postUrl = `https://dinaspencer.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;


        return (
        <div className="mc__form-container">
            <MailchimpSubscribe 
            url={postUrl} 
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status} 
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
            />
        </div>
    );
};

