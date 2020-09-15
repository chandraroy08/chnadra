class Form{
    constructor(){

    }
display(){


var title = createElement('h2')
title.html('car racing game')
title.position(130,0)
var input=createInput('name');

var button = createButton('submit')
var greeting = createElement('h3')
input.position(150,100)
button.position(200,200)
button.mousePressed(function(){
    input.hide();
    button.hide()
    var name = input.value();
    Playercount+=1
    player.update(name)
    player.updateCount(Playercount);
    greeting.html("Hello "+name)
    greeting.position(130,160)
});
}
}