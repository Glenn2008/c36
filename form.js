class Form{
constructor(){
}
display(){
    var title=createElement('h2')
    title.html('CAR RACING!!')
    title.position(525,180)

    var input=createInput("Name")
    var button=createButton("Start")
    

    input.position(525,300)
    button.position(600,350)

    button.mousePressed(function(){
        input.hide()
        button.hide()

        var name=input.value()
        playerCount+=1;
        player.updateName(name)
        player.updateCount(playerCount)
        var greeting=createElement("h3")
        greeting.html("Welcome  "+name)
        greeting.position(525,350)

        
    })
}
}