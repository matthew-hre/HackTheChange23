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
            className={`w-14 h-14 rounded-lg flex justify-center items-center`}
            style={{ backgroundColor: "#" + event.color }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <rect width="36" height="36" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image0_39_894" transform="scale(0.015625)" />
                </pattern>
                <image id="image0_39_894" width="64" height="64" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWklEQVR4nO1a3WsTQRA//EL/Bv2LFAQffPZNwb0W2r4oFO/FYmp2qW3Sh5aye+lHzqbYoH1SbLUFLf1CqeJHxSBifBFJfRIOZWUuuevRXNtLs3u26fxgYLObZGZ+OzM7d6xhIBAIBAJRh6GrQycp4ZSZ4gczhVQplPBfzORP2XV+3teXNsUFmKuuqdVX8yFtWdYJIy6YKdIaDIkQfpsR0ZOELkr43R0dtqzCKUZ4LyX8e/hH5Q+fpfy9GYhbKTUtla/v5eLD57Kv3Q70wHjx0by3pkJHWL68frWdjDI1RQp8DgiAiSjWws6rIsAXIMHXA2PVjoclMiJMkQqHfBkm5wYn5FrOSYQA2G1fj46djyIAfJvLTgSRYIQICL6QFAFhw3Q6v52AsH8GElADRoAZLwXyvQ/qiomTnq4Luf71x7JzuSgH1p94nzcz9+XPG0NyMzsZKwXi6tkue+lpOgWc9HQsw8BxICDzpkZAdrIhAuLqqSNgDz1YA3JYBGVTKZCPyM2oENVRA1To0VIDWIRhOmqACj2YAjmsARI7wRy2wlLpKeAo6ND22wkeiFPAUdCh7bcTxFOggo/DMg4JylIgH8rN3UJfZScYJ8Xi1hqlNcDZxTCVnWBDBGAnWNKbAq6m4qT6f5GACkaA1H4KMI3vBA9sCjgJvRM8sAS4WARLR/sUyGvq0A4NAY6mDu3QEOAe9RRwkYASRoCLKVDCGuAqIgFOkkZOk5Yrgm5C0jAB2Y7qFbZv79Rfk0ta/Gty4FNsAqZ6xuoeelRJpmtUFvqKcmNpNTDy49KqNwdruvSCT7EJWLGrJPiRoEsWpmblQmFWqw7wAXwBn2ITsKZRXo7kZTE1JvvatoyEcTE17q0lYUMUAWWYgEuESRgAAiT4hsA4Kb2RFyXpDldlVcm9dlva3Tn5Ynhrh2G3/fXwzsN37O5R7zc6bWKE3wkIgIvDNRK8SNAlg522XBFbzo7czHnif14Wjhzs0ux41GVp3Ui1DZ+jJn8LBszQ8R3DcyY97hlJCV9i1+yzRiuBEfsSOJfpsKu1JlSVYQxzA7VThxL7otFqKFwuHO9v5/N71wv+zLKsY0YrgnUUzjAiblFTfGJE/PWdpib/w4jYYCbvtq6I0//bTgQCgUAYRwD/AK/IHVeVcvb1AAAAAElFTkSuQmCC" />
              </defs>
            </svg>

          </div>
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
