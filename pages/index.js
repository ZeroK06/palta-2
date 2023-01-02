import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import LayoutDefault from "@components/Layouts/LayoutDefault";

export default function Home() {
  const [dataAvo, setDataAvo] = useState([]);
  useEffect(() => {
    axios.get("/api/avo").then(({ data }) => setDataAvo(data));
  }, []);
  return (
    <>
      <h1>Avos</h1>
      <ul>
        {dataAvo.map((item) => (
          <Link href={`/detalle/${item.id}`} key={item.id}>
            <li className="p-6">{item.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <LayoutDefault title={"Avo - Home"}>{page}</LayoutDefault>;
};
