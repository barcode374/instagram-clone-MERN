import React from 'react'
import Nav from '../Components/Nav/Nav';
import Feed from '../Components/feed/Feed';
interface Props {}

export default function Home(props: Props) {
    const {} = props

    return (
        <body style={{overflow: "hidden"}}>
            <Nav home={true} likes={false} profile={false} />
            <Feed />
        </body>
    )
}
