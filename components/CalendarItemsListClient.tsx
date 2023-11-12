import { debug } from "console";

const CalendarItemsListClient = ({ events }: { events: any[] }) => {

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    let hours = dateObj.getHours() + 7;
    let minutes = dateObj.getMinutes();

    //add leading zero
    let minutesString = minutes < 10 ? '0' + minutes as string : minutes as unknown as string;

    let tag = hours >= 12 ? 'PM' : 'AM';

    //convert to 12 hour format
    hours = hours > 12 ? hours - 12 : hours;

    return `${hours}:${minutesString} ${tag}`;
  }

  return (
    <div className="custom-shadow rounded-md my-2 p-2 ">
      {events.map((event) => (
        console.log(event),
        <div key={event.id} className="border-b-2 border-gray-200 last:border-b-0 flex py-3 justify-between">
          <div className={`w-14 h-14 rounded-lg p-1`} style={{ backgroundColor: "#" + event.colour }}>


          </div>
          <p className="font-normal flex-grow p-2">{event.summary}</p>
          <div className="h-14 flex justify-around flex-col">
            <p className="font-normal h-5 rounded-full py-0.5 px-2 text-xs text-white text-center" style={{ backgroundColor: "#" + event.colour }}>{formatDate(event.start_datetime)}</p>
            <p className="font-normal h-5 rounded-full py-0.5 px-2 text-xs text-white text-center" style={{ backgroundColor: "#" + event.colour }}>{formatDate(event.end_datetime)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CalendarItemsListClient };
