var counter = 0; 
var counter2 = 0;
var dogsound = document.getElementById("dog-sound")
var catsound = document.getElementById("cat-sound")


$("#Doggo").on("click", function() {
    console.log("clicked on dog")

    counter++;
    console.log(counter)

    if(counter == 1){
        $("#dog-eye-closed").hide()
        $("dog-eye-open").show()
    }
    else if(counter == 2){
        dogsound.play()
    }
    else if(counter== 3){
        $("#Doggo").fadeOut();
        $("#Doggo-Play").fadeIn();
    }
    
})

$("#Cat").on("click", function() {
    console.log("clicked on cat")

    var random = Math.floor(Math.random() * 3)
    console.log(random)
    counter2++
    if(random == 0){
        $("#cat-eye-closed").show()
        $("#cat-eye-open, #cat-eye-angry").hide()
    }
    else if(random == 1){
        $("#cat-eye-open").show()
        $("#cat-eye-angry, #cat-eye-closed").hide()
    }
    else if(random == 2){
        $("#cat-eye-angry").show()
        $("#cat-eye-open, #cat-eye-closed").hide()
        catsound.play()
        counter2= 10;
    }
    if(counter2 = 10){  
        $("#Cat").css("transform", "rotate(360deg)")
        
    }        
})

// random quotes
var quote1 = "Bloom where you are planted, or I will just nap on you instead." 
var quote2 = "Home sweet sunbeam." 

var quote3 = "Home is not a place; it is wherever I can bring my favorite ball." 
var quote4 = "Home sweet yard." 

var quotes = [quote1, quote2, quote3, quote4]
var colors = ["#568b62", "#ff976d", "#404E7C", "#62466B", "#073B3A", "#8884FF", "#563440", "#AABD8C"]
console.log(quotes[1]) 

var quotecounter = 0;
function changeQuote() {
    if(quotecounter == 4 ){
        quotecounter = 0
    }
    $("blockquote").text(quotes[quotecounter])
    quotecounter++;

    var randomColor = Math.floor(Math.random()*colors.length)
    console.log(colors[randomColor])
    $("body").css("background-color", colors[randomColor])
}


setInterval(changeQuote, 3000)




