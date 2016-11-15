$("#something").hide();
$("#loaderGif").show();
setTimeout(showCont,2000);
  function showCont(){
      $("#loaderGif").hide();
      $("#something").show();
    }
