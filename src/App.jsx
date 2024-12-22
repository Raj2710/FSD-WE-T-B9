import React,{useState} from "react";
import Plan from "./components/Plan";
function App() {

  //  stateValue, stateFunction are the values of useState()
  let [data,setData] = useState(0)
  let plans = [
    {
      plan: "FREE",
      price: 0,
      isEnabled: true,
      features: [
        {
          feature: "Single User",
          isEnabled: true,
        },
        {
          feature: "5GB Storage",
          isEnabled: true,
        },
        {
          feature: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          feature: "Community Access",
          isEnabled: true,
        },
        {
          feature: "Unlimited Private Projects",
          isEnabled: false,
        },
        {
          feature: "Dedicated Phone Support",
          isEnabled: false,
        },
        {
          feature: "Free Subdomain",
          isEnabled: false,
        },
        {
          feature: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      plan: "PLUS",
      price: 9,
      isEnabled: true,
      features: [
        {
          feature: "5 Users",
          isEnabled: true,
          isBold: true,
        },
        {
          feature: "50GB Storage",
          isEnabled: true,
        },
        {
          feature: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          feature: "Community Access",
          isEnabled: true,
        },
        {
          feature: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          feature: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          feature: "Free Subdomain",
          isEnabled: true,
        },
        {
          feature: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      plan: "PRO",
      price: 49,
      isEnabled: true,
      features: [
        {
          feature: "Unlimited Users",
          isEnabled: true,
          isBold: true,
        },
        {
          feature: "150GB Storage",
          isEnabled: true,
        },
        {
          feature: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          feature: "Community Access",
          isEnabled: true,
        },
        {
          feature: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          feature: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          feature: "Unlimited Free Subdomain",
          isEnabled: true,
          isBold: true,
        },
        {
          feature: "Monthly Status Reports",
          isEnabled: true,
        },
      ],
    },
  ];

  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {plans
              .filter((e) => e.isEnabled)
              .map((plan, i) => {
                return <Plan key={i} plan={plan} data={data}/>//props - properties
              })}
          </div>
        </div>
      </section>
      <button onClick={()=>{
        setData(data+1)
        console.log(data)
      }}>Click Me!</button>
    </>
  );
}

export default App;
