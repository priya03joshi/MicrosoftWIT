function calculateBmi()
{
    var weight = parseFloat(document.getElementById("weight").value);  // To get weight from the input with id as weight
    var height = parseFloat(document.getElementById("height").value)/100; // Convert height to meters
    var bmiValue = weight/(height*height);  // According to the formula
     
    if (bmiValue < 18.5)
    {
		document.getElementById("bmi").value = String(bmiValue.toPrecision(3)) +" kg/m^2"; // writing to the output
        document.getElementById("meaning").value = "Underweight";                   //Category
    }
    else if (bmiValue >= 18.5 && bmiValue <= 25)
    {
		document.getElementById("bmi").value = String(bmiValue.toPrecision(3)) +" kg/m^2"; // writing to the output
        document.getElementById("meaning").value = "Healthy weight";				//Category
    }
    else if (bmiValue > 25 && bmiValue <= 30)
    {
		document.getElementById("bmi").value = String(bmiValue.toPrecision(3)) +" kg/m^2"; // writing to the output
        document.getElementById("meaning").value = "Overweight";					//Category
    }
    else if (bmiValue > 30 && bmiValue <= 35)
    {
		document.getElementById("bmi").value = String(bmiValue.toPrecision(3)) +" kg/m^2"; // writing to the output
        document.getElementById("meaning").value = "Obese Class 1";					//Category
    }
    else if(bmiValue > 35 && bmiValue <= 40)
    {
		document.getElementById("bmi").value = String(bmiValue.toPrecision(3)) +" kg/m^2"; // writing to the output
        document.getElementById("meaning").value = "Obese Class 2";					//Category
    }
    else if(bmiValue>40)
    {
		document.getElementById("bmi").value = String(bmiValue.toPrecision(3)) +" kg/m^2"; // writing to the output
        document.getElementById("meaning").value = "Obese Class 3";					//Category
    }
}