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
// const apiURL = `${storeURL}/admin/api/2021-07/products.json`;
// const headers = {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json',
// };
// fetch(apiURL, { method: 'GET', headers: headers })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log('data', data);
//     console.log('data', data.products.id);
//   })
//   .catch((error) => {
//     console.error('Fetch error:', error);
//   });

const apiUrl = 'https://beautyrec.myshopify.com/products';
fetch(apiUrl,{
  method:"GET",
  headers:{
    "Content-Type":"application/json"
      }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    console.log("Product ---> ",data.product.id)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

