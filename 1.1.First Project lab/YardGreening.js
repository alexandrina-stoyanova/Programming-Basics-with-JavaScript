function yardGreening(input){
    let squareMetres = (input[0]);
    let priceOfSquareMetres = Number(squareMetres * 7.61);
    let discount = Number(priceOfSquareMetres * 0.18);
    let finalPrice = Number(priceOfSquareMetres-discount);
     console.log(`The final price is: ${finalPrice} lv.`);
     console.log(`The discount is: ${discount} lv.`);

}
yardGreening(["550"]);
