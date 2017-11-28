//alert("Hello World");
//console.log("Hello World");

/*

  Variables
  Strings - Text
  Numbers - Numbers
  Boolean - True or False
  null
  undefined

*/

/*

  ==  is equals               a==b
  !=  not equal               a!=b
  >   greater than            a>b
  <   less than               a<b
  >=  greater or equal to     a>=b
  <=  less than or equal to   a<=b
  &&  and                     a==b&&a>c
  ||  or                      a==b||a<c

*/

/*

  Responsive navigation
  1. If the browser window is 480px wide or less show hamburger and hide Navigation
  2. If the browser window is greater than 480px wide hide hamburger and show Navigation


*/

$(function(){
  //  1. If the browser window is 480px wide or less show hamburger and hide Navigation
  var screenSize = 480;
  var navigation = $(".nav");
  var hamburger = $(".responsive-nav");

  //Listen to see if the width of the screen changes
  $(window).resize(function(){
    screenSizeValidation();
  });

  function screenSizeValidation(){
    var screenWidth = window.innerWidth;
    console.log("Resized Screen Width: " + screenWidth);

    if(screenWidth <= screenSize ){
      navigation.addClass("hidden").removeClass("show");
      hamburger.addClass("show").removeClass("hidden");
      console.log("Screen Width <= " + screenWidth + "px");
    } else {
      navigation.addClass("show").removeClass("hidden");
      hamburger.addClass("hidden").removeClass("show");
      console.log("ScreenWidth > " + screenWidth + "px");
  }

    if(screenWidth >= screenSize ){
      console.log("ScreenWidth ")
    }
}

  screenSizeValidation();

  // 3. If I click on the hamburger show the navigaiton
  // 4. If I click on the hamburger and the hamburger and the navigation is open, then close it.
  // 5. If I click outside of the menu and the navigation is open, then close it.

  hamburger.on("click",function(){

    var isNavigationHidden = navigation.hasClass("hidden");

    console.log("I was clicked");

    navigation.toggleClass("show").toggleClass("hidden");

    // if(isNavigationHidden == true){
    //   console.log("Navigation is hidden");
    //   navigation.toggleClass("show").toggleClass("hidden");
    // } else if (isNavigationHidden == false) {
    //   console.log("Navigation is not hidden");
    //   navigation.toggleClass("show").toggleClass("hidden");
    // }
  })

  // $(window).on("click", function(e){
  //   var clickedOnNavigation = e.target;
  //   console.log(clickedOnNavigation);
  //
  //   if($(clickedOnNavigation).parent().attr("class") != "navigation" && navigation.hasClass("show")){
  //     navigation.toggleClass("show").toggleClass("hidden");
  //   }
  // })

  // var dropdown = $(".dropdown");
  //
  // dropdown.on("click",function(){
  //   $(this).parent().find("ul").toggleClass("hidden")toggleClass("show");
  // })

  //Select hamburger
  var responsiveNav = $(".responsive-nav");
  //console.log(responsiveNav);


});
