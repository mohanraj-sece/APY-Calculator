import Head from "next/head";
import { useEffect, useState } from "react";
import Input from "../Components/Input.jsx";
import CollapsibleBox from "@/Components/CollapsibleBox.jsx";
import RelatedCalculator from "@/Components/RelatedCalculator.jsx";
import styles from '@/styles/Home.module.css'
import DropdownBox from "@/Components/DropdownBox.jsx";


export default function Home() {

  const [age, setAge] = useState(18);
  const [frequency,setFrequency]=useState(3);
  const [pensionAmount,setPensionAmount]=useState(1000);
  
  const [Investment,setInvestment]=useState(390);
  const [Duration,setDuration]=useState(36);
  const [TotalAmount,setTotalAmount]=useState(10000);

  useEffect(()=>{
    if(frequency==1){
      let monthly=[
        [42,84,126,168,210],
        [46,92,138,183,228],
        [50,100,150,198,248],
        [54,108,162,215,269],
        [59,117,177,234,292],
        [64,127,192,254,318],
        [70,139,208,277,346],
        [76,151,226,301,376],
        [82,164,246,327,409],
        [90,178,268,356,446],
        [97,194,292,388,485],
        [106,212,318,423,529],
        [116,231,347,462,577],
        [126,252,379,504,630],
        [138,276,414,551,689],
        [151,302,453,602,752],
        [165,330,495,659,824],
        [181,362,543,722,902],
        [198,396,594,792,990],
        [218,436,654,870,1087],
        [240,480,720,957,1196],
        [264,528,792,1054,1318]
      ];
      let row=age-18,col=(pensionAmount/1000)-1;

      setInvestment(monthly[row][col]);
      setTotalAmount(12*Investment*Duration);

    }
    else if(frequency==2){
      let quarterly=[
        [125,250,376,501,626],
        [137,274,411,545,679],
        [149,298,447,590,739],
        [161,322,483,641,802],
        [176,349,527,697,870],
        [191,378,572,757,948],
        [209,414,620,826,1031],
        [226,450,674,897,1121],
        [244,489,733,975,1219],
        [268,530,799,1061,1329],
        [289,578,870,1156,1445],
        [316,632,948,1261,1577],
        [346,688,1034,1377,1720],
        [376,751,1129,1502,1878],
        [411,823,1234,1642,2053],
        [450,900,1350,1794,2241],
        [492,983,1475,1964,2456],
        [539,1079,1618,2152,2688],
        [590,1180,1770,2360,2950],
        [650,1299,1949,2593,3239],
        [715,1430,2146,2852,3564],
        [787,1574,2360,3141,3928]
      ];

      let row=age-18,col=(pensionAmount/1000)-1;

      setInvestment(quarterly[row][col]);
      setTotalAmount(3*Investment*Duration);

    }
    else{
      let halfly=[
        [248,496,744,991,1239],
        [271,543,814,1080,1346],
        [295,590,885,1169,1464],
        [319,637,956,1269,1588],
        [348,690,1046,1381,1723],
        [378,749,1133,1499,1877],
        [413,820,1228,1635,2042],
        [449,891,1334,1776,2219],
        [484,968,1452,1930,2414],
        [531,1050,1582,2101,2632],
        [572,1145,1723,2290,2862],
        [626,1251,1877,2496,3122],
        [685,1363,2048,2727,3405],
        [744,1487,2237,2974,3718],
        [814,1629,2443,3252,4066],
        [891,1782,2673,3553,4438],
        [974,1948,2921,3889,4863],
        [1068,2136,3205,4261,5323],
        [1169,2337,3506,4674,5843],
        [1287,2573,3860,5134,6415],
        [1416,2833,4249,5648,7058],
        [1558,3116,4674,6220,7778]
      ];
      let row=age-18,col=(pensionAmount/1000)-1;

      setInvestment(halfly[row][col]);
      setTotalAmount(2*Investment*Duration);

    }

  },[Duration,Investment,pensionAmount,frequency]);


  function calculate() {

    setDuration(60-age);

  }


  return (
    <>
      <Head>
        <title>APY Calculator</title>
        <link rel="icon" href="./logo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;family=Rubik:wght@400;500;600&amp;display=swap"
        />
        <meta name="description" content="APY Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background image */}
      <div
        className={
          "bg-bg_image w-full h-full bg-center bg-cover object-cover fixed"
        }
      />

      <main
        className={
          "relative [@media(max-width:470px)]:p-5 [@media(max-width:1280px)]:p-10 xl:p-20 w-full overflow-x-hidden flex-col justify-between text-neutral-700 font-['poppins']"
        }
      >
        <div>
          {/* Heading */}
          <div
            className={
              "text-zinc-900 text-5xl font-semibold text-center leading-tight [@media(max-width:300px)]:text-3xl"
            }
          >
            <span className={"text-blue-600"}>APY</span>{" "}
            Calculator
          </div>
          {/* Subheading */}
          <p className={"text-neutral-700 mt-3 text-center  [@media(max-width:300px)]:text-sm lg:text-lg"}>
           The Atal Pension Yojana (APY) is a pension scheme launched by the Indian government in 2015. It is a voluntary, contributory pension scheme aimed at providing a guaranteed pension to individuals in the unorganized sector, such as self-employed individuals, small business owners, and agricultural workers, who do not have access to a formal pension system.
          </p>

        </div>

        {/* Calculator and side pannel */}
        <div
          className={
            "xl:flex max-xl:flex-col flex-wrap w-full xl:max-h-[403px]  mt-[50px] [@media(max-width:400px)]:mt-[20px] justify-between"
          }
        >
          {/* Calculator and Answer (WRAPPER) */}
          <div
            className={
              "lg:flex max-md:flex-col p-[30px] xl:w-[75%]  max-lg:space-y-7  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
            }
          >
            {/* Calculator */}
            <div className={"text-left  lg:w-[50%] "}>
              {/* Input box wrapper */}
              <div
                className={
                  "flex-col justify-evenly font-medium  max-sm:space-y-3  xl:space-y-[10px] lg:space-y-[15px]"
                }
              >
                {/* Input box */}
                <div>

                    <div className=" flex flex-row justify-between mb-4">
                      {/*Yearly investment block*/}
                      <div className=" font-medium text-lg mt-1.5">Payment Frequency</div>
                        <div className="w-[39%]">
                          <DropdownBox value={frequency} setValue={setFrequency} />
                        </div>  
                    </div>

               

                    <div>
                      {/*age block*/}
                      <div className=" font-medium text-lg">Desired Monthly Pension</div>
                      <Input
                        id="years"
                        min={1000}
                        max={5000}
                        step={1000}
                        value={pensionAmount}
                        setValue={setPensionAmount}
                      />
                    </div>

                    <div>
                      {/*age block*/}
                      <div className=" font-medium text-lg">Joining age (Years)</div>
                      <Input
                        id="years"
                        min={18}
                        max={39}
                        step={1}
                        value={age}
                        setValue={setAge}
                      />
                    </div>

               </div>

              {/* Control Box Wrapper */}
              <div
                className={
                  "flex flex-warp justify-center mt-[40px] cursor-pointer "
                }
              >
                {/* Control boxes */}
                <div
                  className={
                    " border-[0.1rem] lg:mt-8 sm:mt-4 border-dashed border-[#36b366] p-[4px] rounded-[35px] w-[65%]"
                  }
                >
                  <div
                    className={
                      "text-center text-white font-semibold text-xl rounded-[35px] p-[0.4rem] shadow-lg shadow-[#36b3665d] bg-[#00d382]"
                    }
                    onClick={calculate}
                  >
                    Calculate
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* vertical line */}
            <div
              className={
                " -my-4 mx-5 w-0  max-lg:h-0 max-lg:w-auto max-lg:-mx-2 rounded-[50px] border-2 border-solid border-[#7070701A]"
              }
            > </div> 

                <div className={"lg:w-[50%] self-center"}>

                  

                    <div className={"flex justify-between font-bold "}>

                          <div className={" font-medium text-lg"}>
                            {frequency==1?"Monthly":(frequency==2?"Quarterly":"Half-Yearly")} Investment
                          </div>

                          <div className={"font-semibold text-lg"}>
                                {Investment}
                          </div>

                    </div>

                      <div className={"flex justify-between font-bold my-4"}>
                              <div className=" font-medium text-lg">Investment Duration</div>
                              <div className={"font-semibold  text-lg"}>
                                {Duration.toLocaleString("en-In")} {" "} Years
                              </div>
                      </div>

                      <div className={"flex justify-between font-bold my-4  "}>
                            <div className=" font-medium text-lg">Total Amount</div>
                            <div className={"font-semibold text-lg"}>
                              {TotalAmount.toLocaleString("en-In")}
                            </div>
                      </div>
                  </div>

               

              </div>
            
                   
                    

          {/* Side Pannel */}
          <div
            className={
              "  max-h-[370px]  xl:w-[23%] px-[20px] py-[22px] max-xl:mt-[30px]  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] overflow-y-scroll  "
            }
          >
            <div className={"font-bold "}>How to use this calculator?</div>
            <CollapsibleBox
              heading={"Atal Pension Yojna"}
              content={
                "Atal Pension Yojana (APY) is a government-backed pension scheme in India launched in 2015"
              }
            />
            <CollapsibleBox
              heading={"Find out how much I can earn with APY"}
              content={
               "APY provides an assured pension of your choice from 1000,2000,3000,4000 or 5000 rupees. You can use the FundsIndia APY calculator to find out how much you can earn."
              }
            />
            <CollapsibleBox
              heading={"Maturity"}
              content={
                "APY matures when the depositor attains the age of 60.                "
              }
            />
            <CollapsibleBox
              heading={"Premature withdrawal implications"}
              content={
                <div>
                <div>There are two options.</div>
                <div>a) Exit due to specified illness – Exit before 60 years of age may be permitted only in exceptional circumstances such as due to specified illness of the Subscriber and the accumulated corpus (Subscriber contribution, Government Contribution and the returns thereon) in the Subscriber's account will be returned to the Subscriber.
                </div>
                <div>b) Voluntary exit - In case a Subscriber chooses to voluntarily exit from APY before attaining 60 years of age, he/she will be refunded only the contributions made by him/her to APY alongwith the returns thereon</div>
                </div>
              }
              last={true}
            />

          </div>
        </div>

        {/* FAQ box */}
        <div
          className={
            " px-[25px] py-[10px] mt-[50px] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
          }
        >
          <CollapsibleBox
            heading={"What is APY?"}
            headingBold={true}
            content={"Atal Pension Yojana (APY) is a government-backed pension scheme in India launched in 2015. It aims to provide a regular and guaranteed pension to workers in the unorganized sector who do not have access to any formal retirement scheme. Under the scheme, subscribers can receive a fixed pension amount per month, depending on their contribution amount and age at the time of joining."
            }
          />

          <CollapsibleBox
            heading={"Why should I calculate my APY returns?"}
            headingBold={true}
            content={
              "Calculating the Atal Pension Yojana (APY) can help you understand the amount of pension you may receive under the scheme, based on your contribution and age. By calculating your APY, you can determine the amount you need to contribute regularly to receive the desired pension amount. This can help you plan your finances better and ensure that you have a regular stream of income during your retirement."
            }
          />

          <CollapsibleBox
            heading={"How to use FundsIndia APY Calculator?"}
            headingBold={true}
            content={
              "FundsIndia APY Calculator does not require any technical knowledge to operate. Just plug in your desired monthly pension and your joining age. The calculator then displays how much you have to contribute, tenure and your total corpus at end of maturity."
            }
          />

          <CollapsibleBox
            heading={"When does APY mature?"}
            headingBold={true}
            content={"APY matures when the depositor attains the age of 60."
            }
          />

          <CollapsibleBox
            heading={"Can we choose our preferred amount of pension? "}
            headingBold={true}
            content={
              "Under the scheme, subscribers can receive a fixed minimum pension of Rs. 1000, Rs. 2000, Rs. 3000, Rs. 4000, or Rs. 5000 per month, depending on their contribution amount and age at the time of joining."}
          />

            <CollapsibleBox
            heading={"Who can open an APY account?"}
            headingBold={true}
            content={"An Atal Pension Yojana (APY) account can be opened by any Indian citizen between the ages of 18 and 40 years. The subscriber should have a valid mobile number and savings bank account, which will be linked to the APY account for making contributions and receiving the pension."}
              last={true}
          />
        
        
        </div>

        {/* Related Calculators */}
        <div className={"my-[30px] "}>
          <div className={"font-bold text-lg mb-[14px] text-[#464143]"}>
            Related Calculators
          </div>

          <div className={"overflow-x-scroll flex "}>
            <RelatedCalculator
              name={"SWP Calculator"}
              path={"#"}
              first={true}
            />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />
          </div>
        </div>
      </main>
    </>
  );
}