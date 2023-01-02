import { NextRequest, NextResponse } from "next/server";
import Database from "../../../database/conectionDB";

export default function handler(req = NextRequest, res = NextResponse) {
  const newConection = new Database();
  const { id } = req.query;
  return res.json(newConection.getById(id));
}
