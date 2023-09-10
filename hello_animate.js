var numExample = 10;

var function_1 = 
`int func1()
 {
    printf("Hi");
 }
 `

let ball = anime({
    targets: '',
    translateY: '25vh', // how the ball moves on Y axis
    duration: 300,// duration of the ball when it touches the 'ground'
    loop: true, //loops the movement of the ball
    direction: 'alternate',
    easing: 'linear',// rogor moZraobs burti
    scaleX: {
        value: 1.1,// how wide the ball gets when it falls
        duration: 150,//of the jump
        delay: 268 // of the ball jumping up
    }

});
