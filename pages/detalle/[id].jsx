import { motion } from "framer-motion";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { itemChildren, container } from "@util/animations";
import Image from "@components/Image/Image";
import { useRouter } from "next/router";
import { faL } from "@fortawesome/free-solid-svg-icons";

const detalle = () => {
  const router = useRouter();
  const { id } = router.query;

  const [avo, setAvo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const containerFeatures = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeInOut",
        duration: 0.3,
      },
    },
    dismont: {
      opacity: 0,
    },
  };

  const handleIsLoading = () => {
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:3000/api/avo/${id}`);
      const json = await res.json();
      setAvo(json);
    };
    getData();
  }, []);
  return (
    <>
      <Head>
        <title>{avo?.name} - Product</title>
      </Head>
      <motion.article
        className="product"
        variants={container}
        initial={"hidden"}
        animate={"show"}
      >
        <motion.section
          className="product__image relative"
          variants={itemChildren}
        >
          <Image src={`/assets/${avo?.image}`} />
        </motion.section>
        <motion.section
          className="product__features"
          variants={containerFeatures}
          initial={"hidden"}
          animate={"show"}
          exit={"dismont"}
        >
          <motion.span className="product__sku" variants={itemChildren}>
            SKU: {avo?.sku}
          </motion.span>
          <motion.h1 className="product__title" variants={itemChildren}>
            {avo?.name}
          </motion.h1>
          <motion.span
            className="product__stars"
            variants={itemChildren}
          ></motion.span>
          <motion.span className="product__price" variants={itemChildren}>
            s/. {avo?.price}
          </motion.span>
          <motion.p className="product__description" variants={itemChildren}>
            {avo?.attributes?.description}
          </motion.p>
          <motion.div
            className="product__moreFeartures"
            variants={itemChildren}
          >
            <h3 className="moreFeatures__title">Carateristicas adicionales:</h3>
            <table className="table-auto">
              <tbody>
                <tr>
                  <td>Shape</td>
                  <td>Shape</td>
                </tr>
                <tr>
                  <td>hardiness</td>
                  <td>hardiness</td>
                </tr>
                <tr>
                  <td>taste</td>
                  <td>taste</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
          <motion.div className="product__add" variants={itemChildren}>
            <input
              type="number"
              className="add__count"
              max={100}
              defaultValue={1}
              min={0}
            />
            <button className="add__cart" onClick={handleIsLoading}>
              {isLoading ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                >
                  <rect
                    class="spinner_jCIR"
                    x="1"
                    y="6"
                    width="2.8"
                    height="12"
                  />
                  <rect
                    class="spinner_jCIR spinner_upm8"
                    x="5.8"
                    y="6"
                    width="2.8"
                    height="12"
                  />
                  <rect
                    class="spinner_jCIR spinner_2eL5"
                    x="10.6"
                    y="6"
                    width="2.8"
                    height="12"
                  />
                  <rect
                    class="spinner_jCIR spinner_Rp9l"
                    x="15.4"
                    y="6"
                    width="2.8"
                    height="12"
                  />
                  <rect
                    class="spinner_jCIR spinner_dy3W"
                    x="20.2"
                    y="6"
                    width="2.8"
                    height="12"
                  />
                </svg>
              ) : (
                "Agregar"
              )}
            </button>
          </motion.div>
        </motion.section>
      </motion.article>
    </>
  );
};

export default detalle;
