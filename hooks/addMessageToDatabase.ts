import supabase from "@/components/SupabaseClient";

const addMessageToDatabase = async (message: string) => {
  try {
    const { data, error } = await supabase.from("messages").insert([message]);
    if (error) {
      console.error(error);
      throw error;
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default addMessageToDatabase;
