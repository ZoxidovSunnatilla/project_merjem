import React, { useState } from 'react';
import "./Home.css"
import logo from "../../images/logo.svg"
import logoMobile from "../../images/logoMobile.svg"

import aboutImg from "../../images/aboutImg.svg"
import aboutLink from "../../images/aboutIcon.svg"
import aboutMobile from "../../images/aboutMobile.svg"
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import TabsProduct from './OurProducts';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import emailjs from 'emailjs-com';
import contactphone from "../../images/contactPhone.svg"
import contactEmail from "../../images/contactEmail.svg"
import contactLocation from "../../images/contactLocation.svg"
import LogoFooter from "../../images/logoFooter.svg"
import instagram from "../../images/instagram.svg"
import telegram from "../../images/telegram.svg"
import facebook from "../../images/facebook.svg"
import instagramMobile from "../../images/instagramMobile.svg"
import telegramMobile from "../../images/telegramMobile.svg"
import facebookMobile from "../../images/facebookMobile.svg"
import footerIcon from "../../images/footerIcon.svg"
import topIcon from "../../images/topIcon.svg"
import rightIcon from "../../images/iconRight.svg"
import Flag from 'react-world-flags';
import styled from 'styled-components';
import { Modal, Drawer } from 'antd';
const productData = [
    {
        category: {
            title: { en: "Nuts", ru: "Орехи", uz: "Yong'oqlar" },
            image: "../../images/nuts/nutsImg.svg",
            subTitle: {
                en: "Uzbekistan holds a leading position in the cultivation of various nuts. The country produces a wide assortment of products, including walnuts, almonds, beans, chickpeas, raisins, and many others. One of the key attributes of Uzbek products is their richness in vitamins, minerals, and antioxidants, making them not only delicious but also beneficial for health.",
                ru: "Узбекистан занимает ведущую позицию в выращивании различных орехов. Страна производит широкий ассортимент продукции, включая грецкие орехи, миндаль, бобы, нут, изюм и многое другое. Одним из ключевых качеств узбекских продуктов является их богатство витаминами, минералами и антиоксидантами, что делает их не только вкусными, но и полезными для здоровья.",
                uz: "O‘zbekiston turli xil yong‘oqlar yetishtirishda yetakchi o‘rinni egallaydi. Mamlakatda yong‘oq, bodom, loviya, no‘xat, mayiz va boshqa ko‘plab mahsulotlarning keng assortimentini ishlab chiqaradi. O‘zbek mahsulotlarining asosiy xususiyatlaridan biri ularning vitaminlar, minerallar va antioksidantlarga boyligi bo‘lib, ularni nafaqat mazali, balki sog‘liq uchun ham foydali qiladi."
            }
        },
        products: [
            { id: 1, name: { en: "Peanut", ru: "Арахис", uz: "Yer yong'oq" }, type: { en: "", ru: "", uz: "" }, images: "/images/nuts/img1.svg" },
            { id: 2, name: { en: "Apricot nuts", ru: "Абрикосовые орехи", uz: "O'rik yong'og'i" }, type: { en: "", ru: "", uz: "" }, images: "../../images/nuts/img2.svg" },
            { id: 3, name: { en: "Walnuts", ru: "Грецкие орехи", uz: "Yong‘oq" }, type: { en: "", ru: "", uz: "" }, images: "../../images/nuts/img3.svg" },
            { id: 4, name: { en: "Gabon Nuts", ru: "Орехи Габон", uz: "Gabon yong'og'i" }, type: { en: "", ru: "", uz: "" }, images: "../../images/nuts/img4.svg" },
            { id: 5, name: { en: "Pistachio", ru: "Фисташки", uz: "Pista" }, type: { en: "", ru: "", uz: "" }, images: "../../images/nuts/img5.svg" },
            { id: 6, name: { en: "Cashew Nuts", ru: "Кешью", uz: "Keshyu" }, type: { en: "", ru: "", uz: "" }, images: "../../images/nuts/img6.svg" },
            { id: 7, name: { en: "Almonds", ru: "Миндаль", uz: "Bodom" }, type: { en: "", ru: "", uz: "" }, images: "../../images/nuts/img7.svg" },
            { id: 8, name: { en: "Sunflower seeds", ru: "Семена подсолнечника", uz: "Kungaboqar urug‘i" }, type: { en: "seeds", ru: "семена", uz: "urug‘i" }, images: "../../images/nuts/img8.svg" }
        ]
    },
    {
        category: {
            title: { en: "Dry", ru: "Сухофрукты", uz: "Quruq mevalar" },
            image: "../../images/dry/dryImg.svg",
            subTitle: {
                en: "Nuts, dried fruits, and legumes from Uzbekistan are unique and valuable products in the global market. Their high quality, environmentally friendly production, and rich flavors make them sought after by consumers, and they represent opportunities for export development.",
                ru: "Орехи, сухофрукты и бобовые из Узбекистана - это уникальные и ценные продукты на мировом рынке. Их высокое качество, экологически чистое производство и богатый вкус делают их востребованными у потребителей и открывают возможности для развития экспорта.",
                uz: "O‘zbekiston yong‘oq, quruq meva va dukkakli mahsulotlari global bozorda noyob va qimmatbaho mahsulot hisoblanadi. Ularning yuqori sifati, ekologik toza ishlab chiqarilishi va boy ta’mi iste’molchilar uchun qadrli bo‘lib, eksport rivojlanishi uchun imkoniyat yaratadi."
            }
        },
        products: [
            { id: 9, name: { en: "Raisins", ru: "Изюм", uz: "Mayiz" }, type: { en: "Red-black", ru: "Красно-черный", uz: "Qizil-qora" }, images: "../../images/dry/img1.svg" },
            { id: 10, name: { en: "Raisins", ru: "Изюм", uz: "Mayiz" }, type: { en: "Golden", ru: "Золотой", uz: "Oltin" }, images: "../../images/dry/img2.svg" },
            { id: 11, name: { en: "Raisins", ru: "Изюм", uz: "Mayiz" }, type: { en: "Sultan-aftabi", ru: "Султан-афтаби", uz: "Sulton-aftabi" }, images: "../../images/dry/img3.svg" },
            { id: 12, name: { en: "Hungary Prunes", ru: "Венгерские черносливы", uz: "Venger olxo‘ri" }, type: { en: "with bones", ru: "с косточкой", uz: "suyakli" }, images: "../../images/dry/img4.svg" },
            { id: 13, name: { en: "Apricots", ru: "Абрикосы", uz: "O'rik" }, type: { en: "Subhan Jambo", ru: "Субхан Джамбо", uz: "Subhan Jambo" }, images: "../../images/dry/img5.svg" },
            { id: 14, name: { en: "Apricots", ru: "Абрикосы", uz: "O'rik" }, type: { en: "Hashtak", ru: "Хаштак", uz: "Hashtak" }, images: "../../images/dry/img6.svg" },
            { id: 15, name: { en: "Apricots", ru: "Абрикосы", uz: "O'rik" }, type: { en: "Kandtak", ru: "Кандтак", uz: "Kandtak" }, images: "../../images/dry/img7.svg" },
            { id: 16, name: { en: "Prunes", ru: "Чернослив", uz: "Qora olxo‘ri" }, type: { en: "can", ru: "консервированный", uz: "quti" }, images: "../../images/dry/img8.svg" }
        ]
    },
    {
        category: {
            title: { en: "Fruits", ru: "Фрукты", uz: "Mevalar" },
            image: "../../images/fruits/fruitsImg.svg",
            subTitle: {
                en: "Export of fruits is the main item of Uzbekistan's foreign trade. With many years of experience in this industry, our country is considered one of the most sought after export countries for fruits and vegetables. Over the years of work in the market, we have gained a lot experience in the supply of watermelons, melons, peaches, apples, grapes, pomegranates and cherries blossoms of various varieties.",
                ru: "Экспорт фруктов является основной статьей внешней торговли Узбекистана. Многолетний опыт в этой отрасли делает нашу страну одной из самых востребованных экспортных стран по фруктам и овощам. За годы работы на рынке мы приобрели большой опыт в поставках арбузов, дынь, персиков, яблок, винограда, гранатов и различных сортов вишни.",
                uz: "Meva eksporti O‘zbekistonning tashqi savdodagi asosiy yo‘nalishi hisoblanadi. Ushbu sohadagi ko‘p yillik tajribamiz tufayli mamlakatimiz meva va sabzavotlar bo‘yicha eng talab yuqori bo‘lgan eksport mamlakatlaridan biri hisoblanadi. Bozorda yillar davomida tarvuz, qovun, shaftoli, olma, uzum, anor va turli xil gilos navlarini yetkazib berishda katta tajriba to‘pladik."
            }
        },
        products: [
            { id: 17, name: { en: "Watermelon", ru: "Арбуз", uz: "Tarvuz" }, type: { en: "Golden", ru: "Золотой", uz: "Oltin" }, images: "../../images/fruits/img6.svg" },
            { id: 18, name: { en: "Melon", ru: "Дыня", uz: "Qovun" }, type: { en: "Kirkma", ru: "Киркма", uz: "Kirkma" }, images: "../../images/fruits/img5.svg" },
            { id: 19, name: { en: "Apple", ru: "Яблоко", uz: "Olma" }, type: { en: "Crimson", ru: "Малиновый", uz: "Qirmizi" }, images: "../../images/fruits/img2.svg" },
            { id: 20, name: { en: "Apple", ru: "Яблоко", uz: "Olma" }, type: { en: "Golden", ru: "Золотой", uz: "Oltin" }, images: "../../images/fruits/img1.svg" },
            { id: 21, name: { en: "Melon", ru: "Дыня", uz: "Qovun" }, type: { en: "Torpedo", ru: "Торпеда", uz: "Torpedo" }, images: "../../images/fruits/img3.svg" },
            { id: 22, name: { en: "Turkmen Melon", ru: "Туркменская дыня", uz: "Turkman qovuni" }, type: { en: "", ru: "", uz: "" }, images: "../../images/fruits/img4.svg" },
            { id: 23, name: { en: "Melon", ru: "Дыня", uz: "Qovun" }, type: { en: "Citrus", ru: "Цитрус", uz: "Tsitrus" }, images: "../../images/fruits/img7.svg" },
            { id: 14, name: { en: "Watermelon", ru: "Арбуз", uz: "Tarvuz" }, type: { en: "Dolma", ru: "Долма", uz: "Dolma" }, images: "../../images/fruits/img8.svg" },

        ]
    },
    {
        category: {
            title: { en: "Vegetables", ru: "Овощи", uz: "Sabzavotlar" },
            image: "../../images/vegetables/vegetablesImg.svg",
            subTitle: {
                en: "Vegetables from Uzbekistan are long and  has a strong place in the world  export market. At the moment we have  entered into a long-term cooperation with The number of countries from the CIS and Europe. We plan to expand  cooperation and invite you to be our partner.",
                ru: "Овощи из Узбекистана имеют давнюю историю и занимают прочное место на мировом экспортном рынке. На данный момент мы заключили долгосрочное сотрудничество с рядом стран СНГ и Европы. Мы планируем расширять сотрудничество и приглашаем Вас стать нашим партнером.",
                uz: "O‘zbekistondan yetishtirilayotgan sabzavotlar uzoq va jahon eksport bozorida mustahkam o‘rin egallagan. Ayni paytda biz MDH va Yevropaning qator davlatlari bilan uzoq muddatli hamkorlikka kirishdik. Biz hamkorlikni kengaytirishni rejalashtirmoqdamiz va sizni hamkorimiz bo'lishga taklif qilamiz."
            }
        },
        products: [
            {
                id: 1,
                name: { "en": "Cucumber", "ru": "Огурец", "uz": "Bodring" },
                type: { "en": "Cruiz", "ru": "Круиз", "uz": "Kruiz" },
                images: "../../images/vegetables/img1.svg"
            },
            {
                id: 2,
                name: { "en": "Cucumber", "ru": "Огурец", "uz": "Bodring" },
                type: { "en": "Grass", "ru": "Трава", "uz": "O't" },
                images: "../../images/vegetables/img2.svg"

            },
            {
                id: 3,
                name: { "en": "Cucumber", "ru": "Огурец", "uz": "Bodring" },
                type: { "en": "Courage", "ru": "Мужество", "uz": "Jasorat" },
                images: "../../images/vegetables/img3.svg"

            },
            {
                id: 4,
                name: { "en": "Tomato", "ru": "Томат", "uz": "Pomidor" },
                type: { "en": "Beginner", "ru": "Начинающий", "uz": "Boshlovchi" },
                images: "../../images/vegetables/img4.svg"

            },
            {
                id: 5,
                name: { "en": "Tomato", "ru": "Томат", "uz": "Pomidor" },
                type: { "en": "Yeg", "ru": "Ег", "uz": "Yeg" },
                images: "../../images/vegetables/img5.svg"

            },
            {
                id: 6,
                name: { "en": "Tomato", "ru": "Томат", "uz": "Pomidor" },
                type: { "en": "Pink", "ru": "Розовый", "uz": "Pushti" },
                images: "../../images/vegetables/img6.svg"

            },
            {
                id: 7,
                name: { "en": "Bellpepper", "ru": "Перец", "uz": "Qalampir" },
                type: { "en": "Dungansky", "ru": "Дунганский", "uz": "Dunganskiy" },
                images: "../../images/vegetables/img7.svg"

            },
            {
                id: 8,
                name: { "en": "Green bell pepper", "ru": "Зеленый перец", "uz": "Yashil qalampir" },
                type: { "en": "Swallow", "ru": "Ласточка", "uz": "Qaldirg'och" },
                images: "../../images/vegetables/img8.svg"

            }
        ]

    },
    {
        category: {
            title: { en: "Greens", ru: "зелень ", uz: "Yashillik or o‘simliklar" },
            image: "../../images/greens/greensImg.svg",
            subTitle: {
                en: "Fresh, juicy greens from Uzbekistan in any season is a reality. Our climate allows us to grow various herbs all year round and to export these products without interruption. If you are interested in the supply of greenery from Uzbekistan. Having all the necessary certificates: phytosanitary, hygienic, certificate of conformity and origin (CT-1), our company has the right to export all agricultural products.",
                ru: "Свежая, сочная зелень из Узбекистана в любое время года — это реальность. Наш климат позволяет нам выращивать различные травы круглый год и экспортировать эти продукты без перерывов. Если вас интересует поставка зелени из Узбекистана, наша компания имеет все необходимые сертификаты: фитосанитарный, гигиенический, сертификат соответствия и происхождения (CT-1), что дает нам право экспортировать все сельскохозяйственные продукты.",
                uz: "O'zbekistondan yilning istalgan faslida yangi, shirasini chiqaradigan o'simliklar haqiqiyatdir. Bizning iqlimimiz turli xil o'simliklarni butun yil davomida o'stirish va bu mahsulotlarni uzluksiz eksport qilish imkonini beradi. Agar siz O'zbekistondan o'simliklar yetkazib berish bilan qiziqsangiz, bizda barcha zarur sertifikatlar mavjud: fitosanitar, gigienik, moslik va kelib chiqishi (CT-1) sertifikatlari, kompaniyamiz barcha qishloq xo'jaligi mahsulotlarini eksport qilish huquqiga ega."
            }
        },
        products: [
            {
                "id": 1,
                "name": {
                    "en": "Spinach",
                    "ru": "Шпинат",
                    "uz": "Ismaloq"
                },
                "type": {
                    "en": "",
                    "ru": "",
                    "uz": ""
                },
                "images": "../../images/greens/img1.svg"
            },
            {
                "id": 2,
                "name": {
                    "en": "Dill",
                    "ru": "Укроп",
                    "uz": "Ukrop"
                },
                "type": {
                    "en": "",
                    "ru": "",
                    "uz": ""
                },
                "images": "../../images/greens/img2.svg"
            },
            {
                "id": 3,
                "name": {
                    "en": "Cilantro",
                    "ru": "Кинза",
                    "uz": "Kashnich"
                },
                "type": {
                    "en": "",
                    "ru": "",
                    "uz": ""
                },
                "images": "../../images/greens/img3.svg"
            },
            {
                "id": 4,
                "name": {
                    "en": "Beetroot Beet",
                    "ru": "Свекольный лист",
                    "uz": "Lavlagi bargi"
                },
                "type": {
                    "en": "Dining",
                    "ru": "Обеденный",
                    "uz": "Tushlik"
                },
                "images": "../../images/greens/img4.svg"
            },
            {
                "id": 5,
                "name": {
                    "en": "Onion",
                    "ru": "Лук",
                    "uz": "Piyoz"
                },
                "type": {
                    "en": "",
                    "ru": "",
                    "uz": ""
                },
                "images": "../../images/greens/img5.svg"
            },
            {
                "id": 6,
                "name": {
                    "en": "Potato",
                    "ru": "Картофель",
                    "uz": "Kartoshka"
                },
                "type": {
                    "en": "",
                    "ru": "",
                    "uz": ""
                },
                "images": "../../images/greens/img6.svg"
            }
        ]

    },
];

const FlagImage = styled(Flag)`
  width: 30px;
  height: 20px;
  margin-right: 8px;
`;

const Home = () => {
    const { t, i18n } = useTranslation();

    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const [isOpen, setIsOpen] = useState(false);
    const [phone, setPhone] = useState("");

    const [activeTab, setActiveTab] = useState(productData[0]);
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handlePhone = (e) => {
        setFormData({ ...formData, phone: e })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_upxaw5n',   // EmailJS servisi orqali olingan service ID
            'template_w7gghws',  // EmailJS servisi orqali olingan template ID
            formData,
            'yrUfuBAf4uw2NEnLG'       // EmailJS servisi orqali olingan user ID
        )
            .then((result) => {
                alert(t("email_success"));
            }, (error) => {
                alert(t("email_error"));
            });
    };
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const languages = [
        { code: 'en', label: 'English' },
        { code: 'uz', label: 'Uzbek' },
        { code: 'ru', label: 'Русский' },
    ];

    const handleLanguageChange = (code) => {
        if (code !== selectedLanguage) { // faqat til o'zgarganda holatni yangilash
            setSelectedLanguage(code);
            i18n.changeLanguage(code);

        }

        setIsOpen(false);
        // Tilni o'zgartirish funksiyasini bu yerda qo'shishingiz mumkin (i18n.changeLanguage(code) kabi)
    };
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div>
            {/* header start */}
            <header>
                <div className="containerMain">
                    <div className="parent">
                        <div className="left">
                            <img src={logo} alt="" />
                        </div>
                        <div className="center">
                            <a href="" className="text_link">{t('home')}</a>
                            <a href="" className="text_link">{t('about_us')}</a>
                            <a href="" className="text_link">{t('products')}</a>
                            <a href="" className="text_link">{t('contact')}</a>
                        </div>
                        <div className="right">
                            <button className='headerBtn' onClick={showModal}>{t("call")}</button>

                            <div style={{ position: 'absolute', width: '150px', right: "15px", top: "-23px" }}>
                                {/* Select Bosish Yuzasi */}
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    style={{
                                        backgroundColor: '#f0f0f0',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >

                                    <span>
                                        {languages.find(lang => lang.code === selectedLanguage)?.label}
                                    </span>
                                    <span>{isOpen ? '▲' : '▼'}</span>
                                </div>

                                {/* Dropdown Tanlov Ro'yxati */}
                                {isOpen && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            width: '100%',
                                            backgroundColor: '#fff',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                            zIndex: 10,
                                            marginTop: '5px',
                                        }}
                                    >
                                        {languages.map((language) => (
                                            <div
                                                key={language.code}
                                                onClick={() => handleLanguageChange(language.code)}
                                                style={{
                                                    padding: '10px',
                                                    cursor: 'pointer',
                                                    backgroundColor: selectedLanguage === language.code ? '#e0e0e0' : '#fff',
                                                }}
                                            >
                                                {language.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <div className="header_mobile">
                <div className="parent">
                    <div className="navbar" onClick={showDrawer}></div>
                    <img src={logoMobile} alt="" />
                    <div style={{ width: '90px', position: "absolute", top: "23px", right: "20px" }}>
                        {/* Select Bosish Yuzasi */}
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >

                            <span>
                                {languages.find(lang => lang.code === selectedLanguage)?.label}
                            </span>
                            <span>{isOpen ? '▲' : '▼'}</span>
                        </div>

                        {/* Dropdown Tanlov Ro'yxati */}
                        {isOpen && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    width: '100%',
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    zIndex: 10,
                                    marginTop: '5px',
                                }}
                            >
                                {languages.map((language) => (
                                    <div
                                        key={language.code}
                                        onClick={() => handleLanguageChange(language.code)}
                                        style={{
                                            padding: '10px',
                                            cursor: 'pointer',
                                            backgroundColor: selectedLanguage === language.code ? '#e0e0e0' : '#fff',
                                        }}
                                    >
                                        {language.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Drawer  onClose={onClose} open={open} placement="left">
                <a href='' className="flex_drawer">
                    <p className="text_one">{t("home")}</p>
                    <img src={rightIcon} alt="" />
                </a>
                <a href='' className="flex_drawer">
                    <p className="text_one">{t("about_us")}</p>
                    <img src={rightIcon} alt="" />
                </a>
                <a href='' className="flex_drawer">
                    <p className="text_one">{t("products")}</p>
                    <img src={rightIcon} alt="" />
                </a>
                <a href='' className="flex_drawer">
                    <p className="text_one">{t("contact")}</p>
                    <img src={rightIcon} alt="" />
                </a>
            </Drawer>
            {/* header end */}
            {/* main start */}
            <div className="main">
                <div className="parent">
                    <p className="text_title">{t("title")}</p>
                    <p className="text_suptitle">{t("subtitle")}</p>
                    <button className='mainBtn' onClick={showModal}>{t("order")}</button>
                </div>
            </div>
            {/* main end */}
            {/* about start */}
            <div className="about">
                <div className="container">
                    <div className="parent">
                        <div className="left">
                            <img src={aboutImg} alt="" />
                        </div>
                        <div className="right">
                            <p className="text_one">{t("know_more")}</p>
                            <p className="text_two">{t("about_us_section")}</p>
                            <p className="text_three">{t("about_us_text")}</p>
                            <a href="" className='aboutLink'>
                                {t("learn_more")}
                                <img src={aboutLink} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_mobile">
                <p className="text_one">{t("know_more")}</p>
                <p className="text_two">{t("about_us_section")}</p>
                <img src={aboutMobile} alt="" className='about_img' />
                <p className="text_three">{t("about_us_text")}</p>
                <a href="" className='aboutLink'>
                    {t("learn_more")}
                    <img src={aboutLink} alt="" />
                </a>
            </div>
            {/* about end */}
            {/* our product start */}
            <div className="ourProducts">
                <div className="container">
                    <p className="text_one">{t("stay_healthy")}</p>
                    <p className="text_two">{t("our_products")}</p>
                    <div className="tabs">
                        {productData.map((item) => (
                            <button
                                key={item.category.title.en}
                                className={activeTab === item ? "active" : "noactive"}
                                onClick={() => setActiveTab(item)}
                            >
                                {item.category.title[selectedLanguage]}
                            </button>
                        ))}
                    </div>
                    <div className="products">
                        <div className="parentCard">
                            {activeTab.products.map((product) => (
                                <div className='cardParent'>
                                    <p className='card_text_one'>{product.name[selectedLanguage]}</p>
                                    {product.type[selectedLanguage] ? (<p className='card_text_two'>{product?.type[selectedLanguage]}</p>) : (<p className='card_text_two'></p>)}
                                    <div className="imgParent">
                                        <img
                                            src={product.images} // replace with the actual path of your raisin image
                                            alt={product?.images}
                                        />
                                    </div>
                                    <div className='btns'>
                                        <button className='moreBtn'>{t("learn_more")}</button>
                                        <button className='orderBtn' onClick={showModal}>{t("order")}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="categoryInfo">
                        <div className="left">
                            <img src={activeTab.category.image} alt={activeTab.category.title[selectedLanguage]} />
                        </div>
                        <div className="right">
                            <p className='text_one'>{activeTab.category.title[selectedLanguage]}</p>
                            <p className='text_two'>{activeTab.category.subTitle[selectedLanguage]}</p>
                        </div>
                    </div>
                    <div className="mobileCategory">
                        <p className='text_one'>{activeTab.category.title[selectedLanguage]}</p>
                        <img src={activeTab.category.image} alt={activeTab.category.title[selectedLanguage]} />
                        <p className='text_two'>{activeTab.category.subTitle[selectedLanguage]}</p>

                    </div>
                </div>
            </div>
            {/* our product end  */}
            {/* contact start */}
            <div className="contact">
                <div className="container">
                    <div className="parent">
                        <div className="left">
                            <p className="text_one">{t("info")}</p>
                            <div className="flex">
                                <img src={contactphone} alt="phone" />
                                <div className="texts">
                                    <p className="text_two">{t("phone")}</p>
                                    <p className="text_three">+998-90-352-37-77 <br />
                                        +998-93-596-69-07</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img src={contactEmail} alt="email" />
                                <div className="texts">
                                    <p className="text_two">{t("email")}</p>
                                    <p className="text_three">707797707@mail.ru</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img src={contactLocation} alt="location" />
                                <div className="texts">
                                    <p className="text_two">{t("location")}</p>
                                    <p className="text_three">Qoraqamish-2 Street, Olmazar, <br /> District Tashkent 100207</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="rightParent">
                                <p className="text_four">{t("contact_us")}</p>
                                <p className="text_five">{t("drop_a_line")}</p>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" name="name" placeholder={t("your_name")} className='input' value={formData.name} onChange={handleChange} />
                                    <PhoneInput
                                        country={'uz'}
                                        value={phone}
                                        onChange={(phone) => handlePhone(phone)}
                                        inputStyle={{
                                            width: '100%',
                                            border: '1px solid #D3D3D3',
                                            outline: 'none',
                                            borderRadius: '30px',
                                            height: "56px",
                                            background: "transparent",
                                            fontSize: "22px",
                                        }}
                                        buttonStyle={{
                                            borderRadius: '30px 0 0 30px',
                                            background: "transparent",

                                        }}
                                    />
                                    <textarea name="message" placeholder={t("message")} className='textarea' value={formData.message} onChange={handleChange}></textarea>
                                    <div className="formm">
                                        <button type="submit" className='formSubmit'>{t("submit")}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact end */}
            {/* footer start */}
            <footer>
                <div className="container">
                    <div className="parent">
                        <img src={LogoFooter} alt="" />
                        <div className="flex">
                            <a href="">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="">
                                <img src={telegram} alt="" />
                            </a>
                            <a href="">
                                <img src={facebook} alt="" />
                            </a>
                        </div>
                        <div className="parent_links">
                            <a href="">{t("home")}</a>
                            <a href="">{t("about_us")}</a>
                            <a href="">{t("products")}</a>
                            <a href="">{t("contact_us")}</a>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="flex_">
                            <p className="text_one">{t("copyright")} </p>
                            <img src={footerIcon} alt="" />
                            <p className="text_one">MERJEM</p>
                        </div>
                        <a href='/' className="flexBack">
                            <p className="text_two">{t("back_to_top")}</p>
                            <div className="top"><img src={topIcon} alt="" /></div>
                        </a>
                    </div>
                </div>
            </footer>
            <div className="mobile_contact">
                <div className="rightParent">
                    <p className="text_four">{t("contact_us")}</p>
                    <p className="text_five">{t("drop_a_line")}</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder={t("your_name")} className='input' value={formData.name} onChange={handleChange} />
                        <PhoneInput
                            country={'uz'}
                            value={phone}
                            onChange={(phone) => handlePhone(phone)}
                            inputStyle={{
                                width: '100%',
                                border: '1px solid #D3D3D3',
                                outline: 'none',
                                borderRadius: '30px',
                                height: "56px",
                                background: "transparent",
                                fontSize: "22px",
                            }}
                            buttonStyle={{
                                borderRadius: '30px 0 0 30px',
                                background: "transparent",

                            }}
                        />
                        <textarea name="message" placeholder={t("message")} className='textarea' value={formData.message} onChange={handleChange}></textarea>
                        <div className="formm">
                            <button type="submit" className='formSubmit'>{t("submit")}</button>
                        </div>
                    </form>
                </div>
                <div className="info">
                    <div className="div">
                        <a href="">{t("home")}</a>
                        <a href="">{t("about_us")}</a>
                        <a href="">{t("products")}</a>
                        <a href="">{t("contact_us")}</a>
                    </div>
                    <div className="div">
                        <p className="text_two">{t("phone")}</p>
                        <p className="text_three">+998-90-352-37-77 <br />
                            +998-93-596-69-07</p>
                        <p className="text_two">{t("location")}</p>
                        <p className="text_three">Qoraqamish-2 <br /> Street, Olmazar, <br /> District Tashkent <br /> 100207</p>
                    </div>

                </div>
                <div className="flex">
                    <a href="">
                        <img src={instagramMobile} alt="" />
                    </a>
                    <a href="">
                        <img src={telegramMobile} alt="" />
                    </a>
                    <a href="">
                        <img src={facebookMobile} alt="" />
                    </a>
                </div>
                <div className="flexx">
                    <div className="flex_">
                        <p className="text_one">{t("copyright")} </p>
                        <p className="text_one">MERJEM</p>
                    </div>
                    <p className="text_one">2024</p>
                </div>
            </div>
            {/* footer end */}
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
            >
                <div className="rightParent rgf">
                    <p className="text_four">{t("contact_us")}</p>
                    <p className="text_five">{t("drop_a_line")}</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder={t("your_name")} className='input' value={formData.name} onChange={handleChange} />
                        <PhoneInput
                            country={'uz'}
                            value={phone}
                            onChange={(phone) => handlePhone(phone)}
                            inputStyle={{
                                width: '100%',
                                border: '1px solid #D3D3D3',
                                outline: 'none',
                                borderRadius: '30px',
                                height: "56px",
                                background: "transparent",
                                fontSize: "22px",
                            }}
                            buttonStyle={{
                                borderRadius: '30px 0 0 30px',
                                background: "transparent",

                            }}
                        />
                        <textarea name="message" placeholder={t("message")} className='textarea' value={formData.message} onChange={handleChange}></textarea>
                        <div className="formm">
                            <button type="submit" className='formSubmit'>{t("submit")}</button>
                        </div>
                    </form>
                </div>
            </Modal>

        </div>
    );
};


export default Home;
