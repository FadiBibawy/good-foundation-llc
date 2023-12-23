import image1 from "../images/1.jpeg";
import image2 from "../images/2.jpeg";
import image3 from "../images/3.jpeg";
import image4 from "../images/4.jpeg";
import image5 from "../images/5.jpeg";
import image6 from "../images/6.jpeg";
import image7 from "../images/7.jpeg";
import image8 from "../images/8.jpeg";
import image9 from "../images/9.jpeg";
import image10 from "../images/10.jpeg";
import image11 from "../images/11.jpeg";
import image12 from "../images/12.jpeg";
import image13 from "../images/13.jpeg";
import image14 from "../images/14.jpeg";
import image15 from "../images/15.jpeg";
import image16 from "../images/16.jpeg";
import image17 from "../images/17.jpeg";
import image18 from "../images/18.jpeg";
import image19 from "../images/19.jpeg";
import image20 from "../images/20.jpeg";
import image21 from "../images/21.jpeg";
import image22 from "../images/22.jpeg";
import image23 from "../images/23.jpeg";
import image24 from "../images/24.jpeg";
import image25 from "../images/25.jpeg";
import image26 from "../images/26.jpeg";
import image27 from "../images/27.jpeg";

export const images = [image1, image2, image3, image4, image5, image6, image7];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
