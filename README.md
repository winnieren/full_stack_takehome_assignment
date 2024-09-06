---

### **Take-Home Assignment: Data Review, Editor, and Exporter**

**Objective**: Build a data review interface that queries JSON data from a Next.js API, displays the data in a table format with validation errors, and allows users to export the data in CSV format. You will also color-code validation errors and provide error details in an interactive way.

**Deliverables**:

1. **Data Query from API**: Implement a Next.js API route that returns the provided mock JSON data (attached below).
2. **Data Review Table**:
    - Display the data in a table, flattening any nested fields (e.g., `address`) into separate columns (e.g., `Street`, `City`, `Zipcode`).
    - Color-code validation errors in each column according to severity:
        - Red for critical errors (must be fixed).
        - Yellow for warnings (should be reviewed).
        - Green for valid fields.
    - **Hoverable Error Messages**: Each cell with a validation error should display the error message on hover as a tooltip.
    - **Error Summary Modal**: Include an "Error Summary" modal with a clickable button or link that opens a modal. This modal should list all the validation errors for that specific row, with details for each error.
3. **CSV Export**: Allow users to export the data to a CSV format.
4. **Bonus** (Optional):
    - Allow users to directly edit fields with validation errors.
    - Improve performance by handling large datasets (e.g., add pagination or lazy loading).

**Mock Data**: You will be working with the following mock JSON data. Your API should serve this data to the frontend:

```json
jsonCopy code
{
  "records": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "street": "123 Main St",
      "city": "New York",
      "zipcode": "12345",
      "phone": "123-456-7890",
      "status": "active",
      "errors": {
        "phone": {
          "message": "Invalid phone format",
          "severity": "critical"
        },
        "zipcode": {
          "message": "Invalid zipcode",
          "severity": "warning"
        }
      }
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@sample",
      "street": "456 Elm St",
      "city": "Los Angeles",
      "zipcode": "",
      "phone": "987-654-3210",
      "status": "inactive",
      "errors": {
        "email": {
          "message": "Invalid email format",
          "severity": "critical"
        },
        "zipcode": {
          "message": "Zipcode is missing",
          "severity": "critical"
        }
      }
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "street": "",
      "city": "Chicago",
      "zipcode": "60614",
      "phone": "111-222-3333",
      "status": "pending",
      "errors": {
        "street": {
          "message": "Street address is missing",
          "severity": "warning"
        }
      }
    }
  ]
}

```

**Expectations**:

- **Tech Stack**: Use **Next.js** for API and server-side rendering, React for frontend components. Styling can be done with **Tailwind CSS** or **Ant Design**.
- **Time Estimation**: This assignment should take 4–6 hours to complete.
- **Submission**: Please provide a GitHub repo link containing your code, with a README explaining your approach, assumptions, and any improvements you would make given more time.
- **Bonus Considerations** (optional): Adding features like inline editing, client-side validation, or performance optimizations.
