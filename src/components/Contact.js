import React from "react";
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import Paw from "./Paw.svg";
function Contact(props){

return(

<div className="contacts-page">
<div className="about-paws">
<h1> About Paws </h1>
<img src={Paw} className="navbar__brand-img" alt="logo" />
</div>
<Footer/>

</div>

);


}
export default Contact;