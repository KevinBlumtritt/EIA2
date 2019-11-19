"use strict";
Creator;
{
    export let properties = [
        { type: "text", name: "name" },
        { type: "radio", name: "gender", content: ["male", "female", "divers"] },
        //Select Race
        { type: "select", name: "race", content: ["Human", "Orc", "Dwarf", "Elf", "Dark-Elf"] },
        //Select Class
        { type: "select", name: "class", content: ["Warrior", "Wizard", "Hunter", "Thief", "Knight"] },
        { type: "number", name: "height", attributes: [{ key: "min", value: "110" }, { key: "max", value: "250" }, { key: "value", value: "170" }] },
        { type: "range", name: "weight", attributes: [{ key: "min", value: "40" }, { key: "max", value: "300" }, { key: "value", value: "70" }, { key: "step", value: "1" }] },
        //Select Weapon One Handed
        { type: "select", name: "OneHandedWeapons", content: ["Sword", "Dagger"] },
        //Select Weapon Two Handed
        { type: "select", name: "TwoHandedWeapons", content: ["Axe", "Bow", "Spear"] },
        { type: "color", name: "eyecolor", attributes: [{ key: "value", value: "#00cc00" }] },
        { type: "color", name: "haircolor", attributes: [{ key: "value", value: "#0000ff" }] },
        { type: "color", name: "clothcolor", attributes: [{ key: "value", value: "#af7a09" }] },
        { type: "radio", name: "accessories", content: ["Earrings", "Headwear", "Necklace", "Rings", "Tattoos"] },
        //TextArea Backstory
        { type: "textarea", name: "backstory", attributes: [{ key: "cols", value: "80" }, { key: "rows", value: "6" }] },
        { type: "date", name: "birthdate" },
        { type: "radio", name: "moral", content: ["Good", "Neutral", "Evil"] },
        { type: "radio", name: "ethical", content: ["Lawful", "Ethical Neutral", "Chaotic"] }
    ];
}
//# sourceMappingURL=Aufgabe04_DataStructures.js.map