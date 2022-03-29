//class for generating players
class Player {
    constructor(name,year,college,position,analysis) {
        this._name = name;
        this._year = year;
        this._college = college;
        this._position = position;
        this.analysis = analysis;
    }
    get name() {
        return this._name;
    }
    get year() {
        return this._year;
    }
    get college() {
        return this._college;
    }
    get position() {
        return this._position;
    }
    //array of three positive statements to be produced at random
    quickFacts() {
        let i= Math.floor(this.analysis.length * Math.random());
    return this.analysis[i]
    }
};

//Array for all Players
const draftees = [];

//create players using Player Class
const thibodeaux = new Player('Kayvon Thibodeaux','Junior','Oregon','EDGE',
["rushes with good instincts and feel and has shown an uncanny ability to set linemen up throughout the game",
"can play in an even or odd front. He’d ideally add more mass to his frame if drafted by a 4-3 team.",
"is a relentless pass rusher who rushes with an extreme desire to get home."]);

const hutchinson = new Player('Aiden Hutchinson','Senior','Michigan','EDGE',["plays with the kind of motor and passion that leave little doubt for his enthusiasm of the game.",
"is a presumed 'plug and play' prospect thanks to his refined hand usage and his understanding of how to deconstruct blocks at the point of attack.",
"a natural feel for navigating the pocket and seamlessly transitions from an initial charge upfield into a rush counter and is constantly in motion."]);

const johnson = new Player('Jermaine Johnson','RS Senior','Florida State','EDGE',["is quick off the ball, has terrific length, a variety of rush moves, takes good angles, and relentlessly pursues the quarterback.",
"has good size, athleticism, technique, and functional strength while playing the game with tremendous urgency and features a high football IQ.",
"demonstrates good power to exchange at the point of attack, set a firm edge, and squeeze gaps as a run defender."]);

const stingley = new Player('Derek Stingley Jr.','Junior','LSU','CB',["has elite speed and fluid hips that allow him to match wide receivers step for step in and out of breaks while also possessing a rare instinctual ability to intercept passes thrown his way.",
"will be best served as an outside corner matched up with the opposing team's best WR. Stingley Jr. will be able to use his length, athleticism, and speed to match up with the most athletic boundary WRs.",
"His football IQ also allows him to read and react in zone coverage. Very intelligent corner that takes calculated risks that usually result in turnovers for the defense."]);

const gardner = new Player('Ahmad gardner','Junior','Cincinnati','CB',["s a long and athletic corner that can function in a variety of coverage techniques but his best work comes in zone and press coverage.",
"has the makeup of an NFL starter that could claim that role in year two if not year one.",
"profiles best as an outside corner in a zone-heavy defense but is experienced in a variety of coverage techniques. He brings notable upside in tight press coverage where he does a great job of creating jams at the line of scrimmage and disrupting routes."]);

const london = new Player('Drake London','Junior','USC','WR',["is an excellent athlete with regards to jumping ability, body control, and agility for a big receiver.",
"is excellent in contested-catch situations and uses his strong hands to secure the football in traffic.",
"knows how to adjust his route to get to the sticks in situational football."]);

const wilson = new Player('Garrett Wilson','Junior','Ohio State','WR',["is a dynamic threat with the ball in his hands and offers the kind of run after catch ability that is sure to command a role at the NFL level.",
"projects best to the NFL game as a slot receiver, where his short-area agility will afford him more room to work.",
"showcases high-level short-area quickness and foot fire, which allows him to quickly push free and release cleanly if he’s charged with working away from press leverage."]);

const burks = new Player('Treylon Burks','Junior','Arkansas','WR',["uses his big frame to power through arm tackles and is rarely brought down by the first defender.",
"thrives at contested catches because he has an in-depth understanding of body positioning.",
"is a physical runner. Uses his 6-foot-3, 230-pound frame to run through arm tackles. A very difficult receiver to bring down in the open field."]);

const ekwonu = new Player('Ikem Ekwonu','Junior','NC State','OT',["took a notable step forward in 2021 but he does have room to grow when it comes to weight distribution, taking away inside pass rush moves, and occasionally being too aggressive, which leads to blocks not being sustained long enough.",
"has the makings of a year-one impact starter with Pro Bowl potential by year three.",
"has sufficient lateral movement skills and his best moments show up on wide zone runs where his mobility, timing, and feel for widening running lanes stand out."]);

const neal = new Player('Evan Neal','Junior','Alabama','OT',["uses his massive frame and power to move defenders off the line of scrimmage when run blocking.",
"uses his natural spatial awareness to take away the inside move for defenders and force them around him.",
"has great power at the POA. Has an elite-level first step that allows him to generate power to move defenders off the ball."]);

//push players into array
draftees.push(thibodeaux,hutchinson,johnson,stingley,gardner,london,wilson,burks,ekwonu,neal);

//quickFacts array construction. FORMAT = this._name has/is/
thibodeaux ["rushes with good instincts and feel and has shown an uncanny ability to set linemen up throughout the game","Can play in an even or odd front. He’d ideally add more mass to his frame if drafted by a 4-3 team."]

console.log('hello');

console.log(thibodeaux.quickFacts())