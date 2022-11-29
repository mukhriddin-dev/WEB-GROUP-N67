import Card from "./Card";

const Main = () =>
{
   return (
      <>
         <main>
            <section id="intro">
               <div className="container">
                  <div className="wrapper">
                   <Card/>
                   <Card/>
                   <Card/>
                  </div>
               </div>
            </section>
         </main>


      </>
   )
}

export default Main;