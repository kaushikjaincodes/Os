console.log("hu");
var add = document.querySelector(".addTrack");
var headinput = document.querySelector(".forHead");
var sabmeet = document.querySelector(".sub");
var segment = document.getElementById("show");
var put = document.querySelector(".fordirection"); 
var chat=document.getElementById("uml");  
var direction ;
var inputSequence = [];
var seekSequence = [];
var head;
var seekCount = 0;
var left = [];
var right = [];
var ans = 0;
const xValues = [0,40,80,120,160,200,240,280,320,360,400];
// function seekc() {
//   document.querySelector(".seekops").innerHTML += `${ans}`;
// }

// function seekfill() {
//   document.querySelector(".seekseq").innerHTML;
//   for (let i = 0; i < seekSequence.length; i++) {
//     document.querySelector(".seekseq").innerHTML += `${seekSequence[i]} `;
//   }
// }

function addvalue(val2) {
  var ar = document.querySelector(".sqc");
  ar.innerHTML = ar.innerHTML + ` ${val2} `;
}

function addhead(val3) {
  var sk = document.querySelector(".hv");
  sk.innerHTML = `Head value: ${val3}`;
}

function adddirection(dir1){
    var di= document.querySelector(".di");
    di.innerHTML=`Direction: ${dir1}`;
}
add.addEventListener("click", () => {
  var val = document.getElementById("input").value;
  inputSequence.push(val);
  addvalue(val);
  document.getElementById("input").value = "";
});
headinput.addEventListener("click", () => {
  var val1 = document.getElementById("head").value;
  head = val1;
  addhead(val1);
  document.getElementById("head").value = "";
});
put.addEventListener("click",()=>{
    var dir= document.getElementById("direction").value;
    direction=dir;
    adddirection(dir);
    document.getElementById("direction").value="";

})
sabmeet.addEventListener("click", () => {
  if (segment.classList.contains("hidden")) {
    segment.classList.remove("hidden");
  }
  if (chat.classList.contains("hidden")) {
    chat.classList.remove("hidden");
  }
  clook();
 var chart =new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor:"rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: seekSequence
      }]
    },
    options:{}
  });
  chart.render();
//   seekc(ans);
//   seekfill(seekSequence);
});

// user se array leni hai and head count lena hai
function clook() {
  for (let i = 0; i < inputSequence.length; i++) {
    if (parseInt(inputSequence[i]) >= head) {
      right.push(parseInt(inputSequence[i]));
    } else {
      left.push(parseInt(inputSequence[i]));
    }
  }

  left.sort((a, b) => {
    return a - b;
  });

  right.sort((a, b) => {
    return a - b;
  });

  if (direction == 1) {
    for (let i = 0; i < right.length; i++) {
      seekSequence.push(right[i]);
      seekCount += Math.abs(head - right[i]);
      head = right[i];
    }
    if (left.length != 0) {
      seekCount += Math.abs(head - left[0]);
      head = left[0];

      for (let i = 0; i < left.length; i++) {
        seekSequence.push(left[i]);
        seekCount += Math.abs(head - left[i]);
        head = left[i];
      }
    }
    ans = seekCount;
    document.getElementById("so").innerHTML = document.getElementById("so").innerHTML+`${seekCount}`;
   
    for (let i = 0; i < seekSequence.length; i++) {
      document.getElementById("seq").innerHTML =document.getElementById("seq").innerHTML + `${seekSequence[i]} `;
    }
  } else if (direction == 0) {
    for (let i = left.length - 1; i > -1; i--) {
      seekSequence.push(left[i]);
      seekCount += Math.abs(head - left[i]);
      head = left[i];
    }
    if (right.length != 0) {
      seekCount += Math.abs(head - right[right.length - 1]);
      head = right[right.length - 1];

      for (let i = right.length - 1; i > -1; i--) {
        seekSequence.push(right[i]);
        seekCount += Math.abs(head - right[i]);
        head = right[i];
      }
    }
    ans = seekCount;
    document.getElementById("so").innerHTML = document.getElementById("so").innerHTML+`${seekCount}`;
    for (let i = 0; i < seekSequence.length; i++) {
      document.getElementById("seq").innerHTML =document.getElementById("seq").innerHTML + `${seekSequence[i]} `;
  }
  }
}


// const yValues = [7,8,8,9,9,9,10,11,14,14,15];


