function metricConvertor(input) {
    let NumberConvert = Number(input[0]);
    let inputMetric = (input[1]);
    let outputMetric = (input[2]);

    if (inputMetric === "mm") {
        NumberConvert = NumberConvert / 1000;
    } else if (inputMetric === "cm") {
        NumberConvert = NumberConvert / 100;
    } else {
        NumberConvert = NumberConvert;

    }
    if (outputMetric === "m") {
        console.log(NumberConvert.toFixed(3));
    } else if (outputMetric === "cm") {
        console.log((NumberConvert * 100).toFixed(3));
    } else if (outputMetric === "mm") {
        console.log((NumberConvert * 1000).toFixed(3));
    }
}
metricConvertor(["12", "mm", "m"])