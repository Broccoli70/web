if($(window).width() > 576) {


  $(function(){


    let counter = 0;
    let change;



    if (counter == 0) {
      $(".picture").on('click', (e)=> {
      counter++;
      for (var i = 1; i <= $(".picture").length; i++) {
      if(e.target.id == "pic" + i) {
        change = "#box" + i;
        $(".text_box").css({"display": "none"})
        $(change).css({'display':'flex' })

        if (i<=5) {
          change = "#box" + i;
          $(change).css({'display':'flex' })
          $(change).css({'grid-area':'' + 1 + ' / ' + i +' / '+ 1 + ' / ' + i })
        }

        if (i>=6 && i<10) {
          change = "#box" + i;
          $(change).css({'display':'flex' })
          $(change).css({'grid-area':'' + 2 + ' / ' + (i-3) +' / '+ 2 + ' / ' + (i-2) })
        }

      }
    }})
  }
  $(document).on("click", (e)=> {
    if(e.pageY < $(document).height() - $(".visual").height()) {
        $(".text_box").css({'display':'none'})
    }

  })


  $(".close").on("click", (e)=> {
        $(".text_box").css({'display':'none'})
  })

  })

//End of desktop script
} else {




//End of mobile script
}
