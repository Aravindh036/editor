import artboard from "../artboardSK.json";

var container;
var indexCounter;
var height;
var width;
var that;

function parse(thisReference) {
  that = thisReference;
  indexCounter = 1;
  container = document.querySelector(".App");
  for (var i of artboard) {
    label[i.tag](i, container);
  }
}

const label = {
  artboard: function(json, container) {
    height = json.frame.height;
    width = json.frame.width;
    let artboard = document.createElement("div");
    artboard.classList.add("artboard-id");
    artboard.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000);
    artboard.style.position = "relative";
    artboard.style.width = json.frame.width + "px";
    artboard.style.height = json.frame.height + "px";
    artboard.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(artboard);
    that.setState({
      globalGroup:'artboard-id'
    });
    // console.log(json.name);
    for (var layers of json.layers) {
      label[layers.tag](layers, artboard);
    }
  },
  group: function(json, container) {
    // console.log(container.clientWidth)
    let group = document.createElement("div");
    group.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    group.style.position = "absolute";
    // group.style.top = json.frame.y + "px";
    // group.style.left = json.frame.x + "px";
    // group.style.width = json.frame.width + "px";
    // group.style.height = json.frame.height + "px";
    group.style.top = json.frame.y/container.clientHeight*100 + "%";
    group.style.left = json.frame.x/container.clientWidth*100 + "%";
    group.style.width = json.frame.width/container.clientWidth*100 + "%";
    group.style.height = json.frame.height/container.clientHeight*100 + "%";
    group.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(group);
    for (var layers of json.layers) {
      label[layers.tag](layers, group);
    }
  },
  rectangle: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  },
  circle: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  },
  ellipse: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  },
  path: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  },
  text: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  },
  image: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  },
  line: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  },
  svg: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  },
  clipPath: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  },
  symbolInstance: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  },
  star: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  },
  polygon: function(json, container) {
    let shape = document.createElement("div");
    shape.classList.add(json.name.split(" ").join("")+Math.random().toPrecision(3)*1000
    );
    shape.style.position = "absolute";
    shape.style.top = json.frame.y/container.clientHeight*100 + "%";
    shape.style.left = json.frame.x/container.clientWidth*100 + "%";
    shape.style.width = json.frame.width/container.clientWidth*100 + "%";
    shape.style.height = json.frame.height/container.clientHeight*100 + "%";
    shape.style.zIndex = indexCounter.toString();
    indexCounter++;
    container.appendChild(shape);
  }
};

export default parse;
