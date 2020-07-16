console.log("Script Loaded");

console.log("***GRADE SYSTEM***");

let mark = Number(prompt("Enter your mark to know your Grade"));

console.log(mark < 45 ? 'You are FAIL!' : mark <=100 ? 'You are PASS!' : 'Give the valid mark you got in the exam out of 100!');



if (mark <= 100) {
    let grade;
    
    switch (true) {
        case mark >= 91:
            grade = 'S';
            console.log(`Your mark is ${mark} and your Grade is ${grade}`);
            break;
    
            case 90>=mark && mark>=81:
            grade = 'A';
            console.log(`Your mark is ${mark} and your Grade is ${grade}`);
            break;
    
            case 80>=mark && mark>=71:
            grade = 'B';
            console.log(`Your mark is ${mark} and your Grade is ${grade}`);
            break;
    
            case 70>=mark && mark>=61:
            grade = 'C';
            console.log(`Your mark is ${mark} and your Grade is ${grade}`);
            break;
    
            case 60>=mark && mark>=51:
            grade = 'D';
            console.log(`Your mark is ${mark} and your Grade is ${grade}`);
            break;
    
            case 50>=mark && mark>=45:
            grade = 'E';
            console.log(`Your mark is ${mark} and your Grade is ${grade}`);
            break;
    
        default:
            grade = 'RA';
            console.log(`Your mark is ${mark} and your Grade is ${grade} i.e., You have to Re Appear for the exam.`);
            break;
    }

    
} else {
    console.log("Give the valid mark you got in the exam!");
    
}
