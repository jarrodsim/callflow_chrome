// popup.js

let whoInput = document.getElementById("whoInput"); 
let whyInput = document.getElementById("whyTextarea");
let whatInput = document.getElementById("whatTextarea"); 
let wrapInput = document.getElementById("wrapTextarea");
let logList = document.getElementById("logList");

document.getElementById("timestampButton").addEventListener("click", function() {

  let date = new Date();
  let timeStr = date.toLocaleTimeString();

  whatInput.value += "\n" + timeStr;

});

document.getElementById("compileButton").addEventListener("click", function() {

  let output = document.getElementById("output");
  
  let whoText = whoInput.value;
  let whyText = whyInput.value;
  
  let whatText = "";
  for (let i = 0; i < logList.children.length; i++) {
    whatText += logList.children[i].innerText + "\n";
  }
  
  let wrapText = wrapInput.value;

  output.value = whoText + "\n" + whyText + "\n" + whatText + "\n" + wrapText;

});
