let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.90,
    fill: { gradient: ['#F9D423', '#e65c00'] }
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".html .bar").circleProgress({
    value: 0.95
});
$(".css .bar").circleProgress({
    value: 0.90
});
$(".js .bar").circleProgress({
    value: 0.80
});
$(".react .bar").circleProgress({
    value: 0.75
});
$(".java .bar").circleProgress({
    value: 0.85
});
$(".C .bar").circleProgress({
    value: 0.90
});
$(".mongo .bar").circleProgress({
    value: 0.95
});
$(".node .bar").circleProgress({
    value: 0.85
});
$(".git .bar").circleProgress({
    value: 0.95
});
$(".vscode .bar").circleProgress({
    value: 0.95
});
$(".tailcss .bar").circleProgress({
    value: 0.95
});
