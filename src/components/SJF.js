

console.log("hu");

var showButton = document.querySelector(".send");
var segment = document.getElementById("segment");
var btu = document.getElementById("he");
var tab = document.getElementById("jio");
var g=document.getElementById("ho");

showButton.addEventListener("click", () => {
  if (segment.classList.contains("hidden")) {
    segment.classList.remove("hidden");
  }
  if (btu.classList.contains("hidden")) {
    btu.classList.remove("hidden");
  }
  
});

var process = [];
var Gaantt = [];

function createObject() {
  var names = document.getElementById("pid").value;
  // ye jo hai input tag jo hai html ka uss se value fetch karega;
  var arrivalTime = document.getElementById("arrival").value;
  var bursttime = document.getElementById("burst").value;

  var newObject = {
    names: names,
    arrivalTime: arrivalTime,
    bursttime: bursttime,
    rem_time: bursttime,
    com_time: 0,
    tat: 0,
    waiting: 0,
  };

  process.push(newObject);
  // console.log("Array after adding object:", process);
}

function generateCards(objectsArray) {
  var cardContainer = document.querySelector(".cardcont");

  cardContainer.innerHTML = "";

  for (var i = 0; i < objectsArray.length; i++) {
    var obj = objectsArray[i];
    console.log(obj);
    cardContainer.innerHTML =
      cardContainer.innerHTML +
      `
        <div class="cont">
        <div>${obj.names}</div>
        <div>${obj.arrivalTime}</div>
        <div>${obj.bursttime}</div>
      </div>
        `;
  }
}

function scehdule(Process) {
  process.sort((a, b) => a.arrivalTime - b.arrivalTime);
  Gaantt.push({ pid: "", exe_till: process[0].arrivalTime });
  var q = [];
  var n = process.length;
  var completed = 0;
  var clock = process[0].arrivalTime;
  var curr_p = null;

  while (completed < n) {
    process.forEach((p) => {
      if (p.arrivalTime == clock) {
        q.push(p);
        q.sort((a, b) => a.bursttime - b.bursttime);
      }
    });
    if (curr_p == null) {
      if (q.length != 0) {
        curr_p = q[0];
        q.shift();
      } else {
        clock++;
        Gaantt.push({ pid: " ", exe_till: clock });
        continue;
      }
    }
    curr_p.rem_time--;
    clock++;
    if (curr_p.rem_time == 0) {
      curr_p.com_time = clock;
      curr_p.tat = curr_p.com_time - curr_p.arrivalTime;
      curr_p.waiting = curr_p.tat - curr_p.bursttime;
      completed++;
      Gaantt.push({ pid: curr_p.names, exe_till: clock });
      curr_p = null;
    }
  }
}

var pr = document.querySelector(".process");
function answers(process) {
  for (var i = 0; i < process.length; i++) {
    var obj = process[i];
    // console.log(obj);
    pr.innerHTML =
      pr.innerHTML +
      `<div class="pcc">
      <div>${obj.names}</div>
      <div>${obj.arrivalTime}</div>
      <div>${obj.bursttime}</div>
      <div>${obj.com_time}</div>
      <div>${obj.tat}</div>
      <div>${obj.waiting}</div>
    </div>
        `;
  }
  var fill=document.getElementById("gant");
  Gaantt.forEach(ele => {
    fill.innerHTML += `|${ele.pid}       ${ele.exe_till}|`
  });
}
showButton.addEventListener("click", () => {
  createObject();
  generateCards(process);
  document.getElementById("pid").value =  "";
  document.getElementById("arrival").value = "";
  document.getElementById("burst").value = "";
});

var banao = document.querySelector(".banao");

banao.addEventListener("click", () => {
  scehdule(process);
  answers(process,Gaantt);
});

btu.addEventListener("click",()=>{
  if (tab.classList.contains("hidden")) {
    tab.classList.remove("hidden");
  }
  if (g.classList.contains("hidden")){
    g.classList.remove("hidden");
  }
});