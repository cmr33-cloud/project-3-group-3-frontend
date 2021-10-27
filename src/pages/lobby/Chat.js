import React, { useEffect, useCallback } from "react";
import { Form, Button } from "react-bootstrap";

export default function Chat(props) {
    const username = localStorage.getItem('username')
    const { messages, roomId } = props;
    console.log(roomId)
    function handleSubmit(e) {
        e.preventDefault();
        props.sendMessage(e);
        e.target[0].value = ''
    }
    const setRef = useCallback(node => {
        if (node) {
            node.scrollIntoView({ smooth: true })
        }})

        return (
            <div>
                <div className="messages-box">
                    {props.messages &&
                        props.messages.map((obj, index) => {
                            const lastMessage = props.messages.length-1 === index;
                            return (<>
                                <h2 key={`sender-key-${index}`} className={obj.username === username ? `sent-self sent-title` : `sent-other sent-title`}>{obj.username}</h2>
                                <p ref={lastMessage ? setRef : null} key={`message-key-${index}`} className="m-2" className={obj.username === username ? `sent-self sent` : `sent sent-other`} >
                                    {obj.message}
                                </p>
                                <p ref={lastMessage ? setRef : null} key={`timestamp-key-${index}`} className="m-2" className={obj.username === username ? `sent-self sent sent-timestamp` : `sent sent-other sent-timestamp`}>
                                    {obj.timestamp}
                                </p>
                            </>)
                        }



                        )}
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>write a message</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="say something..."
                        ></Form.Control>
                        <Button type="submit" className='visually-hidden'>Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
