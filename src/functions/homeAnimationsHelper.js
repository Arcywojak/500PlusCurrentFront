export const handleScrollOfOtherFields = (e) => {                   
    const movingLeft = document.querySelectorAll(".moving.left"); 
    const movingRight = document.querySelectorAll(".moving.right");
    
    movingLeft.forEach( (e) => {
        if( parseInt(window.innerHeight + window.scrollY -
        (e.clientHeight)  - e.getBoundingClientRect().top) > 0){
        e.classList.add('from-left-move'); 
        }    
    })
    movingRight.forEach( (e) => {
        if( parseInt(window.innerHeight + window.scrollY -
        (e.clientHeight) - e.getBoundingClientRect().top) > 0){
        e.classList.add('from-right-move'); 
        }    
    })  
}

export const handleClick = () => {
    const showVideo = document.querySelector('.video1');
    
    showVideo.classList.toggle('hidden');
    
}

export const handleClickOv = () => {
    const showVideo = document.querySelector('.video1');
    const showVideo2 = document.querySelector('.video2');
    
    this.toggleBlurAndOverlay();

    this.setState({
        isNewsLetterActive:false
    })
    if(showVideo.classList.contains('hidden')){
       showVideo2.classList.add('hidden');           
    }
    else showVideo.classList.add('hidden');     
}

export const handleClick2 = (e) => {

    if( !(e.target.classList.contains('video')) ) {
        const showVideo2 = document.querySelector('.video2');
        if(showVideo2.classList.contains('hidden')){
            showVideo2.childNodes[0].play(); 
        }else{
            showVideo2.childNodes[0].pause();
        }
            
        this.toggleBlurAndOverlay();
        showVideo2.classList.toggle('hidden');
    }
}

export const  handleOnLoad = (e) => {
    const movingLeft = document.querySelectorAll(".moving.left"); 
    const movingRight = document.querySelectorAll(".moving.right");
    
    movingLeft.forEach( (e) => {
       
        if( parseInt(window.innerHeight + window.scrollY-
        (e.clientHeight) - e.getBoundingClientRect().top) > 0){
        e.classList.add('from-left-move'); 
        }    
    })
    movingRight.forEach( (e) => {
        if( parseInt(window.innerHeight + window.scrollY-
        (e.clientHeight) - e.getBoundingClientRect().top) > 0){
        e.classList.add('from-right-move'); 
        }    
    })
   
}

export const handleScrollOfHomeCards = () => {
    const homeCards = document.querySelectorAll('.home-card');

    homeCards.forEach(card => {
     
      if(card.getBoundingClientRect().top - window.innerHeight < -100){ //distance from the bottom of our screen
            card.classList.add('fade-in-from-left')
      }
    })
}

export const handleScroll = () => {
    handleScrollOfHomeCards();
    handleScrollOfOtherFields();
}
