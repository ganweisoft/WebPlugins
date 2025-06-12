/**
 * api模块接口列表
 */
import apiFunction from './apiFunction';
import Auth from './api/Auth';
import EquipList from './api/EquipList';
import RealTime from './api/RealTime';
import Shuiwu from './api/Shuiwu';
import SystemConfig from './api/SystemConfig';
import Video from './api/Video';
import Patroller from './api/VideoTour';
import SecuritySetting from './api/SecuritySetting';
import DataCollection from './api/DataCollection';
import MultipleAccess from './api/MultipleAccess';
import DataBackup from './api/DataBackup';
import GwEcharts from './api/GwEcharts';
import ConfigManage from './api/ConfigManage';
import PluginShop from './api/PluginShop';
import EquipPlatform from './api/EquipPlatform';
import Terminal from './api/Terminal';
import NorthManage from './api/NorthManage';
import NorthSubscription from './api/NorthSubscription';
import NorthConfigTerminal from './api/NorthConfigTerminal';
import NorthConfigInterface from './api/NorthConfigInterface';
import NorthForwardingRule from './api/NorthforwardingRule';
import planManage from './api/PlanManage';
import Iam from './api/Iam'
import language from './api/language'
import webConfig from './api/webConfig';

const api = Object.assign(
    {},
    apiFunction,
    Auth,
    EquipList,
    Event,
    RealTime,
    Shuiwu,
    SystemConfig,
    Video,
    Patroller,
    DataCollection,
    MultipleAccess,
    DataBackup,
    GwEcharts,
    ConfigManage,
    PluginShop,
    EquipPlatform,
    Terminal,
    NorthManage,
    NorthSubscription,
    NorthConfigTerminal,
    NorthConfigInterface,
    NorthForwardingRule,
    planManage,
    SecuritySetting,
    ConfigManage,
    Iam,
    language,
    webConfig
);

export default api;
