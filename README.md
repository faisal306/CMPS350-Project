# Web Development Course Project - Spring 2025

## Project Members

|Name|Student ID  |
|--|--|
| Faisal Almalk | 202203280 |
| Mohammed      | 202104361 |
| Foaad         |  |
| Yazan Jumaa       | 202110319 |


## Notes regarding the project

1. Course.json file
   1. This is just a simple array that will contain in it items objects.
   2. Each object will be course with it details.
2. university.js file
   1. The includes() method checks if the course name contains the string stored in searchTerm.
   2. For example, if searchTerm is "program", then "programming concepts" includes "program" and this returns true.
3. Use case 3
   1. Actors:
      1. Student: Wants to register.
      2. Instructor: Offers the course.
      3. Instructor: Offers the course.
   2. Conditions for a student to register:
      1. Student must be logged in.
      2. Course must be approved by admin (adminadminApprove: true).
      3. Course must be open for registration (openForRegistration: true).
      4. Student must have passed all prerequisites.
      5. Course must have available seats.