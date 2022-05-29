import { supabase } from "../../../utils/supabaseClient";

export default async function handler(req, res) {
  let id = req.body.userId;
  console.log("dasdasd");
  let { data: Labels, error } = await supabase
    .from("Notes")
    .select("label")
    .eq("userId", id)
    .neq("label", null);

  res.status(200).json({ data: Labels, error: null });
}
