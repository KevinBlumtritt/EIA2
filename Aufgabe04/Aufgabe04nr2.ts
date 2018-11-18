namespace Aufgabe04 {
    
export interface products{
    name:string,
    price: number,
}
    
    export let treeSpecies:products[]=[{name:"none",price:0}, {name:"Nordmann fir",price:55},{name:"Douglas fir",price:45},{name:"White spruce",price:30}];
    export let holder:products[]=[{name:"Plastic holder",price:10},{name:"Metal holder",price:30},{name:"None",price:0}];
    export let christmasBall:products[]=[{name:"none",price:0},{name:"Red",price:2},{name:"Gold",price:6},{name:"Blue",price:1}];
    export let lametta:products[]=[{name:"none",price:0},{name:"Gold",price:10},{name:"Green",price:10},{name:"Red",price:10},{name:"Silver",price:10}];
    export let candleTyp:products[]=[{name:"none",price:0},{name:"candles",price:3},{name:"LED",price:5}];
    export let shipment:products[]=[{name:"self-pickup",price:0},{name:"Hermes",price:5},{name:"DHL",price:6},{name:"UPS",price:7.50}];

}