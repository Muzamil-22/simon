let count = 0;
var arrRandom = [];
var arrClicked = [];
var hScore = localStorage.getItem("name");
$(".hScore").text(hScore);

$(".box1").click(function () {
    arrClicked.push(0);
    var audio1 = new Audio("sounds/green.mp3");
    audio1.play();
    $('.box1').addClass("togglebox0");
    setTimeout(function () {
        $('.box1').removeClass('togglebox0');
        compare(arrClicked.length - 1);
    }, 300);
});
$(".box2").click(function () {
    arrClicked.push(1);
    var audio2 = new Audio("sounds/red.mp3");
    audio2.play();
    $('.box2').addClass("togglebox1");
    setTimeout(function () {
        $('.box2').removeClass('togglebox1');
        compare(arrClicked.length - 1);
    }, 300);
});
$(".box3").click(function () {
    arrClicked.push(2);
    var audio3 = new Audio("sounds/blue.mp3");
    audio3.play();
    $('.box3').addClass("togglebox2");
    setTimeout(function () {
        $('.box3').removeClass('togglebox2');
        compare(arrClicked.length - 1);
    }, 300);
});
$(".box4").click(function () {
    arrClicked.push(3);
    var audio4 = new Audio("sounds/yellow.mp3");
    audio4.play();
    $('.box4').addClass("togglebox3");
    setTimeout(function () {
        $('.box4').removeClass('togglebox3');
        compare(arrClicked.length - 1);
    }, 300);
});

function compare(level) {
    if (arrRandom[level] === arrClicked[level]) {
        console.log("success");
        if (arrRandom.length == arrClicked.length) {
            setTimeout(function () {
                Level();
            }, 1000)
        }
    } else {
        $("body").addClass("Game_over");
        var audio5 = new Audio("sounds/wrong.mp3");
        audio5.play();
        setTimeout(function () {
            $("body").removeClass("Game_over");
        }, 500)
        $("h1").text("Game Over, Press START for new game");
        $(".button").fadeIn();

        if (hScore < count) {
            localStorage.setItem("name", (count - 1));
            hScore = localStorage.getItem("name");
            $(".hScore").text(hScore);
        }
    }
}

function Level() {
    $("h1").text("Level " + " " + count);
    count++;
    console.log(count);
    arrClicked = [];

    var random = Math.floor((Math.random() * 4));
    arrRandom.push(random);
    $('.boxes button').eq(random).addClass("togglebox" + random)
    setTimeout(function () {
        $('.boxes button').eq(random).removeClass('togglebox' + random);
    }, 500);
}

function start() {
    $(".button").fadeOut();
    count = 0;
    arrRandom = [];
    Level();
    $("h1").text("Level " + " " + count);
}

// function sound(name) {
//     var audio = new Audio("sound/" + name + ".mp3");
//     audio.play();
// }






// function>
// nested function
// objects/arrays
// reuse >

/*
var count = 1;
var arrRandom = [];
var arrClicked = [];
let result = false;

$(".box1").click(function () {
    arrClicked.push(0);
    $('.box1').addClass("togglebox0")
    setTimeout(function () {
        $('.box1').removeClass('togglebox0');
        //revalidLevel();
    }, 300);
    setTimeout(function () {
        revalidLevel();
    }, 2000);

});
$(".box2").click(function () {
    arrClicked.push(1);
    $('.box2').addClass("togglebox1")
    setTimeout(function () {
        $('.box2').removeClass('togglebox1');
        //revalidLevel();
    }, 300);
    setTimeout(function () {
        revalidLevel();
    }, 2000);
});
$(".box3").click(function () {
    arrClicked.push(2);
    $('.box3').addClass("togglebox2")
    setTimeout(function () {
        $('.box3').removeClass('togglebox2');
        //revalidLevel();
    }, 300);
    setTimeout(function () {
        revalidLevel();
    }, 2000);
});
$(".box4").click(function () {
    arrClicked.push(3);
    $('.box4').addClass("togglebox3")
    setTimeout(function () {
        $('.box4').removeClass('togglebox3');
        //revalidLevel();
    }, 300);
    setTimeout(function () {
        revalidLevel();
    }, 2000);
});


function randomNo() {
    var random = Math.floor((Math.random() * 4));
    arrRandom.push(random);
    $('.boxes button').eq(random).addClass("togglebox" + random)
    setTimeout(function () {
        $('.boxes button').eq(random).removeClass('togglebox' + random);
    }, 500);
}

function compare(a, b) {
    for (var k = 0; k < arrClicked.length; k++) {
        if (arrRandom[k] != arrClicked[k]) {
            return false;
        } else if (arrRandom.length != arrClicked.length) {
            //compare(arrRandom, arrClicked);
        }
        else {
            result = true;
        }
    }
    return result;
}

function revalidLevel() {
    let result = compare(arrRandom, arrClicked);
    compare(arrRandom, arrClicked);
    if (result) {
        $("h1").text("Level " + count);
        count++;
        arrClicked = [];
        randomNo();
    } else {
        $("h1").css('color', 'red');
        $("h1").text("Game Over");
        arrRandom = [];
    }
}

function start() {
    randomNo();
}

*/

// ran = 1
// user = 1
// validate success, validate lengths of array, if =, level up.
// empty user array
// ran = 2 -> [1,2]
// user = 1 -> Validate to same index, if success, validate lengths of array, if !=, wait for user click.
// user = 2 -> validate success, validate lengths of array, if =, level up.
// empty user array
// ran = 3 -> [1,2,3]
// user = 1 -> Validate to same index, if success, validate lengths of array, if !=, wait for user click.
// user = 2 -> Validate to same index, if success, validate lengths of array, if !=, wait for user click.
// user = 3 -> validate success, validate lengths of array, if =, level up.