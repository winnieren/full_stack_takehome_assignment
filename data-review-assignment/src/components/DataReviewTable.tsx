// components/DataReview.tsx

import { useEffect, useState } from "react";
import DataReviewTableListItem from "./DataReviewTableListItem";
// type FlattenedObject = Record<string, string | number | boolean | null>;
// function flattenObject(obj: Record<string,  string | number | boolean | null>, prefix: string = ''): Record<string,  string | number | boolean | null> {
//     return Object.keys(obj).reduce((acc: FlattenedObject, key: string) => {
//       const newKey = prefix ? `${prefix}.${key}` : key;
//       if (typeof obj[key] === 'object' && obj[key] !== null&& !Array.isArray(obj[key])) {
//         Object.assign(acc, flattenObject(obj[key], newKey));
//       } else {
//         acc[newKey] = obj[key];
//       }
//       return acc;
//     }, {});
//   }

type UserRecord = {
    id: number;
    name: string;
    email: string;
    street: string;
    city: string;
    zipcode: string;
    phone: string;
    status: string;
}

export default function DataReviewTable() {

    interface Data {
        records: UserRecord[];
    }

    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        fetch("/api/data")
            .then((res) => res.json())
            .then((data) => setData(data)
            );
    }, []);
    if (!data){
        return <div>Loading...</div>;
    }
    const records = data.records;
    const headers = ["ID", "Name", "Email", "Street", "City", "Zipcode", "Phone", "Status"];
    const handleOnClick = () => {
        // Create the header row
        const headerRow = headers.join(",");
    
        // Create the data rows
        const dataRows = records.map((item) => {
            return Object.values(item).join(",");
        });
    
        // Combine the header row and data rows into a CSV string
        const csv = [headerRow, ...dataRows].join("\n");
    
        // Create a Blob and trigger download
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.setAttribute("hidden", "");
        a.setAttribute("href", url);
        a.setAttribute("download", "data.csv");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (
        <div style={{ margin: "20px" }}>
            <h1>Data Review</h1>
            <table id="myTable">
                <thead>
                    <tr>
                    <th >ID</th>
                    <th >Name</th>
            <th >Email</th>
            <th >Street</th>
            <th>City</th>
            <th >Zipcode</th>
            <th >Phone</th>
            <th >Status</th>
            <th >Errors</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item) => (
<DataReviewTableListItem key={item.id} record={item} />
                    ))}
                </tbody>
            </table>
            <button onClick={handleOnClick}>Export CSV</button>
        </div>
    );
}
