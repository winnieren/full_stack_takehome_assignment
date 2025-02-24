import type UserRecord  from "./DataReviewTable";

type DataReviewTableListItemProps = {
    record: UserRecord;
};

// check if there is a severity attribute in the record
// if there is, apply the corresponding class to the td element
// if there is not, apply the default class to the td element
function applySeverityClass(severity: string) {
    if (severity) {
        return `td-${severity}`;
    }
    return `td-success`;
};

export default function DataReviewTableListItem({ record }: DataReviewTableListItemProps) {


        const errorFields = Object.keys(record.errors);
        const severity = record.errors[errorFields[0]].severity;
          // Get the severity for each field
  const getFieldSeverity = (field: string) => {
    return record.errors[field] ? record.errors[field].severity : null;
  };

        return (
            <tr>
      <td className={applySeverityClass(getFieldSeverity("id"))}>{record.id}</td>
      <td className={applySeverityClass(getFieldSeverity("name"))}>{record.name}</td>
      <td className={applySeverityClass(getFieldSeverity("email"))}>{record.email}</td>
      <td className={applySeverityClass(getFieldSeverity("street"))}>{record.street}</td>
      <td className={applySeverityClass(getFieldSeverity("city"))}>{record.city}</td>
      <td className={applySeverityClass(getFieldSeverity("zipcode"))}>{record.zipcode}</td>
      <td className={applySeverityClass(getFieldSeverity("phone"))}>{record.phone}</td>
      <td className={applySeverityClass(getFieldSeverity("status"))}>{record.status}</td>
      <td className={applySeverityClass(severity)}>{errorFields.join(", ")}</td>
            </tr>
        );
};