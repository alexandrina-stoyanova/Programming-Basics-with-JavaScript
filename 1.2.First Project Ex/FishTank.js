function fishTank(input){
    let length=Number(input[0]);
    let width=Number(input[1]);
    let height=Number(input[2]);
    let percent=Number(input[3]);
    let volumeFishTank=length*width*height;
    let volumeForWater=volumeFishTank-((volumeFishTank*percent) / 100);
    let liter=volumeForWater * 0.001;
    console.log(liter);
}
fishTank(["85","75","47","17"])