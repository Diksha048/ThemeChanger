const form = document.getElementById("box-container");
const weightinput = document.getElementById("weight");
const heightinput = document.getElementById("height");
const resultdiv = document.getElementById("result");

const weight = parseFloat(weightinput.value);
const height = parseFloat(heightinput.value);

if(weight && height)
{
    const bmi = calculateBMI(weight,height);
    const category = categorizeBMI(bmi);

    resultdiv.innerText = 'Your BMI is ${bmi}.You are ${category}.';
}
else
{
    resultdiv.innerText = 'Please enter valid weight and height values.';
}

function calculateBMI(weight,height){
    const heightsquare = height * height;
    const bmi = weight / heightsquare;
    return math.round(bmi * 100) / 100;
}

function categorizeBMI(bmi){
    if(bmi < 18.5)
    {
        return "Under weight";
    }
    else if(bmi < 25)
    {
        return "Normal Weight";
    }
    else if(bmi <30)
    {
        return "Over Weight";
    }
    else
    {
        return "Obese";
    }
}
