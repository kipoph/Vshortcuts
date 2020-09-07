window.addEventListener("keydown",checkKey,false) //listen for keydown
function checkKey(e){
      if (e.keyCode==221){ //if key is right bracket increase playbackRate by 25 percent
        console.log('lets do this')
        document.getElementsByTagName('video')[0].playbackRate +=0.25
    }
    }
 /* switch(event.code){
        case 'BracketLeft':
        document.getElementsByTagName('video')[0].playbackRate -=0.25
        console.log('speedDown')
        break;
        case 'BracketRight':
        document.getElementsByTagName('video')[0].playbackRate +=0.25
        alert('speedUp')
        break;
        default:
        break;
    
    return*/
