import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";
import { useSelector } from "react-redux";
import Image from 'next/image';

export default function Index() {
    const item0 = useSelector((state: any) => state.item.value);
    const item: ItemType = {
      id: 0,
      name: "乃木コレ 賀喜遥香SSR",
      status: "hold",
      url: "/images/乃木コレ1.jpg",
      price: 14000,
    };
    const item2: ItemType = {
      id: 0,
      name: "乃木コレ 齋藤飛鳥SR",
      status: "hold",
      url: "/images/乃木コレ2.jpg",
      price: 7900,
    };
    const item3: ItemType = {
      id: 0,
      name: "乃木コレ 中村麗乃",
      status: "hold",
      url: "/images/乃木コレ3.jpg",
      price: 300,
    };

    return (
        <Layout title="home">
            <div className="p-2">
                <Item item={item0} showPrice={false} />
                <h2 className="text-left font-type font-bold text-black text-2xl semi-bold text-opacity-80 pt-3 px-3" >{item.name}</h2>
                <h2 className="text-left font-type font- text-black text-3xl semi-normal text-opacity-80 pt-1 px-3"> 
                <span className="text-base font-light px-1">¥</span>{item.price}<span className="text-base font-light mx-1">(税込)</span>
                </h2>
            </div>
            <div className="flex w-340 h-10 justify-center text-center bg-blue-100 rounded-lg m-2 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M9.99996 1.96667C8.35179 1.96667 6.74062 2.45541 5.37021 3.37109C3.9998 4.28676 2.9317 5.58825 2.30097 7.11097C1.67024 8.63369 1.50521 10.3092 1.82675 11.9258C2.1483 13.5423 2.94197 15.0271 4.10741 16.1926C5.27284 17.358 6.7577 18.1517 8.37421 18.4732C9.99072 18.7948 11.6663 18.6297 13.189 17.999C14.7117 17.3683 16.0132 16.3002 16.9289 14.9298C17.8446 13.5593 18.3333 11.9482 18.3333 10.3C18.3333 9.20565 18.1177 8.12202 17.699 7.11097C17.2802 6.09992 16.6663 5.18126 15.8925 4.40744C15.1187 3.63362 14.2 3.01979 13.189 2.601C12.1779 2.18221 11.0943 1.96667 9.99996 1.96667ZM9.99996 17.4667C8.58253 17.4667 7.19693 17.0463 6.01838 16.2589C4.83982 15.4714 3.92125 14.3521 3.37883 13.0426C2.8364 11.733 2.69447 10.2921 2.971 8.90185C3.24753 7.51166 3.93009 6.23468 4.93236 5.2324C5.93464 4.23012 7.21162 3.54757 8.60182 3.27104C9.99201 2.99451 11.433 3.13643 12.7425 3.67886C14.0521 4.22129 15.1713 5.13986 15.9588 6.31841C16.7463 7.49697 17.1666 8.88257 17.1666 10.3C17.1644 12.2 16.4087 14.0216 15.0651 15.3652C13.7216 16.7087 11.9 17.4645 9.99996 17.4667Z" fill="#0095EE"/>
                    <path d="M10.9749 6.13333H8.33328C8.14243 6.13332 7.95927 6.20856 7.82355 6.34273C7.68782 6.47689 7.61047 6.65917 7.60828 6.85V13.6333C7.60828 13.788 7.66973 13.9364 7.77913 14.0458C7.88853 14.1552 8.0369 14.2167 8.19161 14.2167C8.34632 14.2167 8.49469 14.1552 8.60409 14.0458C8.71349 13.9364 8.77494 13.788 8.77494 13.6333V11.3417H11.0499C11.3788 11.3445 11.7047 11.2798 12.0075 11.1514C12.3103 11.0231 12.5835 10.8338 12.8101 10.5955C13.0367 10.3572 13.2119 10.0748 13.3248 9.76594C13.4378 9.45708 13.486 9.12829 13.4666 8.8C13.4866 8.43486 13.4311 8.06952 13.3035 7.72682C13.1759 7.38413 12.9789 7.07145 12.7249 6.80833C12.2451 6.37481 11.6216 6.13435 10.9749 6.13333ZM11.0666 10.1833H8.79161V7.29167H10.9916C11.3355 7.29596 11.6665 7.42305 11.9249 7.65C12.0651 7.80489 12.1722 7.9868 12.2395 8.18456C12.3069 8.38231 12.3331 8.59174 12.3166 8.8C12.3369 8.97486 12.3195 9.15204 12.2655 9.31962C12.2116 9.4872 12.1225 9.64129 12.0041 9.77155C11.8856 9.9018 11.7407 10.0052 11.579 10.0748C11.4173 10.1444 11.2426 10.1785 11.0666 10.175V10.1833Z" fill="#0095EE"/>
                </svg>
                <p className="text-black">今ならお持ちのポイントを使うと<b>¥660</b></p>
            </div>
            <div className="flex mb-0">
                <div className="w-20 h-20 px-1 py-2">
                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M12 21.8C11.8212 21.8022 11.6488 21.734 11.52 21.61C10.68 20.8 3.29996 13.8 2.33996 11.21C2.08747 10.5356 1.97244 9.8174 2.00163 9.09783C2.03083 8.37825 2.20366 7.67179 2.50996 7.02C2.82405 6.34948 3.2689 5.74844 3.8184 5.25217C4.36791 4.75589 5.01101 4.37438 5.70996 4.13C6.8116 3.73602 8.00837 3.69373 9.13506 4.00899C10.2617 4.32425 11.2628 4.9815 12 5.89C12.7381 4.98269 13.7391 4.32632 14.8655 4.01116C15.9918 3.69599 17.1882 3.73751 18.29 4.13C18.9889 4.37438 19.632 4.75589 20.1815 5.25217C20.731 5.74844 21.1759 6.34948 21.49 7.02C21.7963 7.67179 21.9691 8.37825 21.9983 9.09783C22.0275 9.8174 21.9125 10.5356 21.66 11.21C20.66 13.79 13.32 20.82 12.48 21.61C12.3512 21.734 12.1787 21.8022 12 21.8ZM7.60996 5.2C7.12237 5.19929 6.6384 5.2839 6.17996 5.45C5.65536 5.6304 5.17248 5.91463 4.76013 6.28574C4.34778 6.65685 4.01443 7.10723 3.77996 7.61C3.55317 8.09407 3.42569 8.61869 3.40508 9.15285C3.38447 9.68702 3.47114 10.2199 3.65996 10.72C4.31996 12.53 9.51996 17.72 12 20.13C14.48 17.75 19.68 12.53 20.34 10.72C20.5288 10.2199 20.6155 9.68702 20.5948 9.15285C20.5742 8.61869 20.4468 8.09407 20.22 7.61C19.9855 7.10723 19.6521 6.65685 19.2398 6.28574C18.8275 5.91463 18.3446 5.6304 17.82 5.45C16.8578 5.09917 15.8012 5.10842 14.8454 5.47606C13.8895 5.84369 13.099 6.54486 12.62 7.45C12.5544 7.55542 12.4631 7.64239 12.3546 7.70269C12.2462 7.763 12.1241 7.79465 12 7.79465C11.8758 7.79465 11.7538 7.763 11.6453 7.70269C11.5368 7.64239 11.4455 7.55542 11.38 7.45C11.0168 6.76661 10.4734 6.19567 9.80886 5.79905C9.1443 5.40243 8.38387 5.19526 7.60996 5.2Z" fill="#333333"/>
                    </svg>
                    <p className="text-black text-center">54</p>
                </div>
                <div className="w-20 h-20 px-1 py-2">
                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M14.0801 21.8C13.9746 21.8016 13.8702 21.779 13.7749 21.7339C13.6795 21.6888 13.5958 21.6225 13.5301 21.54L10.6101 17.89H5.50006C5.16781 17.8861 4.83958 17.8168 4.53412 17.686C4.22867 17.5552 3.95196 17.3655 3.71981 17.1278C3.48766 16.8901 3.30461 16.609 3.18111 16.3005C3.05762 15.992 2.99609 15.6623 3.00006 15.33V6.33C3.00001 5.66417 3.26244 5.02516 3.73044 4.55155C4.19844 4.07793 4.83427 3.8079 5.50006 3.8H18.5001C18.8332 3.80391 19.1622 3.87356 19.4683 4.00497C19.7744 4.13637 20.0516 4.32693 20.2839 4.56572C20.5162 4.8045 20.699 5.08681 20.8219 5.39644C20.9448 5.70607 21.0053 6.03692 21.0001 6.37V15.37C21.0081 16.0393 20.7505 16.6845 20.2838 17.1643C19.8171 17.6441 19.1793 17.9195 18.5101 17.93H14.7801V21.1C14.7798 21.2452 14.7345 21.3867 14.6503 21.5049C14.566 21.6232 14.4472 21.7123 14.3101 21.76C14.2364 21.7869 14.1585 21.8004 14.0801 21.8ZM5.50006 5.21C5.20209 5.22045 4.92032 5.34823 4.71615 5.56551C4.51198 5.78279 4.40196 6.07196 4.41006 6.37V15.37C4.41245 15.6612 4.52714 15.9402 4.73022 16.1488C4.93329 16.3575 5.20907 16.4797 5.50006 16.49H11.0001C11.1062 16.4904 11.2109 16.5149 11.3062 16.5616C11.4015 16.6084 11.4849 16.6762 11.5501 16.76L13.4301 19.1V17.19C13.4301 17.0044 13.5038 16.8263 13.6351 16.695C13.7664 16.5638 13.9444 16.49 14.1301 16.49H18.5801C18.878 16.4796 19.1598 16.3518 19.364 16.1345C19.5681 15.9172 19.6782 15.628 19.6701 15.33V6.33C19.6782 6.03196 19.5681 5.74279 19.364 5.52551C19.1598 5.30823 18.878 5.18045 18.5801 5.17L5.50006 5.21Z" fill="#333333"/>
                    </svg>
                    <p className="text-black text-center">10</p>
                </div>
                <svg className="absolute right-0 mt-3 mx-4" xmlns="http://www.w3.org/2000/svg" width="40" height="42" viewBox="0 0 32 33" fill="none">
                    <path d="M16 10.4333C17.0309 10.4333 17.8666 9.5976 17.8666 8.56667C17.8666 7.53574 17.0309 6.7 16 6.7C14.969 6.7 14.1333 7.53574 14.1333 8.56667C14.1333 9.5976 14.969 10.4333 16 10.4333Z" fill="#333333"/>
                    <path d="M16 26.7C17.0309 26.7 17.8666 25.8643 17.8666 24.8333C17.8666 23.8024 17.0309 22.9667 16 22.9667C14.969 22.9667 14.1333 23.8024 14.1333 24.8333C14.1333 25.8643 14.969 26.7 16 26.7Z" fill="#333333"/>
                    <path d="M16 18.5667C17.0309 18.5667 17.8666 17.7309 17.8666 16.7C17.8666 15.6691 17.0309 14.8333 16 14.8333C14.969 14.8333 14.1333 15.6691 14.1333 16.7C14.1333 17.7309 14.969 18.5667 16 18.5667Z" fill="#333333"/>
                </svg>
            </div>
            <div className="flex w-340 h-10 justify-center text-center bg-slate-100 rounded-lg m-2 pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12" fill="none">
                    <path d="M7.66005 1.94C7.58862 1.93938 7.51817 1.95657 7.45505 1.99L3.92505 3.78C3.67222 3.91401 3.39116 3.98599 3.10505 3.99H2.60505C2.26024 4.01031 1.93535 4.15826 1.69368 4.40503C1.452 4.65179 1.31086 4.9797 1.29775 5.32485C1.28465 5.67 1.40051 6.00767 1.62278 6.27206C1.84504 6.53644 2.15778 6.70861 2.50005 6.755V9.89C2.49418 9.93845 2.49866 9.9876 2.5132 10.0342C2.52773 10.0808 2.55198 10.1238 2.58435 10.1603C2.61672 10.1968 2.65648 10.2261 2.70098 10.2461C2.74549 10.2661 2.79374 10.2765 2.84255 10.2765C2.89135 10.2765 2.9396 10.2661 2.98411 10.2461C3.02862 10.2261 3.06837 10.1968 3.10074 10.1603C3.13311 10.1238 3.15736 10.0808 3.1719 10.0342C3.18643 9.9876 3.19091 9.93845 3.18505 9.89V6.78C3.44424 6.79425 3.69701 6.86599 3.92505 6.99L7.45505 8.78C7.51817 8.81344 7.58862 8.83062 7.66005 8.83C7.72046 8.82935 7.78014 8.8168 7.8357 8.79308C7.89126 8.76936 7.94161 8.73492 7.98386 8.69174C8.02611 8.64856 8.05944 8.59749 8.08195 8.54142C8.10446 8.48536 8.11571 8.42541 8.11505 8.365V2.405C8.11571 2.34459 8.10446 2.28465 8.08195 2.22858C8.05944 2.17252 8.02611 2.12144 7.98386 2.07826C7.94161 2.03508 7.89126 2.00065 7.8357 1.97692C7.78014 1.9532 7.72046 1.94066 7.66005 1.94ZM7.42505 7.94L4.23505 6.34C3.88481 6.16251 3.49769 6.07002 3.10505 6.07H2.60505C2.42072 6.07 2.24395 5.99678 2.11361 5.86644C1.98327 5.7361 1.91005 5.55933 1.91005 5.375C1.91005 5.19068 1.98327 5.0139 2.11361 4.88356C2.24395 4.75323 2.42072 4.68 2.60505 4.68H3.10505C3.49751 4.67851 3.8843 4.5861 4.23505 4.41L7.42505 2.785V7.94Z" fill="#333333"/>
                    <path d="M10.4051 5.02501H9.03005C8.93723 5.02501 8.8482 5.06188 8.78257 5.12752C8.71693 5.19316 8.68005 5.28218 8.68005 5.37501C8.68005 5.46784 8.71693 5.55686 8.78257 5.6225C8.8482 5.68813 8.93723 5.72501 9.03005 5.72501H10.4051C10.4979 5.72501 10.5869 5.68813 10.6525 5.6225C10.7182 5.55686 10.7551 5.46784 10.7551 5.37501C10.7551 5.28218 10.7182 5.19316 10.6525 5.12752C10.5869 5.06188 10.4979 5.02501 10.4051 5.02501Z" fill="#333333"/>
                    <path d="M8.77505 3.425C8.86656 3.42449 8.95433 3.38867 9.02005 3.325L10.0001 2.34C10.0648 2.27289 10.101 2.18327 10.101 2.09C10.101 1.99674 10.0648 1.90711 10.0001 1.84C9.96821 1.80546 9.92956 1.77789 9.88653 1.75903C9.8435 1.74017 9.79703 1.73044 9.75005 1.73044C9.70307 1.73044 9.6566 1.74017 9.61358 1.75903C9.57055 1.77789 9.53189 1.80546 9.50005 1.84L8.50005 2.84C8.4341 2.90649 8.39709 2.99635 8.39709 3.09C8.39709 3.18366 8.4341 3.27351 8.50005 3.34C8.53742 3.37259 8.58119 3.39699 8.62855 3.41163C8.67592 3.42627 8.72582 3.43082 8.77505 3.425Z" fill="#333333"/>
                    <path d="M9.00005 7.45001C8.96783 7.41612 8.92905 7.38914 8.88607 7.3707C8.84309 7.35227 8.79682 7.34276 8.75005 7.34276C8.70329 7.34276 8.65701 7.35227 8.61404 7.3707C8.57106 7.38914 8.53228 7.41612 8.50005 7.45001C8.4341 7.5165 8.39709 7.60636 8.39709 7.70001C8.39709 7.79366 8.4341 7.88352 8.50005 7.95001L9.50005 8.95001C9.53148 8.98524 9.57 9.01343 9.61308 9.03273C9.65617 9.05204 9.70284 9.06202 9.75005 9.06202C9.79726 9.06202 9.84394 9.05204 9.88703 9.03273C9.93011 9.01343 9.96863 8.98524 10.0001 8.95001C10.066 8.88352 10.103 8.79366 10.103 8.70001C10.103 8.60636 10.066 8.5165 10.0001 8.45001L9.00005 7.45001Z" fill="#333333"/>
                </svg>
                <p className="text-black text-center">希望価格を2名が登録中</p>
            </div>
            <div className="px-1 font-type1 border-l-4 border-mercari-red  text-black text-center">
              <h2 className="text-left font-type font-bold text-black text-2xl normal-bold text-opacity-80 pt-3 px-3">残高<span className="text-xl font-light px-1">(売上金を含む)</span></h2>
              <h2 className="text-left font-type font- text-black text-2xl semi-normal text-opacity-80 pt-1 px-3"> 
              <span className="text-base font-light px-1">¥</span>15,000<span className="text-base font-light mx-1">(税込)</span>
              </h2>
            </div>
            <div className="px-1 font-type1 border-l-4 border-mercari-gray  text-black text-center my-2">
              <h2 className="text-left font-type font-bold text-black text-lg semi-bold text-opacity-80 pt-3 px-3" >取引履歴</h2>
              <h2 className="text-left font-type font- text-black text-2xl semi-normal text-opacity-80 pt-1 px-3"> 
              <span className="text-base font-light px-1">¥</span>750<span className="text-base font-light mx-1">(税込)</span>
              </h2>
            </div>
            <p className="mt-5 px-2 font-type1 text-black font-semibold first-letter text-left border-b-2 ">類似商品</ p>
                <div className="grid grid-cols-3 gap-4 p-2">
                <Item item={item} showPrice={true} />
                <Item item={item2} showPrice={true} />
                <Item item={item3} showPrice={true} />
            </div>
            <div className="my-20">
            </div>
            <div className="flex items-center justify-center">
              <button
                  className="fixed h-42 bottom-2 left-2 right-2 cursor-pointer mx-auto bg-mercari-red text-white text-light px-4 py-2 rounded-md"
                  onClick={() => {
                  // Handle search button click
                  }}
              >
                  出品する
              </button>
            </div>
        </Layout>
    );
}
