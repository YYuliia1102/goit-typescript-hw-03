class Key {
    private isKey: number;

    constructor() {
        this.isKey = Math.random();
    }

    getSignature(): number {
        return this.isKey;
    }
}
class Person {
    constructor(private readonly key: Key) { }

    getKey(): Key {
        return this.key;
    }
}
abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];

    constructor(protected readonly key: Key) { }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Person entered the house.');
        } else {
            console.log('The door is closed.');
        }
    }
}

class MyHouse extends House {

    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is opened.');
        } else {
            console.log('The door remains closed. Wrong key.');
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };