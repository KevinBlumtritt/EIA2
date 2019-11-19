namespace L03 {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#weight");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayWeight);
    }

    function handleChange(_event: Event): void {

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#character");
        order.innerHTML = ""; 

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let weight: number = Number(item.getAttribute("weight"));

            character.innerHTML += item.name + "  kg " + weight;
        }
    }

    function displayWeight(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}