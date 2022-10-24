import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='w-50 m-auto mt-5 border border-success'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is cors?</Accordion.Header>
                    <Accordion.Body className='text-secondary'>
                        <small>CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</small>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body className='text-secondary'>
                        <small>
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                            <br></br>
                            Other options are: <br></br>
                            MongoDB.
                            Oracle Database.
                            Amazon Redshift.
                            DataStax Enterprise.
                        </small>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body className='text-secondary'>
                        <small>
                            The react private route component renders child components if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        </small>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body className='text-secondary'>
                        Node:
                        <small> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications</small><br></br><br></br>
                        How Node works:
                        <small> Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</small>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;