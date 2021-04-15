import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const About = () => {
    return (
        <MDBCard className="my-5 px-5 pb-5 text-center">
            <MDBCardBody>
                <h1 className="h1-responsive font-weight-bold my-5" style={{ marginLeft: "20px" }}>
                    Our Team
          </h1>
                <MDBRow style={{ marginLeft: "135px" }}>
                    <MDBCol lg="4" md="6" className="mb-lg-0 mb-5">
                        <img src="https://avatars.githubusercontent.com/u/51865606?v=4" id="avatar" />
                        <h5 className="font-weight-bold mt-4 mb-3">Amit Shabo</h5>
                        <p className="text blue-text">3rd year Computer Science Student</p>
                        <ul className="list-unstyled mb-0">
                            <a href="https://www.linkedin.com/in/amit-shabo/" className="p-2 fa-lg">
                                <LinkedInIcon fab icon="linkedin" className="blue-text" />
                            </a>
                            <a href="https://github.com/amitshabo" className="p-2 fa-lg">
                                <GitHubIcon fab icon="github" style={{ color: "black" }} />
                            </a>
                        </ul>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <img src="https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.18172-8/20369465_1651194344892892_359070136532050744_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a9b1d2&_nc_ohc=PyEv2xr4trMAX-ISZBH&_nc_ht=scontent.fsdv3-1.fna&oh=9108fa3f0eecadacbd08481eae4b4f17&oe=609F26E0" id="avatar" />
                        <h5 className="font-weight-bold mt-4 mb-3">Yarin Tagouri</h5>
                        <p className="text blue-text">3rd year Computer Science Student</p>
                        <ul className="list-unstyled mb-0">
                            <a href="https://www.linkedin.com/in/yarin-tagouri/" className="p-2 fa-lg">
                                <LinkedInIcon fab icon="linkedin" className="blue-text" />
                            </a>
                            <a href="https://github.com/yarinTag" className="p-2 fa-lg">
                                <GitHubIcon fab icon="github" style={{ color: "black" }} />
                            </a>
                        </ul>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <img src="https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-9/31949395_10212512555310767_1254566260763525120_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=SZlyzoxf_pIAX-lq6fk&_nc_ht=scontent.fsdv3-1.fna&oh=baf46b93236ed4ca45bf0d6878669ff7&oe=609E58F1" id="avatar" />
                        <h5 className="font-weight-bold mt-4 mb-3">Nir Assraf</h5>
                        <p className="text blue-text">3rd year Computer Science Student</p>
                        <ul className="list-unstyled mb-0">
                            <a href="https://www.linkedin.com/in/nirassaraf/" className="p-2 fa-lg">
                                <LinkedInIcon fab icon="linkedin" className="blue-text" />
                            </a>
                            <a href="https://github.com/NirAssaraf" className="p-2 fa-lg">
                                <GitHubIcon fab icon="github" style={{ color: "black" }} />
                            </a>
                        </ul>
                    </MDBCol>


                </MDBRow>
            </MDBCardBody>
        </MDBCard >
    );
}

export default About;