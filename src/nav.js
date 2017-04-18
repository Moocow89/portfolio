import $ from 'jquery';

export default function toggleNav(){
    
  const toggles = $(".nav-menu-button");
  console.log(toggles);
  const navList = $(".nav-list");
  const link = $(".nav-link-phone");
  const nav = $(".navigation-phone");

  for (let i = toggles.length - 1; i >= 0; i--) {
    const toggle = toggles[i];
    toggleHandler(toggle);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if (this.classList.contains("is-active") === true) {
        this.classList.remove("is-active");
        navList.slideUp(300);   
       
      }else{
        this.classList.add("is-active");
        navList.slideDown(300);
      }  
    });
  }
  

    link.click(function(){
         navList.slideUp(0);
         toggles[0].classList.remove("is-active");
    });
    
    //check if user is scrolling
    $(window).on('wheel', function(e){
        const delta = e.originalEvent.deltaY;
        
        //if scrolling down
        if(delta > 0){
            nav.css("position", "absolute");
        }else{
            nav.css("position", "fixed");
          
        }
    });

  
}
