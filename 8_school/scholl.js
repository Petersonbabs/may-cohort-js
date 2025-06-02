const school = {
    name: "Greenfield International School",
    address: {
      street: "12 Education Way",
      city: "Lagos",
      state: "Lagos State",
      zip: "100001"
    },
    departments: [
      {
        name: "Science",
        head: "Dr. Jane Smith",
        teachers: [
          {
            name: "Mr. John Doe",
            subject: "Physics",
            classes: [
              {
                className: "SS2A",
                students: [
                  { id: 1, name: "Adeola Johnson", age: 16, scores: { physics: 85, math: 90 } },
                  { id: 2, name: "Samuel Obi", age: 17, scores: { physics: 78, math: 88 } }
                ]
              },
              {
                className: "SS2B",
                students: [
                  { id: 3, name: "Chinwe Okoro", age: 16, scores: { physics: 92, math: 87 } }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Arts",
        head: "Mrs. Grace Danjuma",
        teachers: [
          {
            name: "Miss Ruth Bello",
            subject: "Literature",
            classes: [
              {
                className: "SS1A",
                students: [
                  { id: 4, name: "Tunde Alabi", age: 15, scores: { literature: 89, english: 85 } }
                ]
              }
            ]
          }
        ]
      }
    ],
    facilities: {
      library: {
        books: [
          { title: "Advanced Physics", author: "Ikechukwu Eze", copies: 4 },
          { title: "Shakespeare's Plays", author: "William Shakespeare", copies: 3 }
        ]
      },
      labs: {
        physicsLab: true,
        chemistryLab: true,
        computerLab: false
      }
    }
  };

  function renderSchoolInfo() {
    const containerEl = document.getElementById("school-info");

    // 
     
  }

  renderSchoolInfo();







  // loops in javascript
  // for.. loop, for.. of, for... in, while, do.. while