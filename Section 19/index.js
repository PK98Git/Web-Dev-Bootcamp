// //$("h1").css("color","red")
 $("h1").addClass("big-title"); //add single class
// $("h1").addClass("big-title margin-50"); // add multiple classess
// $("h1").hasClass("big-title"); // Return tru of flase whether the class big-title avalable on selected h1 element
// $("h1").text("buy"); // Update the text to the given text
 $("h1").html("<em>Heyyy</em>"); // change things instead of text method 
// console.log($("img").attr("src")); //this will print the src attribute value of selected class
// $("a").attr("href","http://yahoo.com") // this will modify the href value of the a element
// $("a").attr("class") // this will show the classes applied on the selected element
// $("h1").click(function(){
// 	$("h1").css("color","purple"); //THis line will execute when te
// })

// $("button").click(function(){
// 	$("h1").css("color", "purple");
// })

// $("input").keypress(function(event){
// 	console.log(event.key)
// 	$("h1").text(event.key);
// })

// $("h1").on("mouseover",function() {  //when mouseover on h1 will trigger the function
//   $("h1").css("color", "purple"); 
// });


//Add element before the selected element
//$("h1").before("<button>NEW</button>"); //can use After also prepend and append
//Prepend means that just before the content may be inside of selected element and before the content
//Append will add the just after the before 

//Remove the elements  which we have element
//$("button").remove();


//Hide any element
// $("h1").hide(); //can use show for showing the hidden ones

//Hide h1 when the button is clicked 
//Then if it is hidden the toggle will again show the dissapeared text
// $("button").on("click", function () {
//   $("h1").toggle();
// });

//For fading out any item when the button click. We can use fadeOut() function
//We can use fadeToggle also
// $("button").on("click",function () {
//   $("h1").fadeToggle();
// });

//We can use Slide Up and Down with slideToggle but can use single on also
// $("button").on("click", function () {
//   $("h1").slideToggle();
// });

//we can use animate() to custom animate 
// $("button").on("click", function () {
//   $("h1").animate({opacity:0.5});
// });

//animation order
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
