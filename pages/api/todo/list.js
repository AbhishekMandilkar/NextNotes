import { supabase } from "../../../utils/supabaseClient";

export default async function handler(req, res) {
  let { data: Notes, error } = await supabase.from("Notes").select("*");
  res.status(200).json({ data: Notes, error });
}
