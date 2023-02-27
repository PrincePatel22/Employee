const Employees = [
  {
    id: "1",
    firstname: "Parth",
    lastname: "Dave",
    email: "parth@gmail.com",
    phone: "8612536985",
    gender: "Male",
    department: "PHP",
    skills: ["App Development", "Communication", "Backend Technology"],
    about: "My name is Parth.",
  },
  {
    id: "2",
    firstname: "Raj",
    lastname: "shah",
    email: "raj@gmail.com",
    phone: "7896164585",
    gender: "Male",
    department: "Mobile",
    skills: ["Frontend Technology", "Finance", "Recruitment"],
    about: "My name is Raj.",
  },
  {
    id: "3",
    firstname: "Yasha",
    lastname: "Thakur",
    email: "yasha@gmail.com",
    phone: "7789562389",
    gender: "Female",
    department: ".NET",
    skills: ["Programming", "Communication", "Optimization"],
    about: "My name is Yasha.",
  },
  {
    id: "4",
    firstname: "Bhavya",
    lastname: "Patel",
    email: "Bhavya@gmail.com",
    phone: "7678526366",
    gender: "Female",
    department: "Account",
    skills: ["Finance", "Recruitment", "Optimization"],
    about: "My name is Bhavya.",
  },
  {
    id: "5",
    firstname: "Sahil",
    lastname: "Patel",
    email: "Sahil@gmail.com",
    phone: "7678526366",
    gender: "Male",
    department: "Account",
    skills: ["Recruitment"],
    about: "My name is Sahil",
  },
  {
    id: "6",
    firstname: "Abhi",
    lastname: "Patel",
    email: "abhi@gmail.com",
    phone: "8547963225",
    gender: "Male",
    department: ".NET",
    skills: ["Programming", "Finance"],
    about: "My name is Abhi",
  },
  {
    id: "7",
    firstname: "Jhon",
    lastname: "Smith",
    email: "Jhon@gmail.com",
    phone: "7562581254",
    gender: "Male",
    department: "SEO",
    skills: ["Finance", "Recruitment"],
    about: "My name is Jhon",
  },
];

const searchData = (searchText) => {
  const arr = [];
  searchText = searchText.toLowerCase();
  for (let i = 0; i < Employees.length; i++) {
    if (JSON.stringify(Employees[i]).toLowerCase().includes(searchText)) {
      arr.push(Employees[i]);
    }
  }
  return arr;
};

export default Employees;
export { searchData };
