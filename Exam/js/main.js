 function addTask() {
       
        let taskInput = document.getElementById("taskInput");
        let dateInput = document.getElementById("dateInput");
        let taskList = document.getElementById("taskList");

        if (taskInput.value === "") {
            alert("Proszę napisać zadanie!");
            return;
        }

       
        let li = document.createElement("li");

        
        let dateValue = dateInput.value;
        let formattedDate = "";
        if (dateValue) {
            let parts = dateValue.split('-');
            formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
        } else {
            alert("Proszę napisać date!");
            return;
        }

        li.innerHTML = `
            <span>${taskInput.value}</span> 
            <span class="task-date">${formattedDate}</span>
        `;

        
        taskList.appendChild(li);

      
        taskInput.value = "";
        dateInput.value = "";
    }