const variables = () => {
    let a = 45;
    let b = 67;
    const c = 56;
    b="jello"
    return {a, b, c};
};
const x=(marks)=>{
    if(marks>=90) return "scholarship"
    else if(marks>=70) return "A"
    else if(marks>=60) return "B"
    else if(marks>=50) return "C"
    else return "fail"
};
const arr=()=>{
    const nums=[10,20,30,40];
    const mul=nums.map(a=>a*2);
    const fil=nums.filter(a=>a<=20);
    const sum=nums.reduce((a,b)=>a+=b);
    return {mul,fil,sum};
};


module.exports = {variables,x,arr};
