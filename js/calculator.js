const intWeight = document.querySelector('.calculator-form').children[0]
const intHeight = document.querySelector('.calculator-form').children[1]
const btnCalc = document.querySelector('.calculator-form').children[2]
const output = document.querySelector('.calculator-form').children[3]
const outputDesc = document.querySelector('.calculator-output')

btnCalc.addEventListener('click', updOutput)

//считаем индекс массы тела
function calcBMI() {
    const weight = +intWeight.value
    const height = +intHeight.value
    const bmi = weight / height**2
    return Math.round(bmi)
}

//обновляем вывод
function updOutput() {
    const bmi = calcBMI()
    if (bmi) {
        output.value = bmi
        let outputTxt
        if (bmi >= 30) outputTxt = 'Ожирение. Необходимо как можно скорее нормализовать массу тела. Рекомендуется консультация специалиста.'
        else if (bmi >= 25) outputTxt = 'Избыток массы тела. Необходимо снизить вес. Больше двигайтесь и уменьшите калорийность продуктов.'
        else if (bmi >= 18.5) outputTxt = 'Нормальная масса тела. Продолжайте придерживаться вашего рациона питания и режима физической деятельности.'
        else outputTxt = 'Дефицит массы тела. Недостаточная масса тела может плохо отразиться как на здоровье в целом, так и на состоянии опорно-двигательного аппарата.'
        outputDesc.textContent = outputTxt
    } else {
        output.value = 'Ошибка'
        outputDesc.textContent = ''
    }
}