import Cards from "../../../components/cards/cards";
import cardImg from "../../../img/1.jpg";
import cardImg1 from "../../../img/4.jpg";
import cardImg2 from "../../../img/7.jpg";
import cardImg3 from "../../../img/9.jpg";
import "./corevalues.css";

export default function coreValues(){

    window.addEventListener('scroll',()=>{
        let content = document.querySelector('.coreOne');
        let coreRight = document.querySelector('.coreThree');
        let top = document.querySelector('.coreOne');
        let left = document.querySelector('.coreTwo');
        let right = document.querySelector('.coreThree');
        let bottom = document.querySelector('.coreFour');
        let contentPosition = content.getBoundingClientRect().top;
        let secondContentP  = coreRight.getBoundingClientRect().bottom;
        let screenPosition = window.innerHeight;

        if(contentPosition < screenPosition){
            top.classList.add('corerightActive');
            left.classList.add('coreleftActive');
        }else{
            top.classList.remove('corerightActive');
            left.classList.remove('coreleftActive');
        }

        if(secondContentP < screenPosition) {
            right.classList.add('corerightActive');
            bottom.classList.add('coreleftActive');
        }else{
            top.classList.remove('corerightActive');
            bottom.classList.remove('coreleftActive');
        }
    })

    return(
        <div className="corevalue">
            <div className="coreCards">
                   <div className="coreOne"> 
                    <Cards  cardTitle="Freedom" cardImg={cardImg} cardDetail="dfb hfhjgb vhfdvb fh vf  falhb vj fab fhvblfavhabfsdv kfv ffkjv kfvf kva  fvakf vvvvfhvbadflkvbafsvlakfhbj b hfhjgb vhfdvb fh vf  falhb vj fab fhvblfavhabfsdv kfv ffkjv kfvf kva  fvakf vvvvfhvbadflkvbafsvlakfhbj b hfhjgb vhfdvb fh vf  falhb vj fab fhvblfavhabfsdv "/>
                    </div>
                   <div className="coreTwo"> 
                    <Cards  cardTitle="Creativity" cardImg={cardImg1} cardDetail="dfb hfhjgb vhfdvb fh vf  falhb vj fjv kfvf kva  fvakf vvvvfhvbadflkvbafsvlakfhbj b hfhjgb vhfdvb fh vf  falhb vj fab fhvblfavhabfsdv kfv ffkjv kfvf kva  fvakf vvvvfhvbadflkvbafsvlakfhbj b hfhjgb vhfdvb fh vf  falhb vj fab fhvblfavhabfsdv"/>
                   </div> 
                   <div className="coreThree"> 
                    <Cards  cardTitle="Emotional Intelligence" cardImg={cardImg2} cardDetail="dfb hfhjgb vhfdvb fh vf  falhb vj fab fhvblfavhabfsdv kfv ffkjv kfvf kva  fvakf vvvvfhvbadflkvbafsvl"/>
                   </div>
                   <div className="coreFour"> 
                    <Cards  cardTitle="Self Awareness" cardImg={cardImg3} cardDetail="dfb hfhjgb vhfdvb fh vf  falhb vj fab fhvblfavhabfsdv kfv ffkjv kfvf kva  fvakf vvvvfhvbadflkvbafsvlakfhbj b hfhjgb vhfdvb fh vf  falhb vj fab k"/>
                   </div> 
           
            </div>
        </div>
    );
}