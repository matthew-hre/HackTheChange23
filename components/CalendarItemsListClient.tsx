const CalendarItemsListClient = ({ events }: { events: any[] }) => {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.summary}</h2>
        </div>
      ))}
    </div>
  );
};

export { CalendarItemsListClient };
