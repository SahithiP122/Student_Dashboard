

# Student Fee Management & Reporting System

A basic full-stack web application to manage student fee records and display reporting dashboards.

This submission implements*:

- REST Backend for Students, Fee Bills & Transactions
- Frontend Dashboard with Analytics
- MySQL persistence
- Dummy data for demonstration
- Clean UI with cards & tables

---

## Tech Stack

| Layer     | Technology                        |
| --------- | --------------------------------- |
| Frontend  | React (JavaScript) + Tailwind CSS |
| Backend   | Spring Boot (Java 17)             |
| Database  | MySQL                             |
| API Style | REST                              |

---

## Features Implemented

### Backend

* CRUD APIs for:

  * Students
  * Fee Bills
  * Transactions

* Summary fields for:

  * Total Fees
  * Collected Fees
  * Pending Fees

### Frontend

* Admin Dashboard
* Summary Report Cards
* Tabular View of all data
* Responsive UI

---

## 🗄 Database Schema

### Table: Students

| Column     | Type        |
| ---------- | ----------- |
| id         | BIGINT (PK) |
| name       | VARCHAR     |
| email      | VARCHAR     |
| phone      | VARCHAR     |
| department | VARCHAR     |
| schoolName | VARCHAR     |

### Table: FeeBills

| Column     | Type                      |
| ---------- | ------------------------- |
| id         | BIGINT (PK)               |
| amount     | DOUBLE                    |
| dueDate    | DATE                      |
| status     | VARCHAR                   |
| student_id | BIGINT (FK -> students.id) |

### Table: Transactions

| Column        | Type                       |
| ------------- | -------------------------- |
| id            | BIGINT (PK)                |
| paymentMethod | VARCHAR                    |
| status        | VARCHAR                    |
| feeBill_id    | BIGINT (FK -> fee_bills.id) |

---

##  How to Run the Project

### Backend Setup

1️⃣ Update DB credentials in
`src/main/resources/application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/<database>
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

2️⃣ Run the backend

```bash
cd student
mvn clean install
mvn spring-boot:run
```

Your API will run at:

```
http://localhost:8080/api
```

---

### Frontend Setup

```bash
cd studentweb
npm install
npm start
```

Frontend Available at:

```
http://localhost:3000
```

---

## API Endpoints

| Entity       | API                     |
| ------------ | ----------------------- |
| Students     | `GET /api/students`     |
| Fee Bills    | `GET /api/fee-bills`    |
| Transactions | `GET /api/transactions` |

---

## Future Scope

These are requirements we planned for but **not yet implemented**:

| Feature                           | Status |
| --------------------------------- | :----: |
| Authorization & Role Based Access |    No   |
| Large Data Scaling Strategy       |    No   |
| Cloud Deployment                  |    No   |
| Alerts for failed transactions    |    No   |
| Excel export                      |    No   |

These can be built on top of the existing code easily.

---

## Use of AI Tools

I used ChatGPT to help with:

* Structuring the frontend
* Fixing minor errors
* Documentation


---

## Author

| Field      | Detail             |
| ---------- | ------------------ |
| Name       | Pallakonda Sahithi |
| Roll No    | EE22B080           |
| College    | IIT Madras         |

---

