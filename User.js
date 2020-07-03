class User {
    constructor() {
        this.index = null;
        this.email = null
        this.input = null;
    }

    updateCount(count) {
        database.ref('/').update({
            peopleCOunt: count
        });
    }

    update() {
        var playerIndex = "player" + this.index;
        database.ref(playerIndex).set({
            input: this.input,
            email: this.email,
            answer: []
        });
    }
}