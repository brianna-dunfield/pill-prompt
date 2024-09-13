# PillPrompt

## Overview

PillPrompt is a medication alert application that notifies the user when to take their medications and notifies their caretakers if they did not take their medications.

### Problem Space

Caretaker burden is the strain placed on a caretaker as a result of caring for a loved one. Ensuring that their loved one has taken the proper medications at the proper time is one of the many aspects of being a caretaker. PillPrompt aims to ease the caretaker burden by allowing the caretaker to offload the mental charge of the task to the application while still being notified if their loved one did not remember to take their medication so that they can remind them themselves.

### User Profile

This sprint will have one default user with no authentication.

- Older-Adults:
    - being cared for by a caretaker and whom take medication
    - who need help remembering when to take their medications
    - to keep track of all of the medications they take
 - Caretakers:
   - caring for older adults that they need to remind to take their medications
   - to keep track of the medications their loved ones take

### Features

- As a user (older-adult), I want to be able to add my medications and when I take them.
- As a user (older-adult), I want to be notified when I need to take my medication.
- As a user (older-adult), I want to be able to input if I have or have not taken my medication.
- As a user (older-adult), I want to be able to see a list of all of the medications I take, their dose, and when I take them.

## Implementation

### Tech Stack

- React
- JavaScript
- MySQL
- Express
- Client libraries: 
    - react
    - react-router-dom
    - axios
- Server libraries:
    - knex
    - express
    - cors
    - node.js
    - bcrypt for password hashing
    - nodeschedule
    - node-mailer

### APIs

Creating own.

### Sitemap

- Home page
- Medication List
- Medication Prompt
- Add Medication Form

### Mockups


<u>Mobile View</u>
<br/>
Home Page:
<br/>
![image](https://github.com/user-attachments/assets/7c7bb622-be09-45de-92dd-8d82cacb4ac6)
<br>
Pill List:
<br/>
![image](https://github.com/user-attachments/assets/05bbcff1-0349-4148-97e0-c53ea0ead425)
<br/>
Add Pill Form:
<br/>
![image](https://github.com/user-attachments/assets/e00205e5-7a12-46cd-b4f6-d7aced38bf84)
<br/>
Pill Reminder:
<br/>
![image](https://github.com/user-attachments/assets/3a19f281-5766-45d0-84d5-c2ff13a3b7cd)
<br/>
<br/>
<u>Tablet View</u>
Home Page:
<br/>
![image](https://github.com/user-attachments/assets/8e3c1e1e-c091-4974-b155-c31957bafd5e)
<br/>
Pill List:
<br/>
![image](https://github.com/user-attachments/assets/33bb00ff-71d1-4468-9288-c2fae7066e87)
<br/>
Add Pill Form:
<br/>
![image](https://github.com/user-attachments/assets/8c4d0c10-488d-4bcd-9b1c-e877aeb122b9)
<br/>
Pill Reminder:
<br/>
![image](https://github.com/user-attachments/assets/86fc3bd0-d649-4f5d-a172-71f56528d1d1)
<br/>
<br/>
<u>Desktop View</u>
<br/>
Home Page:
<br/>
![image](https://github.com/user-attachments/assets/29288d19-64a2-4c40-8012-ed817006d93b)
<br/>
Pill List:
<br/>
![image](https://github.com/user-attachments/assets/5c5c0f43-2eec-4645-a2ab-a85fd78b06fc)
<br/>
Add Pill Form:
<br/>
![image](https://github.com/user-attachments/assets/8eab24b8-a94d-4558-9ae9-3680e3a05e5a)
<br/>
Pill Reminder:
<br/>
![image](https://github.com/user-attachments/assets/f416f5d1-4294-4e21-9070-f7ffd3f42517)

### Data
![image](https://github.com/user-attachments/assets/f412dca2-b4a7-4ff4-96bb-f6b844e3b29d)
<br>
<br>
### Endpoints
GET/medication
- Returns a list of the users medication.
Example return data:
```
[
    {
        "id": 1,
        "medication_name": "Advil",
        "dosage": "500mg",
        "individual_dosage": "100mg",
        "time":"12:35"
    },
    ...
]
```
GET/medication/photo/:medicationName
- Returns the image associated with the medication.
Returned from external database.

POST/medication
- Adds the users medication to the list.
Parameters:
  - Medication Name
  - Dosage of medication
  - Dosage of individual pills
  - Time pills need to be taken
Example post:
```
{
  "medication_name": "Advil",
  "dosage": "500mg",
  "individual_dosage": "100mg",
  "time":"12:35"
}
```

## Roadmap

September 11th:
- Set up folder structure and initialization of project.
- Make Jira tickets and board to keep organized through the project.
- Learn how to connect RxPhoto database to own database.

September 12th:
- Create fake data for database.
- Create database via backend knex.

September 13th:
- Make front end global variables and mixins.

September 14th:
- Add backend functionality for get and post requests.
- Figure out how to send scheduled emails through database using node-schedule and node-mailer.

September 15th:
- Make NavBar and Footer component.
- Make individual medication list component.
- Make whole list component.
- Connect to backend.

September 16th:
- Make add medication form.
- Connect to the backend.
- Make medication reminder component.
- Connect to the backend.

September 17th:
- Make main page.
- Connect pages together.

September 18th: 
- Testing.
- Bug Fixing

September 19th:
- Deploy.

---

## Future Implementations
- User authentication
- Future implementations would be to add the ability to have the ability to have a caretaker be notified if their loved one has not taken their medication. This would result in the caretaker receiving an email after 30 minutes have passed and the user has not taken their medication.
- Medication History Log stating what days and doses the user has missed/taken.

