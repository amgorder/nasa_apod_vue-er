import { AppState } from '../AppState'
import { nasaApi } from './AxiosService'

class SpaceImageService {


    async getSpaceObject() {
        const res = await nasaApi.get("")
        console.log(res.data);
        AppState.spaceImages = res.data
    }
    setActive(spaceImage) {
        AppState.spaceImages = spaceImage
    }
}


export const spaceImageService = new SpaceImageService()


