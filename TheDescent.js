/**
 * Created by ppluigui on 8/29/15.
 */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
    var inputs = readline().split(' ');
    var spaceX = parseInt(inputs[0]);
    var spaceY = parseInt(inputs[1]);

    // we Create an Array with all the mountains heights
    var mountainHeightArray = new Array();

    var shipCannons = 'HOLD';

    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
        // Store the heights into an array
        mountainHeightArray.push(mountainH);
    }

    // Just Compare the spaceX with the heightest mountain
    if(spaceX ==  mountainHeightArray.indexOf(Math.max.apply(Math, mountainHeightArray)) ){
        shipCannons = 'FIRE';
    }


    print(shipCannons);
}
