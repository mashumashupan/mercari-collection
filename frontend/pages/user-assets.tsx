import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";
import Image from 'next/image';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// import from ItemProducts
import { ItemNC1, ItemNC2, ItemNC3, ItemNC4, ItemNC5, ItemNC6 } from "@/components/items/ItemProducts";

function Index() {
  return (
    <Layout title="home">
      <div>
        {/* 総資産推移 */}
        <div> 推定総資産</div>
        <Image
          src="/images/資産総額推移.png" // Replace with the actual image source
          className="object-contain h-48 w-48 j"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        {/* 期間選択ボタン */}
        <div>月間</div>
        <div>年間</div>
        <div>全期間</div>
      </div>
      {/* 人気カテゴリー */}
      <div>1位 乃木坂</div>
      <div>+ 300 %</div>
      <div>2位 ポケカ</div>
      <div>+ 120 %</div>
      {/* アイテム縦一覧 */}
      <div> 人気コレクション</div>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide key="1">
          <Item item={ItemNC1} showPrice={true} />
        </SwiperSlide>
        <SwiperSlide key="1">
          <Item item={ItemNC2} showPrice={true} />
        </SwiperSlide>
        <SwiperSlide key="1">
          <Item item={ItemNC3} showPrice={true} />
        </SwiperSlide>
        <SwiperSlide key="1">
          <Item item={ItemNC4} showPrice={true} />
        </SwiperSlide>
        <SwiperSlide key="1">
          <Item item={ItemNC5} showPrice={true} />
        </SwiperSlide>
        <SwiperSlide key="1">
          <Item item={ItemNC6} showPrice={true} />
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
}
