const add=(a,b)=>{ a+b;}
//template literal
const msg=(name,course)=>{
    return `${name} - ${course}`
}
const d=(user)=>{
    const {name,city}=user; //destructring
    return `${name} - ${city}`
}
//spread operator
const spread=()=>{
const a=[1,3];
const b=[4,7];
const c=[...a,...b];
return c;
}
//rest operator
const rest=()=>{
const a=[1,3,4,7];
const [b,...c]=a;
return {b,c};
}
//default parameter
const de=(price,discount=10)=>{
return price - (price*discount)/100;
}
module.exports={add,d,spread,rest,de}
