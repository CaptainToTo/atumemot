let kitchen1doors = {
    door1: "lock",
    door2: "lock",
    key: true
}

class Kitchen1 extends AdventureScene {
    constructor() {
        super("Kitchen1", "Kitchen", "kitchen.png", 0.8);
    }

    loadAssets() {
        
    }

    onEnter() {
        this.switch = new Interactable(this, 
            this.w * 0.7, this.h * 0.75, "switch-right-on", 
            "A light switch. It's like another world when it's dark.", "on", () => {
                if (this.switch.state == "off") {
                    this.switch.setTexture("switch-right-on");
                    this.switch.state = "on";
                    this.blackout.destroy();
                } else {
                    this.switch.setTexture("switch-right-off");
                    this.switch.state = "off";
                    this.blackout = this.add.graphics();
                    this.blackout.fillStyle(0x00000, 0.7);
                    this.blackout.fillRect(0, 0, this.w * 0.75, this.h);
                }
            });
        this.switch.setScale(0.2);
        
        this.door1 = new Door(this, this.w * 0.6, this.h * 0.13, "up", kitchen1doors.door1, 'Living1',
        () => {
            kitchen1doors.door1 = "open";
        });

        this.door2 = new Door(this, this.w * 0.595, this.h * 0.85, "down", kitchen1doors.door2, 'Entrance3',
        () => {
            kitchen1doors.door2 = "open";
        });

        if (kitchen1doors.key) {
            this.key = new Interactable(this, 
                this.w * 0.4, this.h * 0.5, "key", 
                "An all purpose key that can unlock any door.", "", () => {
                    this.showMessage("You pick up the key.");
                    this.gainItem('key');
                    this.tweens.add({
                        targets: this.key.image,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => this.key.image.destroy()
                    });
                    kitchen1doors.key = false;
                });
            this.key.setScale(0.2);
        }
    }
}

// -----------------------------------------------------------------------

let kitchen2doors = {
    door1: "open",
    door2: "lock"
}

class Kitchen2 extends AdventureScene {
    constructor() {
        super("Kitchen2", "Kitchen", "kitchen.png", 0.8);
    }

    loadAssets() {
        
    }

    onEnter() {
        this.switch = new Interactable(this, 
            this.w * 0.7, this.h * 0.75, "switch-right-on", 
            "A light switch. It's like another world when it's dark.", "on", () => {
                if (this.switch.state == "off") {
                    this.switch.setTexture("switch-right-on");
                    this.switch.state = "on";
                    this.blackout.destroy();
                } else {
                    this.switch.setTexture("switch-right-off");
                    this.switch.state = "off";
                    this.blackout = this.add.graphics();
                    this.blackout.fillStyle(0x00000, 0.7);
                    this.blackout.fillRect(0, 0, this.w * 0.75, this.h);
                }
            });
        this.switch.setScale(0.2);

        this.door1 = new Door(this, this.w * 0.6, this.h * 0.13, "up", kitchen2doors.door1, 'Living2', 
        () => {
            kitchen2doors.door1 = "open";
        });

        this.door2 = new Door(this, this.w * 0.13, this.h * 0.5, "left", kitchen2doors.door2, 'Outro', 
        () => {
            kitchen2doors.door2 = "open";
        });
        this.door2.setScale(0.5);
    }
}