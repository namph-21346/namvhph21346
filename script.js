// const massMark = 78;
// const heightJohn = 1.95;
// const heightMark = 1.69;
// const massJohn = 92;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

if (BMIMark < BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than john's (${BMIJohn})!`)

} else {
    confirm.log(`john's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}