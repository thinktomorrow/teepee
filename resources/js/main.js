import './toggle-class.js';

  //get total of articles
  var totalItems = document.querySelectorAll('article').length;
  var totalNumber = document.getElementById("numberOfItems");
  totalNumber.innerHTML = totalItems;


  // show numbers of checked item in counter
  var clickOnArticle = document.querySelectorAll('article');  
  var numberOfItems = document.getElementById("checkedItems");
  var totalChecked = document.getElementsByClassName('active').length;

  function addCheckedItemsToDiv()
  {
    totalChecked ++;
    numberOfItems.innerHTML = totalChecked;
    if( totalChecked === totalItems){
      timeToCelebrate();
      // window.alert('Good job. Tijd om de deur achter je toe te trekken.')
    }
  };
  for ( var i = 0; i < clickOnArticle.length; i++) {
    clickOnArticle[i].addEventListener("click", addCheckedItemsToDiv);
  }
  // show fun gif when all checks are completed
  function timeToCelebrate(){
    var celebrate = document.getElementById("celebration");
    celebrate.classList.remove("hidden");
  }