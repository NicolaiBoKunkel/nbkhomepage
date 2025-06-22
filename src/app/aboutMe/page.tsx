import classes from './page.module.css';
import Image from 'next/image';
import me from '/public/me.jpeg';

export default function AboutMe(){
    return (
        <>
          <header className={classes.header}>
            <h1>
              Lidt om mig
            </h1>
          </header>
          <main className={classes.main}>
    
            <div className='rounded-full overflow-hidden'>
                <Image src={me} alt="me" priority width="75" height="75" />
            </div>

            <ul className={classes.perks}>
              <li>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <p>Integer laoreet augue at lacus pretium, sit amet rhoncus arcu facilisis.</p>
              </li>
              <li>
                <p>Integer in massa aliquam, efficitur nisi viverra, venenatis metus.</p>
              </li>
            </ul>
          </main>
        </>
      );
}