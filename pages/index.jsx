import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { itemChildren, container } from "@util/animations";

export default function Home({ avos }) {
  return (
    <motion.main>
      <Head>
        <title>Avo - Home</title>
      </Head>
      <h1>Avos</h1>
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        exit={"dismont"}
        className="avos-items grid grid-cols-3 gap-8"
      >
        {avos.map((item) => (
          <Link href={`/detalle/${item.id}`} key={item.id}>
            <motion.article className="card" variants={itemChildren}>
              <img
                src={`/assets/${item.image}`}
                className="w-full h-60 object-cover "
                alt=""
              />
              <div className="card__body">
                <div className="card__stars">
                  <FontAwesomeIcon
                    icon={faStar}
                    color={"#f1c40f"}
                    size={"xs"}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color={"#616161"}
                    size={"xs"}
                  />
                </div>
                <span className="card__sku">SKU: {item.sku}</span>
                <h1 className="card__title">{item.name}</h1>
                <span className="card__price">s/. {item.price}</span>
                <p className="card__description">
                  {item.attributes.description
                    .split(" ")
                    .splice(0, 15)
                    .join(" ")}
                </p>
              </div>
            </motion.article>
          </Link>
        ))}
      </motion.section>
    </motion.main>
  );
}
Home.getInitialProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/avo");
  const json = await res.json();
  return { avos: json };
};
