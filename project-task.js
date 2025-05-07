/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

// Deleted variable assignment and backtick. Cannot declare variables in JSON and backticks here and at the end are superfluous and not allowed.
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", // Added a comma to differentiate between this and next key-value pair
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson", //Added double quotes to key as they are required for keys in JSON syntax
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null, // Changed "undefined" to null as undefined is not recognized in JSON
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"] // Deleted trailing comma as JSON does not ignore them like JavaScript does.
  }
}
// Deleted unnecessary backtick and semicolon that are not allowed in JSON


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
I use VS Code as an editor and have extensions that verify the code syntax

2️⃣ How did you confirm that your corrected JSON file was valid?
I created a JSON file and pasted the edited syntax there. For extra measure, I checked the code in codebeautify as well.

3️⃣ Which errors were the most difficult to spot? Why?
The trailing comma was the most difficult for me because it's so tiny and right between double quotations and a bracket making it easily overlooked.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   My code editor seems pretty straightforward and thorough in catching errors. Throwing the code in the online validator adds a second verification confirmation.
*/
