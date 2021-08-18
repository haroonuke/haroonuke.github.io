var lad = document.getElementById("load")
function loood(){
    setTimeout(function(){
        lad.style.display="none";
    }, 2000);
}

function updown() {
    document.getElementById("signpage").style.top = "0";
}
function downup() {
    document.getElementById("signpage").style.top = "-260px";
}



function exphra(){
    document.getElementById("hrc").style.top="0px";
    document.getElementById("expeca").innerHTML="Engineer";
    document.getElementById("expecb").innerHTML="Write modern, performant, maintainable code for a diverse array of client and internal projects";
    document.getElementById("expecc").innerHTML="Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify";
    document.getElementById("expecd").innerHTML="Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis";
}
function exphrb(){
    document.getElementById("hrc").style.top="40px";
    document.getElementById("expeca").innerHTML="Studio Developer";
    document.getElementById("expecb").innerHTML="Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern";
    document.getElementById("expecc").innerHTML="Helped solidify a brand direction for blistabloc that spans both packaging and web";
    document.getElementById("expecd").innerHTML="Interfaced with clients on a weekly basis, providing technological expertise";
}
function exphrc(){
    document.getElementById("hrc").style.top="80px";
    document.getElementById("expeca").innerHTML="UI Engineer Co-op";
    document.getElementById("expecb").innerHTML="Developed and shipped highly interactive web applications for Apple Music using Ember.js";
    document.getElementById("expecc").innerHTML="Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs";
    document.getElementById("expecd").innerHTML="Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser";
}
function exphrd(){
    document.getElementById("hrc").style.top="120px";
    document.getElementById("expeca").innerHTML="Studio Developer";
    document.getElementById("expecb").innerHTML="Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern";
    document.getElementById("expecc").innerHTML="Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript";
    document.getElementById("expecd").innerHTML="Interfaced with clients on a weekly basis, providing technological expertise";
}
function exphre(){
    document.getElementById("hrc").style.top="160px";
    document.getElementById("expeca").innerHTML="Software Engineer Co-op";
    document.getElementById("expecb").innerHTML="Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS";
    document.getElementById("expecc").innerHTML="Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station";
    document.getElementById("expecd").innerHTML="Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps";
}
function exphrf(){
    document.getElementById("hrc").style.top="200px";
    document.getElementById("expeca").innerHTML="Creative Technologist Co-op";
    document.getElementById("expecb").innerHTML="Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery";
    document.getElementById("expecc").innerHTML="Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness";
    document.getElementById("expecd").innerHTML="Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more";
}


function clk(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "am";

    if (h==0) {
        h=12;
    }
    if (h>12) {
        h=h-12;
    }

    var h=(h<10)? "0"+h:h;
    var m=(m<10)? "0"+m:m;
    var s=(s<10)? "0"+s:s;

    document.getElementById("clock").innerHTML= h +":"+ m +":"+ s+" "+ session ;
           setTimeout(clk,1000);
}
clk();