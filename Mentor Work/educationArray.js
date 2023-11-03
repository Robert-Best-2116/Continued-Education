//The purpose of this exercise is to capture and transform the education array. We will transform the school objects to present the data with the school as the key and the rest of the object pairs, instead of simply an object that contains all of the information separately. 

const education = [
    {
      "student": {
        "name": "John Doe",
        "age": 18,
        "grade": "A",
        "subjects": ["Math", "Science", "English"],
        "address": {
          "street": "123 Main St",
          "city": "Cityville",
          "state": "CA",
          "postalCode": "12345"
        }
      },
      "teacher": {
        "name": "Jane Smith",
        "age": 30,
        "coursesTaught": ["Math", "Biology"],
        "address": {
          "street": "456 Elm St",
          "city": "Townsville",
          "state": "NY",
          "postalCode": "54321"
        }
      },
      "school": {
        "name": "Coding Academy",
        "location": "123 School Rd, Campus City",
        "principal": "Mr. Principal",
        "studentsCount": 500,
        "teachersCount": 25
      }
    },
    {
      "student": {
        "name": "Alice Johnson",
        "age": 17,
        "grade": "B",
        "subjects": ["History", "Art", "Spanish"],
        "address": {
          "street": "789 Oak St",
          "city": "Villageton",
          "state": "TX",
          "postalCode": "67890"
        }
      },
      "teacher": {
        "name": "Robert Brown",
        "age": 35,
        "coursesTaught": ["History", "Geography"],
        "address": {
          "street": "101 Pine Ave",
          "city": "Hillside",
          "state": "NJ",
          "postalCode": "45678"
        }
      },
      "school": {
        "name": "Learning High School",
        "location": "456 Education Blvd, Knowledgeville",
        "principal": "Mrs. Principal",
        "studentsCount": 600,
        "teachersCount": 30
      }
    },
    {
      "student": {
        "name": "Bob Smith",
        "age": 16,
        "grade": "A",
        "subjects": ["Math", "Physics", "Chemistry"],
        "address": {
          "street": "555 Cedar Lane",
          "city": "Groveville",
          "state": "IL",
          "postalCode": "98765"
        }
      },
      "teacher": {
        "name": "Sarah Davis",
        "age": 32,
        "coursesTaught": ["Physics", "Chemistry"],
        "address": {
          "street": "202 Oakwood Dr",
          "city": "Hillsburg",
          "state": "OH",
          "postalCode": "23456"
        }
      },
      "school": {
        "name": "Science High",
        "location": "789 Science Avenue, Labtown",
        "principal": "Dr. Principal",
        "studentsCount": 450,
        "teachersCount": 20
      }
    },
    {
      "student": {
        "name": "Emily White",
        "age": 17,
        "grade": "B",
        "subjects": ["English", "History", "French"],
        "address": {
          "street": "222 Pine Street",
          "city": "Treeville",
          "state": "WA",
          "postalCode": "34567"
        }
      },
      "teacher": {
        "name": "Michael Johnson",
        "age": 28,
        "coursesTaught": ["English", "French"],
        "address": {
          "street": "333 Willow Lane",
          "city": "Leafville",
          "state": "OR",
          "postalCode": "45678"
        }
      },
      "school": {
        "name": "Language Institute",
        "location": "567 Language Avenue, Linguistown",
        "principal": "Ms. Principal",
        "studentsCount": 300,
        "teachersCount": 15
      }
    },
    {
      "student": {
        "name": "David Wilson",
        "age": 16,
        "grade": "A",
        "subjects": ["Math", "Science", "Computer Science"],
        "address": {
          "street": "777 Tech Road",
          "city": "Techville",
          "state": "GA",
          "postalCode": "56789"
        }
      },
      "teacher": {
        "name": "Laura Anderson",
        "age": 34,
        "coursesTaught": ["Science", "Computer Science"],
        "address": {
          "street": "888 Innovation Lane",
          "city": "Innovatown",
          "state": "MI",
          "postalCode": "34567"
        }
      },
      "school": {
        "name": "Tech High",
        "location": "123 Tech Street, Innovatown",
        "principal": "Mr. Principal",
        "studentsCount": 400,
        "teachersCount": 18
      }
    }
  ]

//could change teacher objects and student objects to match subjects taught w/ subjects taken. 
// could change principals name 

//transform the data into an object its self, change it from an array of objects to an object that is school name, with all the data in each element. 

// Array<Object("student", "teacher" "school")> (edited) 

// 4:46
// Object("school"=>Object("teacher", "student")
// 4:48
// "Tech High": {
//   "details": {...},
//   "students": [
//     {
//       "name": "David Wilson",
//       ...
//     }
//    ],
//    "teachers": [
//      {
//        "name": "Laura Anderson",
//         ...
//      }
//     ]
// }

//first thing i want to find, is the school name, 

//naming convention hack to build a structure, -refrence the original name, and then by the target element. ie educationBySchoolName

// const refactoredEducation = {}

// education.forEach(element => { console.log(element)
    
// });


// sanity test, 
// step one, figure out how to break down the array of objects into separate objects.

//tests so far, console.log teacherAndStudents, gets me the information i require,
//test 2, schoolInformation[name] = {details, teachersAndStudents}, returned the details as i wanted, with highschool name, but then also returned teachers and students as an object, but not the actual information. 
//test 3, assign the information as i did with the const, for name and ...details, Result, when console.log the student information, i received the information for the teacher not the student, odd. 

const transformAllEducationData = (educationData) => {

  let educationDataArray = []

  educationData.forEach((element) =>
    educationDataArray.push(transformEducationData(element))
  )

  return educationDataArray

}


const transformEducationData = (educationData) => {

  const schoolInformation = transformSchoolInformation(educationData)

  const studentInformation = transformStudentInformation(educationData)

  const teacherInformation = transformTeacherInformation(educationData)
  
  const transformedEducationData = Object.assign(schoolInformation, studentInformation, teacherInformation)

  return transformedEducationData
}


const transformSchoolInformation = ({school, ...teachersAndStudents}) => {

const {name, ...details} = school

schoolInformation = {}

schoolInformation[name] = details

return schoolInformation

};

const transformStudentInformation = ({student, ...teacherInformation}) => {
  
  const {students, ...studentDetails} = student
  
  studentInformation = {}
  
  studentInformation = {students : [studentDetails]}
  
  return studentInformation 
}

const transformTeacherInformation = ({teacher, ...studentInformation}) => {
  
  const {teachers, ...teacherDetails} = teacher
  
  teacherInformation = {}
  
  teacherInformation = {teachers : [teacherDetails]}
  
  
  return teacherInformation 
}

//console.log(transformSchoolInformation(education[1]))
//console.log(transformStudentInformation(education[1]))
//console.log(transformTeacherInformation(education[1]))
//console.log(JSON.stringify(transformEducationData(education[1]), null, 3))
console.log(JSON.stringify(transformAllEducationData(education), null, 3))


//Create Seperation of conerns, we extract school data from this not student data from this, rinse and repeate. 

// const schoolName = educationData.school.name 
// const schoolDetails = {
  //     location: educationData.school.location, 
    //     principal: educationData.school.principal, 
    //     studentCount: educationData.school.studentsCount, 
    //     teacherCount: educationData.school.teachersCount
    // }
    // schoolInformation = {}
    // schoolInformation[schoolName] = schoolDetails
    // return schoolInformation



//console.log(transformStudentInformation(education[1]))

//lets talk about desctructiring 
    //Shortens Bullshit!
    //Esentail for reading modern JS 

    // https://javascript.info/destructuring-assignment#object-destructuring 



    //next step, pull out teachers and students, in function declaration(argument), and move it around properly. use a for each to iterate through each school. 
    //at the end i should be looking at a school with the name and teachers and students under it. 

    //solve the smallest problem first!!!!!!!! 