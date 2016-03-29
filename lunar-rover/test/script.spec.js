var moon, lander, rover;

beforeEach(function () {
    setFixtures('<div id="moon"></div><div id="lander"><div id="rover"></div></div>');

    moon = new Moon($('#moon'));
    lander = new Lander($('#lander'));
    rover = new Rover($('#rover'), lander);
});

describe("The Lander", function () {

    it("can land on the Moon", function () {
        lander.land(moon);

        expect(moon.$element).toContainElement(lander.$element);
    });

    it("will land at a specific position", function () {
        var position = { top: 10, left: 20 };

        lander.land(moon, position);

        expect(lander.$element.position()).toEqual(position);
    });
});

describe("The Rover", function () {

    it("can disembark the Lander", function () {
        lander.land(moon);
        rover.disembark();

        expect(moon.$element).toContainElement(rover.$element);
    });

    it("will disembark initially at the Landers position", function () {
        var position = { top: 10, left: 20 };

        lander.land(moon, position);
        rover.disembark();

        expect(rover.$element.position()).toEqual(position);
    });

    it("can move around the Moon", function () {
        var position = { top: 50, left: 43 };

        lander.land(moon);
        rover.disembark();
        rover.move(position);

        expect(rover.$element.position()).toEqual(position);
    });
});