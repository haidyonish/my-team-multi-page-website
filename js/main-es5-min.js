!function(){let e=document.querySelector(".header__burger"),r=document.querySelector(".header__nav-cross"),a=document.querySelector(".header__nav"),t=document.querySelector(".header__nav-wrapper");e.addEventListener("click",()=>{a.classList.add("header__nav_active"),t.classList.add("header__nav-wrapper_active")}),r.addEventListener("click",()=>{a.classList.remove("header__nav_active"),t.classList.remove("header__nav-wrapper_active")})}();const options={rootMargin:"0px 5000px 100px 5000px",threshold:.5},callback=function(e,r){e.forEach(e=>{let{target:r,isIntersecting:a,intersectRatio:t}=e;a&&r.classList.add("target_shown")})},observer=new IntersectionObserver(callback,options),elems=document.querySelectorAll(".target_hidden-l, .target_hidden-r, .target_hidden-b");elems.forEach(e=>{observer.observe(e)});