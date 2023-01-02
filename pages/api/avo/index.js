import Database from "../../../database/conectionDB";

export default function handler(req, res) {
  const newConection = new Database();
  return res.json(newConection.allData());
}
