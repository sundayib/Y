var list=[{Title:'Best trailers part 1',id:'xS-9D5PuEx4'},{Title:'Best trailers part 2',id:'id1'},{Title:'Best trailers part 3',id:'id2'},{Title:'Best trailers part 4',id:'id3'},{Title:'Best trailers part 5',id:'id4'},{Title:'Best trailers part 6',id:'id5'},{Title:'Best trailers part 7',id:'id6'},{Title:'Best trailers part 8',id:'id7'}];


var player,isReady=false;
function onYouTubeIframeAPIReady() {
  
  player = new YT.Player('player', {
    
    //videoId: 'xS-9D5PuEx4',
    playerVars: { 'rel':0,'showInfo':0,'autoplay': 0,'fs':1,'allowFullScreen':1, 'allowSeekAhead':0,'controls': 1},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
}

function onPlayerReady(){ isReady=true;}

function onPlayerStateChange(e)
{
  if(e.data===0)
  {
    clearInterval(counter);
    if(count>player.getDuration())
    {
      /*let a='<a  href="intent://mc2025.mc/'+'_'+player.getDuration()+'#Intent;scheme=mc;package=com.mcgames.mcapp;S.browser_fallback_url=https://google.com;end" style=" display:inline;z-index:3; margin-top:6px; background: white; border:1px solid white;font-size:3vh; border-radius:2vh;color:#2e2e2e;width:100%; padding:10px;"> Click to claim reward</a>';
    document.getElementById('link').innerHTML=a;
    document.getElementById('popmsg').innerHTML="Congratulations! You've successfully completed the video."
     pop.style.display= "block";
    setTimeOut(closePopUp,20000);
      */
      window.location.href="https://rtstg.com/'+'_'+player.getDuration()";
    }else{ document.getElementById('popmsg').innerHTML='Sorry, you fast fowarded the video and cannot be awarded the reward. Click the video title button again to watch without forwarding to receive your reward.'; document.getElementById('link').innerHTML=""; pop.style.display= "block";}
    count=1;
  }
 /*player.getCurrentTime()
  player.getVideoUrl()
  player.getVideoEmbedCode()*/
  
}


function onPlayerError(){ }


function closePopUp(){  pop.style.display= "none"; }
function watch(e){if( isReady) {count=1;counter= setInterval(Timer, 950); document.getElementById('player').scrollIntoView();   player.loadVideoById(e.id);} else{ document.getElementById('popmsg').innerHTML="Sorry, the player isn't ready yet. Try again in a few seconds"; document.getElementById('link').innerHTML=""; pop.style.display= "block";}}
  
function setVids()
{ let s='';
  for(let i=0;i<list.length;i++)s=s+ '<button class="bt3" onclick="watch(this);"id="'+list[i].id+'">'+ list[i].Title+'</button>';
    document.getElementById('bts').innerHTML=s;
  
}

setVids();

var count=1;
var counter;//= setInterval(Timer, 1000);
function Timer() {count += 1;}


