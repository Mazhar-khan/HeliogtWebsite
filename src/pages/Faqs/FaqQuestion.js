import React from "react";

export default function FaqQuestion({ data }) {
    console.log("data", data)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="featuredPropBox">
                            <ul>
                                {
                                    data?.map((item) => (
                                        <li key={item.id}>
                                            <a href="#">
                                                <div className="fplogo">
                                                    <h3 style={{ color: 'white', fontSize: '22px' }}>{item.question}</h3>
                                                </div>
                                                <div className="fptext">
                                                    <p dangerouslySetInnerHTML={{ __html: item.answer }}  
                                                    style={{ color: 'white', fontSize: '11px' }}>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                    ))

                                }

                                {/* <li>
                                    {" "}
                                    <a href="#">
                                        <div className="fplogo">
                                            <h3 style={{ color: 'white', fontSize: '22px' }}>Solar Panels Aren’t Efficient Enough!</h3>
                                        </div>
                                        <div className="fptext">
                                            <p style={{ color: 'white', fontSize: '11px' }}>
                                                Solar panels only have an efficiency rate around 20% many homeowners wonder why solar panels aren't more efficient.

                                            </p>
                                        </div>
                                    </a>{" "}
                                </li> */}
                                {/* <li>
                                    {" "}
                                    <a href="#">
                                        <div className="fplogo">
                                            <img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp3" />
                                        </div>
                                        <div className="fptext">
                                            <p>
                                                Dummy text is also used to demonstrate the appearance of
                                                different typefaces and layouts, and in general the content of
                                                dummy text is nonsensical.
                                            </p>
                                        </div>
                                    </a>{" "}
                                </li> */}
                                {/* <li>
                                    {" "}
                                    <a href="#">
                                        <div className="fplogo">
                                            <img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp1" />
                                        </div>
                                        <div className="fptext">
                                            <p>
                                                Dummy text is also used to demonstrate the appearance of
                                                different typefaces and layouts, and in general the content of
                                                dummy text is nonsensical.
                                            </p>
                                        </div>
                                    </a>{" "}
                                </li> */}
                                {/* <li>
                                    {" "}
                                    <a href="#">
                                        <div className="fplogo">
                                            <img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp2" />
                                        </div>
                                        <div className="fptext">
                                            <p>
                                                Dummy text is also used to demonstrate the appearance of
                                                different typefaces and layouts, and in general the content of
                                                dummy text is nonsensical.
                                            </p>
                                        </div>
                                    </a>{" "}
                                </li> */}
                                {/* <li>
                                    {" "}
                                    <a href="#">
                                        <div className="fplogo">
                                            <img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp3" />
                                        </div>
                                        <div className="fptext">
                                            <p>
                                                Dummy text is also used to demonstrate the appearance of
                                                different typefaces and layouts, and in general the content of
                                                dummy text is nonsensical.
                                            </p>
                                        </div>
                                    </a>{" "}
                                </li> */}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
