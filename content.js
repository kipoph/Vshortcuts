window.addEventListener("keydown",checkKey,false) //listen for keydown
function checkKey(e){
  if (e.keyCode==221){ //if key is right bracket increase playbackRate by 25 percent
    if(e.shiftKey){
      document.getElementsByTagName('video')[0].playbackRate +=0.5
    } else{
      document.getElementsByTagName('video')[0].playbackRate +=0.25
    }
  }else if(e.keyCode==219){
    if(e.shiftKey){
      document.getElementsByTagName('video')[0].playbackRate -=0.5
    }else{
      document.getElementsByTagName('video')[0].playbackRate -=0.25
    }
  }
}
