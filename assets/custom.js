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

// const storeAPI = 'https://beautyrec.myshopify.com/products.json';
// fetch(storeAPI,{
//   method:"GET"
// }).then((response) => {
//   return response.json();
// }).then((data) => {
//   // console.log("Value-->",data);
//   const pro_det = data.products.map((item) => item.title);
//   const filter = pro_det.filter((search) => search.includes("BIG"));
//   const pro_json = data.products.filter((del) => filter.includes(del.title));
//   // console.log("FILTER", filter);
//   // console.log("Sorted Product",pro_json);
// }).then((error) => {
//   console.error("Error",error);
// });

// document.addEventListener("load", function () {
  
    var gg = document.querySelectorAll(".grid__item");
console.log(gg,"gg");
    gg.forEach((item) => {
      console.log("item",item);
      item.style.display = "none";
    });
    // console.log(gg,"gg");

// });