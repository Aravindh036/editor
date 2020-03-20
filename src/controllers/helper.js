
function eventHandlers(that){
    mouseoverHandler(that);
    mouseupHandler(that);
    mousewheelHandler(that);
    mouseDoubleClick(that);
}

function findChild(target, that){
    console.log(that.state.globalGroup);
    console.log(target.className);
    var child = document.querySelector(`.${that.state.globalGroup}`).children;
    for(var i of child){
        // console.log(i.className, target.className);
        // console.log(i.className, (typeof(target.parentNode.className)));
        if((target.className === i.className)||(target.parentNode.className === i.className)){
            return true
        }
    }
    return false;
}

function secondDegreeSearch(){

}

function mouseDoubleClick(that){
    document.addEventListener('dblclick',function({target}){
        var parent = document.querySelector(`.${that.state.globalGroup}`);
       if (target.hasChildNodes()) {
         while (target.parentNode != document.querySelector('body')) {
             console.log(target.classList[0]);
           if ((target.parentNode === parent)) {
             that.setState({
               globalGroup: target.classList[0]
             });
             break;
           }
           target = target.parentNode;
         }
       }
    })
}

function mouseoverHandler(that){
    document.querySelector(".App").addEventListener("mouseover", function({ target }) {
        if(findChild(target, that)){
        var classList = target.classList[0];
        if(!((classList==='innerWidth')||(classList==='innerHeight')||(classList==='handles')||(classList==='bottom-handles')||(classList==='right-handles')||(classList==='left-handles')||(classList==='top-handles'))){
          if (that.state.handles === true) {
            document.querySelector(".handles").remove();
            that.setState({
                handles:false
            });
          }
          if (that.state.currentHover != null) {
            document.querySelector(`.${that.state.currentHover}`).classList.remove("border");
          }
          that.setState({
              currentHover: target.classList[0]
            },() => {
              document.querySelector(`.${that.state.currentHover}`).classList.add("border");
            });
            if(that.state.currentClick!==null){
                var parent = document.querySelector(`.${that.state.currentClick}`);
                var parentTop = that.getTopPosition(parent);
                var parentRight = that.getLeftPosition(parent)+parent.clientWidth;
                var parentBottom = that.getTopPosition(parent)+parent.clientHeight;
                var parentLeft = that.getLeftPosition(parent);
                var parentcod = [parentTop,parentRight,parentBottom,parentLeft];

                var node = document.querySelector(`.${target.classList[0]}`);
                var nodeTop = that.getTopPosition(node);
                var nodeRight = that.getLeftPosition(node)+node.clientWidth;
                var nodeBottom = that.getTopPosition(node)+node.clientHeight;
                var nodeLeft = that.getLeftPosition(node);
                var nodecod = [nodeTop,nodeRight,nodeBottom,nodeLeft];
    
                var handles = createElement('handles');
                var rightHandle = createElement('right-handles');
                var leftHandle = createElement('left-handles');
                var topHandle = createElement('top-handles');
                var bottomtHandle = createElement('bottom-handles');
    
                if (parentcod[0] < nodecod[0]) {
                    topHandle.style.height = nodecod[0] - parentcod[0] + "px";
                    topHandle.style.width = "1px";
                    topHandle.style.top =  parentcod[0] - nodecod[0] + "px";
                    topHandle.style.left = target.clientWidth / 2 + "px";
                    handles.append(topHandle);
                }
                if (parentcod[1] > nodecod[1]) {
                    rightHandle.style.width =  parentcod[1] - nodecod[1]  + "px";
                    rightHandle.style.height = "1px";
                    rightHandle.style.left =  target.clientWidth + "px";
                    rightHandle.style.top = target.clientHeight / 2 + "px";
                    handles.append(rightHandle);
                }
                if (parentcod[2] > nodecod[2]) {
                    bottomtHandle.style.height =  parentcod[2] - nodecod[2]  + "px";
                    bottomtHandle.style.width = "1px";
                    bottomtHandle.style.left =  target.clientWidth/ 2 + "px";
                    bottomtHandle.style.top = target.clientHeight + "px";
                    handles.append(bottomtHandle);
                }
                if (parentcod[3] < nodecod[3]) {
                    leftHandle.style.width = nodecod[3] - parentcod[3] + "px";
                    leftHandle.style.height = "1px";
                    leftHandle.style.right =  "0px";
                    leftHandle.style.top = target.clientHeight / 2 + "px";
                    handles.append(leftHandle);
                }
                target.append(handles);
                that.setState({
                    handles:true
                })
                
            }
        }
    }
    });
    
}

function createElement(className){
    var element = document.createElement('div');
    element.className = className;
    return element;
}

function mouseupHandler(that){
    document.querySelector(".App").addEventListener('mouseup',function({target}){
        if(findChild(target, that)){
            if(!((target.classList[0]==='innerWidth')||(target.classList[0]==='innerHeight'))){
            if(that.state.click===false){
                that.setState({
                click:true
                });
            }
            if(that.state.handles===true){
                document.querySelector('.handles').remove();
                that.setState({
                    handles:false
                });
            }
            if (that.state.currentClick != null) {
                document.querySelector(`.${that.state.currentClick}`).classList.remove("border-org");
                document.querySelector(`.innerWidth`).remove();
                document.querySelector(`.innerHeight`).remove();
                document.querySelector(`.ruler`).remove();
            }
            that.setState({
                currentClick: target.classList[0]
                },() => {
                document.querySelector(`.${that.state.currentHover}`).classList.add("border-org");
                var artboard = document.querySelector('.artboard-id');
                var innerwidth = createElement('innerWidth');
                var innerHeight = createElement('innerHeight');
                innerHeight.innerHTML = target.clientHeight + "px";
                innerwidth.innerHTML = target.clientWidth + "px";
                target.append(innerwidth);
                target.append(innerHeight);
                var ruler = createElement('ruler');
                var leftRuler = createElement('left');
                var rightRuler = createElement('right');
                var topRuler = createElement('top');
                var bottomRuler = createElement('bottom');
                that.initializeRuler(ruler,artboard.clientHeight,artboard.clientWidth);
                var left = that.getLeftPosition(target);
                var top = that.getTopPosition(target);
                leftRuler.style.left = that.getPercentage(left,artboard.clientWidth) + "%";
                leftRuler.style.height = '100%'
                topRuler.style.top = that.getPercentage(top,artboard.clientHeight) + "%";
                topRuler.style.width = '100%'
                rightRuler.style.left = that.getPercentage(left+target.clientWidth+1,artboard.clientWidth) + "%";
                rightRuler.style.height = '100%'
                bottomRuler.style.top = that.getPercentage(top+target.clientHeight+1,artboard.clientHeight) + "%";
                bottomRuler.style.width = '100%'
                ruler.append(leftRuler);
                ruler.append(rightRuler);
                ruler.append(topRuler);
                ruler.append(bottomRuler);
                artboard.append(ruler);
                });
            }
        }
    });
}

function mousewheelHandler(that){
    document.querySelector(".App").addEventListener("wheel",function(event){
        var artboard = document.querySelector(".artboard-id");
        if((event.ctrlKey === true)){
          event.preventDefault();
         if(event.deltaY < 0){
            artboard.style.height = artboard.clientHeight+ (artboard.clientHeight*0.01) + "px";
            artboard.style.width = artboard.clientWidth+ (artboard.clientWidth*0.01) + "px";
            event.target.scrollIntoView();
          }
        }
        if((event.ctrlKey === true)&&(artboard.clientWidth>400)&&(artboard.clientHeight>400)){
          event.preventDefault();
          if(event.deltaY > 0){
            artboard.style.height =artboard.clientHeight- (artboard.clientHeight*0.01) + "px";
            artboard.style.width =artboard.clientWidth- (artboard.clientWidth*0.01) + "px";
            event.target.scrollIntoView();
          }
        }
    })
}

export {eventHandlers};