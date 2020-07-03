class Form {

    constructor() {
        this.input = createInput("Participant Name");
        this.email = createInput("Participant Email @")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Come On Let's do a Survey On School");
        this.question1 = createElement('h3', "Q1. Do You Think Our Techers Take Maths Quiz On Every Day In Our School?");
        this.radio = createRadio('h3');
        this.radio.option('Yesss');
        this.radio.option('Noo');
        this.question2 = createElement('h3', "Q2. Do You Think We Should Have A Large Playground In our School For Playing Football ?");
        this.radio1 = createRadio('h3');
        this.radio1.option('Yesss');
        this.radio1.option('Noo');
        this.question3 = createElement('h3', "Q3.Do You Think That Our School Should Take On Trip On Every Month ? ");
        this.radio2 = createRadio('h3');
        this.radio2.option('Yesss');
        this.radio2.option('Noo');
    }


    display() {
        this.input.position(570, 165)
        this.email.position(570, 255)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(500, 5)
        this.question1.position(300, 360)
        this.radio.position(500, 440)
        this.question2.position(300, 480)
        this.radio1.position(500, 540)
        this.question3.position(300, 580)
        this.radio2.position(500, 630)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}