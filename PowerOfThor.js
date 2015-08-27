/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
var maxX = 40-1;
var maxY = 18-1;

var thorX = initialTX;
var thorY = initialTY;



// game loop
while (true) {
    var remainingTurns = parseInt(readline());
    var direction = "";


    // Prevent Thor from go out of the field
    thorX = thorX > maxX ? maxX : thorX;
    thorY = thorY > maxY ? maxY : thorY;


    if(  thorX > lightX  && thorY < lightY ) {
        direction = 'SW';
        thorX++;
        thorY++;
    }else if(thorX < lightX  && thorY < lightY){
        direction = 'SE';
        thorX++;
        thorY++;
    }else{

        // Controlling thor horizontally
        if(thorX < lightX){
            direction = 'E';
            thorX++;
        }else if( lightX == thorX ){

        }else{
            direction = 'W';
            thorX--;
        }


        // Controlling thor vertically
        if(lightY > thorY){
            direction = 'S';
            thorY++;
        }else if( lightY == thorY ){

        }else{
            direction = 'N';
            thorY--;
        }
    }

    if(direction != ""){
        print(direction);
    }


}


