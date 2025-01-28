//moving background
// window.addEventListener('scroll', function () {
//         let scrolled = window.pageYOffset;
//         document.querySelector('.parallax').style.backgroundPosition = 'center ' + (scrolled * 0.33) + 'px';
//     });
//  document.querySelector(".btn cta").addEventListener("click", function () {

//     });

// Smooth scrolling for nav links
//NavBarBtns and thair animation 
(function () {
    emailjs.init({
        publicKey: "pTJXgAYxxtFObHDBu",
    });
})();
const NavBarBtns = document.querySelectorAll('nav a');
NavBarBtns.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: "start",
             inline: "center"
        });
        NavBarBtns.forEach((link) => {
            link.style.backgroundColor = "transparent"
            link.style.color = "white";
        })
        link.style.backgroundColor = "white"
        link.style.color = "black";


    });
});

//send email funcc
const form = document.querySelector('#contact-form')
const phoneInput = document.getElementById('phone-number');
const phonePattern = /^01[0-9]{9}$/;
const errorMessage = document.getElementById('error-message');
const firstName = document.getElementById('last-name')
const lastName = document.getElementById('first-name')
const email = document.getElementById('email')
const messageName = document.getElementById('message')
const serviceID = 'service_67kb1dc'
const TemplateID = 'template_y85lxo7'


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = { firstName: firstName.value, lastName: lastName.value, phoneInput: phoneInput.value,email: email.value, messageName: messageName.value }
    if (!phonePattern.test(phoneInput.value)) {
        errorMessage.style.display = 'block'; 
        return 
    }
    else {errorMessage.style.display = 'none'; }
    Swal.fire({
        title: 'Sending...',
        text: 'Please wait while your email is being sent.',
        icon: 'info',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    emailjs.send(serviceID, TemplateID, formData).then((res) => {

        Swal.fire({
            title: 'Success!',
            text: 'Your Email sent successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        messageName.value = '';
    }).catch(err => {
        Swal.fire({
            title: 'Error!',
            text: `Failed to send email: ${err}`,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    })

})





// Add fade-in effect on scroll
const sections = document.querySelectorAll('section');
const sections1 = document.querySelectorAll('.interactive-list li');
const sections2 = document.querySelectorAll('section div');
const options = {
    threshold: 0.0500
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.boundingClientRect.top < window.innerHeight / 2) {
                entry.target.classList.add('from-top');
            }
            else {
                entry.target.classList.add('from-bottom');
            }
        }
        else {
            entry.target.classList.remove('in-view', 'from-top', 'from-bottom');
        }
    });
}, options);
[...sections, ...sections1, ...sections2].forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    observer.observe(section);
});

// Scroll to top button functionality
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > window.innerHeight / 2) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('nav a').forEach((link) => {
        link.style.backgroundColor = "transparent"
        link.style.color = "white";
    })
});

document.querySelectorAll('section li').forEach(list => {
    list.addEventListener('click', () => {
        list.classList.toggle('active');
        if (list.classList.contains('active')) {


            list.nextElementSibling.style.display = 'none'
        } else {
            list.nextElementSibling.style.display = ''



        }
    })
})
document.querySelector('.fa-whatsapp').addEventListener('click', () => {
    window.location.assign('https://wa.me/0201271175532')
})
document.querySelector('footer p span').textContent = " " + new Date().getFullYear().toString();
const con = `      
                                   .#@@@@@%
                                 .*@@@@@@@=
                                *@@@@@@@=.
                              =@@@@@@@+  
                            =@@@@@@@*.    
                          :@@@@@@@%.       
    %@@@@@%:           .%@@@@@@%.           
    :@@@@@@@#.       .#@@@@@@@:            
      =@@@@@@@*     *@@@@@@@=            
        +@@@@@@@  +@@@@@@@+          
          *@@@@:=@@@@@@@*            
           .#@=@@@@@@@#.            
             :%@@@@@%:             
               :*%*:                
`
console.log(con);