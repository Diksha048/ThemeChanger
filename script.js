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
