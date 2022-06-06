import "./about.css";

export default function About(props){
    window.addEventListener('scroll',()=>{
        let content = document.querySelector('.about');
        let left = document.querySelector('.aboutImg');
        let right = document.querySelector('.aboutContent');
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;

        if(contentPosition < screenPosition){
            left.classList.add('activeLeft');
            right.classList.add('activeRight');
        }else{
            left.classList.remove('activeLeft');
            right.classList.remove('activeRight');
        }
    })
    return(
        <div className="about">
          <div className="aboutContainer">
            <div className="aboutImg">
                <img src={props.aboutImg}/>
            </div>
            <div className="aboutContent">
                <div className="aboutTitle">About</div>
                    <p className="aboutBody">
                        A place where your children will have the complete freedom to be what theyaspire with total love and acceptance. A place where they shine and be their unique self; their home away from home.
                    </p>
            </div>
          </div>
        </div>  
    );
}