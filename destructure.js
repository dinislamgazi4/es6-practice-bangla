const person = { name: 'dinislam', age:' 18', job:' programming', phone: '01311421331', gfName:'sumaiya', address:"sainbordf"}

const { phone } = person;

const complexObject ={
    name: "abc",
    info:{
        address: 'kola bagan',
        leader: 'tiger leader'
    }
}

const {leader} = complexObject.info;


//const gfName = person. gfName;
//const { phone, gfName, address, salay } = person;

// console.log(gfName,phone, address, salay);


 const friends = ["hossain", "shakib", "ali", "mama","dinislam"];
 const [ first, nextfriends, ...friend ]=  friends;
 //console.log(first, nextfriends,friend );