import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo
            ipsa eum, voluptatibus in adipisci vel expedita voluptas dignissimos
            repudiandae molestias impedit earum temporibus deleniti fugit autem,
            aperiam reprehenderit! Obcaecati! Ea exercitationem facilis, nisi
            sunt ducimus iure unde ipsam. Quaerat, sequi. Modi quae sint
            veritatis illo praesentium rem a blanditiis. Totam expedita
            <br />
            <br />
            reprehenderit molestias quidem aspernatur vel officia libero aperiam
            nobis minus, nam autem dolorem dolore sequi eius fuga! Veritatis,
            minus! Cumque magni, quo laudantium placeat sed saepe deserunt hic
            nobis assumenda soluta, tempora est. Praesentium.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.imgTitle}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolorem asperiores, ullam iste. Ipsam eveniet quasi neque cumque
            temporibus enim harum officia. Accusamus veniam quidem quisquam
            obcaecati. Expedita suscipit nihil aliquam ullam, sit alias non
            doloribus incidunt impedit earum sint quasi ab maxime.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url='/contact' text='Contact'/>
        </div>
      </div>
    </div>
  );
};

export default About;
