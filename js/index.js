const persons = [
    {
        name: "jerry", height: 176.5, weight: 67.6,
    },
    {
        name: "mary", height: 145.5, weight: 48,
    },
    {
        name: "kevin", height: 189.5, weight: 97.6,
    },
    {
        name: "張三", height: 250.5, weight: 197.6,
    },
];

console.log(persons);
console.log(persons[0].name);
console.log(persons[0]["height"]);

let tempStr = "<ul>";

// for 迴圈寫法
for (let i = 0; i < persons.length; i++) {
    let name = persons[i].name;
    let bmi = getBMI(persons[i]["height"], persons[i]["weight"]);

    console.log(`${name} BMI:${bmi}`);
    tempStr += `<li>${name} BMI:${bmi}</li>`;
}

tempStr += "</ul>";

tempStr = "<ul>";
// forEach
persons.forEach(person => {
    let name = person["name"];
    let bmi = getBMI(person["height"], person["weight"]);

    console.log(`${name} BMI:${bmi}`);
    tempStr += `<li>${name} BMI:${bmi}</li>`;
});

tempStr += "</ul>";

document.write(tempStr);

// 函示表達式
// 1.(先宣告再使用)
// 2.如果只有一行邏輯可移除左右大括號，且如有return需移除。
const getBMI3 = (height, weight, point = 2) => (weight / (height / 100) ** 2).toFixed(point);

const getBMI2 = (height, weight, point = 2) => {
    let bmi = weight / (height / 100) ** 2;
    // 檢查bmi是否是數值
    if (isNaN(bmi)) {
        return "參數錯誤!";
    }

    return bmi.toFixed(point);
};

console.log(getBMI("176", "67", 3));



// 計算BMI
function getBMI(height, weight, point = 2) {
    let bmi = weight / (height / 100) ** 2;
    // 檢查bmi是否是數值
    if (isNaN(bmi)) {
        return "參數錯誤!";
    }

    return bmi.toFixed(point);
}