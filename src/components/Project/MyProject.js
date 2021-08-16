import React,{useState} from 'react'
import project1 from "../../img/calculator.PNG";
import project2 from "../../img/notodolist.PNG";
import "./Project.style.css"
const MyProject = () => {
  const [show, setShow] = useState(false);
  const [expand, setExpand] = useState(false);
  const [hide, setHide] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  const handleEnpand = () => setExpand(!expand);
  const handleHide = () => setHide(!hide);
  
    return (
        <section class="projects" id="projects">
      <div class="max-width">
        <h2 class="title">My Project</h2>
        <div class="serv-content">
          <div class="card">
            <div class="box img1">
             {/* <img src={project1} alt="" /> */}
              <div class="text">Calculator</div>
              <a onClick={handleShow}>Read more  {show ?  <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                quia sunt, quasi quo illo enim.
              </p> :null}</a>
              
             
            </div>
          </div>
          <div class="card">
            <div class="box img2">
            {/* <img src={project2} alt=""  /> */}
              <div class="text">Not To Do List</div>
              <a onClick={handleEnpand}  > Read more   {expand ?  <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                quia sunt, quasi quo illo enim.
              </p> :null}</a>
             
            </div>
          </div>
          <div class="card">
            <div class="box img3">
            {/* <img src="" alt="" /> */}
              <div class="text">Portfolio</div>
              <a onClick={handleHide}> Read more {hide ?  <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                quia sunt, quasi quo illo enim.
              </p> :null}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default MyProject
