import React from 'react'

function App() {
  // <></> Fragment is used to group several html elements and avoids unneccessary dom node creation

  let data = [
    {
      title:"Project One",
      image:"https://via.placeholder.com/700x400",
      description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    },
    {
      title:"Project Two",
      image:"https://via.placeholder.com/700x400",
      description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    },
    {
      title:"Project Three",
      image:"https://via.placeholder.com/700x400",
      description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    },
    {
      title:"Project Four",
      image:"https://via.placeholder.com/700x400",
      description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    },
    {
      title:"Project Five",
      image:"https://via.placeholder.com/700x400",
      description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    },
    {
      title:"Project Six",
      image:"https://via.placeholder.com/700x400",
      description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    }
  ]
  return <>
    <div className="container">
      <h1 className="my-4">Page Heading
        <small>Secondary Text</small>
      </h1>
      <div className="row">
            {
              data.map((e)=>{
                  return <>
                  <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="card h-100">
                      <a href="#"><img class="card-img-top" src={e.image} alt=""/></a>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a href="#">{e.title}</a>
                        </h4>
                        <p class="card-text">{e.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              })
            }
      </div>
    </div>
    </>
            
}
export default App

