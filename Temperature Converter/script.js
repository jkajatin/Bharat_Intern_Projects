function pressed() {
    var temp = document.getElementById("temp");
    var select = document.getElementById("mySelect");
    var selectedOption = select.options[select.selectedIndex];
    event.preventDefault();
    if (isNaN(temp.value)) {
        alert("Enter Only Integers");
    } else {
        if(selectedOption.value == 'fToc'){
            //console.log("fToc");
            var ans = Math.round((((temp.value - 32) * 5 / 9)*100)/100);
            //console.log(ans);
            document.getElementById("answer").innerHTML = "Given Temperature: " + temp.value + "<br>Option: Farenheit To Celsius<br>" + "<b>Answer is " + ans + " Degree Celsius</b>";
        } else if (selectedOption.value == 'cTof') {
            console.log("cTof");
            var ans = (temp.value * 9 / 5) + 32;
            //console.log(ans);
            document.getElementById("answer").innerHTML = "Given Temperature: " + temp.value + "<br>Option: Celsius To Farenheit<br>" + "<b>Answer is " + ans + " Degree Farenheit</b>";
            
        } else if (selectedOption.value == 'cTok') {
            console.log("cTok");
            var ans = (temp.value * 9 / 5) * 5 / 9 + 273; //  9/5 and 5/9  to manuplate the string to number
            //console.log(ans);
            document.getElementById("answer").innerHTML = "Given Temperature: " + temp.value + "<br>Option: Celsius To Kelvin<br>" + "<b>Answer is " + ans + " Kelvin</b>";
        }
    }
}
function refresh(){
    location.reload();
}
