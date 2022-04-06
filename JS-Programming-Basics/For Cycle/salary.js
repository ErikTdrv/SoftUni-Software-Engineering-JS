function salary(input){

    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let currentSalary = Number(input[index]);
    index++
    let itHasSalary = true;
    for (let i = 1; i <= openTabs; i++){
        let currentTab = input[index];
        index++;

        switch (currentTab){
            case 'Facebook': currentSalary -=150;break;
            case 'Instagram': currentSalary -=100;break;
            case 'Reddit': currentSalary -=50;break;
        }
        if(currentSalary <= 0){
            itHasSalary = false;
            console.log(`You have lost your salary.`);
            break;
        }
    }
    if (itHasSalary){
        console.log(Math.trunc(currentSalary))
    }
   
    
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
