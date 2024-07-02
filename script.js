function calculateBMI()
{
    const form = document.getElementById("box-container");
    const weightinput = document.getElementById("weight");
    const heightinput = document.getElementById("height");
    const resultdiv = document.getElementById("result");

    const weight = parseFloat(weightinput.value);
    const height = parseFloat(heightinput.value);

if(weight && height)
{
    const bmi = calculateBMIValue(weight,height);
    const category = categorizeBMI(bmi);
    resultdiv.innerText = `Your BMI is ${bmi}. You are ${category}.`;
}
else
{
    resultdiv.innerText = 'Please enter valid weight and height values.';
}
}

function calculateBMIValue(weight,height)
{
    const heightsquare = height * height;
    const bmi = weight / heightsquare *10000;
    return Math.round(bmi * 100) / 100;
}

function categorizeBMI(bmi)
{
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
/* Theme Slector code */

function enabledark()
{
    const mainBody = document.getElementById("main-body");
    mainBody.classList.add("bg-dark");
    mainBody.classList.remove("bg-light");

    const Boxcontainer = document.getElementById("box-container");
    Boxcontainer.classList.add("box-container-dark");

    const buttoncontainer = document.getElementById("button");
    Boxcontainer.classList.add("button-bg");

    const resultbg = document.getElementById("result");
    resultbg.classList.add("result-bg");

}

function enablelight()
{
    const mainBody = document.getElementById("main-body");
    mainBody.classList.add("bg-light");
    mainBody.classList.remove("bg-dark");
}
