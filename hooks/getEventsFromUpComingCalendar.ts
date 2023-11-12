import SupabaseClient from "@/components/SupabaseClient";

export default async function getEventsFromUpComingCalendar() {
	//get todays date
	const today = new Date();

	try {
		const { data, error } = await SupabaseClient.from("calendar_events")
			.select("*")
			.order("start_datetime", { ascending: true })
			.filter("start_datetime", "gt", today.toISOString());
		if (error) {
			console.error(error);
			throw error;
		}


		const filteredData = data.map((event) => {
			return {
				summary: event.summary,
				start: event.start_datetime,
				end: event.end_datetime,
				color: event.colour,
			};
		});

		return filteredData;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
