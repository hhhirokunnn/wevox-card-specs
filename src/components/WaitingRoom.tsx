import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { weboxAxios, TOKEN_KEY } from '../utils/weboxAxios';
import { AxiosResponse } from 'axios';
import { LoginResponse } from '../interfaces/login';

const WaitingRoom: React.FC = () => {


  return (<>Waiting</>)
}

export default WaitingRoom
