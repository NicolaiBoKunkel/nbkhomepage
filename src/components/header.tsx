import NavLink from "./nav-link";

export default function Header(){
    return (
      <nav className='flex items-center justify-between flex-wrap bg-blue-500 p-6'>        
        <div className="space-x-4 w-full block lg:flex lg:items-center lg:w-auto">

          <div className="space-x-4 text-xl lg:flex-grow">
            <NavLink href="/">Forside</NavLink>
            <NavLink href="/projects" >Projekter</NavLink>
          </div>
        </div>
      </nav>

    );
}