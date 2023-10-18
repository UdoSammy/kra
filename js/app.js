// onScroll animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const animateScroll1 = document.querySelectorAll('.hidden1')
const animateScroll2 = document.querySelectorAll('.hidden2')
const animateScroll3 = document.querySelectorAll('.hidden3')

animateScroll1.forEach((el)=> observer.observe(el));
animateScroll2.forEach((el)=> observer.observe(el));
animateScroll3.forEach((el)=> observer.observe(el));