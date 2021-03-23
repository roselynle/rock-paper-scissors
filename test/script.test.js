const funcs = require("../assets/js/script");

describe("playRound", function () {
    let playRound = funcs.playRound;
    it("it should exist and be a function", () => {
        expect(playRound).toBeDefined();
        expect(playRound).toBeInstanceOf(Function);
    });

    it("rock beats scissors", function () {
        expect(playRound("rock", "scissors")).toEqual("player");
    });

    it("scissors gets beaten by rock", function () {
        expect(playRound("scissors", "rock")).toEqual("computer");
    });

    it("rock draws with rock", function () {
        expect(playRound("rock", "rock")).toEqual("draw");
    });

    it("scissors draws with scissors", function () {
        expect(playRound("scissors", "scissors")).toEqual("draw");
    });

    it("scissors beats paper", function () {
        expect(playRound("scissors", "paper")).toEqual("player");
    });

    it("paper gets beaten by scissors", function () {
        expect(playRound("paper", "scissors")).toEqual("computer");
    });

    it("paper draws with paper", function () {
        expect(playRound("paper", "paper")).toEqual("draw");
    });

    it("paper beats rock", function () {
        expect(playRound("paper", "rock")).toEqual("player");
    });

    it("rock gets beaten by paper", function () {
        expect(playRound("rock", "paper")).toEqual("computer");
    });
});

describe("computerPlay", function () {
    let computerPlay = funcs.computerPlay;
    it("it should exist and be a function", () => {
        expect(computerPlay).toBeDefined();
        expect(computerPlay).toBeInstanceOf(Function);
    });

    // it("should have three choices to be able to pick from", () => {
    //     let choices = funcs.choices;
    //     expect(choices.length).toHaveLength(3);
    // });
});
