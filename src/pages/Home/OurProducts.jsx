import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const productData = [

    {
        category: {
            title: { en: "Nuts", ru: "Орехи", uz: "Yong'oqlar" },
            image: "../../images/nuts/nutsImg.svg",
            subTitle: "Uzbekistan holds a leading position in the cultivation of various nuts. The country produces a wide assortment of products, including walnuts, almonds, beans, chickpeas, raisins, and many others. One of the key attributes of Uzbek products is their richness in vitamins, minerals, and antioxidants, making them not only delicious but also beneficial for health."
        },
        producst: [
            { id: 9, name: "Peanut", type: "", images: "../../images/nuts/img1.svg" },
            { id: 10, name: "Apricot nuts", type: "", images: "../../images/nuts/img2.svg" },
            { id: 9, name: "Walnuts ", type: "", images: "../../images/nuts/img3.svg" },
            { id: 10, name: "Gabon Nuts", type: "", images: "../../images/nuts/img4.svg" },
            { id: 9, name: "Pistachio", type: "", images: "../../images/nuts/img5.svg" },
            { id: 10, name: "Cashew Nuts", type: "", images: "../../images/nuts/img6.svg" },
            { id: 9, name: "Almonds", type: "", images: "../../images/nuts/img7.svg" },
            { id: 10, name: "Sunfllower", type: "seeds", images: "../../images/nuts/img8.svg" },
        ]
    },
    {
        category: {
            title: { en: "Dry Fruits", ru: "Сухофрукты", uz: "Quruq mevalar" },
            image: "../../images/dry/dryImg.svg",
            subTitle: "Nuts, dried fruits, and legumes from Uzbekistan are unique and valuable products in the global market. Their high quality, environmentally friendly production, and rich flavors make them sought after by consumers, and they represent opportunities for export development. "
        },
        producst: [
            { id: 9, name: "Raisins", type: "Red-black", images: "../../images/dry/img1.svg" },
            { id: 10, name: "Raisins", type: "Golden", images: "../../images/dry/img2.svg" },
            { id: 9, name: "Raisins", type: "Sultan-aftabi", images: "../../images/dry/img3.svg" },
            { id: 10, name: "Hungary Prunes", type: "with bones", images: "../../images/dry/img4.svg" },
            { id: 9, name: "Apricots", type: "Subhan Jambo", images: "../../images/dry/img5.svg" },
            { id: 10, name: "Apricots", type: "Hashtak", images: "../../images/dry/img6.svg" },
            { id: 9, name: "Apricots", type: "Kandtak", images: "../../images/dry/img7.svg" },
            { id: 10, name: "Prunes", type: "can", images: "../../images/dry/img8.svg" },
        ]
    },
    {
        category: {
            title: "Fruits",
            image: "../../images/fruits/fruitsImg.svg",
            subTitle: "Export of fruits is the main item of Uzbekistan's foreigntrade. With many years of experience in this industry, our country is considered one of the most sought after export countries for fruits and vegetables. Over the years of work in the market, we have gained a lot experience in the supplyof watermelons, melons, peaches, apples, grapes, pomegranates and cherries blossoms of various varieties."
        },
        producst: [
            { id: 9, name: "Raisins", type: "Red-black", images: "../../images/dry/img1.svg" },
            { id: 10, name: "Raisins", type: "Golden", images: "../../images/dry/img2.svg" },
            { id: 9, name: "Raisins", type: "Sultan-aftabi", images: "../../images/dry/img3.svg" },
            { id: 10, name: "Hungary Prunes", type: "with bones", images: "../../images/dry/img4.svg" },
            { id: 9, name: "Apricots", type: "Subhan Jambo", images: "../../images/dry/img5.svg" },
            { id: 10, name: "Apricots", type: "Hashtak", images: "../../images/dry/img6.svg" },
            { id: 9, name: "Apricots", type: "Kandtak", images: "../../images/dry/img7.svg" },
            { id: 10, name: "Prunes", type: "can", images: "../../images/dry/img8.svg" },
        ]
    },
];

const TabsProduct = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language)

   
    
    
    const [activeTab, setActiveTab] = useState("Fruits");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {productData?.map((item) => (
                    <button
                        key={item}
                        onClick={() => console.log(item.category)}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: activeTab === item ? 'green' : 'lightgray',
                            color: activeTab === item ? 'white' : 'black',
                            borderRadius: '20px',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {item.category.title.en}
                    </button>
                ))}
            </div>

            {/* <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {productData[activeTab].producst?.map((product) => (
                    <div key={product.id} style={{
                        width: '150px',
                        border: '1px solid lightgray',
                        borderRadius: '10px',
                        padding: '10px',
                        textAlign: 'center'
                    }}>
                        <img src={`https://via.placeholder.com/100?text=${product.name}`} alt={product.name} style={{ borderRadius: '10px' }} />
                        <h4>{product.name}</h4>
                        <p>{product.type}</p>
                        <button style={{ backgroundColor: 'orange', color: 'white', borderRadius: '5px', padding: '5px 10px', border: 'none' }}>Learn more</button>
                        <button style={{ backgroundColor: 'yellow', borderRadius: '5px', padding: '5px 10px', border: 'none', marginTop: '5px' }}>Order</button>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default TabsProduct;
