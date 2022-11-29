import "./style.scss";

export const Navbar = () =>
{
   return (
      <>

         <header>
            <div className="container">
               <nav className="nav">
                  <h2 className="nav-logo">LOGO</h2>
                  <ul className="nav__ul">
                     <li className="nav__ul--list"><a href="#" className="nav__ul--list-item">links-1</a></li>
                     <li className="nav__ul--list"><a href="#" className="nav__ul--list-item">links-2</a></li>
                     <li className="nav__ul--list"><a href="#" className="nav__ul--list-item">links-3</a></li>
                     <li className="nav__ul--list"><a href="#" className="nav__ul--list-item">links-4</a></li>
                     <li className="nav__ul--list"><a href="#" className="nav__ul--list-item">links-5</a></li>
                  </ul>
               </nav>
            </div>
         </header>



      </>
   )
}