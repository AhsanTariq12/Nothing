const videoPlayer = Array.from(document.getElementsByClassName("video-player"));
const video = Array.from(document.getElementsByClassName("video"));
const playButton =Array.from(document.getElementsByClassName("play-button"));
const controls = Array.from(document.getElementsByClassName("player-controls"));


//Play and Pause button

videoPlayer.forEach((vp,ivp)=>{
   video.forEach((v,iv)=>{
    playButton.forEach((pb,ipb)=>{
      controls.forEach((c,ic)=>{
        if(ivp==iv && iv==ipb && ipb==ic){
          c.addEventListener("click", () => {

            if (v.paused) {
              v.play();
              
                pb.classList.add("fa-pause");
      
           
            } else {
              v.pause();
              Array.from.forEach((pb)=>{
                pb.classList.remove("fa-pause");
      
              })
          
            }
        })
      
      
        v.addEventListener("play", () => {
         
            pb.classList.add("fa-pause");
      
          })
      
        v.addEventListener("pause", () => {
         
            pb.classList.remove("fa-pause");
      
       
        })
        v.addEventListener("ended", () => {
          
            pb.classList.remove("fa-pause");
      
       
        })
        if (v.paused) {
          v.onmouseout = () => {
           
           
              c.style.display = "none";
        
            }
          v.onmouseover = () => {
        
           
              c.style.display = "block";
       
            };
         
              c.onmouseover = () => {
           
              c.style.display = "block";
        }}
        }
      })
    })
    })
})





      
  
