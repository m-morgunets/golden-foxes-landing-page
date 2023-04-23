import ScrollAnimation from "react-animate-on-scroll";
import "./Materials.scss";
import MaterialsItem from "./MaterialsItem/MaterialsItem";

const Materials = (props) => {
  let preciousMetalsInfo = [
    {
      title: "palladium",
      test: "850",
      img: "materials--01.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "0.5%",
        },
        {
          name: "Belly",
          percent: "0.8%",
        },
      ],
    },
    {
      title: "black gold",
      test: "750",
      img: "materials--02.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "0.7%",
        },
        {
          name: "Belly",
          percent: "1.1%",
        },
      ],
    },
    {
      title: "white gold",
      test: "750",
      img: "materials--03.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "0.8%",
        },
        {
          name: "Belly",
          percent: "1.3%",
        },
      ],
    },
    {
      title: "basic gold",
      test: "750",
      img: "materials--04.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "0.8%",
        },
        {
          name: "Belly",
          percent: "1.3%",
        },
      ],
    },
    {
      title: "green gold",
      test: "750",
      img: "materials--05.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "0.8%",
        },
        {
          name: "Belly",
          percent: "1.3%",
        },
      ],
    },
    {
      title: "pink gold",
      test: "750",
      img: "materials--06.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "0.8%",
        },
        {
          name: "Belly",
          percent: "1.3%",
        },
      ],
    },
    {
      title: "platinum",
      test: "950",
      img: "materials--07.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "1.5%",
        },
        {
          name: "Belly",
          percent: "3%",
        },
      ],
    },
    {
      title: "silver",
      test: "925",
      img: "materials--08.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "4%",
        },
        {
          name: "Belly",
          percent: "9%",
        },
      ],
    },
  ];

  let basicMetalsInfo = [
    {
      title: "copper",
      img: "materials--09.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "9%",
        },
        {
          name: "Belly",
          percent: "14%",
        },
      ],
    },
    {
      title: "brass",
      img: "materials--10.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "9%",
        },
        {
          name: "Belly",
          percent: "15%",
        },
      ],
    },
    {
      title: "bronze",
      img: "materials--11.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "12%",
        },
        {
          name: "Belly",
          percent: "20%",
        },
      ],
    },
    {
      title: "titan",
      img: "materials--12.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "14%",
        },
        {
          name: "Belly",
          percent: "23%",
        },
      ],
    },
  ];

  let stonesInfo = [
    {
      title: "nephritis",
      img: "materials--13.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "4%",
        },
      ],
    },
    {
      title: "lapis lazuli",
      img: "materials--14.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "4%",
        },
      ],
    },
    {
      title: "malachite",
      img: "materials--15.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "5%",
        },
      ],
    },
    {
      title: "carrar marble",
      img: "materials--16.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "5%",
        },
      ],
    },
    {
      title: "black marble",
      img: "materials--17.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "5%",
        },
      ],
    },
    {
      title: "Selinite",
      img: "materials--18.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "5%",
        },
      ],
    },
    {
      title: "hematite",
      img: "materials--19.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "5%",
        },
      ],
    },
    {
      title: "jet stone",
      img: "materials--20.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "5%",
        },
      ],
    },
    {
      title: "porcelain",
      img: "materials--21.jpg",
      chanceData: [
        {
          name: "Body",
          percent: "9%",
        },
      ],
    },
  ];

  let preciousGemsInfo = [
    {
      title: "alexandrite",
      img: "materials--22.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "0.25%",
        },
      ],
    },
    {
      title: "diamond",
      img: "materials--23.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "0.5%",
        },
      ],
    },
    {
      title: "sapphire",
      img: "materials--24.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "0.75%",
        },
      ],
    },
    {
      title: "ruby",
      img: "materials--25.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "1%",
        },
      ],
    },
    {
      title: "Emerald",
      img: "materials--26.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "1.5%",
        },
      ],
    },
  ];

  let semiPreciousGemsInfo = [
    {
      title: "green topaz",
      img: "materials--27.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "3%",
        },
      ],
    },
    {
      title: "imperial topaz",
      img: "materials--28.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "3%",
        },
      ],
    },
    {
      title: "pink topaz",
      img: "materials--29.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "4%",
        },
      ],
    },
    {
      title: "Opal",
      img: "materials--30.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "6%",
        },
      ],
    },
    {
      title: "black garnet",
      img: "materials--31.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "6%",
        },
      ],
    },
    {
      title: "garnet",
      img: "materials--32.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "6%",
        },
      ],
    },
    {
      title: "mystical topaz",
      img: "materials--33.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "7%",
        },
      ],
    },
    {
      title: "london topaz",
      img: "materials--34.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "8%",
        },
      ],
    },
    {
      title: "ametrine",
      img: "materials--35.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "8%",
        },
      ],
    },
    {
      title: "Apatite",
      img: "materials--36.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "9%",
        },
      ],
    },
    {
      title: "amethyst",
      img: "materials--37.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "16%",
        },
      ],
    },
    {
      title: "rock-crystal",
      img: "materials--38.jpg",
      chanceData: [
        {
          name: "Gem zones",
          percent: "20%",
        },
      ],
    },
  ];

  let uniqueFeaturesInfo = [
    {
      title: "tail",
      img: "materials--39.jpg",
      chanceData: [
        {
          name: "In NFT",
          percent: "3.87%",
        },
      ],
    },
    {
      title: "front paw",
      img: "materials--40.jpg",
      chanceData: [
        {
          name: "In NFT",
          percent: "35.1%",
        },
      ],
    },
    {
      title: "hind left paw",
      img: "materials--41.jpg",
      chanceData: [
        {
          name: "In NFT",
          percent: "31.2%",
        },
      ],
    },
    {
      title: "hind right paw",
      img: "materials--42.jpg",
      chanceData: [
        {
          name: "In NFT",
          percent: "27.3%",
        },
      ],
    },
  ];

  let preciousMetalsItems = preciousMetalsInfo.map((p) => (
    <MaterialsItem
      img={p.img}
      title={p.title}
      test={p.test}
      chanceData={p.chanceData}
    />
  ));

  let basicMetalsItems = basicMetalsInfo.map((p) => (
    <MaterialsItem img={p.img} title={p.title} chanceData={p.chanceData} />
  ));

  let stonesItems = stonesInfo.map((p) => (
    <MaterialsItem img={p.img} title={p.title} chanceData={p.chanceData} />
  ));

  let preciousGemsItems = preciousGemsInfo.map((p) => (
    <MaterialsItem img={p.img} title={p.title} chanceData={p.chanceData} />
  ));

  let semiPreciousGemsItems = semiPreciousGemsInfo.map((p) => (
    <MaterialsItem img={p.img} title={p.title} chanceData={p.chanceData} />
  ));

  let uniqueFeaturesItems = uniqueFeaturesInfo.map((p) => (
    <MaterialsItem img={p.img} title={p.title} chanceData={p.chanceData} />
  ));

  return (
    <section className="materials">
      <div className="container">
        <div className="materials-inner">
          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="materials__title"
          >
            metals
          </ScrollAnimation>
          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="materials__subtitle"
          >
            precious metals
          </ScrollAnimation>
          <div className="materials-box">{preciousMetalsItems}</div>

          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="materials__subtitle"
          >
            BASIC metals
          </ScrollAnimation>
          <div className="materials-box">{basicMetalsItems}</div>

          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="materials__title"
          >
            stones
          </ScrollAnimation>
          <div className="materials-box">{stonesItems}</div>

          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="materials__title"
          >
            gems
          </ScrollAnimation>
          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="materials__subtitle"
          >
            precious gems
          </ScrollAnimation>
          <div className="materials-box">{preciousGemsItems}</div>

          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="materials__subtitle"
          >
            semi-precious gems
          </ScrollAnimation>
          <div className="materials-box">{semiPreciousGemsItems}</div>

          <ScrollAnimation
            offset={300}
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="materials__title"
          >
            unique features
          </ScrollAnimation>
          <div className="materials-box">{uniqueFeaturesItems}</div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
