const toggleBtn=document.querySelector(".toggle");
const navlinks=document.querySelector(".nav-link");
toggleBtn.addEventListener("Click",()=>{
    navlinks.forEach(function(link) {
        link.classlist.toggle("active");
        console.log(link);
        
    });
})