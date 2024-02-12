function memberInfo(showAll) {
    // Initialize objects to store information for females and males
    var females = {};
    var males = {};
  
    // Iterate through the array
    showAll.forEach(function(oneMember) {
      // Split the string into components
      var [fullName, age, gender] = oneMember.split(", ");
      var [firstName, secondName] = fullName.split(" ");
  
      // Create an object with second-name and age
      var oneMemberinfo = { "second-name": secondName, age: parseInt(age) };
  
      // Determine whether to add to females or males
      if (gender === "female") {
        females[firstName] = oneMemberinfo;
      } else if (gender === "male") {
        males[firstName] = one;
      }
    });
  
    // Return the nested object with females and males arrays
    return { females: females, males: males };
  }
  
  // the inputs
  var showAll = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, trans",
    "Patrick wyne, 40, male"
  ];
  
  var output = memberInfo(showAll);
  console.log(output);
  