import React from 'react';
import { Link } from 'react-router-dom';

export default function SolarEnvironmental({ data }) {
    console.log('data', data)
    return (
        <>
            <section className="page-section">
                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div data-fluid-engine="true">
                        {
                            data?.map((it) => (
                                <>
                                    <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
                                        <div
                                            className="col-md-6"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '20px',

                                            }}
                                        >
                                            <img
                                                src={data[0].photo}
                                                alt={data[0].heading}
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    maxWidth: '632px', // Limit the image width
                                                    height: '100%',
                                                    maxHeight: '413px', // Limit the image height
                                                    border: '2px solid lightgreen',
                                                    borderRadius: '8px', // Optional rounding for style
                                                }}
                                            />
                                        </div>

                                        <div
                                            className="col-md-6"
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'flex-start',
                                                padding: '20px',

                                            }}
                                        >
                                            <div className="sqs-html-content">
                                                <p>
                                                    {new Date(data[0].created_at).toLocaleString('en-US', {
                                                        weekday: 'long',
                                                        year: 'numeric',   // "2025"
                                                        month: 'long',     // "March"
                                                        day: 'numeric',    // "22"
                                                        hour: '2-digit',   // "3"
                                                        minute: '2-digit', // "57"
                                                        hour12: true       // "AM/PM format"
                                                    })}
                                                </p>
                                                <h3
                                                    style={{
                                                        textAlign: 'left',
                                                        whiteSpace: 'pre-wrap',
                                                        fontSize: '30px',
                                                    }}
                                                >
                                                    <strong>{data[0].heading} </strong>
                                                </h3>

                                                <p dangerouslySetInnerHTML={{ __html: data[0].text }} style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>

                                                </p>
                                                <Link to="/environmental-concerns" className="blog-more-link" style={{ marginTop: '3%' }}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginTop: '3%', display: 'flex', alignItems: 'stretch' }}>

                                        <div
                                            className="col-md-6"
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'flex-start',
                                                padding: '20px',
                                            }}
                                        >
                                            <div className="sqs-html-content">
                                                <p>
                                                {new Date(data[1].created_at).toLocaleString('en-US', {
                                                        weekday: 'long',
                                                        year: 'numeric',   // "2025"
                                                        month: 'long',     // "March"
                                                        day: 'numeric',    // "22"
                                                        hour: '2-digit',   // "3"
                                                        minute: '2-digit', // "57"
                                                        hour12: true       // "AM/PM format"
                                                    })}
                                                </p>
                                                <h3
                                                    style={{
                                                        textAlign: 'left',
                                                        whiteSpace: 'pre-wrap',
                                                        fontSize: '30px',
                                                    }}
                                                >
                                                    <strong> {data[1].heading} </strong>
                                                </h3>

                                                <p dangerouslySetInnerHTML={{ __html: data[1].text }} style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                                   
                                                </p>
                                                <Link to="/how-green" className="blog-more-link" style={{ marginTop: '3%' }}>Read More</Link>
                                            </div>
                                        </div>
                                        <div
                                            className="col-md-6"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '20px',

                                            }}
                                        >
                                            <img
                                                src={data[1].photo}
                                                alt={data[1].heading}
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    maxWidth: '632px',
                                                    height: '100%',
                                                    maxHeight: '413px',
                                                    border: '2px solid lightgreen',
                                                    borderRadius: '8px',
                                                }}
                                            />
                                        </div>

                                    </div>
                                </>
                            ))

                        }

                        {/* <div className="row" style={{marginTop: '3%', display: 'flex', alignItems: 'stretch' }}>
                            <div
                                className="col-md-6"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '20px',

                                }}
                            >
                                <img
                                    src="assets/content/solar_img2.png"
                                    alt="solar Image"
                                    style={{
                                        display: 'block',
                                        objectFit: 'cover',
                                        width: '100%',
                                        maxWidth: '632px', // Limit the image width
                                        height: '100%',
                                        maxHeight: '413px', // Limit the image height
                                        border: '2px solid lightgreen',
                                        borderRadius: '8px', // Optional rounding for style
                                    }}
                                />
                            </div>

                            <div
                                className="col-md-6"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    padding: '20px',

                                }}
                            >
                                <div className="sqs-html-content">
                                    <p>Solar10/9/23</p>
                                    <h3
                                        style={{
                                            textAlign: 'left',
                                            whiteSpace: 'pre-wrap',
                                            fontSize: '30px',
                                        }}
                                    >
                                        <strong>Making The Case For Going Solar
                                            With Helio GreenTech</strong>
                                    </h3>

                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', marginTop: '5%' }}>
                                        Helio GreenTech is a trusted solar energy company with many satisf-
                                        ied customers. The company has received great reviews on multiple
                                        platforms for their excellent service, professionalism, and expertise
                                        in the field of solar installation. One customer praised Helio GreenTech
                                        for their ability to work with the homeowner's schedule and their atte-
                                        ntion to detail during the installation process. Another customer was
                                        impressed with the company's knowledgeable staff, who were able to
                                        answer all their questions and provide guidance throughout the proje-
                                        ct. Helio GreenTech's commitment to customer satisfaction is evident
                                        in the positive reviews they have received, with customers consistent-
                                        ly praising the company's professionalism, responsiveness, and quality
                                        of work. With their focus on providing exceptional service and experti-
                                        se in solar installation, Helio GreenTech is a great company to work
                                        with for all your solar needs.

                                    </p>
                                    <Link to="/goingsolar-case" className="blog-more-link" style={{ marginTop: '3%' }}>Read More</Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
