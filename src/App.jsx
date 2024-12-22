import React from "react";

function App() {
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
      isEnabled: false,
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
                return <div className="col-lg-4" key={i}>
                    <div className="card mb-5 mb-lg-0">
                      <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">
                          {plan.plan}
                        </h5>
                        <h6 className="card-price text-center">
                          ${plan.price}
                          <span className="period">/month</span>
                        </h6>
                        <hr />
                        <ul className="fa-ul">
                          {
                            plan.features.map((feature,i) => {
                              return <li className={feature.isEnabled ? "" : "text-muted"} key={i}>
                                  <span className="fa-li">
                                    <i className={ feature.isEnabled ? "fas fa-check": "fas fa-times"}></i>
                                  </span>
                                  {feature.isBold ? <b>{feature.feature}</b> : feature.feature}
                                </li>
                          })}
                        </ul>
                        <div className="d-grid">
                          <a href="#" className="btn btn-primary text-uppercase">
                            Button
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
