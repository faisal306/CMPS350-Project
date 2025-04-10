# Web Development Course Project - Spring 2025

## Project Members

|Name|Student ID  |
|--|--|
| Faisal Almalk | 202203280 |
| Mohammed      | 202104361 |
| Foaad         |  |
| Yazan Jumaa       | 202110319 |


## Notes regarding the project

1. pendingCourse.json file
   1. This is just a simple array that will contain in it items objects.
   2. Each object will be course with it details.
   3. All courses will be closed by default, and opend by the admin.
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
4. Admin page
   1. When the user (stduent / admin) login in the login.html page it should redirect him to the correct page
      1. Student -> dashboard.html (main page), in this page the student will see his email at the top left corner. And, will see GPA, completed hours... and on the bottom will see his registerd courses and at the last section the available courses that the stduent can register.
      2. Admin -> admin.html , where the admin will see the courses that are ready to be approved.
5. In JSON and javsScript
   1. The order of properties in an object doesn’t matter for functionality.
6. Summary of the how registration work
   1. Phase 1: Created and marked as Open for Registration.
   2. Phase 2: Once enough students sign up, it becomes Pending Validation.
   3. Phase 3: After the admin validates it, its status updates to In Progress.