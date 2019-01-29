var turns=1;
var tds=document.querySelectorAll("td");
var gameover=false;
var interval;
var xscoreDisplay=document.querySelector("#xscore");
var oscoreDisplay=document.querySelector("#oscore");
var xscore=0;
var oscore=0;
xscoreDisplay.textContent=xscore;
oscoreDisplay.textContent=oscore;
var winner=-1;
var reboard=document.querySelector("#recycle");
var reload=document.querySelector("#restart");
var arr=[];
for(var i=0;i<tds.length;i++)
{
    tds[i].addEventListener("click",function(){
        if(gameover==false&&!(this.firstElementChild.classList.contains("glyphicon")))
        {
            turns++;
            if(turns%2==0)
            {
                this.firstElementChild.classList.add("glyphicon");
                this.firstElementChild.classList.add("glyphicon-dashboard");
                var idx=Number(this.id);
                arr[idx]=0;
                console.log(idx);
            }
            else if(turns%2!=0){
                this.firstElementChild.classList.add("glyphicon");
                this.firstElementChild.classList.add("glyphicon-remove");
                var idx=Number(this.id);
                arr[idx]=1;
                console.log(idx);
            }
            if(turns>=5)
            {
                if((arr[0]==1&&arr[1]==1&&arr[2]==1)||(arr[3]==1&&arr[4]==1&&arr[5]==1)||(arr[6]==1&&arr[7]==1&&arr[8]==1)||(arr[0]==1&&arr[3]==1&&arr[6]==1)||(arr[2]==1&&arr[5]==1&&arr[8]==1)||(arr[0]==1&&arr[4]==1&&arr[8]==1)||(arr[2]==1&&arr[4]==1&&arr[6]==1)||(arr[1]==1&&arr[4]==1&&arr[7]==1))
                {
                    winner=1;
                    xscore++;
                    xscoreDisplay.textContent=xscore;
                    oscoreDisplay.textContent=oscore;
                    interval=setInterval(function()
                        {
                            for(var i=0;i<9;i++)
                            {
                                if(tds[i].firstElementChild.classList.contains("glyphicon")==true&&tds[i].firstElementChild.classList.contains("glyphicon-dashboard")==false)
                                {
                                    tds[i].firstElementChild.classList.toggle("glyphicon-remove");
                                }
                            }
                        },200);
                    gameover=true;
                    console.log("x wins");
                }
                else if((arr[0]==0&&arr[1]==0&&arr[2]==0)||(arr[3]==0&&arr[4]==0&&arr[5]==0)||(arr[6]==0&&arr[7]==0&&arr[8]==0)||(arr[0]==0&&arr[3]==0&&arr[6]==0)||(arr[2]==0&&arr[5]==0&&arr[8]==0)||(arr[0]==0&&arr[4]==0&&arr[8]==0)||(arr[2]==0&&arr[4]==0&&arr[6]==0)||(arr[1]==0&&arr[4]==0&&arr[7]==0))
                {
                    winner=0;
                    oscore++;
                    xscoreDisplay.textContent=xscore;
                    oscoreDisplay.textContent=oscore;
                    interval=setInterval(function()
                        {
                            for(var i=0;i<9;i++)
                            {
                                if(tds[i].firstElementChild.classList.contains("glyphicon")==true&&tds[i].firstElementChild.classList.contains("glyphicon-remove")==false)
                                {
                                    tds[i].firstElementChild.classList.toggle("glyphicon-dashboard");
                                }
                            }
                        },200);
                    gameover=true;
                    console.log("o wins");
                }
            } 
        }       
    });
}
reboard.addEventListener("click",function(){
    if(xscore>oscore)
    turns=0;
    else if(oscore>=xscore)
    turns=1;
    gameover=false;
    winner=-1;
    for(var i=0;i<9;i++)
    {
        arr[i]=-1;
        tds[i].firstElementChild.classList.remove("glyphicon");
        tds[i].firstElementChild.classList.remove("glyphicon-remove");
        tds[i].firstElementChild.classList.remove("glyphicon-dashboard");
    }
    clearInterval(interval);
    
});
reload.addEventListener("click",function(){
    xscore=0;
    oscore=0;
    xscoreDisplay.textContent=0;
    oscoreDisplay.textContent=0;
    turns=1;
    gameover=false;
    winner=-1;
    for(var i=0;i<9;i++)
    {
        arr[i]=-1;
        tds[i].firstElementChild.classList.remove("glyphicon");
        tds[i].firstElementChild.classList.remove("glyphicon-remove");
        tds[i].firstElementChild.classList.remove("glyphicon-dashboard");
    }
    clearInterval(interval); 
});




