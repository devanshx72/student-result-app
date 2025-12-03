# Student Result App - Setup & Run Instructions

## 📋 Project Overview

A complete student management system built with:
- **React** (Vite)
- **JSON Server** (for backend API)
- **Fetch API** (for HTTP requests)
- **useState only** (no useEffect, Redux, or Context API)

---

## 🚀 Quick Start Guide

### **Step 1: Navigate to Project Directory**

```bash
cd /Users/devansh/Coding/student-result-app
```

### **Step 2: Install Dependencies** (if not already done)

```bash
npm install
```

### **Step 3: Start JSON Server** (Terminal 1)

Open a terminal and run:

```bash
npm run server
```

This will start the JSON Server on `http://localhost:3000`

**Expected Output:**
```
JSON Server started on PORT :3000
Press CTRL-C to stop
Watching db.json...
```

### **Step 4: Start React App** (Terminal 2)

Open a **second terminal** and run:

```bash
npm run dev
```

This will start the Vite development server on `http://localhost:5173`

**Expected Output:**
```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### **Step 5: Open in Browser**

Navigate to: **http://localhost:5173**

---

## 🎯 How to Use the Application

### **1. Load Students**
- Click the **"Load Students"** button to fetch all students from the database
- Initially, the list will be empty

### **2. Add a New Student**
- Click **"Add Student"** button
- Fill in the form:
  - Name
  - Section (e.g., A, B, C)
  - Marks (0-100)
  - Grade (A, B, C, D, F)
- Click **"Add Student"** to save
- You'll see an alert: "Student added successfully! Please click 'Load Students' to refresh."
- Click **"Load Students"** to see the new student in the list

### **3. View Student Details**
- Click **"View Details"** button next to any student
- See all student information in a read-only view
- Click **"Back to List"** to return

### **4. Edit a Student**
- Click **"Edit"** button next to any student
- Modify the form fields
- Click **"Update Student"** to save changes
- You'll see an alert: "Student updated successfully! Please click 'Load Students' to refresh."
- Click **"Load Students"** to see the updated information

### **5. Delete a Student**
- Click **"Delete"** button next to any student
- Confirm the deletion in the popup
- You'll see an alert: "Student deleted successfully! Please click 'Load Students' to refresh."
- Click **"Load Students"** to see the updated list

---

## 📁 Project Structure

```
student-result-app/
│
├── db.json                          # JSON Server database
│
├── src/
│   ├── components/
│   │   ├── StudentList.jsx         # Display students table
│   │   ├── StudentForm.jsx         # Add/Edit form
│   │   └── StudentDetails.jsx      # Read-only view
│   │
│   ├── services/
│   │   └── studentService.js       # All CRUD operations
│   │
│   ├── App.jsx                     # Main app with state management
│   ├── App.css                     # Styling
│   └── main.jsx                    # Entry point
│
├── package.json
└── node_modules/
```

---

## 🔧 Technical Details

### **State Management**
- Uses **only `useState`** hook
- No `useEffect` - all data fetching is manual via button clicks
- State structure:
  - `students` - array of all students
  - `selectedStudent` - currently selected student
  - `currentScreen` - current view ('list' | 'add' | 'edit' | 'details')

### **CRUD Operations**
All operations use the **Fetch API**:

- **Create**: `POST http://localhost:3000/students`
- **Read**: `GET http://localhost:3000/students`
- **Update**: `PUT http://localhost:3000/students/:id`
- **Delete**: `DELETE http://localhost:3000/students/:id`

### **No Auto-Refresh**
After Add/Edit/Delete operations:
- User sees an alert message
- User must manually click **"Load Students"** to refresh the list
- This is by design (no useEffect allowed)

---

## 🛠️ Troubleshooting

### **Issue: "Error loading students"**
- **Solution**: Make sure JSON Server is running on port 3000
  ```bash
  npm run server
  ```

### **Issue: Port 3000 already in use**
- **Solution**: Kill the process using port 3000 or change the port in:
  - `package.json` (server script)
  - `src/services/studentService.js` (API_URL)

### **Issue: Port 5173 already in use**
- **Solution**: Vite will automatically use the next available port (5174, 5175, etc.)

---

## 📝 Sample Data

You can manually add this to `db.json` for testing:

```json
{
  "students": [
    {
      "id": 1,
      "name": "John Doe",
      "section": "A",
      "marks": "85",
      "grade": "A"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "section": "B",
      "marks": "92",
      "grade": "A"
    }
  ]
}
```

After adding sample data, restart JSON Server and click "Load Students" in the app.

---

## ✅ Verification Checklist

- [x] No `useEffect` used anywhere in the code
- [x] Only `useState` for state management
- [x] All CRUD operations work correctly
- [x] Manual refresh required after Add/Edit/Delete
- [x] Clean, beginner-friendly UI
- [x] All components follow the specified structure
- [x] Fetch API used (not Axios)
- [x] JSON Server on port 3000
- [x] React app on port 5173

---

## 🎨 Features

### **Current Features**
- ✅ Add new students
- ✅ View all students in a table
- ✅ Edit existing students
- ✅ Delete students
- ✅ View detailed student information
- ✅ Clean, modern UI with gradient background
- ✅ Responsive design
- ✅ Form validation

### **Optional Enhancements** (commented in code)
- Search/filter students
- Sort by name, marks, grade
- Pagination for large lists
- Advanced form validation
- Loading states
- Better error handling

---

## 📞 Support

If you encounter any issues:
1. Ensure both servers are running (JSON Server + Vite)
2. Check browser console for errors
3. Verify `db.json` is in the root directory
4. Clear browser cache and reload

---

**Happy Coding! 🚀**
