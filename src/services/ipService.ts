import { Get } from "./baseService";
import { abstractApiClient } from '../plugins/http';
import IpDTO from "../dtos/IpDTO";

const ipStackService = {
    getCurrentIp: () => {
        return Get<IpDTO>(abstractApiClient, '/');
    }
};

export default ipStackService;