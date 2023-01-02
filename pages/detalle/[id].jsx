import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const detalle = () => {
  const router = useRouter();
  const [currentAvo, setCurrentAvo] = useState({});
  useEffect(() => {
    const { id } = router.query;
    axios.get(`/api/avo/${id}`).then(({ data }) => setCurrentAvo(data));
  }, []);
  return (
    <>
      <h1>{currentAvo?.name}</h1>
    </>
  );
};

export default detalle;
