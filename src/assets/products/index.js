import shoe1Img from "./shoe1.png";
import shoe2Img from "./shoe2.png";
import shoe3Img from "./shoe3.png";
import shoe4Img from "./shoe4.png";
import shoe5Img from "./shoe5.png";
import shoe6Img from "./shoe6.png";

const shoes = [
    {
        id: 1,
        name: "Nike Air Zoom Pegasus 37",
        price: 120,
        image: shoe1Img,
    },
    {
        id: 2,
        name: "Adidas Ultraboost 18",
        price: 100,
        image: shoe2Img,
    },
    {
        id: 3,
        name: "Puma Revolution 10",
        price: 90,
        image: shoe3Img,
    }, {
        id: 4,
        name: "Converse All Star 19",
        price: 110,
        image: shoe4Img,
    },
    {
        id: 5,
        name: "Skechers Predator 7",
        price: 150,
        image: shoe5Img,
    },
    {
        id: 6,
        name: "Reebok Classic 12",
        price: 130,
        image: shoe6Img,
    }
  
];


export {
    shoes  // export the array of shoes as a named export.  This allows us to import it in other files using `import { shoes } from './shoes'`
}
