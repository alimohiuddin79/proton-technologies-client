export function formatDate (date: string) {
    const dateObject = new Date(date);
    const formattedDate = dateObject.toLocaleDateString('en-US', {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    });

    return formattedDate;
}