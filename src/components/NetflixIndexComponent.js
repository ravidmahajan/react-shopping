import './NetflixIndexComponent.css';
import NetflixHeaderComponent from './NetflixHeaderComponent';
import NetflixMainComponent from './NetflixMainComponent';
import NetflixRegisterComponent from './NetflixRegisterComponent';
import NetflixFooterComponent from './NetflixFooterComponent';

export default function NetflixIndexComponent() {

    return (
        <div className="container-fluid">
            <div className='box'>
                <header>
                    <NetflixHeaderComponent/>
                </header>
                {/* d-flex justify-content-center align-items-center - keeping content horizontally and vertically center */}
                <section className='d-flex justify-content-center align-items-center'>
                    <main>
                        <NetflixMainComponent/>
                        <NetflixRegisterComponent/>
                    </main>
                </section>
                {/* <div>
                    <NetflixRegisterComponent/>
                </div> */}
                <footer className='m-2 p-2'>
                    <NetflixFooterComponent/>
                </footer>
            </div>
        </div>
    )

}