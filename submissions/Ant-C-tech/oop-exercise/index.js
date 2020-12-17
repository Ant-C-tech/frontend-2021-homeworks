/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/Ant-C-tech/a-tiny-JS-world
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Inhabitant {
    constructor(name, gender, friends) {
        //At the moment I can't imagine what the creatures will inhabit our world, that is why I assumed that these will be some people and different kinds of their pets. In this way I can assume that they all would have these common properties and one method to perform the task.
        this.name = name;
        this.gender = gender;
        this.friends = friends;
        this.templete = ` My name is ${this.name}. My gender is ${this.gender}.`;
    };

    getVoice() {
        let pluralEnding;
        (this.friends && this.friends.length > 1) ? pluralEnding = 's': pluralEnding = '';
        return (this.friends) ? this.templete + `I have friend${pluralEnding}: ${this.friends.join(', ')}.` : this.templete + ' I am looking for friends.';
    };
};

class Animal extends Inhabitant {
    constructor(...args) {
        super(...args);
        this.legs = 4;
    };

    getVoice() {
        return super.getVoice() + ` I have ${this.legs} legs.`;
    };
}

class Human extends Inhabitant {
    constructor(saying, ...args) {
        super(...args);
        //I assumed that people can say different phrases
        this.saying = saying;
        this.species = 'human';
        this.hands = 2;
        this.legs = 2;
    };

    getVoice() {
        return `I am a ${this.species}. ` + super.getVoice() + ` I have ${this.legs} legs and ${this.hands} hands. I want to say you: "${this.saying}".`;
    };
}

class Dog extends Animal {
    constructor(...args) {
        super(...args);
        this.species = 'dog';
        this.saying = 'Woof-Woof!'; //I assumed that all dogs say the same
    };

    getVoice() {
        return `I am a ${this.species}. ` + super.getVoice() + ` I want to say you: "${this.saying}".`;
    };
}

class Cat extends Animal {
    constructor(...args) {
        super(...args);
        this.species = 'cat';
        this.saying = 'Meow-Meow!'; //I assumed that all cats say the same
    };

    getVoice() {
        return `I am a ${this.species}. ` + super.getVoice() + ` I want to say you: "${this.saying}".`;
    };
}

const dog = new Dog('Spike', 'male', ['John']);
const cat = new Cat('Tom', 'male', ['John']);
const woman = new Human('Nice to meet you!', 'Jane', 'female');
const man = new Human('Hi, how are you?', 'John', 'male', ['Spike', 'Tom']);

const inhabitants = [dog, cat, woman, man];

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

inhabitants.forEach((inhabitant) => {
    print(inhabitant.getVoice(), 'div');
});