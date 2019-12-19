namespace L09_Classes {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let snowflakeArray: Snowflake[] = [];

    function handleLoad(_event: Event): void {
        console.log("starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        for (let i:number= 0; i < 120; i++) {
        let snowflake: Snowflake = new Snowflake(2);
        console.log("new flake");
        snowflakeArray.push(snowflake);

        }
        window.setInterval(update,20);

    
        function update(): void {
            console.log("Update");

            crc2.save();
            
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            
            crc2.restore();

            for (let i:number=0; i < snowflakeArray.length; i++){
                snowflakeArray[i].draw();
                snowflakeArray[i].move(100);
            }
            
        }



    }
}