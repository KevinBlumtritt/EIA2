namespace Aufgabe05 {

    export interface products {
        typ: string,
        name: string,
        price: number,
    }

    export interface assoArray {
        [key: string]: products[];
    }

    export let assoProducts: assoArray = {
        "treeSpecies": [ {typ: "Tree", name: "Blue spruce", price: 55 }, {typ: "Tree", name: "Nordmann Fir", price: 60 }, {typ: "Tree", name: "Plastic Tree", price: 30 }],
        "holder": [{typ: "Holder", name: "None", price: 0 }, {typ: "Holder", name: "Plastic holder", price: 10 }, {typ: "Holder", name: "Metal holder", price: 30 }],
        "christmasBall": [ {typ: "Balls", name: "Red", price: 2 }, {typ: "Balls", name: "Gold", price: 6 }, {typ: "Balls", name: "Silver", price: 1 }],
        "candleTyp": [{typ: "Lighting", name: "Candles", price: 3 }, {typ: "Lighting", name: "LED", price: 5 }],
        "lametta": [ {typ: "Lametta", name: "Gold", price: 10 }, {typ: "Lametta", name: "Green", price: 10 }, {typ: "Lametta", name: "Blue", price: 10 }, {typ: "Lametta", name: "Red", price: 10 }],
        "shipment": [{typ: "Delivery options", name:"Hermes", price:14}, {typ: "Delivery options", name:"DHL", price:21}, {typ: "Delivery options", name:"UPS", price:27}]
};

}