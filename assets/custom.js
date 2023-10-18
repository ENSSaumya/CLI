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

// const storeURL = 'https://beautyrec.myshopify.com';
// const apiURL = `${storeURL}/admin/api/2022-10/products.json`;
// const headers = {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json',
// };

// fetch(apiURL, { method: 'GET', headers: headers })
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log('data1', data);
//   // console.log('data2', data.products[0].id);
// })
// .catch((error) => {
//   console.error('Fetch error:', error);
// });

const storeAPI = 'https://beautyrec.myshopify.com/products.json';
fetch(storeAPI,{
  method:"GET"
}).then((response) => {
  return response.json();
}).then((data) => {
  console.log("Value-->",data);
  const pro_det = data.products.map((item) => item.title);
  const filter = pro_det.filter((search) => search.includes("none"));
  console.log("FILTER", filter);
}).then((error) => {
  console.error("Error",error);
});
