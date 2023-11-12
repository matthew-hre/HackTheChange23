import { debug } from "console";

const CalendarItemsListClient = ({ events, showdate }: { events: any[], showdate: boolean }) => {
  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    let hours = dateObj.getHours() + 7;
    let minutes = dateObj.getMinutes();
    //add leading zero
    let minutesString =
      minutes < 10
        ? (("0" + minutes) as string)
        : (minutes as unknown as string);

    let tag = hours >= 12 ? "PM" : "AM";

    //convert to 12 hour format
    hours = hours > 12 ? hours - 12 : hours;

    return `${hours}:${minutesString} ${tag}`;
  };

  function humanreadableDate(date: Date) {
    // Create a new Date object for the current date and time
    const today = new Date();

    // Array of month names
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the day, month, and year from the date object
    const day = date.getDate(); // Day (1-31)
    const month = months[date.getMonth()]; // Month name
    const year = date.getFullYear(); // Year

    // Format the date as a string in the format "Month DD, YYYY"
    const readableDate = `${month} ${day}, ${year}`;

    // Output the formatted date
    return readableDate;
  }

  return (
    <div className="custom-shadow rounded-md my-2 p-2 ">
      {events.map((event) => (
        <div
          key={event.id}
          className="border-b-2 border-gray-200 last:border-b-0 first:pt-1 last:pb-1 flex py-3 justify-between"
        >
          <div
            className={`w-14 h-14 rounded-lg p-1`}
            style={{ backgroundColor: "#" + event.color }}
          ></div>
          <div className="flex-grow flex flex-col justify-center">

            {showdate ? <p className="font-semibold px-2">{humanreadableDate(new Date(event.start))}</p> : null}
            <p className="font-normal text-sm px-2 truncate text-ellipsis ">{event.summary}</p>
          </div>
          <div className="h-14 flex justify-around flex-col">
            <p
              className="font-normal h-5 rounded-full py-0.5 px-2 text-xs text-white text-center"
              style={{ backgroundColor: "#" + event.color }}
            >
              {formatDate(event.start)}
            </p>
            <p
              className="font-normal h-5 rounded-full py-0.5 px-2 text-xs text-white text-center"
              style={{ backgroundColor: "#" + event.color }}
            >
              {formatDate(event.end)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CalendarItemsListClient };
