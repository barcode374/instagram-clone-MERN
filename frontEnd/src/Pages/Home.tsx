import React,{useState,createContext} from 'react'
import Nav from '../Components/Nav/Nav';
import Feed from '../Components/feed/Feed';
import { dimContext } from '../Contexts/dimContext';
interface Props {}

export default function Home(props: Props) {
    const {} = props
    const [Dim, setDim] = useState(false)
    const DimContext = React.createContext({
        
    });
    return (
        <body style={{overflow: "hidden"}}>
            <Nav home={true} likes={false} profile={false} />
            <dimContext.Provider value={{
               Dim,
               setDim: (x) => { setDim(x) }
           }}>
                <Feed />
                </dimContext.Provider>
        </body>
    )
}
