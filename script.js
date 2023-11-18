let activeTimer=document.getElementById("active-timers")
function createTimeInsecond()
{
    let hours=document.getElementById("hours").value ||0;
    let minutes=document.getElementById("minutes").value ||0;
    let seconds=document.getElementById("seconds").value ||0;

  if(hours=="" && minutes=="" && seconds=="")
   {
      alert("Enter valid value");
   }

   let ValueInSeconds=parseInt(hours)*3600+parseInt(minutes)*60+parseInt(seconds);
//    console.log(ValueInSeconds);
  DisplayTimer(ValueInSeconds);
}
function recall(seconds)
{
    DisplayTimer(seconds);
}

function DisplayTimer(seconds)
{    

    let timerDisplayDiv=document.createElement("div");

    let id=setInterval(() => {
       
        seconds--;
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = Math.floor(seconds % 60);
        timerDisplayDiv.textContent=`Set Time ${hours} ${minutes}  ${remainingSeconds}`

        let button1=document.createElement("button");
        button1.innerText="stop";
        timerDisplayDiv.appendChild(button1);
        button1.onclick=()=>{clearInterval(id)}

        let button2=document.createElement("button");
        button2.innerText="start";
        timerDisplayDiv.appendChild(button2);
        button2.onclick=(e)=>{e.target.parentNode.remove() ,recall(seconds)}

        
        if(seconds<=0)
        {
            
            timerDisplayDiv.textContent="";
            let endMessage=document.createElement("span");
            endMessage.innerText="Time's up"
            timerDisplayDiv.appendChild(endMessage);
            clearInterval(id);
            console.log("I entered in this fuction");

            let button=document.createElement("button");
            button.innerText="delete";
            timerDisplayDiv.appendChild(button);
            button.onclick=()=>{button.parentNode.remove()}
        }
    }, 1000);
    
    activeTimer.appendChild(timerDisplayDiv);

}