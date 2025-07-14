// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenter.Utilities;
using System.Threading.Tasks;

namespace Ganweisoft.IoTCenter.Module.Login;

public interface IAuthService
{
    OperateResult<object> GetVerificationCode(string codeType);

    VerificationCodeResponseModel GetSlideVerificationCode();

    OperateResult<object> GetVerificationCodeByKey(string codeType);

    Task<OperateResult> UpdUserInfoData(UpdUserInfoModel updUserInfoModel, string userName);

    OperateResult GetUserName2SF();

    OperateResult GetName2SF();

    OperateResult GetGrpcVersionInfo();

    void RemoveUserToken(string userName);    
}
