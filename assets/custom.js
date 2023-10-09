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

// function sortTable() {
//   var table, rows, switching, i, x, y, shouldSwitch;
//   table = document.querySelector(".table_round");
//   switching = true;
//   while (switching) {
//     switching = false;
//     rows = table.rows;
//     for (i = 1; i < (rows.length - 1); i++) {
//       shouldSwitch = false;
//       x = rows[i].getElementsByTagName("td")[0];
//       y = rows[i + 1].getElementsByTagName("td")[0];
//       if (Number(x.innerHTML) > Number(y.innerHTML)) {
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// }