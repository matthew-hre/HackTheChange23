const CalendarItemsListClient = ({ events }: { events: any[] }) => {
  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();

    //convert 0 to 12
    let tag = hours < 12 ? "AM" : "PM";

    //convert to 12 hour format
    hours =
      dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours();

    return `${hours}:${minutes} ${tag}`;
  };

  return (
    <div className="custom-shadow rounded-md my-2 p-2 ">
      {events.map((event) => (
        <div
          key={event.id}
          className="border-b-2 border-gray-200 last:border-b-0 flex py-3 justify-between"
        >
          <div className="bg-primary w-16 h-16 rounded-lg"></div>
          <p className="font-normal debug-s flex-grow p-2">{event.summary}</p>
          <p className="font-normal">{formatDate(event.start)}</p>
        </div>
      ))}
    </div>
  );
};

export { CalendarItemsListClient };
