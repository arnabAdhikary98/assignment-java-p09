let nameData = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let ageData = [32, 30, 26, 28, 44];

let dataStored = []

for(let i=0; i<ageData.length; i++){
    let updatedData = {
        name : nameData[i],
        age : ageData[i]
    }
    dataStored.push(updatedData)
}

let filteredArr = dataStored.filter(function(ele){
    return ele.age>30;
})

let mappedData = filteredArr.map(function(ele1){
    return ele1.name;
})

console.log(mappedData.join(" "))