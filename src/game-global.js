/**
 * Created by wizard on 16/3/31.
 */
import {Eventuality,ResourceManager,Helper,Director,SRequest} from "./utility/imports.js"

const gameGlobal = {
    events: Eventuality({}),
    director: Director.sharedDirector()
}

export default gameGlobal;
