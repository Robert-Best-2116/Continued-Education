// Here we discussed using private and public functions in JavaScript, even though it isn't an OOP language. The concept is the same, as certain functions can only be accessed via other functions thus making them private. A basic sorting algorithm was used to show what the JavaScript sort function is doing under the hood. The algo is designed to rearrange the order of the objects alphabetically. 


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
      "coursesTaught": ["Mathematics", "Biology"],
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

// private
const transformEducationData = (educationData) => {
  return {
    [educationData.school.name]: {
      details: schoolDetails(educationData.school),
      students: [ educationData.student ],
      teachers: [ educationData.teacher ]
    }
  }
}

const schoolDetails = ({name, ...details}) => {
  return details;
}
// private


// public
const educationDataBySchoolName = (data) => {
  return Object.assign(...education.map(transformEducationData))
}


const sortDataBySchoolName = (data) => {
  const myObject = educationDataBySchoolName(data);

  const schoolArray = Object.keys(myObject).map(property => {
    return [property, myObject[property]]
  })

  const alphabetizedObject = {};
  schoolArray.sort((a, b) => {
    // a  & b are tuples of [schoolName, schoolData]
    if (a[0] < b[0]) {
      return -1
    } else if (a[0] === b[0]) {
      return 0
    } else {
      return 1
    }
  }).forEach(([schoolName, schoolData]) => {
    alphabetizedObject[schoolName] = schoolData
  })

  return alphabetizedObject;
}


console.log(sortDataBySchoolName(education));


