$(document).ready(function(){
  const rows = document.querySelectorAll('.table_row');
  const div_right = document.querySelectorAll('.div_top');
  
  rows.forEach((row, rowIndex) => {
    row.addEventListener('mouseover', () => {
      // Hide all divs initially
      div_right.forEach((div) => {
        div.style.display = 'none';
      }); 
      // Show the corresponding div based on the row's index
      div_right[rowIndex].style.display = 'block';
    });
  });
  // Index for Table 
   const tableRows = $(".table_row");
    tableRows.each(function(index) {
    $(this).attr("id", "row" + index);
  });
  // Index for Div right
  const div = $(".div_top");
    div.each(function(index) {
    $(this).attr("id", "row" + index);
  });
});

// Sort By
document.addEventListener("DOMContentLoaded", function() {
var carat = document.querySelectorAll(".table_row .carat");
  // console.log("Carat",carat);
  var arr = [];
    carat.forEach((item,i) => {
    item.addEventListener("mouseover",() => {
      arr[i] = item.innerText;
    });
  });
  arr.sort();
  // console.log("Sorted",arr);
});

window.addEventListener("load",function() {
  setTimeout(function(){
      var card_inn = document.querySelectorAll(".color-background-1"); // 
      console.log("inner",card_inn);
      card_inn.forEach((innerbtn)=>{
      innerbtn.style.visiblity = "hidden";
    });
  }, 2000);
});  
