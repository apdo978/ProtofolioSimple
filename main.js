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
// ai sstyling part 
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = content;
    chatBody.append(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}
function showLoadingIndicator() {
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading');
    loadingDiv.innerHTML = '<span></span><span></span><span></span>';
    chatBody.appendChild(loadingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    return loadingDiv;
}
sendBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    chatInput.value = '';
    sendBtn.disabled = true;

    const loadingIndicator = showLoadingIndicator();
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: message }]
            })
        });

        const data = await response.json();
        chatBody.removeChild(loadingIndicator);
        if (!data.choices) {
            addMessage('Oops! Something went wrong.');
        } else {
            addMessage(data.choices[0].message.content);
        }
    } catch (error) {
        chatBody.removeChild(loadingIndicator); 
        addMessage('Error connecting to the server.');
    }

    sendBtn.disabled = false;
});
document.getElementById('fullscreen-button').addEventListener('click', function () {

    document.querySelector('.body').requestFullscreen();
});

    
    // Simulate assistant response demo
    // setTimeout(() => {
    //     addMessage('This is a simulated response. In a real implementation, this would be replaced with an actual API call to a language model.');
    // }, 1000);


// full screen Part
// document.getElementById('fullscreen-button').addEventListener('click', function () {
  
//     document.querySelector('.body').requestFullscreen(); 
// });
// ai part 

// const sendButton = document.getElementById('send-btn');
// const userInput = document.getElementById('user-input');
// const messagesContainer = document.getElementById('messages');

// sendButton.addEventListener('click', async () => {
//     const userMessage = userInput.value;
//     if (userMessage.trim()) {

//         const userMessageElement = document.createElement('div');
//         userMessageElement.textContent = 'You:' + userMessage;
//         messagesContainer.appendChild(userMessageElement);

//         // إرسال الرسالة إلى OpenAI API
//         const response = await fetch('https://api.openai.com/v1/chat/completions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer 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', // ضع هنا API Key الخاص بك
//             },
//             body: JSON.stringify({
//                 model: "gpt-4o-mini", // أو اختر النموذج الذي تريد استخدامه
               
              
//                 messages: [{ role: "user", content: userMessage }]

//             }),
//         });
//         // prompt: userMessage

//         const data = await response.json();
        
//         const botMessage = data.choices[0].message.content;

//         // إضافة رد GPT إلى واجهة المستخدم
//         const botMessageElement = document.createElement('div');
//         botMessageElement.textContent = 'شات جي بي تي: ' + botMessage;
//         messagesContainer.appendChild(botMessageElement);

//         messagesContainer.scrollTop = messagesContainer.scrollHeight;
//         // مسح المدخلات
//         userInput.value = '';
//     }
// });
// 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

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