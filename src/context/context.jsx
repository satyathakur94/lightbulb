import { createContext, useState } from "react";

const Lightcontext = createContext();

function LightBulbContext({children}){
    const [LightOn, SetLightOn] = useState(true);
    return <Lightcontext.Provider value={{ LightOn, SetLightOn }}>
        {children}
    </Lightcontext.Provider>
}

export { LightBulbContext, Lightcontext };