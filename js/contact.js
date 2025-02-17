import { emailjs } from emailjs
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this;
    const formData = new FormData(form);
    const data = {
        email: formData.get('email'),
        message: formData.get('message')
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
        .then(function(response) {
            alert('Email sent successfully!');
            form.reset();
        }, function(error) {
            alert('Failed to send email. Please try again.');
        });
});
