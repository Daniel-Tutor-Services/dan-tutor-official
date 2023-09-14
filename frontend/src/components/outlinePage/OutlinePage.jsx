import './OutlinePage.css';




function OutlinePage() {

    return (
        <div className='course-wrapper'>
            <h1 className='course-h1'>COURSE OUTLINES</h1>

            <div className="course-outline">

                <div className="outline-videos">
                    <p>MATHEMATICS</p>
                    <p>ENGLISH LANGUAGE</p>
                    <p>FRENCH LANGUAGE</p>
                    <p>PHYSICS</p>
                    <p>CHEMISTRY</p>
                    <p>BIOLOGY</p>
                    <p>COMPUTER SCIENCE</p>
                    <p>AGRICULTURAL SCIENCE</p>
                    <p>ECONOMICS</p>
                    <p>GEOGRAPHY</p>
                    <p>CIVIC EDUCATION</p>
                    <p>GOVERNMENT</p>
                </div>

                <div className="outline-content">
                    <h2>Select a course to see the Complete Guide, Description and Requirements. </h2>
                </div>

            </div>
        </div>
    )
}

export default OutlinePage;