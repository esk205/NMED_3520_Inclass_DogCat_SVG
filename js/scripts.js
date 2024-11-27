var counter = 0; 
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

    counter++;
    console.log(counter)

    if(counter == 1){
        $("#cat-eye-closed").hide()
        $("#cat-eye-open").show()
    }
    else if(counter == 2){
        catsound.play()
    }
    
})

