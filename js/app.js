//query contains all sections
const sections=document.querySelectorAll('section');

//query contains the navbar ul
const unlist=document.querySelector('#navbar__list');

//building navbar
sections.forEach (addList);


//building navbar function
function addList (elm,index){

    let secNum= elm.getAttribute("data-nav"); //storing section name

    let list=document.createElement('li');

    let anchor=document.createElement('a');
    
    //adding the li under the ul and the a Tag under the li
    unlist.appendChild(list);

    list.appendChild(anchor); 

    //styling the anchor tag
    anchor.classList.add('menu__link');

    anchor.href=`#section${index+1}`;

    anchor.textContent=secNum; //adding the stored section name to the navbar

    //adding click event listener to each li in navbar
    list.addEventListener('click',function (event){

     event.preventDefault();

     //removing the active class style from any section first 
        for(let i=0;i<sections.length;i++){

            sections[i].classList.remove('your-active-class');

            liAnch[i].classList.remove('navbar__active');

        }
        

    //adding active class style to the targeted section
     sections[index].scrollIntoView ({behavior: 'smooth'});

     sections[index].classList.add('your-active-class');

     liAnch[index].classList.add('navbar__active');

    })

  /**
   * we can also use the following code to create list instead of the above
   * unlist.insertAdjacentHTML("beforeend",`<li><a class="menu__link" href="#section${index+1}">${secNum}</a></li`);
  */

  }

  const liAnch=document.querySelectorAll('a'); //query contains all a Tags after being created


  //function to set section bounds
  function SectionInBounds (elm) {

    const bounding = elm.getBoundingClientRect(); //got it with some help of searching in stackoverflow

    return (

        bounding.top >=-300 && bounding.top <=300);
}


//adding scroll event listener to the page to know which section we are in
document.addEventListener('scroll', function(){

    for (let i=0; i < sections.length; i++){

        if (SectionInBounds(sections[i])){

            sections[i].classList.add("your-active-class");

            liAnch[i].classList.add('navbar__active');

        }else{

            sections[i].classList.remove("your-active-class");

            liAnch[i].classList.remove('navbar__active');

        }
    }
})