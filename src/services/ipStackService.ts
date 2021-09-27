import { Get } from "./baseService";
import { ipStackClient } from '../plugins/http';
import IPStackDTO from "../dtos/IpStackDTO";

const ipStackService = {
    getCurrentIp: () => {
        return Get<IPStackDTO>(ipStackClient, '/check');
    }
};

export default ipStackService;