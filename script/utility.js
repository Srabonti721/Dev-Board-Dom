function getIdBYConvertedValue(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function setInnerTextByIdAndValue(id, value) {
    document.getElementById(id).innerText = value;
}

function completedButton(title, btnCompleted) {
    alert("Board update successfully");
    const taskNumber = getIdBYConvertedValue("task-number");
    const totalNumber = getIdBYConvertedValue("total-number");
    if (taskNumber > 0 && totalNumber >= 23) {
        const add = taskNumber - 1;
         const diff= totalNumber + 1;
        setInnerTextByIdAndValue("task-number", add)
        setInnerTextByIdAndValue("total-number", diff);
        //   add massage
        const addListContainer = document.getElementById("add-list");
        const p = document.createElement("p");
        p.classList.add("style");
        p.innerText = `
      You have completed the task ${title} at 
     `
        addListContainer.appendChild(p);
        // btn Disabled
        btnCompleted.setAttribute("disabled", false)
    }
    else {
        console.log("invalid value");
    }
}
// discover button
document.getElementById("discover").addEventListener ("click", function(){
    window.location.href = "./question.html"   
})