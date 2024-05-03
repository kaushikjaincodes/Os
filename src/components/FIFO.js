console.log("hu");
var add=document.querySelector(".addTrack");
var headinput=document.querySelector(".forHead");
var sabmeet=document.querySelector(".sub");
var segment=document.getElementById("show");
var showtable=document.getElementById("remove");

var pages=[];
var queueSize;
var queue = [];
var pageFault = 0;
var ans=0;
var hit;

function addRow(pageNumber, hit, queue) {
  const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  cell1.textContent = pageNumber;

  const cell2 = newRow.insertCell(1);
  if(hit==false){
  cell2.textContent = "Miss";
  }else{
    cell2.textContent = "Hit";
  }
  const cell3 = newRow.insertCell(2);
  cell3.textContent = queue.join(', ');
}


function seekc(){
    document.querySelector(".seekseq").innerHTML=`Page fault: ${ans}`;
    
}

function fifo() {
  pages.forEach((p) => {
    if (queue.length < queueSize) {
       hit = false;
      for (let ele = 0; ele < queue.length; ele++) {
        if (queue[ele] == p) {
          hit = true;
          addRow(p,hit,queue);
          break; //hitt
        }
      }
      if(hit==false){
        queue.push(p);
        addRow(p,hit,queue);
        pageFault++;
      }
      
    } else {
      hit = false;
      for (let ele = 0; ele < queue.length; ele++) {
        if (queue[ele] == p) {
          hit = true;
          addRow(p,hit,queue);
          break; //hit
        }
      }
      if (hit == false) {
        pageFault++;
        addRow(p,hit,queue);
        queue.shift();
        queue.push(p);
      }
    }
    // queueprint();
    // addRow(p,hit,queue);
  });
  ans=pageFault;
  seekc();
}
function addvalue(val2){
    var ar= document.querySelector(".sqc"); 
    ar.innerHTML=ar.innerHTML+` ${val2} `;
}
function addhead(val3){
    var sk= document.querySelector(".hv");
    sk.innerHTML=`Queue Size : ${val3}`;
}
add.addEventListener("click",()=>{
    var val= document.getElementById("input").value;
    pages.push(val);
    addvalue(val);
    document.getElementById("input").value="";
})
headinput.addEventListener("click",()=>{
    var val1= document.getElementById("head").value;
    queueSize=val1;
    addhead(val1);
    document.getElementById("head").value="";
    
});
sabmeet.addEventListener("click",()=>{
    if (segment.classList.contains("hidden")) {
        segment.classList.remove("hidden");
      }
    if(showtable.classList.contains("hidden")){
      showtable.classList.remove("hidden");
    }  
    fifo();
});

