function sendMail() {
    
    emailjs.sendForm("sendgrid","email_template_crystal_industries",contactusform);
    alert("Successfully sent!");
 



}