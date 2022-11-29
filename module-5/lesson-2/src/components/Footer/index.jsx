import "./style.scss";

const index = () =>
{
   return (
      <>
         <footer>
            <div className="container">

               <h5 className="text-center">
                  {
                     new Date().getFullYear()
                  }
               </h5>
            </div>
         </footer>
      </>
   );
};

export default index;
